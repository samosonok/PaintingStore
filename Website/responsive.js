var Responsive =
{
init: function()
{
var link = document.getElementsByClassName("topnav");
$(link).bind("click", clickListener);
function clickListener()
{
document.getElementsByClassName("topnav")[0].classList.toggle("toggleclass");
}// end of clickListener function
}// end of init function
}; //end of object
Responsive.init();