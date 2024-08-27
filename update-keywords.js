const fs = require('fs');
const path = 'keywordFrequency.json';

function updateKeywords() {
  // 기존 데이터를 로드하거나, 없으면 빈 객체로 시작
  let data;
  if (fs.existsSync(path)) {
    data = JSON.parse(fs.readFileSync(path, 'utf-8'));
  } else {
    data = {};  // 파일이 없으면 빈 객체로 시작
  }

  // 현재 날짜 가져오기
  const today = new Date().toISOString().slice(0, 10);

  // 예시 키워드 업데이트 (여기서는 "example" 키워드)
  const keyword = 'example';
  if (!data[keyword]) {
    data[keyword] = {};
  }
  data[keyword][today] = (data[keyword][today] || 0) + 1;

  // 데이터를 JSON 파일에 저장
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  console.log(`Updated keyword data: ${keyword} on ${today}`);
}

// 함수 실행
updateKeywords();

