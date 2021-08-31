var dateEl = document.querySelector("#currentDay");
var currentHour = new Date().getHours();
var tasks = [];

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
        .attr("id", pId)
        .val(text);
    $(this).children('p').replaceWith(textInput);

    textInput.trigger("focus");
});

$(".task-body").focusout( function() {
    var text = $(this).children("textarea")
        .val();
    var textareaId = $(this).children("textarea")
        .attr("id");
    
    // var tasksId = textareaId.slice(-1);
    // tasks[tasksId] = text;
    // saveTasks();
  
    var taskP = $("<p>")
        .attr("id", textareaId)
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
  
    if (!tasks) {
      tasks = ["", "", "", "", "", "", "", "", ""]
    }

    for (i = 0; i < 9; i++) {
        console.log(tasks[i]);
        $("#task-" + i).text(tasks[i]);
    };
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".save-btn").on("click", function() {
    
});

fillCurrentDate();

var fillTaskBlocks = function() {
    for (i = 0; i < 9; i++) {
        timeBlocks(i);
    };
};
fillTaskBlocks();
loadTasks();

setInterval(function() {
    fillTaskBlocks();
}, (1000 * 60) * 10);