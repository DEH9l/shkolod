document.querySelector("a[href*='?page']").onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}