// Navbar
let aboutOffset = $("#about").offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > aboutOffset - 90){
        $("#main-nav").css("backgroundColor" , "rgba(0,0,0,0.5)")
        $("#main-nav").css("transition" , "all 0.5s")
    }else{
        $("#main-nav").css("backgroundColor" , "transparent")
        $("#main-nav").css("transition" , "all 0.5s")
    }
})


// Smooth Scroll
$("#main-nav a").click(function(e){
    let aHref = e.target.getAttribute("href");
    let sectionOffset = $(aHref).offset().top;
    $("html , body").animate({scrollTop:sectionOffset},1000)
})


// Portfolio Filters
$(".list").click(function(){
    let value= $(this).attr("data-filter");
    if(value=="all"){
        $(".portfolio-item").show("1500");
    }else{
        $(".portfolio-item").not("." +value).hide("1000");
        $(".portfolio-item").filter("." +value).show("1000")
    }
})
$(".list").click(function(){
    $(this).addClass("active-list").siblings().removeClass("active-list")
})


// Showing project details box
$(".port").click(function(){
    let imgSrc = $(this).children('img').attr('src');
    $("#projectImg").attr("src" , `${imgSrc}`)
    $("#lightBoxContainer").css("display","flex")
})


// Close button for project details
$("#closeBtn").click(function(){
    $("#lightBoxContainer").css("display" , "none")
})


// Close project details with keyboard
$(document).keydown(function(e){
if(e.key=="Escape"){
$("#lightBoxContainer").css("display","none")
}
})

// Counter
$('.counter').counterUp({
    delay: 10,
    time: 2000,
    offset: 70,
    beginAt: 0,
})

// Name and Email Validation - Contact Section

let nameRegex = /^([a-zA-Z ]+$)/;
let emailRegex = /^([a-zA-Z\d\.\-_]+)@([a-z]+)\.([a-z]{2,8}$)/;
let nameInput = document.getElementById("nameInput");

function nameValidation() {
    let nameInput = document.getElementById("nameInput");
    if (nameRegex.test(nameInput.value) == true) {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        return true;

    }
    else {
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        return false;

    }
}
nameInput.addEventListener("keyup", nameValidation)

function emailValidation() {
    let emailInput = document.getElementById("emailInput");
    if (emailRegex.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        return true;
    }
    else {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return false;
    }
}
emailInput.addEventListener("keyup", emailValidation)



