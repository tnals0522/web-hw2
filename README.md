1 | formatNumber("1234567") | '1,234,567'(콘솔은 문자열에 작은따옴표를 붙여 보여 줌)
결과:'1,234,567'
2 | average(movies).toFixed(1) | 손으로 계산한 평균의 소수 1자리(예 '7.0')
결과:'7.6'
3 | best(movies).title | A2와 같은 제목
결과:'옵세션'
4 | sortBy(movies, "rating", true)[0].title | 3번과 같은 제목(최고 평점이 두 편 이상이면 그중하나)
결과:'옵세션'
5 | filterByRating(movies, 8).length | A3와 같은 개수
결과:3
6 | search(movies, " 인터 ").length | 제목에 "인터"가 든 영화 수(없으면 내 제목 일부를 앞뒤 공백과 함께 넣어시험)
결과:1
7 | yearsSince("2014-11-06") | 올해 연도에서 2014를 뺀 값(2026년이면 12)
결과:12
8 | 4번 실행 뒤 movies[0].title | data.js의 첫 영화 제목 그대로
결과:'극장판 치이카와: 인어 섬의 비밀'