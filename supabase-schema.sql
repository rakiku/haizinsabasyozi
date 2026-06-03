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
-- 2. character_ownership テーブル
--    各メンバーのキャラクター所持状況
--    constellation:
--      NULL  = 未所持
--      0     = 無凸
--      1〜6  = N凸
-- ============================================================
create table if not exists character_ownership (
    id             uuid primary key default gen_random_uuid(),
    member_id      uuid not null references members(id) on delete cascade,
    character_name text not null,
    constellation  integer,
    updated_at     timestamptz not null default now(),
    unique(member_id, character_name)
);

create index if not exists idx_charowner_member on character_ownership(member_id);

-- constellation の値を制約
alter table character_ownership
    add constraint constellation_range check (constellation is null or (constellation >= 0 and constellation <= 6));

-- ============================================================
-- 3. weapon_ownership テーブル
--    各メンバーの武器所持状況
--    refinement:
--      NULL  = 未所持
--      1〜5  = 精錬N
-- ============================================================
create table if not exists weapon_ownership (
    id          uuid primary key default gen_random_uuid(),
    member_id   uuid not null references members(id) on delete cascade,
    weapon_name text not null,
    refinement  integer,
    updated_at  timestamptz not null default now(),
    unique(member_id, weapon_name)
);

create index if not exists idx_weaponowner_member on weapon_ownership(member_id);

-- refinement の値を制約
alter table weapon_ownership
    add constraint refinement_range check (refinement is null or (refinement >= 1 and refinement <= 5));

-- ============================================================
-- RLS (Row Level Security)
-- ログイン不要・全員読み書き可能な設定
-- ============================================================
alter table members enable row level security;
alter table character_ownership enable row level security;
alter table weapon_ownership enable row level security;

-- members: 全員が読み書き可能
create policy "members_select" on members for select using (true);
create policy "members_insert" on members for insert with check (true);
create policy "members_delete" on members for delete using (true);

-- character_ownership: 全員が読み書き可能
create policy "charowner_select" on character_ownership for select using (true);
create policy "charowner_insert" on character_ownership for insert with check (true);
create policy "charowner_update" on character_ownership for update using (true);
create policy "charowner_delete" on character_ownership for delete using (true);

-- weapon_ownership: 全員が読み書き可能
create policy "weaponowner_select" on weapon_ownership for select using (true);
create policy "weaponowner_insert" on weapon_ownership for insert with check (true);
create policy "weaponowner_update" on weapon_ownership for update using (true);
create policy "weaponowner_delete" on weapon_ownership for delete using (true);
