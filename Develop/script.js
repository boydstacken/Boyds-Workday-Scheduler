// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var today = dayjs()

  
  console.log($(".saveBtn"))
  
  $("#currentDay").text(today.format("MM/DD/YYYY"))
  
  $(".saveBtn").on("click", function() {
    var content = $(this).prev().val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, content)
  })
  
    var currentHour = dayjs().hour()
    console.log("current hour is" + currentHour) 
  $(".description").each(function(){
    var key = $(this).parent().attr("id");
    $(this).val(localStorage.getItem(key))
    
    var divHour = key.slice(5)
    //when the currentHour is ahead the div id's hour, then we add class past
    var myParent = $(this).parent()
    if(currentHour > divHour){
      console.log("it should be in the past")
      //how to add class to an element
      //when the currentHour is equal, then we add class present
    } else if (currentHour == divHour){
      console.log("present")
    } else{
      console.log("future")
    }
    //when the currentHour is equal, then we add class present
    // else ad the class future
   



  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
