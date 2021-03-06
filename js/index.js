const resultCotainer = document.querySelector(".container");

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

async function getGames() {
    try {
        const response = await url;
        
        const data = await response.json();

        createHtml(data);
        
    } catch(error) {
        resultCotainer.innerHTML = `<p> An error occurred when calling the API</p>`
    }
};

getGames()

function createHtml(data) {

    resultCotainer.innerHTML = "";

    for (let i = 0 ; i < data.length; i++) {

        if (i === 12) {
            break;
        }
        resultCotainer.innerHTML += `<div class="product">
                                        <h3>${data[i].title}</h3>
                                        <p>Platform: ${data[i].platform}</p>
                                        <time>Released: ${data[i].release_date}</time>
                                        <a href="details.html?id=${data[i].id}">Read more</a>
                                    </div>`; 
    }
};