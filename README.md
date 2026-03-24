# 東雪蓮大戰塔菲 ⚡ 粉絲互動樂園

以虛擬主播**東雪蓮**與**永雛塔菲**為主題的粉絲互動網站。

## 🌸  功能一覽

| 頁面 | 網址 | 說明 |
|------|------|------|
| 首頁 | `/` | 對決入口，角色卡片 |
| 人格測驗 | `/quiz` | 你是雪蓮派？塔菲派？両辺の生き物？ |
| 投票對決 | `/battle` | 兩邊粉絲實時投票 |
| 殿堂排行榜 | `/hall-of-fame` | 粉絲提名最愛金句，投票排行 |
| 角色資料 | `/seren` | 東雪蓮詳細頁 |
| 角色資料 | `/taffy` | 永雛塔菲詳細頁 |
| 數據對決 | `/versus` | 兩位角色各項數據比較 |
| 雪蓮遊戲 | `/games/seren` | 暈血反應速度挑戰 |
| 塔菲遊戲 | `/games/taffy` | 塔菲知識對答 |
| 全球排行榜 | `/leaderboard` | 遊戲分數世界排名 |
| 關於 | `/about` | 關於本站 |

## 🛠️  本地開發

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

## 🚀  部署到 Vercel

1. Fork 或 push 到 GitHub
2. 在 Vercel Import 頁選這個 repo
3. Vercel 會自動偵測 Next.js 專案
4. Deploy！

> 注意：SQLite 資料庫（dev.db）不會被 deploy，留言/投票資料在正式環境需要另外設定 PostgreSQL 或切換到 Turso/Neon 等 SQLite 托管服務。

##  ⚙️  環境變數

```env
DATABASE_URL="file:./dev.db"
```

##  技術棧

- **Framework:** Next.js 16 (App Router)
- **ORM:** Prisma 5 + SQLite
- **樣式:** Tailwind CSS
- **托管:** Vercel

##  授權

本網站與東雪蓮、永雛塔菲及其經紀公司沒有任何官方關係。內容由粉絲基於公開資料製作，純屬愛好分享。
