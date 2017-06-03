
// 日期输入格式是 YYYY-MM-DD

const dates = ["2014-12-04","2014-12-05","2014-12-01", "2014-12-02", "2014-12-03"]
const parsedDates = dates.map(date => Date.parse(date) );
parsedDates.sort((a, b) => { return a - b})
const sortedDates = parsedDates.map(time => {
    return new Date(time);
});
console.log(sortedDates)
const newDates = sortedDates.map(date => {
    console.log(date.getYear());
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
});
console.log(newDates)

