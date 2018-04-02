var httpRequest = new XMLHttpRequest();

httpRequest.open("get", "http://dennistel.nl/movies/1");

httpRequest.addEventListener("load", function (e) {
    var source = e.target;
    var rawData = source.response;
    console.log(rawData)
    var data= JSON.parse(rawData);
    
    console.log(data.actors[0].actor_name);
    document.querySelector("article h2").textContent = data.actors[0].actor_name;
    
    console.log(data);
});

httpRequest.send();