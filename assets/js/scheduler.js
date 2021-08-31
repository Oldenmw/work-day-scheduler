var dateEl = document.querySelector("#currentDay");
var currentHour = new Date().getHours();
var tasks = {};

var fillCurrentDate = function() {
    var currentDate = moment().format('dddd, MMMM Do');
    dateEl.textContent = currentDate;
}

$(".task-body").on("click", function() {
    var text = $(this).children('p')
        .text()
        .trim();
    var pId = $(this).children('p').attr('id');
    console.log(pId);

    var textInput = $("<textarea>")
        .addClass("col-10 task-input")
        .attr('id', pId)
        .val(text);
    $(this).children('p').replaceWith(textInput);
  
    textInput.trigger("focus");
});

$(".task-body").focusout( function() {
    var text = $(this).children("textarea")
        .val();
    // update task in array and re-save to localstorage
    // tasks[status][index].text = text;
    // saveTasks();
  
    var taskP = $("<p>")
        .text(text);
    $(this).children("textarea").replaceWith(taskP);
  });

var timeBlocks = function(hour) {
    var divEl = document.querySelector("#hour-" + hour + " .col-10");
    
    if ((currentHour - hour) > 9) {
        divEl.setAttribute("class", "col-10 task-body past");
    }
    else if ((currentHour - hour) === 9) {
        divEl.setAttribute("class", "col-10 task-body present");
    }
    else if ((currentHour - hour) < 9) {
        divEl.setAttribute("class", "col-10 task-body future");
    }
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        hour0: [],
        hour1: [],
        hour2: [],
        hour3: [],
        hour4: [],
        hour5: [],
        hour6: [],
        hour7: [],
        hour8: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        var pEl = document.querySelector("#")
      });
    });
};

fillCurrentDate();

var fillTaskBlocks = function() {
    for (i = 0; i < 9; i++) {
        timeBlocks(i);
    };
};
fillTaskBlocks();

setInterval(function() {
    fillTaskBlocks();
}, (1000 * 60) * 10);