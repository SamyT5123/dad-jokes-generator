const btnEl = document.querySelector("#btn");
const jokeEl = document.querySelector("#joke");

const apiKey = "9bghXDYM2verAenR+Xoz2w==7llH0GEPA3U907k2"

const options = {
    method: "GET", 
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"




async function getJoke (){

    try {
        jokeEl.textContent ="updating..."
        btnEl.disabled = true;
        btnEl.textContent = "Loading.."
        const response = await fetch(apiURL, options)
        const data = await response.json()
        jokeEl.textContent = data[0].joke;
    
        btnEl.disabled = false;
        btnEl.textContent = "Tell me a joke"
    } catch (error) {
        jokeEl.textContent = "There has been an error connecting, try again later";
        btnEl.disabled = false;
        btnEl.textContent = "Try again"
        console.log(error)
        
    }

 

    
}


btnEl.addEventListener("click", getJoke)