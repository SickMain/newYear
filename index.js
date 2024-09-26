function daysToNY() {
    var todayDate = new Date();
    var newYearDate = new Date(todayDate.getFullYear() + 1, 0, 1);
    return Math.round((newYearDate - todayDate) / (1000 * 60 * 60 * 24));
}

console.log("До нового года " + daysToNY() +" дней!");