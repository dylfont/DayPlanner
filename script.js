console.log ("hello")
var currentday = moment().format('MMMM Do YYYY');
var timeEl=$("#currentDay")
timeEl.text(currentday)
var saveBtn = $(".saveBtn")
saveBtn.each(function(){
    $(this).on("click",function(event){
var text = $(this).siblings(".description").val()
var hour = $(this).siblings(".hour").text()
console.log(text)
localStorage.setItem(hour, text)
    })
}) 
$("#9AM").val(localStorage.getItem("9AM"))