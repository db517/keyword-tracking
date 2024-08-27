const fs = require('fs');

// 예시: 키워드 데이터를 업데이트하는 로직
function updateKeywords() {
  const data = JSON.parse(fs.readFileSync('keywordFrequency.json', 'utf-8'));

  const newKeyword = 'example';
  const today = new Date().toISOString().slice(0, 10);
  if (!data[newKeyword]) {
    data[newKeyword] = {};
  }
  data[newKeyword][today] = (data[newKeyword][today] || 0) + 1;

  fs.writeFileSync('keywordFrequency.json', JSON.stringify(data, null, 2));
}

updateKeywords();
