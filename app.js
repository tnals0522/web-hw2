// ===== Part A =====

let sumA = 0;
for (let i = 0; i < ratings.length; i++) {
    sumA += ratings[i];
}
let avgA = sumA / ratings.length;
console.log(`A1 평균 평점: ${avgA}`);


let maxA = 0;
for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }
}
console.log(`A2 최고 평점: ${titles[maxA]} ${ratings[maxA]}`);


let count8A = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8.0) {
        count8A++;
    }
}
console.log(`A3 8점 이상: ${count8A}편`);


let c2020A = 0;
let c2010A = 0;
let c2000A = 0;
let cBeforeA = 0;

for (let i = 0; i < years.length; i++) {
    let yearNum = parseInt(years[i].substring(0, 4));
    let decade = yearNum - (yearNum % 10);

    if (decade === 2020) {
        c2020A++;
    } else if (decade === 2010) {
        c2010A++;
    } else if (decade === 2000) {
        c2000A++;
    } else {
        cBeforeA++;
    }
}
console.log(`A4 2020년대 ${c2020A}편, 2010년대 ${c2010A}편, 2000년대 ${c2000A}편, 그 이전 ${cBeforeA}편`);


let bigA = "";
for (let i = 0; i < audiences.length; i++) {
    if (audiences[i] >= 1000000) {
        bigA += titles[i] + ", ";
    }
}

let resultA5 = (bigA === "") ? "없음" : bigA.trim();
console.log(`A5 관객 100만 이상: ${resultA5}`);

// ===== Part B =====

// average(list) : list(배열) ⇒ 평균 평점(숫자)
function average(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i].rating;
    }
    return list.length > 0 ? sum / list.length : 0;
}

// best(list) :배열 ⇒ 최고 평점 객체
function best(list) {
    if (list.length === 0) return null;
    let maxObj = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > maxObj.rating) {
            maxObj = list[i];
        }
    }
    return maxObj;
}

// filterByRating(list, min) : 배열, 숫자 ⇒ 새 배열
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}

// sortBy(list, key, desc) : 배열, 키 이름, 참이면 내림차순 ⇒ 새 배열
function sortBy(list, key, desc) {
    const sign = desc ? -1 : 1;
    return [...list].sort((a, b) => {
        let result = 0;
        if (typeof a[key] === "string") {
            result = a[key].localeCompare(b[key]);
        } else {
            result = a[key] - b[key];
        }
        return result * sign;
    });
}

// search(list, keyword) : 배열, 문자열 ⇒ 새 배열
function search(list, keyword) {
    const term = keyword.trim().toLowerCase();
    return list.filter(m => m.title.toLowerCase().includes(term));
}

// formatNumber(n) : 숫자나 숫자 문자열 ⇒ "1,234,567"
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}

// yearsSince(dateStr) : "2014-11-06" ⇒ 올해까지 몇 년(숫자)
function yearsSince(dateStr) {
    const year = parseInt(dateStr.substring(0, 4), 10);
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

const bestMovie = best(movies);
const topAudienceMovie = sortBy(movies, "audience", true)[0];

const line1 = `전체 10편, 평균 평점 ${average(movies).toFixed(1)}점`;
const line2 = `최고 평점 ${bestMovie.title} (${bestMovie.rating}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)`;
const line3 = `관객 1위 ${topAudienceMovie.title} (누적 ${formatNumber(topAudienceMovie.audience)}명)`;

const outElement = document.getElementById("out");
if (outElement) {
    outElement.textContent = `${line1}\n${line2}\n${line3}`;
}