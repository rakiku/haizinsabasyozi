'use strict';

// ================================================
// MASTER DATA
// ================================================

const characters = [
    { name: "ジン", weapon: "片手剣", element: "風", rarity: ['☆５', '恒常☆５'], release_version: "1.0" },
    { name: "アンバー", weapon: "弓", element: "炎", rarity: ['☆４'], release_version: "1.0" },
    { name: "リサ", weapon: "法器", element: "雷", rarity: ['☆４'], release_version: "1.0" },
    { name: "ガイア", weapon: "片手剣", element: "氷", rarity: ['☆４'], release_version: "1.0" },
    { name: "バーバラ", weapon: "法器", element: "水", rarity: ['☆４'], release_version: "1.0" },
    { name: "ディルック", weapon: "両手剣", element: "炎", rarity: ['☆５', '恒常☆５'], release_version: "1.0" },
    { name: "レザー", weapon: "両手剣", element: "雷", rarity: ['☆４'], release_version: "1.0" },
    { name: "ウェンティ", weapon: "弓", element: "風", rarity: ['☆５'], release_version: "1.0" },
    { name: "クレー", weapon: "法器", element: "炎", rarity: ['☆５'], release_version: "1.0" },
    { name: "ベネット", weapon: "片手剣", element: "炎", rarity: ['☆４'], release_version: "1.0" },
    { name: "ノエル", weapon: "両手剣", element: "岩", rarity: ['☆４'], release_version: "1.0" },
    { name: "フィッシュル", weapon: "弓", element: "雷", rarity: ['☆４'], release_version: "1.0" },
    { name: "スクロース", weapon: "法器", element: "風", rarity: ['☆４'], release_version: "1.0" },
    { name: "モナ", weapon: "法器", element: "水", rarity: ['☆５', '恒常☆５'], release_version: "1.0" },
    { name: "ディオナ", weapon: "弓", element: "氷", rarity: ['☆４'], release_version: "1.1" },
    { name: "アルベド", weapon: "片手剣", element: "岩", rarity: ['☆５'], release_version: "1.2" },
    { name: "ロサリア", weapon: "長柄武器", element: "氷", rarity: ['☆４'], release_version: "1.4" },
    { name: "エウルア", weapon: "両手剣", element: "氷", rarity: ['☆５'], release_version: "1.5" },
    { name: "ミカ", weapon: "長柄武器", element: "氷", rarity: ['☆４'], release_version: "3.5" },
    { name: "ダリア", weapon: "片手剣", element: "水", rarity: ['☆４'], release_version: "5.7" },
    { name: "ドゥリン", weapon: "片手剣", element: "炎", rarity: ['☆５'], release_version: "Luna III (6.2)" },
    { name: "ファルカ", weapon: "両手剣", element: "風", rarity: ['☆５'], release_version: "Luna V (6.4)" },
    { name: "魈", weapon: "長柄武器", element: "風", rarity: ['☆５'], release_version: "1.3" },
    { name: "北斗", weapon: "両手剣", element: "雷", rarity: ['☆４'], release_version: "1.0" },
    { name: "凝光", weapon: "法器", element: "岩", rarity: ['☆４'], release_version: "1.0" },
    { name: "香菱", weapon: "長柄武器", element: "炎", rarity: ['☆４'], release_version: "1.0" },
    { name: "行秋", weapon: "片手剣", element: "水", rarity: ['☆４'], release_version: "1.0" },
    { name: "重雲", weapon: "両手剣", element: "氷", rarity: ['☆４'], release_version: "1.0" },
    { name: "七七", weapon: "片手剣", element: "氷", rarity: ['☆５', '恒常☆５'], release_version: "1.0" },
    { name: "刻晴", weapon: "片手剣", element: "雷", rarity: ['☆５', '恒常☆５'], release_version: "1.0" },
    { name: "鍾離", weapon: "長柄武器", element: "岩", rarity: ['☆５'], release_version: "1.1" },
    { name: "辛炎", weapon: "両手剣", element: "炎", rarity: ['☆４'], release_version: "1.1" },
    { name: "甘雨", weapon: "弓", element: "氷", rarity: ['☆５'], release_version: "1.2" },
    { name: "胡桃", weapon: "長柄武器", element: "炎", rarity: ['☆５'], release_version: "1.3" },
    { name: "煙緋", weapon: "法器", element: "炎", rarity: ['☆４'], release_version: "1.5" },
    { name: "申鶴", weapon: "長柄武器", element: "氷", rarity: ['☆５'], release_version: "2.4" },
    { name: "雲菫", weapon: "長柄武器", element: "岩", rarity: ['☆４'], release_version: "2.4" },
    { name: "夜蘭", weapon: "弓", element: "水", rarity: ['☆５'], release_version: "2.7" },
    { name: "ヨォーヨ", weapon: "長柄武器", element: "草", rarity: ['☆４'], release_version: "3.4" },
    { name: "白朮", weapon: "法器", element: "草", rarity: ['☆５'], release_version: "3.6" },
    { name: "閑雲", weapon: "法器", element: "風", rarity: ['☆５'], release_version: "4.4" },
    { name: "嘉明", weapon: "両手剣", element: "炎", rarity: ['☆４'], release_version: "4.4" },
    { name: "藍硯", weapon: "法器", element: "風", rarity: ['☆４'], release_version: "5.3" },
    { name: "兹白", weapon: "片手剣", element: "岩", rarity: ['☆５'], release_version: "Luna IV (6.3)" },
    { name: "神里綾華", weapon: "片手剣", element: "氷", rarity: ['☆５'], release_version: "2.0" },
    { name: "神里綾人", weapon: "片手剣", element: "水", rarity: ['☆５'], release_version: "2.6" },
    { name: "楓原万葉", weapon: "片手剣", element: "風", rarity: ['☆５'], release_version: "1.6" },
    { name: "宵宮", weapon: "弓", element: "炎", rarity: ['☆５'], release_version: "2.0" },
    { name: "早柚", weapon: "両手剣", element: "風", rarity: ['☆４'], release_version: "2.0" },
    { name: "雷電将軍", weapon: "長柄武器", element: "雷", rarity: ['☆５'], release_version: "2.1" },
    { name: "九条裟羅", weapon: "弓", element: "雷", rarity: ['☆４'], release_version: "2.1" },
    { name: "珊瑚宮心海", weapon: "法器", element: "水", rarity: ['☆５'], release_version: "2.1" },
    { name: "トーマ", weapon: "長柄武器", element: "炎", rarity: ['☆４'], release_version: "2.2" },
    { name: "荒瀧一斗", weapon: "両手剣", element: "岩", rarity: ['☆５'], release_version: "2.3" },
    { name: "ゴロー", weapon: "弓", element: "岩", rarity: ['☆４'], release_version: "2.3" },
    { name: "八重神子", weapon: "法器", element: "雷", rarity: ['☆５'], release_version: "2.5" },
    { name: "久岐忍", weapon: "片手剣", element: "雷", rarity: ['☆４'], release_version: "2.7" },
    { name: "鹿野院平蔵", weapon: "法器", element: "風", rarity: ['☆４'], release_version: "2.8" },
    { name: "綺良々", weapon: "片手剣", element: "草", rarity: ['☆４'], release_version: "3.7" },
    { name: "千織", weapon: "片手剣", element: "岩", rarity: ['☆５'], release_version: "4.5" },
    { name: "夢見月瑞希", weapon: "法器", element: "風", rarity: ['☆５', '恒常☆５'], release_version: "5.4" },
    { name: "ティナリ", weapon: "弓", element: "草", rarity: ['☆５', '恒常☆５'], release_version: "3.0" },
    { name: "コレイ", weapon: "弓", element: "草", rarity: ['☆４'], release_version: "3.0" },
    { name: "ドリー", weapon: "両手剣", element: "雷", rarity: ['☆４'], release_version: "3.0" },
    { name: "セノ", weapon: "長柄武器", element: "雷", rarity: ['☆５'], release_version: "3.1" },
    { name: "キャンディス", weapon: "長柄武器", element: "水", rarity: ['☆４'], release_version: "3.1" },
    { name: "ニィロウ", weapon: "片手剣", element: "水", rarity: ['☆５'], release_version: "3.1" },
    { name: "ナヒーダ", weapon: "法器", element: "草", rarity: ['☆５'], release_version: "3.2" },
    { name: "レイラ", weapon: "片手剣", element: "氷", rarity: ['☆４'], release_version: "3.2" },
    { name: "放浪者", weapon: "法器", element: "風", rarity: ['☆５'], release_version: "3.3" },
    { name: "ファルザン", weapon: "弓", element: "風", rarity: ['☆４'], release_version: "3.3" },
    { name: "アルハイゼン", weapon: "片手剣", element: "草", rarity: ['☆５'], release_version: "3.4" },
    { name: "ディシア", weapon: "両手剣", element: "炎", rarity: ['☆５', '恒常☆５'], release_version: "3.5" },
    { name: "カーヴェ", weapon: "両手剣", element: "草", rarity: ['☆４'], release_version: "3.6" },
    { name: "セトス", weapon: "弓", element: "雷", rarity: ['☆４'], release_version: "4.7" },
    { name: "リネ", weapon: "弓", element: "炎", rarity: ['☆５'], release_version: "4.0" },
    { name: "リネット", weapon: "片手剣", element: "風", rarity: ['☆４'], release_version: "4.0" },
    { name: "フレミネ", weapon: "両手剣", element: "氷", rarity: ['☆４'], release_version: "4.0" },
    { name: "ヌヴィレット", weapon: "法器", element: "水", rarity: ['☆５'], release_version: "4.1" },
    { name: "リオセスリ", weapon: "法器", element: "氷", rarity: ['☆５'], release_version: "4.1" },
    { name: "シャルロット", weapon: "法器", element: "氷", rarity: ['☆４'], release_version: "4.2" },
    { name: "フリーナ", weapon: "片手剣", element: "水", rarity: ['☆５'], release_version: "4.2" },
    { name: "ナヴィア", weapon: "両手剣", element: "岩", rarity: ['☆５'], release_version: "4.3" },
    { name: "シュヴルーズ", weapon: "長柄武器", element: "炎", rarity: ['☆４'], release_version: "4.3" },
    { name: "クロリンデ", weapon: "片手剣", element: "雷", rarity: ['☆５'], release_version: "4.7" },
    { name: "シグウィン", weapon: "弓", element: "水", rarity: ['☆５'], release_version: "4.7" },
    { name: "エミリエ", weapon: "長柄武器", element: "草", rarity: ['☆５'], release_version: "4.8" },
    { name: "エスコフィエ", weapon: "長柄武器", element: "氷", rarity: ['☆５'], release_version: "5.6" },
    { name: "イアンサ", weapon: "長柄武器", element: "雷", rarity: ['☆４'], release_version: "5.5" },
    { name: "チャスカ", weapon: "弓", element: "風", rarity: ['☆５'], release_version: "5.2" },
    { name: "ムアラニ", weapon: "法器", element: "水", rarity: ['☆５'], release_version: "5.0" },
    { name: "オロルン", weapon: "弓", element: "雷", rarity: ['☆４'], release_version: "5.2" },
    { name: "キィニチ", weapon: "両手剣", element: "草", rarity: ['☆５'], release_version: "5.0" },
    { name: "カチーナ", weapon: "長柄武器", element: "岩", rarity: ['☆４'], release_version: "5.0" },
    { name: "シトラリ", weapon: "法器", element: "氷", rarity: ['☆５'], release_version: "5.3" },
    { name: "マーヴィカ", weapon: "両手剣", element: "炎", rarity: ['☆５'], release_version: "5.3" },
    { name: "ヴァレサ", weapon: "法器", element: "雷", rarity: ['☆５'], release_version: "5.5" },
    { name: "イファ", weapon: "法器", element: "風", rarity: ['☆４'], release_version: "5.6" },
    { name: "シロネン", weapon: "片手剣", element: "岩", rarity: ['☆５'], release_version: "5.1" },
    { name: "タルタリヤ", weapon: "弓", element: "水", rarity: ['☆５'], release_version: "1.1" },
    { name: "アルレッキーノ", weapon: "長柄武器", element: "炎", rarity: ['☆５'], release_version: "4.6" },
    { name: "イネファ", weapon: "長柄武器", element: "雷", rarity: ['☆５'], release_version: "5.8" },
    { name: "フリンズ", weapon: "長柄武器", element: "雷", rarity: ['☆５'], release_version: "Luna I (6.0)" },
    { name: "アイノ", weapon: "両手剣", element: "水", rarity: ['☆４'], release_version: "Luna I (6.0)" },
    { name: "ラウマ", weapon: "法器", element: "草", rarity: ['☆５'], release_version: "Luna I (6.0)" },
    { name: "ネフェル", weapon: "法器", element: "草", rarity: ['☆５'], release_version: "Luna II (6.1)" },
    { name: "ヤフォダ", weapon: "弓", element: "風", rarity: ['☆４'], release_version: "Luna III (6.2)" },
    { name: "コロンビーナ", weapon: "法器", element: "水", rarity: ['☆５'], release_version: "Luna IV (6.3)" },
    { name: "イルーガ", weapon: "長柄武器", element: "岩", rarity: ['☆４'], release_version: "Luna IV (6.3)" },
    { name: "リンネア", weapon: "弓", element: "岩", rarity: ['☆５'], release_version: "Luna VI (6.5)" },
    { name: "旅人", weapon: "片手剣", element: "その他", rarity: ['☆５'], release_version: "1.0" },
    { name: "スカーク", weapon: "片手剣", element: "氷", rarity: ['☆５'], release_version: "5.7" },
    { name: "ドール", weapon: "片手剣", element: "その他", rarity: ['☆５'], release_version: "Luna II (6.1)" },
    { name: "アーロイ", weapon: "弓", element: "氷", rarity: ['☆５'], release_version: "2.1" },
    { name: "ニコ", weapon: "法器", element: "炎", rarity: ['☆５'], release_version: "Luna VII (6.6)" },
    { name: "ローエン", weapon: "長柄武器", element: "氷", rarity: ['☆５'], release_version: "Luna VII (6.6)" },
    { name: "プルーネ", weapon: "法器", element: "風", rarity: ['☆４'], release_version: "Luna VII (6.6)" },
];

const allWeapons = {
        "長柄武器": [
            { name: "聖祭者の輝杖", rarity: 4, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "血染めの荒れ地", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "金堀りのシャベル", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "香りのシンフォニスト", rarity: 5, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "砕け散る光輪", rarity: 5, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "玉響停の御噺", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "鎮山の釘", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "虹の行方", rarity: 4, type: "長柄武器", ascension_stat: "防御力", is_distributed: false },
            { name: "ルミドゥースの挽歌", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "赤月のシルエット", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "砂中の賢者達の問答", rarity: 4, type: "長柄武器", ascension_stat: "HP", is_distributed: true },
            { name: "プロスペクタードリル", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "フィヨルドの歌", rarity: 4, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "正義の報酬", rarity: 4, type: "長柄武器", ascension_stat: "HP", is_distributed: false },
            { name: "赤砂の杖", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "風信の矛", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: true },
            { name: "ムーンピアサー", rarity: 4, type: "長柄武器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "ドラゴンスピア", rarity: 4, type: "長柄武器", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "黒纓槍", rarity: 3, type: "長柄武器", ascension_stat: "HP", is_distributed: false },
            { name: "黒岩の突槍", rarity: 4, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "鉄尖槍", rarity: 2, type: "長柄武器", ascension_stat: "", is_distributed: false },
            { name: "鉾槍", rarity: 3, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "破天の槍", rarity: 5, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "星鎌・試作", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "西風長槍", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "草薙の稲光", rarity: 5, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "白纓槍", rarity: 3, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "流月の針", rarity: 4, type: "長柄武器", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "新米の長槍", rarity: 1, type: "長柄武器", ascension_stat: "", is_distributed: false },
            { name: "斬波のひれ長", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "護摩の杖", rarity: 5, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "息災", rarity: 5, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族猟槍", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の脊", rarity: 5, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "喜多院十文字槍", rarity: 4, type: "長柄武器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "和璞鳶", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "千岩長槍", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "「漁獲」", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "匣中滅龍", rarity: 4, type: "長柄武器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "死闘の槍", rarity: 4, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "災憾", rarity: 5, type: "長柄武器", ascension_stat: "", is_distributed: false }
        ],
        "法器": [
            { name: "帳の夜曲", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "真言の匣", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "霜辰", rarity: 4, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "夜を紡ぐ天鏡", rarity: 5, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "天光のリュート", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "烏髄の孤灯", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "ヴィヴィッド・ハート", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "寝正月の初晴", rarity: 5, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "祭星者の眺め", rarity: 5, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "波乗りの旋回", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "ヤシュチェの環", rarity: 4, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "蒼紋の角杯", rarity: 4, type: "法器", ascension_stat: "HP", is_distributed: true },
            { name: "サーフィンタイム", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "鶴鳴の余韻", rarity: 5, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "凛流の監視者", rarity: 5, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "久遠流転の大典", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "果てなき紺碧の唄", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "古祠の瓏", rarity: 4, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "純水流華", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "碧落の瓏", rarity: 5, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "トゥライトゥーラの記憶", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "千夜に浮かぶ夢", rarity: 5, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "彷徨える星", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "満悦の実", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "黒岩の緋玉", rarity: 4, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "魔導緒論", rarity: 3, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "金珀・試作", rarity: 4, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "誓いの明瞳", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: true },
            { name: "龍殺しの英傑譚", rarity: 3, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "西風秘典", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "翡玉法珠", rarity: 3, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "祭礼の断片", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "神楽の真意", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "白辰の輪", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "特級の宝玉", rarity: 3, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "流浪楽章", rarity: 4, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "ダークアレイの酒と詩", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "昭心", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "冬忍びの実", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "異世界旅行記", rarity: 3, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "浮世の錠", rarity: 5, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族秘法録", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "生徒ノート", rarity: 1, type: "法器", ascension_stat: "", is_distributed: false },
            { name: "天空の巻", rarity: 5, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "四風原典", rarity: 5, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "ドドコの物語", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: true },
            { name: "ポケット魔導書", rarity: 2, type: "法器", ascension_stat: "", is_distributed: false },
            { name: "匣中日月", rarity: 4, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "不滅の月華", rarity: 5, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "万国諸海の図譜", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "塵と光の七つの誓約", rarity: 5, type: "法器", ascension_stat: "攻撃力", is_distributed: false }
        ],
        "弓": [
            { name: "霜契の金枝", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "暁を告げる歴史", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "虹蛇の雨弦", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "羅網の針", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "冷寂の音", rarity: 4, type: "弓", ascension_stat: "HP", is_distributed: true },
            { name: "星鷲の紅き羽", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "花飾りの羽", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "チェーンブレイカー", rarity: 4, type: "弓", ascension_stat: "", is_distributed: false },
            { name: "築雲", rarity: 4, type: "弓", ascension_stat: "元素熟知", is_distributed: true },
            { name: "白雨心弦", rarity: 5, type: "弓", ascension_stat: "HP", is_distributed: false },
            { name: "レンジゲージ", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "烈日の後嗣", rarity: 4, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "静寂の唄", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "始まりの大魔術", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "トキの嘴", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: true },
            { name: "王の近侍", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "竭沢", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "狩人の道", rarity: 5, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "落霞", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "若水", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "黒岩の戦弓", rarity: 4, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "鴉羽の弓", rarity: 3, type: "弓", ascension_stat: "元素熟知", is_distributed: false },
            { name: "飛来の鳴弦", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "風花の頌歌", rarity: 4, type: "弓", ascension_stat: "元素熟知", is_distributed: true },
            { name: "アモスの弓", rarity: 5, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "リングボウ", rarity: 4, type: "弓", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "澹月・試作", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "西風猟弓", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "蒼翠の狩猟弓", rarity: 4, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "絶弦", rarity: 4, type: "弓", ascension_stat: "元素熟知", is_distributed: false },
            { name: "終焉を嘆く詩", rarity: 5, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "祭礼の弓", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "シャープシューターの誓い", rarity: 3, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "破魔の弓", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "狩猟弓", rarity: 1, type: "弓", ascension_stat: "", is_distributed: false },
            { name: "曚雲の月", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "ダークアレイの狩人", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "プレデター", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "弾弓", rarity: 3, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "弓蔵", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "幽夜のワルツ", rarity: 4, type: "弓", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "旧貴族長弓", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の翼", rarity: 5, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "リカーブボウ", rarity: 3, type: "弓", ascension_stat: "HP", is_distributed: false },
            { name: "歴戦の狩猟弓", rarity: 2, type: "弓", ascension_stat: "", is_distributed: false },
            { name: "冬極の白星", rarity: 5, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "文使い", rarity: 3, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false }
        ],
        "両手剣": [
            { name: "狼の武勲詩", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "万能の鍵", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "千烈の日輪", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "実りの鉤鉈", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "アースシェイカー", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "山の王の長牙", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "「スーパーアルティメット覇王魔剣」", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "裁断", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "携帯型チェンソー", rarity: 4, type: "両手剣", ascension_stat: "HP", is_distributed: false },
            { name: "話死合い棒", rarity: 4, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "タイダル・シャドー", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "葦海の標", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "鉄彩の花", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: true },
            { name: "マカイラの水色", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "森林のレガリア", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "黒岩の斬刀", rarity: 4, type: "両手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "飛天大御剣", rarity: 3, type: "両手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "雪葬の星銀", rarity: 4, type: "両手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "雨裁", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "鉄影段平", rarity: 3, type: "両手剣", ascension_stat: "HP", is_distributed: false },
            { name: "鐘の剣", rarity: 4, type: "両手剣", ascension_stat: "HP", is_distributed: false },
            { name: "赤角石塵滅砕", rarity: 5, type: "両手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "古華・試作", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "訓練用大剣", rarity: 1, type: "両手剣", ascension_stat: "", is_distributed: false },
            { name: "西風大剣", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "銜玉の海皇", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: true },
            { name: "螭龍の剣", rarity: 4, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "祭礼の大剣", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "白鉄の大剣", rarity: 3, type: "両手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "白影の剣", rarity: 4, type: "両手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "狼の末路", rarity: 5, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "龍血を浴びた剣", rarity: 3, type: "両手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "桂木斬長正", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "松韻の響く頃", rarity: 5, type: "両手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "無工の剣", rarity: 5, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "惡王丸", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族大剣", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の傲", rarity: 5, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "千岩古剣", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "知恵の溶炎", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: true },
            { name: "傭兵の重剣", rarity: 2, type: "両手剣", ascension_stat: "", is_distributed: false },
            { name: "理屈責め", rarity: 3, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false }
        ],
        "片手剣": [
            { name: "三日月の含光", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "黒蝕", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "月紡ぎの曙光", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "静謐の笛", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "厄水の災い", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: true },
            { name: "岩峰を巡る歌", rarity: 5, type: "片手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "ストロングボーン", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "エズピツァルの笛", rarity: 4, type: "片手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "赦罪", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "有楽御簾切", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "水仙十字の剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "静水流転の輝き", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "船渠剣", rarity: 4, type: "片手剣", ascension_stat: "HP", is_distributed: false },
            { name: "狼牙", rarity: 4, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "サーンドルの渡し守", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "海淵のフィナーレ", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "翠光の裁葉", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "東花坊時雨", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: true },
            { name: "サイフォスの月明かり", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "聖顕の鍵", rarity: 5, type: "片手剣", ascension_stat: "HP", is_distributed: false },
            { name: "原木刀", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "籠釣瓶一心", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "黒岩の長剣", rarity: 4, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "黒剣", rarity: 4, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "黎明の神剣", rarity: 3, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "飛天御剣", rarity: 3, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "風鷹剣", rarity: 5, type: "片手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "霧切の廻光", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "降臨の剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "銀の剣", rarity: 2, type: "片手剣", ascension_stat: "", is_distributed: false },
            { name: "鉄蜂の刺し", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "シナバースピンドル", rarity: 4, type: "片手剣", ascension_stat: "防御力", is_distributed: true },
            { name: "斬岩・試作", rarity: 4, type: "片手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "西風剣", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "蒼古なる自由への誓い", rarity: 5, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "腐食の剣", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "笛の剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "祭礼の剣", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "盤岩結緑", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "波乱月白経津", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "暗鉄剣", rarity: 3, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "ダークアレイの閃光", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "無鋒の剣", rarity: 1, type: "片手剣", ascension_stat: "", is_distributed: false },
            { name: "旅道の剣", rarity: 3, type: "片手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "斬山の刃", rarity: 5, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族長剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の刃", rarity: 5, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "天目影打", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "チ虎魚の刀", rarity: 3, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "匣中龍吟", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "冷刃", rarity: 3, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "蒼耀", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false }
        ]
    };

const weaponReleaseVersionMap = {
        "狩猟弓": "1.0",
        "無鋒の剣": "1.0",
        "新米の長槍": "1.0",
        "訓練用大剣": "1.0",
        "生徒ノート": "1.0",
        "歴戦の狩猟弓": "1.0",
        "銀の剣": "1.0",
        "鉄尖槍": "1.0",
        "傭兵の重剣": "1.0",
        "ポケット魔導書": "1.0",
        "文使い": "1.0",
        "鴉羽の弓": "1.0",
        "リカーブボウ": "1.0",
        "シャープシューターの誓い": "1.0",
        "弾弓": "1.0",
        "冷刃": "1.0",
        "暗鉄剣": "1.0",
        "チ虎魚の刀": "1.0",
        "黎明の神剣": "1.0",
        "飛天御剣": "1.0",
        "旅道の剣": "1.0",
        "黒纓槍": "1.0",
        "鉾槍": "1.0",
        "白纓槍": "1.0",
        "龍血を浴びた剣": "1.0",
        "理屈責め": "1.0",
        "鉄影段平": "1.0",
        "飛天大御剣": "1.0",
        "白鉄の大剣": "1.0",
        "翡玉法珠": "1.0",
        "魔導緒論": "1.0",
        "異世界旅行記": "1.0",
        "龍殺しの英傑譚": "1.0",
        "特級の宝玉": "1.0",
        "黒岩の戦弓": "1.0",
        "リングボウ": "1.0",
        "西風猟弓": "1.0",
        "澹月・試作": "1.0",
        "旧貴族長弓": "1.0",
        "弓蔵": "1.0",
        "祭礼の弓": "1.0",
        "絶弦": "1.0",
        "蒼翠の狩猟弓": "1.0",
        "黒岩の長剣": "1.0",
        "西風剣": "1.0",
        "鉄蜂の刺し": "1.0",
        "匣中龍吟": "1.0",
        "斬岩・試作": "1.0",
        "旧貴族長剣": "1.0",
        "祭礼の剣": "1.0",
        "降臨の剣": "1.0",
        "黒剣": "1.0",
        "笛の剣": "1.0",
        "黒岩の突槍": "1.0",
        "流月の針": "1.0",
        "死闘の槍": "1.0",
        "匣中滅龍": "1.0",
        "西風長槍": "1.0",
        "星鎌・試作": "1.0",
        "黒岩の斬刀": "1.0",
        "西風大剣": "1.0",
        "古華・試作": "1.0",
        "雨裁": "1.0",
        "旧貴族大剣": "1.0",
        "祭礼の大剣": "1.0",
        "螭龍の剣": "1.0",
        "鐘の剣": "1.0",
        "白影の剣": "1.0",
        "黒岩の緋玉": "1.0",
        "昭心": "1.0",
        "西風秘典": "1.0",
        "万国諸海の図譜": "1.0",
        "金珀・試作": "1.0",
        "旧貴族秘法録": "1.0",
        "祭礼の断片": "1.0",
        "匣中日月": "1.0",
        "流浪楽章": "1.0",
        "アモスの弓": "1.0",
        "天空の翼": "1.0",
        "風鷹剣": "1.0",
        "天空の刃": "1.0",
        "和璞鳶": "1.0",
        "天空の脊": "1.0",
        "天空の傲": "1.0",
        "狼の末路": "1.0",
        "四風原典": "1.0",
        "天空の巻": "1.0",
        "浮世の錠": "1.1",
        "破天の槍": "1.1",
        "無工の剣": "1.1",
        "旧貴族猟槍": "1.1",
        "斬山の刃": "1.2",
        "腐食の剣": "1.2",
        "雪葬の星銀": "1.2",
        "ドラゴンスピア": "1.2",
        "冬忍びの実": "1.2",
        "千岩長槍": "1.3",
        "千岩古剣": "1.3",
        "盤岩結緑": "1.3",
        "護摩の杖": "1.3",
        "終焉を嘆く詩": "1.4",
        "ダークアレイの閃光": "1.4",
        "ダークアレイの狩人": "1.4",
        "ダークアレイの酒と詩": "1.4",
        "風花の頌歌": "1.4",
        "松韻の響く頃": "1.5",
        "蒼古なる自由への誓い": "1.6",
        "幽夜のワルツ": "1.6",
        "ドドコの物語": "1.6",
        "霧切の廻光": "2.0",
        "飛来の鳴弦": "2.0",
        "破魔の弓": "2.0",
        "天目影打": "2.0",
        "喜多院十文字槍": "2.0",
        "桂木斬長正": "2.0",
        "白辰の輪": "2.0",
        "草薙の稲光": "2.1",
        "不滅の月華": "2.1",
        "銜玉の海皇": "2.1",
        "「漁獲」": "2.1",
        "冬極の白星": "2.2",
        "惡王丸": "2.2",
        "斬波のひれ長": "2.2",
        "曚雲の月": "2.2",
        "赤角石塵滅砕": "2.3",
        "シナバースピンドル": "2.3",
        "息災": "2.4",
        "神楽の真意": "2.5",
        "誓いの明瞳": "2.5",
        "波乱月白経津": "2.6",
        "若水": "2.7",
        "落霞": "2.7",
        "籠釣瓶一心": "2.8",
        "狩人の道": "3.0",
        "竭沢": "3.0",
        "原木刀": "3.0",
        "森林のレガリア": "3.0",
        "ムーンピアサー": "3.0",
        "満悦の実": "3.0",
        "王の近侍": "3.0",
        "赤砂の杖": "3.1",
        "聖顕の鍵": "3.1",
        "サイフォスの月明かり": "3.1",
        "マカイラの水色": "3.1",
        "彷徨える星": "3.1",
        "風信の矛": "3.1",
        "千夜に浮かぶ夢": "3.2",
        "トゥライトゥーラの記憶": "3.3",
        "東花坊時雨": "3.3",
        "翠光の裁葉": "3.4",
        "葦海の標": "3.5",
        "鉄彩の花": "3.5",
        "碧落の瓏": "3.6",
        "トキの嘴": "3.7",
        "始まりの大魔術": "4.0",
        "海淵のフィナーレ": "4.0",
        "タイダル・シャドー": "4.0",
        "正義の報酬": "4.0",
        "純水流華": "4.0",
        "静寂の唄": "4.0",
        "狼牙": "4.0",
        "話死合い棒": "4.0",
        "古祠の瓏": "4.0",
        "フィヨルドの歌": "4.0",
        "烈日の後嗣": "4.0",
        "サーンドルの渡し守": "4.0",
        "久遠流転の大典": "4.1",
        "凛流の監視者": "4.1",
        "船渠剣": "4.1",
        "携帯型チェンソー": "4.1",
        "プロスペクタードリル": "4.1",
        "レンジゲージ": "4.1",
        "果てなき紺碧の唄": "4.1",
        "静水流転の輝き": "4.2",
        "水仙十字の剣": "4.2",
        "裁断": "4.3",
        "「スーパーアルティメット覇王魔剣」": "4.3",
        "鶴鳴の余韻": "4.4",
        "有楽御簾切": "4.5",
        "砂中の賢者達の問答": "4.5",
        "赤月のシルエット": "4.6",
        "赦罪": "4.7",
        "白雨心弦": "4.7",
        "築雲": "4.7",
        "ルミドゥースの挽歌": "4.8",
        "山の王の長牙": "5.0",
        "サーフィンタイム": "5.0",
        "エズピツァルの笛": "5.0",
        "アースシェイカー": "5.0",
        "虹の行方": "5.0",
        "ヤシュチェの環": "5.0",
        "チェーンブレイカー": "5.0",
        "蒼紋の角杯": "5.0",
        "岩峰を巡る歌": "5.1",
        "ストロングボーン": "5.1",
        "鎮山の釘": "5.1",
        "実りの鉤鉈": "5.1",
        "星鷲の紅き羽": "5.2",
        "花飾りの羽": "5.2",
        "波乗りの旋回": "5.2",
        "厄水の災い": "5.2",
        "千烈の日輪": "5.3",
        "祭星者の眺め": "5.3",
        "玉響停の御噺": "5.4",
        "寝正月の初晴": "5.4",
        "ヴィヴィッド・ハート": "5.5",
        "香りのシンフォニスト": "5.6",
        "冷寂の音": "5.6",
        "蒼耀": "5.7",
        "砕け散る光輪": "5.8",
        "知恵の溶炎": "5.8",
        "プレデター": "2.1",
        "夜を紡ぐ天鏡": "Luna I (6.0)",
        "月紡ぎの曙光": "Luna I (6.0)",
        "血染めの荒れ地": "Luna I (6.0)",
        "静謐の笛": "Luna I (6.0)",
        "万能の鍵": "Luna I (6.0)",
        "金堀りのシャベル": "Luna I (6.0)",
        "烏髄の孤灯": "Luna I (6.0)",
        "羅網の針": "Luna I (6.0)",
        "天光のリュート": "Luna I (6.0)",
        "聖祭者の輝杖": "Luna II (6.1)",
        "霜辰": "Luna II (6.1)",
        "真言の匣": "Luna II (6.1)",
        "黒蝕": "Luna III (6.2)",
        "暁を告げる歴史": "Luna III (6.2)",
        "虹蛇の雨弦": "Luna III (6.2)",
        "帳の夜曲": "Luna IV (6.3)",
        "三日月の含光": "Luna IV (6.3)",
        "狼の武勲詩": "Luna V (6.4)",
        "霜契の金枝": "Luna VI (6.5)",
        "塵と光の七つの誓約": "Luna VII (6.6)",
        "災憾": "Luna VII (6.6)"
    };

// Release order index for weapons (preserves insertion order from weaponReleaseVersionMap)
const weaponReleaseOrderMap = Object.fromEntries(
    Object.keys(weaponReleaseVersionMap).map((name, idx) => [name, idx])
);

// Attach release_version to each weapon entry, flatten to one list
const allWeaponList = [];
Object.entries(allWeapons).forEach(([type, weapons]) => {
    weapons.forEach(w => {
        w.release_version = weaponReleaseVersionMap[w.name] || '';
        allWeaponList.push(w);
    });
});

// ================================================
// UTILITY FUNCTIONS
// ================================================

function encodeImagePath(type, name) {
    if (!name) return '';
    if (name.includes('..') || name.includes('/') || name.includes('\\')) return '';
    const folderMap = { character: 'files/characters', weapon: 'files/weapons' };
    const folder = folderMap[type];
    if (!folder) return '';
    const clean = name.trim().replace(/\s+/g, '');
    return `${folder}/${encodeURIComponent(clean)}.png`;
}

function parseReleaseVersionSortKey(v) {
    const lunaMatch = String(v || '').match(/^Luna\s+\S+\s+\((\d+\.\d+)\)/);
    return lunaMatch ? parseFloat(lunaMatch[1]) + 100 : parseFloat(v) || 0;
}

function getCharacterDisplayRarity(char) {
    const list = Array.isArray(char?.rarity) ? char.rarity : [char?.rarity];
    if (list.some(r => String(r || '').includes('☆５'))) return 5;
    if (list.some(r => String(r || '').includes('☆４'))) return 4;
    return 0;
}

const ELEMENT_ORDER = ['炎', '水', '風', '雷', '草', '氷', '岩', 'その他'];
const WEAPON_TYPE_ORDER = ['片手剣', '両手剣', '長柄武器', '弓', '法器'];

function compareCharDefaultOrder(a, b) {
    const aConst = charOwnership.has(a.name) ? charOwnership.get(a.name) : null;
    const bConst = charOwnership.has(b.name) ? charOwnership.get(b.name) : null;
    const aOwned = aConst !== null ? 1 : 0;
    const bOwned = bConst !== null ? 1 : 0;
    if (bOwned !== aOwned) return bOwned - aOwned;
    const rDiff = getCharacterDisplayRarity(b) - getCharacterDisplayRarity(a);
    if (rDiff !== 0) return rDiff;
    const eDiff = ELEMENT_ORDER.indexOf(a.element) - ELEMENT_ORDER.indexOf(b.element);
    if (eDiff !== 0) return eDiff;
    return parseReleaseVersionSortKey(a.release_version) - parseReleaseVersionSortKey(b.release_version);
}

function compareWeaponDefaultOrder(a, b) {
    const aRef = weaponOwnership.has(a.name) ? weaponOwnership.get(a.name) : null;
    const bRef = weaponOwnership.has(b.name) ? weaponOwnership.get(b.name) : null;
    const aOwned = aRef !== null ? 1 : 0;
    const bOwned = bRef !== null ? 1 : 0;
    if (bOwned !== aOwned) return bOwned - aOwned;
    const rDiff = (b.rarity || 0) - (a.rarity || 0);
    if (rDiff !== 0) return rDiff;
    const tDiff = WEAPON_TYPE_ORDER.indexOf(a.type) - WEAPON_TYPE_ORDER.indexOf(b.type);
    if (tDiff !== 0) return tDiff;
    const vDiff = parseReleaseVersionSortKey(a.release_version) - parseReleaseVersionSortKey(b.release_version);
    if (vDiff !== 0) return vDiff;
    return (weaponReleaseOrderMap[a.name] ?? 9999) - (weaponReleaseOrderMap[b.name] ?? 9999);
}

// ================================================
// APP STATE
// ================================================

let supabaseClient = null;
let currentMemberId = null;
let currentMemberName = null;
let currentTab = 'char';

// Map: character name -> constellation (null=未所持, 0=無凸, 1-6=N凸)
const charOwnership = new Map();
// Map: weapon name -> refinement (null=未所持, 1-5=精錬N)
const weaponOwnership = new Map();

// ================================================
// SUPABASE HELPERS
// ================================================

function initSupabase() {
    const url = window.SUPABASE_URL;
    const key = window.SUPABASE_ANON_KEY;
    if (!url || !key || url.includes('YOUR_SUPABASE')) {
        throw new Error('SUPABASE_CONFIG_MISSING');
    }
    supabaseClient = window.supabase.createClient(url, key);
}

async function loadMembers() {
    const { data, error } = await supabaseClient
        .from('members')
        .select('id, name')
        .order('created_at', { ascending: true });
    if (error) throw error;
    return data || [];
}

async function addMember(name) {
    const { data, error } = await supabaseClient
        .from('members')
        .insert({ name })
        .select()
        .single();
    if (error) throw error;
    return data;
}

async function removeMember(id) {
    const { error } = await supabaseClient
        .from('members')
        .delete()
        .eq('id', id);
    if (error) throw error;
}

async function loadCharOwnership(memberId) {
    const { data, error } = await supabaseClient
        .from('character_ownership')
        .select('character_name, constellation')
        .eq('member_id', memberId);
    if (error) throw error;
    charOwnership.clear();
    (data || []).forEach(row => charOwnership.set(row.character_name, row.constellation));
}

async function loadWeaponOwnership(memberId) {
    const { data, error } = await supabaseClient
        .from('weapon_ownership')
        .select('weapon_name, refinement')
        .eq('member_id', memberId);
    if (error) throw error;
    weaponOwnership.clear();
    (data || []).forEach(row => weaponOwnership.set(row.weapon_name, row.refinement));
}

async function saveCharItem(memberId, charName, constellation) {
    if (constellation === null) {
        const { error } = await supabaseClient
            .from('character_ownership')
            .delete()
            .eq('member_id', memberId)
            .eq('character_name', charName);
        if (error) throw error;
        charOwnership.delete(charName);
    } else {
        const { error } = await supabaseClient
            .from('character_ownership')
            .upsert(
                { member_id: memberId, character_name: charName, constellation },
                { onConflict: 'member_id,character_name' }
            );
        if (error) throw error;
        charOwnership.set(charName, constellation);
    }
}

async function saveWeaponItem(memberId, weaponName, refinement) {
    if (refinement === null) {
        const { error } = await supabaseClient
            .from('weapon_ownership')
            .delete()
            .eq('member_id', memberId)
            .eq('weapon_name', weaponName);
        if (error) throw error;
        weaponOwnership.delete(weaponName);
    } else {
        const { error } = await supabaseClient
            .from('weapon_ownership')
            .upsert(
                { member_id: memberId, weapon_name: weaponName, refinement },
                { onConflict: 'member_id,weapon_name' }
            );
        if (error) throw error;
        weaponOwnership.set(weaponName, refinement);
    }
}

// ================================================
// HELPER FUNCTIONS
// ================================================

function escapeHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function showLoading(visible) {
    document.getElementById('loadingOverlay').classList.toggle('hidden', !visible);
}

// ================================================
// HOME VIEW
// ================================================

async function showHomeView() {
    currentMemberId = null;
    currentMemberName = null;
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('memberView').classList.add('hidden');
    await renderMemberList();
}

async function renderMemberList() {
    const list = document.getElementById('memberList');
    list.innerHTML = '<p class="loading-text">読み込み中...</p>';
    try {
        const members = await loadMembers();
        list.innerHTML = '';
        if (members.length === 0) {
            list.innerHTML = '<p class="empty-text">メンバーがいません。追加してください。</p>';
            return;
        }
        members.forEach(member => {
            const item = document.createElement('div');
            item.className = 'member-item';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'member-name';
            nameSpan.textContent = member.name;
            nameSpan.addEventListener('click', () => showMemberView(member.id, member.name));

            const delBtn = document.createElement('button');
            delBtn.className = 'btn btn-danger';
            delBtn.textContent = '削除';
            delBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                if (!confirm(`「${member.name}」を削除しますか？\nこの操作は元に戻せません。`)) return;
                showLoading(true);
                try {
                    await removeMember(member.id);
                    await renderMemberList();
                } catch (err) {
                    alert('削除エラー: ' + err.message);
                } finally {
                    showLoading(false);
                }
            });

            item.appendChild(nameSpan);
            item.appendChild(delBtn);
            list.appendChild(item);
        });
    } catch (err) {
        list.innerHTML = `<p class="error-text">エラー: ${escapeHtml(err.message)}</p>`;
    }
}

document.getElementById('addMemberBtn').addEventListener('click', async () => {
    const raw = prompt('メンバー名を入力してください:');
    if (!raw) return;
    const name = raw.trim();
    if (!name) return;
    showLoading(true);
    try {
        await addMember(name);
        await renderMemberList();
    } catch (err) {
        if (err.code === '23505' || (err.message && err.message.includes('duplicate'))) {
            alert(`「${name}」は既に存在します。`);
        } else {
            alert('追加エラー: ' + err.message);
        }
    } finally {
        showLoading(false);
    }
});

// ================================================
// MEMBER VIEW
// ================================================

async function showMemberView(memberId, memberName) {
    currentMemberId = memberId;
    currentMemberName = memberName;
    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('memberView').classList.remove('hidden');
    document.getElementById('memberViewTitle').textContent = memberName;
    showTab('char');
    showLoading(true);
    try {
        await Promise.all([
            loadCharOwnership(memberId),
            loadWeaponOwnership(memberId)
        ]);
        renderCurrentTab();
    } catch (err) {
        alert('データ読み込みエラー: ' + err.message);
    } finally {
        showLoading(false);
    }
}

function showTab(tab) {
    currentTab = tab;
    document.getElementById('charTab').classList.toggle('hidden', tab !== 'char');
    document.getElementById('weaponTab').classList.toggle('hidden', tab !== 'weapon');
    document.getElementById('tabBtnChar').classList.toggle('active', tab === 'char');
    document.getElementById('tabBtnWeapon').classList.toggle('active', tab === 'weapon');
}

function renderCurrentTab() {
    if (currentTab === 'char') renderCharTab();
    else renderWeaponTab();
}

// ================================================
// CHARACTER TAB
// ================================================

function renderCharTab() {
    const ownedF = document.getElementById('charFilterOwned').value;
    const elemF = document.getElementById('charFilterElement').value;
    const weapF = document.getElementById('charFilterWeaponType').value;
    const constF = document.getElementById('charFilterConst').value;
    const sortM = document.getElementById('charSort').value;

    let filtered = characters.filter(char => {
        const constellation = charOwnership.has(char.name) ? charOwnership.get(char.name) : null;
        const owned = constellation !== null;
        if (ownedF === 'owned' && !owned) return false;
        if (ownedF === 'notOwned' && owned) return false;
        if (elemF && char.element !== elemF) return false;
        if (weapF && char.weapon !== weapF) return false;
        if (constF) {
            if (constF === 'none') return !owned;
            const constNum = parseInt(constF);
            if (!owned) return false;
            if (constellation !== constNum) return false;
        }
        return true;
    });

    if (sortM === 'constDesc') {
        filtered.sort((a, b) => {
            const aV = charOwnership.has(a.name) ? charOwnership.get(a.name) : -1;
            const bV = charOwnership.has(b.name) ? charOwnership.get(b.name) : -1;
            if (bV !== aV) return bV - aV;
            return compareCharDefaultOrder(a, b);
        });
    } else if (sortM === 'constAsc') {
        filtered.sort((a, b) => {
            const aV = charOwnership.has(a.name) ? (charOwnership.get(a.name) ?? -1) : 99;
            const bV = charOwnership.has(b.name) ? (charOwnership.get(b.name) ?? -1) : 99;
            if (aV !== bV) return aV - bV;
            return compareCharDefaultOrder(a, b);
        });
    } else {
        filtered.sort(compareCharDefaultOrder);
    }

    const container = document.getElementById('charList');
    container.innerHTML = '';
    if (filtered.length === 0) {
        container.innerHTML = '<p class="empty-text">該当するキャラクターがいません。</p>';
        return;
    }
    filtered.forEach(char => {
        const constellation = charOwnership.has(char.name) ? charOwnership.get(char.name) : null;
        container.appendChild(createCharCard(char, constellation));
    });
}

function createCharCard(char, constellation) {
    const owned = constellation !== null;
    const rarity = getCharacterDisplayRarity(char);
    const imgPath = encodeImagePath('character', char.name);

    const card = document.createElement('div');
    card.className = `item-card ${owned ? 'owned' : 'not-owned'}`;

    // Image section
    const imgWrap = document.createElement('div');
    imgWrap.className = 'item-image-wrap';
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = char.name;
    img.className = 'item-image';
    img.onerror = () => { img.style.display = 'none'; };
    const rarityBadge = document.createElement('span');
    rarityBadge.className = `rarity-badge rarity-${rarity}`;
    rarityBadge.textContent = `★${rarity}`;
    const elemBadge = document.createElement('span');
    elemBadge.className = `element-badge element-${char.element}`;
    elemBadge.textContent = char.element;
    imgWrap.append(img, rarityBadge, elemBadge);

    // Info section
    const info = document.createElement('div');
    info.className = 'item-info';
    const nameEl = document.createElement('div');
    nameEl.className = 'item-name';
    nameEl.textContent = char.name;

    const controls = document.createElement('div');
    controls.className = 'item-controls';

    const label = document.createElement('label');
    label.className = 'owned-label';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'owned-checkbox';
    checkbox.checked = owned;
    label.append(checkbox, document.createTextNode('所持'));

    const select = document.createElement('select');
    select.className = 'const-select';
    select.disabled = !owned;
    [['0','無凸'],['1','1凸'],['2','2凸'],['3','3凸'],['4','4凸'],['5','5凸'],['6','6凸']].forEach(([val, label]) => {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = label;
        if (owned && constellation === parseInt(val)) opt.selected = true;
        select.appendChild(opt);
    });

    checkbox.addEventListener('change', async () => {
        const isOwned = checkbox.checked;
        select.disabled = !isOwned;
        card.classList.toggle('owned', isOwned);
        card.classList.toggle('not-owned', !isOwned);
        const newConst = isOwned ? parseInt(select.value) : null;
        if (isOwned) charOwnership.set(char.name, newConst);
        else charOwnership.delete(char.name);
        try {
            await saveCharItem(currentMemberId, char.name, newConst);
        } catch (err) {
            console.error('Save error:', err);
            alert('保存エラー: ' + err.message);
        }
    });

    select.addEventListener('change', async () => {
        if (!checkbox.checked) return;
        const newConst = parseInt(select.value);
        charOwnership.set(char.name, newConst);
        try {
            await saveCharItem(currentMemberId, char.name, newConst);
        } catch (err) {
            console.error('Save error:', err);
            alert('保存エラー: ' + err.message);
        }
    });

    controls.append(label, select);
    info.append(nameEl, controls);
    card.append(imgWrap, info);
    return card;
}

// ================================================
// WEAPON TAB
// ================================================

function renderWeaponTab() {
    const ownedF = document.getElementById('weaponFilterOwned').value;
    const typeF = document.getElementById('weaponFilterType').value;
    const rarityF = document.getElementById('weaponFilterRarity').value;
    const refF = document.getElementById('weaponFilterRef').value;
    const sortM = document.getElementById('weaponSort').value;

    let filtered = allWeaponList.filter(w => {
        // Show only ★4+ by default; rarity filter lets user narrow further
        if (w.rarity < 4) return false;
        if (rarityF && w.rarity !== parseInt(rarityF)) return false;

        const refinement = weaponOwnership.has(w.name) ? weaponOwnership.get(w.name) : null;
        const owned = refinement !== null;
        if (ownedF === 'owned' && !owned) return false;
        if (ownedF === 'notOwned' && owned) return false;
        if (typeF && w.type !== typeF) return false;
        if (refF) {
            if (refF === 'none') return !owned;
            const refNum = parseInt(refF);
            if (!owned) return false;
            if (refinement !== refNum) return false;
        }
        return true;
    });

    if (sortM === 'refDesc') {
        filtered.sort((a, b) => {
            const aV = weaponOwnership.has(a.name) ? weaponOwnership.get(a.name) : -1;
            const bV = weaponOwnership.has(b.name) ? weaponOwnership.get(b.name) : -1;
            if (bV !== aV) return bV - aV;
            return compareWeaponDefaultOrder(a, b);
        });
    } else if (sortM === 'refAsc') {
        filtered.sort((a, b) => {
            const aV = weaponOwnership.has(a.name) ? weaponOwnership.get(a.name) : 99;
            const bV = weaponOwnership.has(b.name) ? weaponOwnership.get(b.name) : 99;
            if (aV !== bV) return aV - bV;
            return compareWeaponDefaultOrder(a, b);
        });
    } else {
        filtered.sort(compareWeaponDefaultOrder);
    }

    const container = document.getElementById('weaponList');
    container.innerHTML = '';
    if (filtered.length === 0) {
        container.innerHTML = '<p class="empty-text">該当する武器がありません。</p>';
        return;
    }
    filtered.forEach(w => {
        const refinement = weaponOwnership.has(w.name) ? weaponOwnership.get(w.name) : null;
        container.appendChild(createWeaponCard(w, refinement));
    });
}

function createWeaponCard(weapon, refinement) {
    const owned = refinement !== null;
    const imgPath = encodeImagePath('weapon', weapon.name);

    const card = document.createElement('div');
    card.className = `item-card ${owned ? 'owned' : 'not-owned'}`;

    // Image section
    const imgWrap = document.createElement('div');
    imgWrap.className = 'item-image-wrap';
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = weapon.name;
    img.className = 'item-image';
    img.onerror = () => { img.style.display = 'none'; };
    const rarityBadge = document.createElement('span');
    rarityBadge.className = `rarity-badge rarity-${weapon.rarity}`;
    rarityBadge.textContent = `★${weapon.rarity}`;
    const typeBadge = document.createElement('span');
    typeBadge.className = 'weapon-type-badge';
    typeBadge.textContent = weapon.type;
    imgWrap.append(img, rarityBadge, typeBadge);

    // Info section
    const info = document.createElement('div');
    info.className = 'item-info';
    const nameEl = document.createElement('div');
    nameEl.className = 'item-name';
    nameEl.textContent = weapon.name;

    const controls = document.createElement('div');
    controls.className = 'item-controls';

    const label = document.createElement('label');
    label.className = 'owned-label';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'owned-checkbox';
    checkbox.checked = owned;
    label.append(checkbox, document.createTextNode('所持'));

    const select = document.createElement('select');
    select.className = 'ref-select';
    select.disabled = !owned;
    [1, 2, 3, 4, 5].forEach(val => {
        const opt = document.createElement('option');
        opt.value = String(val);
        opt.textContent = `精錬${val}`;
        if (owned && refinement === val) opt.selected = true;
        select.appendChild(opt);
    });

    checkbox.addEventListener('change', async () => {
        const isOwned = checkbox.checked;
        select.disabled = !isOwned;
        card.classList.toggle('owned', isOwned);
        card.classList.toggle('not-owned', !isOwned);
        const newRef = isOwned ? parseInt(select.value) : null;
        if (isOwned) weaponOwnership.set(weapon.name, newRef);
        else weaponOwnership.delete(weapon.name);
        try {
            await saveWeaponItem(currentMemberId, weapon.name, newRef);
        } catch (err) {
            console.error('Save error:', err);
            alert('保存エラー: ' + err.message);
        }
    });

    select.addEventListener('change', async () => {
        if (!checkbox.checked) return;
        const newRef = parseInt(select.value);
        weaponOwnership.set(weapon.name, newRef);
        try {
            await saveWeaponItem(currentMemberId, weapon.name, newRef);
        } catch (err) {
            console.error('Save error:', err);
            alert('保存エラー: ' + err.message);
        }
    });

    controls.append(label, select);
    info.append(nameEl, controls);
    card.append(imgWrap, info);
    return card;
}

// ================================================
// EVENT BINDINGS
// ================================================

document.getElementById('backBtn').addEventListener('click', showHomeView);

document.getElementById('tabBtnChar').addEventListener('click', () => {
    if (currentTab !== 'char') showTab('char');
});
document.getElementById('tabBtnWeapon').addEventListener('click', () => {
    if (currentTab !== 'weapon') showTab('weapon');
});

[
    'charFilterOwned', 'charFilterElement', 'charFilterWeaponType',
    'charFilterConst', 'charSort'
].forEach(id => {
    document.getElementById(id).addEventListener('change', renderCharTab);
});

[
    'weaponFilterOwned', 'weaponFilterType', 'weaponFilterRarity',
    'weaponFilterRef', 'weaponSort'
].forEach(id => {
    document.getElementById(id).addEventListener('change', renderWeaponTab);
});

// ================================================
// INITIALIZATION
// ================================================

async function init() {
    showLoading(true);
    try {
        if (window._configMissing) {
            throw new Error('SUPABASE_CONFIG_MISSING');
        }
        initSupabase();
        await showHomeView();
    } catch (err) {
        showLoading(false);
        if (err.message === 'SUPABASE_CONFIG_MISSING') {
            document.getElementById('memberList').innerHTML = `
                <p class="error-text">
                    ⚠️ <strong>config.js が見つかりません。</strong><br><br>
                    <code>config.example.js</code> をコピーして <code>config.js</code> を作成し、<br>
                    Supabase の URL と匿名キーを設定してください。<br><br>
                    詳しくは <a href="README.md" style="color:#7eb8f7">README.md</a> を参照してください。
                </p>`;
        } else {
            document.getElementById('memberList').innerHTML =
                `<p class="error-text">初期化エラー: ${escapeHtml(err.message)}</p>`;
        }
        return;
    }
    showLoading(false);
}

init();
