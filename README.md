# 東雪蓮大戰塔菲 ⚡ 粉絲互動樂園

> 以虛擬主播**東雪蓮**與**永雛塔菲**為主題的粉絲互動網站。零官方關係，純屬粉絲愛好製作。

![Platform](https://img.shields.io/badge/platform-Vercel-black?logo=vercel)
![Framework](https://img.shields.io/badge/framework-Next.js%2016-black?logo=next.js)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🌸 功能一覽

| 頁面 | 網址 | 說明 |
|------|------|------|
| 首頁 | `/` | VS 對決入口，角色卡片，殿堂精選語錄 |
| 人格測驗 | `/quiz` | 你是雪蓮派？塔菲派？両辺の生き物？ |
| 投票對決 | `/battle` | 三題投票，即時顯示兩邊票數 |
| 粉絲統計 | `/stats` | 全體粉絲測驗結果分布圖 |
| 殿堂排行 | `/hall-of-fame` | 粉絲提名最愛語錄，開放投票排行 |
| 東雪蓮 | `/seren` | 角色詳細資料頁 |
| 永雛塔菲 | `/taffy` | 角色詳細資料頁 |
| 數據對決 | `/versus` | 兩邊各項數據並排比較 |
| 反應遊戲 | `/games/seren` | 30秒點血袋反應速度挑戰 |
| 知識測驗 | `/games/taffy` | 8題測驗你對塔菲的了解 |
| 世界排名 | `/leaderboard` | 遊戲分數全球排行榜 |
| 關於 | `/about` | 網站介紹、功能說明、資料來源 |

---

## 🎨 設計特色

- **雙色系**：雪蓮（紫/藍 💜）× 塔菲（橙/紅 🧡）對比視覺
- **暗色主題**：深色背景保護眼睛，紫/黃漸層點綴
- **滑順動效**：頁面進場動畫、卡片 Hover 浮動、彩紙煙火慶祝測驗完成
- **全中文**：繁體中文界面，無英語殘留
- **響應式**：Mobile First，手機 / 平板 / 桌面皆可流暢使用
- **Google Fonts**：使用 Noto Sans TC 優雅中文排版

---

## 🚀 部署方式（Vercel）

```bash
# 1. 登入 Vercel
https://vercel.com/login

# 2. Import GitHub Repo
https://vercel.com/import?filter=github&q=bennytsai1234%2Fseren-vs-taffy

# 3. 自動偵測 Next.js → Deploy!
```

> SQLite 資料庫在 Vercel 無法持久化，每次部署會重置。
> 如需持久化資料，建議遷移到 [Turso](https://turso.tech)（SQLite 托管）或 [Neon](https://neon.tech)（PostgreSQL，Vercel 內建）。

---

## 🛠️ 本地開發

```bash
# 安裝依賴
npm install

# 生成 Prisma Client
npx prisma generate

# 初始化資料庫
npx prisma migrate dev

# 啟動開發伺服器
npm run dev
```

---

## 📁 專案結構

```
seren-vs-taffy/
├── prisma/
│   └── schema.prisma      # 資料庫模型
├── public/
│   └── favicon.svg        # VS 主題 favicon
├── src/
│   ├── app/               # Next.js App Router 頁面
│   │   ├── api/          # API 路由
│   │   ├── games/        # 遊戲頁面
│   │   └── *.tsx         # 各功能頁面
│   └── lib/
│       └── prisma.ts     # Prisma Client 單例
└── vercel.json           # Vercel 設定
```

---

## ⚠️ 聲明

本網站與東雪蓮（所屬 Blanche Fleur）及永雛塔菲（個人勢 VTuber）**沒有任何官方關係**。所有內容均由粉絲基於公開資料製作，純屬愛好分享，如有侵權請聯繫移除。

---

## 📝 授權

MIT License — 可自由 Fork 學習或二次創作，但請保留原作者 credit。
