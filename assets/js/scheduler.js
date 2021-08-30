var dateEl = document.querySelector("#currentDay");
var currentHour = new Date().getHours();

var fillCurrentDate = function() {
    var currentDate = moment().format('dddd, MMMM Do');
    dateEl.textContent = currentDate;
}

$(".task-text").on("click", "p", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  });

var timeBlocks = function(hour) {
    var divEl = document.querySelector("#hour-" + hour + " .col-10");
    
    if ((currentHour - hour) > 9) {
        divEl.setAttribute("class", "col-10 past");
    }
    else if ((currentHour - hour) === 9) {
        divEl.setAttribute("class", "col-10 present");
    }
    else if ((currentHour - hour) < 9) {
        divEl.setAttribute("class", "col-10 future");
    }
};

fillCurrentDate();

var fillTaskBlocks = function() {
    for (i = 0; i < 9; i++) {
        timeBlocks(i);
    };
};
fillTaskBlocks();
console.log(currentHour);