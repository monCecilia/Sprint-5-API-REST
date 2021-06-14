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



const apiWeather = 'https://api.weatherapi.com/v1/current.json?key=8c9873737bea4e949fb201622210605&q=Barcelona&aqi=no';
async function getWeather(){
    const responseWeather = await fetch(apiWeather);
    const dataWeather = await responseWeather.json();
    const description = document.getElementById('descriptionId');
    const temp = document.getElementById('tempId');

    description.textContent =`${dataWeather.current.condition.text}`;
<<<<<<< HEAD
    temp.textContent = `${dataWeather.current.temp_c}º`;
=======
    temp.textContent = `${dataWeather.current.temp_c} º`;
>>>>>>> final
}
getWeather();

