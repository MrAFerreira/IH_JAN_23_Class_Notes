const getCountry = async (name) => {
  try {
    //Axios get request
    let response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    //We can find the country inside response.data
    let country = response.data[0];
    console.log(country);

    document.getElementById('country-name').innerHTML = country.name.common;
    document.getElementById('country-capital').innerHTML = country.capital[0];
    document.getElementById('country-flag').src = country.flags.png;
  } catch (error) {
    console.log(error);
    //If else version
    /*   if (error.response.status === 404) {
      alert(`The country ${name} doesn't exist`);
    } else {
      alert(`Error on the server, please try again`);
    } */
    //Ternary - syntatic sugar
    error.response.status === 404
      ? alert(`The country ${name} doesn't exist`)
      : alert(`Error on the server, please try again`);
  }
};

document.getElementById('get-country').addEventListener('click', () => {
  //Getting the value from the input
  const userInput = document.getElementById('country-name-input').value;

  //Calling the function with that value
  getCountry(userInput);
});
