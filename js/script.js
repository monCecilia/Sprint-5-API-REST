const button = document.getElementById('buttonId');
const jokeText = document.getElementById('jokesId');

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = `${jokeObj.joke}`;
}



const apiWeather = 'https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019';
async function getWeather(){
    const responseWeather = await fetch(apiWeather);
    const dataWeather = await responseWeather.json();
    const description = document.getElementById('descriptionId');
    const temp = document.getElementById('tempId');

    description.textContent =`${dataWeather.stateSky.description}`;
    temp.textContent = `${dataWeather.temperatura_actual} "º"`;
}
getWeather();

