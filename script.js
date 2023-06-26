const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5a05eb0542msh1b9c7ed7af033fap15a115jsn20a9006e5449',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
};

const urlNews = 'https://nba-latest-news.p.rapidapi.com/articles';
const optionsNews = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5a05eb0542msh1b9c7ed7af033fap15a115jsn20a9006e5449',
        'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
    }
};

async function getTheStats(url,options) {
    const response = await fetch(url, options);
    const result = await response.text();
    displayStats(JSON.parse(result));
    //console.log(result);
}

async function getTheNews(url,options) {
    const response = await fetch(url, options);
    const result = await response.text();
    displayNews(JSON.parse(result));
}

document.addEventListener('DOMContentLoaded', (event) => {
    const favTeam = localStorage.getItem('favTeam');
    if (favTeam) {
        favTeamSelect.value = favTeam;
    }

    getTheNews(urlNews, optionsNews);
    getTheStats(url, options);

    updateFavoriteTeamDisplay();
});

favTeamSelect.addEventListener('change', function() {
    localStorage.setItem('favTeam', this.value);
    updateFavoriteTeamDisplay(); // Update display when favorite team changes
});

const teams = document.getElementById("teams");
const news = document.getElementById("news");

let counter = 0;

function displayStats(result) {
    const favTeamSelect = document.getElementById("favTeamSelect");
    result.data.forEach(e => {
        teams.innerHTML += `
            <div id="${counter}" onclick="animStats(${counter}, '${result.data[counter].city}', '${result.data[counter].conference}',
            '${result.data[counter].division}', '${result.data[counter].name}', '${result.data[counter].abbreviation}')"> 
                <p id="${counter}_${counter}" >${e.full_name}</p>
            </div>
        `;
        const option = document.createElement('option');
        option.value = e.full_name;
        option.text = e.full_name;
        favTeamSelect.appendChild(option);

        let element = document.getElementById(`${counter}`);
        element.classList.add(`bg_${counter}`);
        element.style.backgroundImage = `url('img/${counter+1}.png')`;
        counter++;
    })
}
favTeamSelect.addEventListener('change', function() {
    localStorage.setItem('favTeam', this.value);
});

function updateFavoriteTeamDisplay() {
    const favTeam = localStorage.getItem('favTeam');
    const favTeamDisplay = document.getElementById('favoriteTeamDisplay');

    if (favTeam) {
        favTeamDisplay.textContent = 'Favorite Team: ' + favTeam;
    } else {
        favTeamDisplay.textContent = 'Favorite Team: None selected';
    }
}

function animStats(count, city, conference, division, name, abbreviation){
    let element = document.getElementById(`${count}_${count}`);
    element.classList.add("anim");
    const parentElem = document.getElementById(`${count}`);
    const newElem = document.createElement('p');
    newElem.classList.add("anim2");
    newElem.innerHTML = `
         Conference: ${conference} <br>
         Division: ${division}<br>
         City: ${city} <br>
         Name: ${name} <br>
         Abbreviation: ${abbreviation}
    `;
    parentElem.appendChild(newElem);

    setTimeout(() => {
        console.log("Works");
        newElem.classList.remove("anim2");
        newElem.remove();
        element.classList.remove("anim");
    }, 4000);

}


function displayNews(result) {
    result.forEach(e => {
        news.innerHTML += `
            <div>
                ${e.title}
                <a href="${e.url}" target="_blank">Click to read!</a>
            </div>
        `
    })
}

document.getElementById('logo').addEventListener('click', function() {
    window.scrollTo(0, 0);
});
