const getRandomJoke = async() => {
    const url = "https://icanhazdadjoke.com/";

    const jokeShow = await fetch(url, {
        headers: {
            Accept: 'application/json'
        }
    });

    const jsonJoke = await jokeShow.json();
    console.log(jsonJoke)
    const joke = jsonJoke.joke

    return joke





}

// add parameter joke and store joke into h1 to be shown 
const displayJoke = (joke) => {

    const h2 = document.querySelector('h2');

    // we grab the h1

    h2.textContent = joke;
    // we change the content of h1 and we set what is in joke

}


const refreshJoke = async() => {

    const joke = await getRandomJoke();
    //  store onto joke the function which will give us joke


    displayJoke(joke);
    // we call the function to insert joke into dom
    // add what will be show in the dom is joke

}

// load first joke
refreshJoke()


// set interval is the time function whne will refres joke
// will be called
setInterval(refreshJoke, 8000)