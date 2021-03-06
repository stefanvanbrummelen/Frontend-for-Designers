var httpRequest = new XMLHttpRequest();

httpRequest.open("get", "assets/dennistel.json");

httpRequest.addEventListener("load", function (e) {
    var source = e.target;
    var rawData = source.response;
    //console.log(rawData)
    var data= JSON.parse(rawData);
    //console.log(data);
    //console.log(data.actors[0].actor_name);
    //document.querySelector("article h2").textContent = data.actors[0].actor_name;
    
    
    for (var i=0; i < data.length; i++){
        
        console.log(data[i])
        var item = data[i];
        
        var article = document.createElement("article");
        article.classList.add("filterDiv", "show");
        
        var titel = document.createElement("h2");
        titel.textContent = item.title;

        var img = document.createElement("img");
        img.src = item.cover;
        img.alt = item.simple_plot;
        img.addEventListener("load", function (e) {
            e.target.classList.add("loaded");
        });

        var summary = document.createElement("summary");

        var details = document.createElement("details");
        details.textContext = item.plot;
        
        var date = document.createElement("time");
        date.textContext = item.release_date;
        
        var genre = document.createElement("p");
        var genres = item.genres;
        
        genre.textContent = genres;
        
        for (var g= 0; g < genres.length; g++){
            console.log(genres[g]);
            article.classList.add(genres[g].toLowerCase());
        }
        
        var plot = document.createElement("p");
        plot.textContent = item.plot;
        

        var link = document.createElement("a");
        link.href = "#";

        article.appendChild(link);
        link.appendChild(titel);
        link.appendChild(img);

        article.appendChild(details);
        details.appendChild(summary);
        details.appendChild(genre);
        details.appendChild(plot);
        
        document.querySelector("main div").appendChild(article);
        console.log(article);
    }
    

});

httpRequest.send();


/*    Onderstaande code gebruikt om JSON aan te verbinden.    

<article class="filterDiv blauw">
            <a href="#"> 
              <h2>Kajuit zeilschip</h2>
                <img src="">

            </a>
            <details>
                <summary></summary>
                <p>genres</p>
            </details>
        </article>
*/