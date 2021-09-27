console.log ("hello")
var currentday = moment().format('MMMM Do YYYY');
var timeEl=$("#currentDay")
timeEl.text(currentday)
var saveBtn = $(".saveBtn")
saveBtn.each(function(){
    $(this).on("click",function(event){
var text = $(this).siblings(".description").val()
console.log(text)
    })
}) 