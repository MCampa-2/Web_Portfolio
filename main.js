// Navbar
const hamburger = document.getElementById("menu");
const navLinks = document.getElementById("nav_links");

hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
});

// About me section



function showMore(){
    let button = document.getElementById("show-more");
    button.addEventListener("click", function(){
        let moreInfo = document.getElementById("more-info");
        if(moreInfo.style.display === "none"){
            moreInfo.style.display = "block";
            button.textContent = "Show Less";
        }else{
            moreInfo.style.display = "none";
            button.textContent = "Show More"
        }
    });
}

showMore();

window.onload = function() {
    window.scrollTo(0, 0);
};
