const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1ZxKVUWAUXdQSKwOHDuvT3GUX60kYx8UHflLVK_xmwJQ/edit?gid=0#gid=0';

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('J-Wasteland 生存判定プロトコル')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// 初期化：都道府県リストの取得
function getPrefectureList() {
  // 変更点：名前ではなく「1枚目のシート」を直接取得する (getSheets()[0])
  const sheet = SpreadsheetApp.openByUrl(SHEET_URL).getSheets()[0];
  const data = sheet.getDataRange().getValues();
  return data.slice(1).map(row => row[0]).filter(String); 
}

// 生存判定コアロジック
function runSurvivalAssessment(formData) {
  // 変更点：こちらも「1枚目のシート」を直接取得
  const sheet = SpreadsheetApp.openByUrl(SHEET_URL).getSheets()[0];
  const data = sheet.getDataRange().getValues();
  
  const prefData = data.find(row => row[0] === formData.prefecture);
  if (!prefData) return { error: "DATA_NOT_FOUND" };

  let sp = 40; 
  let log = [];

  if (formData.q1 === 'underground') {
    sp += 30;
    log.push("[INFO] 初期爆風および熱線を回避。物理的損傷なし。");
  } else {
    sp -= 35;
    log.push("[WARN] 屋外または窓際での被爆。初期ダメージ大。");
  }

  if (formData.q2 === 'vector') {
    sp += 20;
    log.push("[INFO] 推奨逃避経路へ展開。死の灰（フォールアウト）を回避中。");
  } else {
    sp -= 20;
    log.push("[CRITICAL] NGルートまたは汚染水域へ接近。被曝量が増大。");
  }

  if (formData.q3 === 'seal') {
    sp += 10;
    log.push("[INFO] 拠点の密閉に成功。内部被曝リスクを低減。");
  } else {
    sp -= 15;
    log.push("[WARN] 外部探索により汚染物質を吸入。内部被曝進行中。");
  }

  sp = Math.max(1, Math.min(99, sp));

  return {
    rate: sp,
    pref: prefData[0],
    capital: prefData[1],
    damage: prefData[2],
    primaryVector: prefData[4],
    hazardVector: prefData[5],
    hydroHazard: prefData[6],
    falloutZone: prefData[7],
    link: prefData[8],
    tacticalLog: log.join('<br>')
  };
}