let str = `
010-2016-2871
theehdrntdnzzz@naver.com
https://regexr.com/
The quick brown fox jumps over the lazy dog.
aabbcccdddd
http://localhost:1234
가나다라 마바사 아자차 타카파하 
`
// 재 할당이 가능한 let 으로 변수를 받아줘야한다. 

// 연습 1
const regexp = /fox/gi
// 리터럴 방식
// console.log(regexp.test(str))
str = str.replace(regexp, 'AAA')
console.log(str)

// 연습 2
console.log(str.match(/\.$/g))
// \ 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.

// 연습 3
console.log(str.match(/^t/gm))

// 연습 4 
console.log(str.match(/https?/g))
//s가 있을 수도 있고 없을 수도 있는 것들을 찾음 ["https","http"]

// 연습 5
console.log(str.match(/\b\w{2,3}\b/g))
// \w 는 숫자를 포함한 영어 알파벳이 2개 이상 3개 이하 반복되는 단어들을 전부 다 찾는 표현 
// \w 앞 뒤로 \b를 넣어줌으로써 경계를 만든다. ["the","com","www" 등등]

// 연습 6
console.log(str.match(/[가-힣]{1,}/g))
// 한글자 이상의 한글을 찾아낸다. ["가나다라", "마바사", "아자차", "카타파하"]

// 연습 7 
console.log(str.match(/\bf\w{1,}\b/g))
// f로 시작하는 영단어들을 모두 찾아낸다. \b는 경계를 나타낸다.

// 연습 8 
console.log(str.match(/.{1,}(?=@)/g))
// ["theehdrntdnzzz"]
console.log(str.match(/(?<=@).{1,}/g))
// ["naver.com"] 