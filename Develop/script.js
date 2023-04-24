
$(document).ready(function () {
  var today = dayjs()
 
  console.log($(".saveBtn"))

  //gets today's date established at top center portion of page
  $("#currentDay").text(today.format("MM/DD/YYYY"))
  
  //event and when clicking on save button also logs data into local storage
  $(".saveBtn").on("click", function() {
    var content = $(this).prev().val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, content)
  })
  //gets the current day/hour and gets items from local storage
    var currentHour = dayjs().hour()
    console.log("current hour is" + currentHour) 
  $(".description").each(function(){
    var key = $(this).parent().attr("id");
    $(this).val(localStorage.getItem(key))
    
    //slices strings to identify hours of day to in the beginning stages to allow us to separate present, class, and future time blocks.
    var divHour = key.slice(5)
    //when the currentHour is ahead the div id's hour, then we add class past
    var myParent = $(this).parent()
    if(currentHour > divHour){
      console.log("it should be in the past")
      $(this).addClass("past")
      //how to add class to an element
      //when the currentHour is equal, then we add class present
    } else if (currentHour == divHour){
      console.log("present")
      $(this).addClass("present")
        //when the currentHour is equal, then we add class present
    } else{
        // else ad the class future
      console.log("future")
      $(this).addClass("future")
    }

  })
})
