
var carouselPosition = 1;
var maxItems = document.querySelectorAll("#carousel li").length;


var carouselContainer = document.querySelector("#carousel ul");


function moveCarousel (direction) {
    if (direction == "previous") {
        if (carouselPosition - 1 > 0) {
            carouselPosition--;
            console.log("going previous");
            
        } 
    } else {
        if (carouselPosition + 1 <= maxItems) {
            carouselPosition++;
            console.log("going next");            
        }  
    }
    carouselContainer.style.left =  ((-carouselPosition + 1) * 33) + "rem";
}

window.document.addEventListener('keydown', function (event) {
  var keyName = event.key;
  if (keyName === 'ArrowLeft') {
      moveCarousel("previous");
  } else if (keyName === 'ArrowRight') {
      moveCarousel("next");
  }

});



var item = carouselContainer.children[0].children[0];
var uitvergroot = document.getElementById("uitvergroot");
uitvergroot.src = item.src;
uitvergroot.alt = item.alt;


carouselContainer.addEventListener("click", function (e) {
    var item = e.target;
    if (item) {

        if (item.tagName == "IMG") {
            
            var uitvergroot = document.getElementById("uitvergroot");
            uitvergroot.src = item.src;
            uitvergroot.alt = item.alt;
        }
        
    }
   
    
});



var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");

function switchSlides (e) {
    if (e.target == previousButton) {
        moveCarousel("previous");
    } else if (e.target == nextButton) {
        moveCarousel("next");
    }
}

previousButton.addEventListener("click", switchSlides);
nextButton.addEventListener("click", switchSlides);