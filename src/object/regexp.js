// 分组 量词 断言 字符
const reg = /(\d)\1{3,}/g
const s = '122333444455555666666'
console.log('[...s.matchAll(reg)] ===> ', [...s.matchAll(reg)]); // [Array(2), Array(2), Array(2)]
console.log('s.match(reg) ===> ', s.match(reg)); // ["4444", "55555", "666666"]
console.log('s.replace(reg) ===> ', s.replace(reg, token => token.slice(0, 3))); // token => token.slice(0, 3) 122333444555666