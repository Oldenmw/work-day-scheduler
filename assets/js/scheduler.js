var dateEl = document.querySelector("#currentDay");

var fillCurrentDate = function() {
    var currentDate = moment().format('dddd, MMMM Do');
    dateEl.textContent = currentDate;
}

fillCurrentDate();