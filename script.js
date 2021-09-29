console.log("hello")
var currentday = moment().format('MMMM Do YYYY');
var timeEl = $("#currentDay")
timeEl.text(currentday)
var saveBtn = $(".saveBtn")
saveBtn.each(function () {
    var id = $(this).siblings(".hour").text()
    $(this).siblings(".description").val(localStorage.getItem(id))
    var current = moment().hours()
    var time = $(this).siblings(".description").attr("id")
    if(time<current){
        $(this).siblings(".description").addClass("past")
    }
    $(this).on("click", function (event) {
        var hour = $(this).siblings(".hour").text()
        var text = $(this).siblings(".description").val()
        console.log(text)
        localStorage.setItem(hour, text)
    })
})

