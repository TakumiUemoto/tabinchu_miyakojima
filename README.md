# アシストワン　名簿管理システムフロントエンド

## 技術スタック

- パッケージ管理
  - npm@10.1.0
  - node@20.9.0
- 主要 F/W

  - Next.js@13.4.9

## 環境構築

1. パッケージインストール

```sh
npm install
```

3. ローカル環境立ち上げ

```bash
npm run dev
```

4. vscodeの設定

- 必須プラグイン
  - [pretter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)をインストール

## 主要なスクリプト

### ■コードフォーマッタ

[Prettier](https://prettier.io/)でフォーマットを実行

```bash
npm run format
```

設定ファイル

- `.prettierrc`: フォーマットのルールを定義
- `.prettierignore`: フォーマットしないファイルを定義

### ■コード静的解析

[ESlint](https://eslint.org/)でコーディング規約の静的解析を実行  
以下のコマンドで`src`配下、`__test__`配下のチェック

```bash
npm run lint
```

設定ファイル

- `.eslintrc.json`: 使用するプラグイン、各種ルールを定義

[tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html#handbook-content)でTypescript型チェックを実行

```bash
yarn tsc
```

設定ファイル

- `tsconfig.json`: Typescriptの設定を定義

## コミット前チェックについて

[lint-staged](https://github.com/lint-staged/lint-staged)と[husky](https://github.com/typicode/husky)を使用することで `git commit`の前にステージされたファイルを対象に静的チェックを自動で実行  
対象のチェックは`.husky/pre-commit`を参照

## コーディング規約

コーディング規約は基本的にESlintのルールに従う。

## ダミーデータについて

ダミーデータは開発において必要なデータを作成している。  
本番環境ではダミーデータは使用しない。
