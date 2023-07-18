// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').on('click', function () {
    console.log($(this))
    let savedText = $(this).siblings('.description').val()
    console.log(`Saved Text: ${savedText}`)
    let savedTime = $(this).parent().attr('id')
    let savedTimeReadable = $(this)
      .parent('.time-block')
      .children('.hour')
      .text()
    console.log(savedTimeReadable)
    console.log(`Saved Time: ${savedTime}`)
    localStorage.setItem(savedTime, savedText)
    // console.log(localStorage.getItem(`localStorage savedTime: ${savedTime}`))
    let debug = localStorage.getItem(savedTime)
    console.log(`Local Storage: ${debug}`)
    alert(`Saved text: ${savedText} for time: ${savedTimeReadable}`)
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  let currentHour = dayjs().hour()
  currentHour = 12
  $('.time-block').each(function () {
    let rowHour = parseInt($(this).attr('id').split('-')[1])
    if (rowHour < currentHour) {
      $(this).addClass('past')
    } else if (rowHour === currentHour) {
      $(this).removeClass('past')
      $(this).addClass('present')
    } else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
    let classes = $(this).attr('class')
    console.log(
      `Row Hour: ${rowHour}, Current Hour: ${currentHour}, Classes ${classes}`
    )
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  let currentDay = dayjs().format('MMMM DD, YYYY')
  $('#currentDay').text(currentDay)
})
