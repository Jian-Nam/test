var p1_button = document.querySelector(".project1");
var p2_button = document.querySelector(".project2");
var p3_button = document.querySelector(".project3");
var works_button = document.querySelector(".work");
var about_button = document.querySelector(".about");

p1_button.addEventListener("click", go_p1);
p2_button.addEventListener("click", go_p2);
p3_button.addEventListener("click", go_p3);
works_button.addEventListener("click", go_works);
about_button.addEventListener("click", go_about);

function go_p1(){location.href = "/p1"};
function go_p2(){location.href = "/p2"};
function go_p3(){location.href = "/p3"};
function go_works(){location.href = "/works"};
function go_about(){location.href = "/about"};