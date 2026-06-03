-- ============================================================
-- 廃人サバメンバーキャラ武器所持状況チェック
-- Supabase テーブル定義 & RLS ポリシー
-- ============================================================
-- Supabase のダッシュボード → SQL Editor にて、
-- このファイルの内容をそのまま実行してください。
-- ============================================================

-- 拡張：UUID生成
create extension if not exists "pgcrypto";

-- ============================================================
-- 1. members テーブル
--    メンバー名を管理するテーブル
-- ============================================================
create table if not exists members (
    id         uuid primary key default gen_random_uuid(),
    name       text not null unique,
    created_at timestamptz not null default now()
);

-- ============================================================
-- 2. member_character_status テーブル
--    各メンバーのキャラクター所持状況
--    constellation:
--      NULL  = 未所持
--      0     = 無凸
--      1〜6  = N凸
--    level:
--      1〜90 = キャラクターレベル
-- ============================================================
create table if not exists member_character_status (
    id             uuid primary key default gen_random_uuid(),
    member_id      uuid not null references members(id) on delete cascade,
    character_name text not null,
    -- フロント側では未所持時に行を削除するが、外部連携時の明示フラグとして保持
    owned          boolean not null default true,
    constellation  integer,
    level          integer not null default 1,
    created_at     timestamptz not null default now(),
    updated_at     timestamptz not null default now(),
    unique(member_id, character_name)
);

create index if not exists idx_member_character_status_member on member_character_status(member_id);

-- constellation の値を制約
alter table member_character_status
    add constraint constellation_range check (constellation is null or (constellation >= 0 and constellation <= 6));

-- level の値を制約
alter table member_character_status
    add constraint level_range check (level >= 1 and level <= 90);

-- ============================================================
-- 3. member_weapon_status テーブル
--    各メンバーの武器所持状況
--    refinement:
--      NULL  = 未所持
--      1〜5  = 精錬N
-- ============================================================
create table if not exists member_weapon_status (
    id          uuid primary key default gen_random_uuid(),
    member_id   uuid not null references members(id) on delete cascade,
    weapon_name text not null,
    -- フロント側では未所持時に行を削除するが、外部連携時の明示フラグとして保持
    owned       boolean not null default true,
    refinement  integer,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now(),
    unique(member_id, weapon_name)
);

create index if not exists idx_member_weapon_status_member on member_weapon_status(member_id);

-- refinement の値を制約
alter table member_weapon_status
    add constraint refinement_range check (refinement is null or (refinement >= 1 and refinement <= 5));

-- ============================================================
-- RLS (Row Level Security)
-- ログイン不要・全員読み書き可能な設定
-- ============================================================
alter table members enable row level security;
alter table member_character_status enable row level security;
alter table member_weapon_status enable row level security;

-- members: 全員が読み書き可能
create policy "members_select" on members for select using (true);
create policy "members_insert" on members for insert with check (true);
create policy "members_delete" on members for delete using (true);

-- member_character_status: 全員が読み書き可能
create policy "charowner_select" on member_character_status for select using (true);
create policy "charowner_insert" on member_character_status for insert with check (true);
create policy "charowner_update" on member_character_status for update using (true);
create policy "charowner_delete" on member_character_status for delete using (true);

-- member_weapon_status: 全員が読み書き可能
create policy "weaponowner_select" on member_weapon_status for select using (true);
create policy "weaponowner_insert" on member_weapon_status for insert with check (true);
create policy "weaponowner_update" on member_weapon_status for update using (true);
create policy "weaponowner_delete" on member_weapon_status for delete using (true);
