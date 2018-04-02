//Bron gebruik: https://codepen.io/KoopReynders/pen/KdEagB?editors=1100

//declaratie van dom elementen
var vergrootglas = document.querySelector('header img:last-of-type');
var zoekveld = document.querySelector('header');

//actie !
vergrootglas.addEventListener("click",function(){
    zoekveld.classList.toggle('search'); 
  }
);

var zoeken = document.querySelector('header input');
zoeken.addEventListener("keydown", function (e) {
    setTimeout(function(){
        console.log(zoeken.value);
        
        var articles = document.getElementsByClassName("filterDiv");
        if (zoeken.value !== "") {
            
            for (var i = 0; i < articles.length; i++){
                var article = articles[i];
                if (article.classList.contains(zoeken.value)) {
                    article.classList.add("show");
                } else {
                    article.classList.remove("show");
                }
            }
        } else {
                        
            for (var i = 0; i < articles.length; i++){
                var article = articles[i];

                article.classList.add("show");

            }
        }
    });
    
});
/*
EventListeners
  click
  mouseover
  mousedown
  mouseup
  ...
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/

/*  
Classlist
  classList.add( String )
  classList.remove( String )
  classList.toggle ( String )
  ...
  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/



//Afbeeldingen wel/niet tonen

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}