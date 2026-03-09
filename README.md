/🇯🇵 README.md (Japanese)
# Protocol: J-WASTELAND (J-Wasteland 生存判定プロトコル)

[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat-square&logo=google&logoColor=white)](https://developers.google.com/apps-script)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=flat-square&logo=google-sheets&logoColor=white)](https://www.google.com/sheets/about/)

**「君の生存確率は何％だ？」**

崩壊した日本列島（J-Wasteland）を生き抜くためのタクティカル生存判定モジュールです。
Google Apps Script (GAS) と Google スプレッドシートを連携させ、48都道府県のハザードデータに基づく生存確率（Survival Probability: SP）をリアルタイムに算出します。

## ☢️ Features (特徴)

* **スプレッドシート・データベース:** Google スプレッドシートを簡易データベース（マスター台帳）として活用し、都道府県ごとの動的データを取得。
* **サバイバル・アルゴリズム:**
  * 初期爆風および熱線の回避状況 (`underground` / `outdoor`)
  * 死の灰（フォールアウト）からの逃避経路 (`vector` / `wrong_vector`)
  * 拠点の密閉による内部被曝リスクの低減 (`seal` / `explore`)
  以上のパラメータから生存確率（1〜99%）を算出します。
* **タクティカル・ログ出力:** 選択した行動に基づき、戦術的なフィードバック（INFO, WARN, CRITICAL）を画面に出力します。

## 🛠 Tech Stack (技術スタック)

* **Backend:** Google Apps Script (GAS)
* **Database:** Google Sheets
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (GAS HtmlService)

## ⚙️ Setup (導入方法)

1. **マスター台帳の準備**
   * Google スプレッドシートを作成し、1枚目のシートに都道府県別のハザードデータ（県名、県庁所在地、被害想定、推奨ベクトルなど）を入力します。
   * スプレッドシートのURLから `SHEET_URL` を取得します。
2. **GASプロジェクトの展開**
   * 新しいGASプロジェクトを作成し、`コード.gs` に本リポジトリのGASコードを貼り付けます。
   * コード内の `SHEET_URL` の値を、自身のスプレッドシートのURLに変更します。
   * `index.html` ファイルを作成し、フロントエンドのコードを配置します。
3. **デプロイ**
   * 「デプロイ」>「新しいデプロイ」から「ウェブアプリ」として公開します。

## 👤 Author (開発者)

**伊藤正章 (Masaaki Ito)**
サバイバルDXクリエイター ｜ 荒野のPip-Boy設計局

低スペックPC（Chromebook等）やGCPを活用した、持たざる者のためのIT生存戦略と教育コンテンツを発信しています。
* **Blog / note:** [伊藤正章｜サバイバルDXクリエイター](https://note.com/masa_cloud)

# Protocol: J-WASTELAND (Survival Assessment Protocol)

[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat-square&logo=google&logoColor=white)](https://developers.google.com/apps-script)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=flat-square&logo=google-sheets&logoColor=white)](https://www.google.com/sheets/about/)

**"What is your probability of survival?"**

A tactical survival assessment module designed for the post-apocalyptic Japanese archipelago (J-Wasteland). 
Powered by Google Apps Script (GAS) and Google Sheets, this tool calculates real-time Survival Probability (SP) based on dynamic hazard data from 48 prefectures.

## ☢️ Features

* **Spreadsheet as a Database:** Utilizes Google Sheets as a master ledger to fetch dynamic regional data for each prefecture.
* **Survival Algorithm:** Calculates a survival rate (1-99%) based on critical initial actions:
  * Avoiding the initial blast and thermal radiation (`underground` vs `outdoor`).
  * Evacuation vectors to avoid nuclear fallout (`vector` vs `wrong_vector`).
  * Securing and sealing the shelter to prevent internal exposure (`seal` vs `explore`).
* **Tactical Log Generation:** Provides immediate tactical feedback (INFO, WARN, CRITICAL) based on the user's chosen survival actions.

## 🛠 Tech Stack

* **Backend:** Google Apps Script (GAS)
* **Database:** Google Sheets
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (via GAS HtmlService)

## ⚙️ Setup Instructions

1. **Prepare the Master Ledger**
   * Create a Google Sheet and populate the first sheet with prefecture-specific hazard data (e.g., Prefecture name, Capital, Damage estimates, Primary escape vectors).
   * Obtain the `SHEET_URL`.
2. **Deploy the GAS Project**
   * Create a new GAS project and paste the backend code into `Code.gs`.
   * Update the `SHEET_URL` constant with your Google Sheet's URL.
   * Create an `index.html` file and insert the frontend template.
3. **Publish**
   * Go to "Deploy" > "New deployment" and select "Web app" to launch your survival terminal.

## 👤 Author

**Masaaki Ito**
Survival DX Creator | Wasteland Pip-Boy Design Bureau

Advocating for IT survival strategies and educational content using low-spec PCs (like Chromebooks) and GCP for those navigating the digital wasteland.
* **Blog / note:** [Masaaki Ito on note](https://note.com/masa_cloud)

## 📄 License

This project is licensed under the MIT License.

## 📄 License

This project is licensed under the MIT License.
