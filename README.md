# and-coffee-stand

※本プロジェクトはクライアントの許可を得て、ポートフォリオおよび制作過程を公開しています。

## 概要

福岡県北九州市のカフェ「and coffee stand」の公式サイトです。  
ブランドの空気感をそのまま伝えることを重視し、動画背景・写真・余白を活かした構成で、
店舗情報、メニュー、店内ビュー、投稿コンテンツを閲覧できるようにしています。

## 主な特徴

- トップページで動画と写真を組み合わせ、店舗の世界観を視覚的に表現
- `/menu` でドリンク・スイーツをカテゴリ別に掲載
- `/view` で店内やイベント写真をスライド表示
- `/secret` でContentfulの投稿一覧・詳細を公開
- `/admin` からパスワード認証付きで投稿を作成・公開
- Google Maps APIを使ってフッターに店舗地図を表示

## 担当

- フロントエンド実装
- 管理画面の設計・実装
- 投稿APIの設計・実装
- CMS連携の実装

## 技術スタック

- Next.js 15 (App Router)
- React 19
- TypeScript
- Contentful
- Google Maps JavaScript API
- Firebase Storage

## 工夫した点

- カフェの雰囲気が伝わるよう、ファーストビューや背景に動画を使用
- メニューやギャラリーを静的に見やすく整理し、店舗情報へ迷わず辿れる構成に調整
- 管理画面は店舗運用を想定し、パスワード認証と最小限の投稿フローに絞って実装
- 投稿作成時に画像アップロード、タグ設定、公開日時設定、公開処理までを一連で完結できるように構成

## 公開側の主なページ

- `/` : トップページ
- `/menu` : メニュー一覧
- `/view` : 店内・イベント写真のスライドビュー
- `/secret` : 投稿一覧
- `/secret/[slug]` : 投稿詳細

## 管理画面

`/admin` 以下では、パスワードベースのセッション認証を通した上で投稿管理を行います。

- `/admin/posts` : 投稿一覧
- `/admin/posts/new` : 新規投稿
- `/api/admin/posts` : 投稿作成API
- `/api/admin/posts/[id]/publish` : 投稿公開API

## セットアップ

### 開発サーバー起動

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

### 必要な環境変数

`.env.local` などに以下を設定してください。

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_token
CONTENTFUL_MANAGEMENT_TOKEN=your_content_management_api_token
CONTENTFUL_ENVIRONMENT=master

ADMIN_PASSWORD=your_admin_password
ADMIN_SESSION_SECRET=long-random-string

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

補足:

- `CONTENTFUL_ACCESS_TOKEN` は公開側の `/secret` で使用します
- `CONTENTFUL_MANAGEMENT_TOKEN` は管理画面からの投稿作成・公開で使用します
- `ADMIN_SESSION_SECRET` は十分に長いランダム文字列を設定してください
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` はフッターの地図表示に必要です

## 補足

本プロジェクトはクライアントの許可を得て、ポートフォリオおよび制作過程を公開しています。
