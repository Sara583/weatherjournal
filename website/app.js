/* Global Variables */
let zipNumber = document.getElementById('zip');
let feel = document.querySelector('#feelings');
let generatingBtn = document.querySelector('#generate');
const api = "&appid=b63fc12263da2ed25920df95b431c154";
let unit = "&units=metric";
let url = "https://api.openweathermap.org/data/2.5/weather?zip=";

//Async await functions to fetch data from API
const wData = async () => {
  // Create a new date instance dynamically with JS
  let d = new Date();
  let newDate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
  let enterdZip = zipNumber.value;
  (enterdZip.length == 5) ? console.log("successed"): alert("zip codes must be 5 numbers");
  let finalUrl = url + enterdZip + unit + api;
  let response = await fetch(finalUrl);
  const data = await response.json();
  let temp = data.main.temp;
  let content = (document.querySelector('#feelings')).value;
  let firtRes = await postData('/post', {
    temp: temp,
    date: newDate,
    content: content
  });
  //ternary operator to check validity of the enterd zip code

}
// adding event listener to the generating button on double click
generatingBtn.addEventListener('dblclick', wData);
//post request
const postData = async (url = '', projectData = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(projectData),
  });

  console.log(projectData);
  try {

    const newData = await response.json();
    console.log("response", newData);
    ui();


  } catch (e) {
    console.log("error", e);

  };
  // async function to update the fetched data on screen
  async function ui() {
    let respond = await fetch('/all');
    try {
      const newData = await respond.json();
      document.querySelector('#date').innerText = `Date: ${newData.date}`;
      document.getElementById('temp').innerText = `Temperature: ${newData.temp}`;
      document.querySelector('#content').innerText = `I feel like: ${newData.content}`;
    } catch (e) {
      console.log(e)
    }
  }
}
