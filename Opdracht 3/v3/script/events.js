document.getElementsByTagName("main")[0].addEventListener("scroll", function(e) {
    var source = e.target;
    var boundingBoxMain = source.getBoundingClientRect();
    var boundingBoxDiv = source.querySelector("div").getBoundingClientRect();
//    console.log(source.scrollTop, );
    var scrollPosition = (boundingBoxDiv.height - boundingBoxMain.height - source.scrollTop);
    console.log(scrollPosition);
    if (scrollPosition <= 0) {
        document.getElementsByTagName("main")[0].classList.add("fly-in");
    }
});
