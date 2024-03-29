// 1.	Slide the header element up when it is clicked on.
$('header').on('click', function () {
  $('header').slideUp('slow');
  $('body').removeClass('purplebox');
  $('#row4 div').hide();
  $('.add-para').append('I have been added');
  $('.box').addClass('silly');
  $('h4').siblings().hide();
});

$('#box2 a').on('click', function () {
  $('footer').show();
});
// 2.	Remove the purplebox class from everything.
// 3.	Hide all of the divs in #row4 (hint: your selector could be $('#row4 div') )
// 4.	Add a paragraph that says "I have been added" to all boxes with class "add-para" (Hint: you'll need to look up the append() method)
// 5.	Add a class in your css and add it to all items with the class .box
// 6.	Show the footer when the anchor in #box2 is clicked (hint: your selector could be $('#box2 a') )
// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
$('#box3 span').addClass('serious');
// 8.	Add a unique class to your CSS and add it to the articles in #row1
$('#row1 article').addClass('unique');
// 9.	Change the background color of all the articles
$('article').css('background-color', '#00FF00');
// 10.	Change the font color of all the articles in row 2
$('#row2 article').css('color', '#FFFFFF');
// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.
// 12.	Clicking on #box7 should hide the span within the h2
$('#box7').on('click', function () {
  $('#box7 h2 span').hide();
});
// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
$('#box12').prepend('Hello There!');
// 14.	SlideUp all the h1s on the page
$('h1').slideUp('slow');
// 15. Add the selected class [already in the CSS] to the divs in #row4
$('#row4 div').addClass('selected');
// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
$('button').on('click', function () {
  $('body').removeClass('selected');
  $('header').fadeIn('slow');
  $('footer').fadeIn('slow');
  $('.box').fadeIn('slow');
});
