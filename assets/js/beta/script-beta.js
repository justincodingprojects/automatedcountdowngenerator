var TEMPLATEURL = "https://justincodingprojects.github.io/automated-countdown-generator/assets/html/countdowntimer.html?month=[month]&day=[day]&year=[year]&hour=[hour]&minute=[minute]&second=[second]&millisecond=00&message=[message]"
const currentMonths = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    currentDays = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    currentHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    currentMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
    currentDayofWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var currentYear = new Date().getFullYear(),
    currentMonth = currentMonths[new Date().getMonth()],
    currentDay = currentDays[new Date().getDate()],
    currentHour = currentHours[new Date().getHours()],
    currentMinute = currentMinutes[new Date().getMinutes()],
    currentDayofWeek = currentDayofWeeks[new Date().getDay()],
    text1 = encodeURIComponent("Start of 1/2 Block").replace("%2F", "/"),
    text2 = encodeURIComponent("End of 1/2 Block").replace("%2F", "/"),
    text3 = encodeURIComponent("End of 3/4 Block").replace("%2F", "/"),
    text4 = encodeURIComponent("End of 5/6 Block").replace("%2F", "/"),
    text5 = encodeURIComponent("End of 7/8 Block").replace("%2F", "/"),
    text6 = encodeURIComponent("End of 9/10 Block").replace("%2F", "/"),
    text7 = encodeURIComponent("End of 11/12 Block").replace("%2F", "/")
generateURL(currentYear, currentMonth, currentDay, parseInt(currentHour), parseInt(currentMinute), currentDayofWeek, TEMPLATEURL)

function generateURL(year, month, day, hour, minute, dayofweek, templateURL) {
    var hasWorked = false
    templateURL = templateURL.replace("[year]", year)
    templateURL = templateURL.replace("[month]", month)
    templateURL = templateURL.replace("[day]", day)
    if (hour == 12) {
        if (minute < 30) {
            templateURL = templateURL.replace("[hour]", "12")
            templateURL = templateURL.replace("[minute]", "30")
            templateURL = templateURL.replace("[second]", "00")
            templateURL = templateURL.replace("[message]", text5)
            hasWorked = true
        } else {
            templateURL = templateURL.replace("[hour]", "13")
            templateURL = templateURL.replace("[minute]", "20")
            templateURL = templateURL.replace("[second]", "00")
            templateURL = templateURL.replace("[message]", text6)
            hasWorked = true
        }
    }
    if (hour == 13) {
        if (minute < 20) {
            templateURL = templateURL.replace("[hour]", "13")
            templateURL = templateURL.replace("[minute]", "20")
            templateURL = templateURL.replace("[second]", "00")
            templateURL = templateURL.replace("[message]", text6)
            hasWorked = true
        } else {
            templateURL = templateURL.replace("[hour]", "14")
            templateURL = templateURL.replace("[minute]", "10")
            templateURL = templateURL.replace("[second]", "00")
            templateURL = templateURL.replace("[message]", text7)
            hasWorked = true
        }
    }
    if (hour == 14) {
        if (minute < 10) {
            templateURL = templateURL.replace("[hour]", "14")
            templateURL = templateURL.replace("[minute]", "10")
            templateURL = templateURL.replace("[second]", "00")
            templateURL = templateURL.replace("[message]", text6)
            hasWorked = true
        }
    }
    if (hasWorked == true && dayofweek !== "Sunday" && dayofweek !== "Saturday") {
        var newURL = templateURL
        alert("Temporary URL generated!")
        if (confirm("Is this correct?\n" + newURL)) {
            window.open(newURL)
        }
    } else if (dayofweek == "Sunday" || dayofweek == "Saturday") {
        alert(`The countdown URL can't be generated because you tried to start it on a weekend.`)
    } else {
        alert(`The countdown URL can't be generated because the school session has already ended and/or it hasn't started yet.`)
    }
}
