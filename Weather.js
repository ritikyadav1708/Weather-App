const API_KEY = `44802999ce6e666b727f9ac6086bbb92`
const form = document.querySelector("form")
const weather = document.querySelector("#weather")
const search = document.querySelector("#search")
const getweather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    // console.log(response)
    // we get promise while apply json method
    // console.log(response.json())
    // promise-solve
    const data = await response.json()
    // console.log(data)
    // return and function call(show)
    return showweather(data)
}


const showweather = (data) => {
    console.log(data)
    weather.innerHTML =
        `
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="100px">
       </div>
       <div>
           <h2>${data.main.temp}:&#8451;</h2>
           <h3>${data.weather[0].main}</h3>

       </div>
       `

}


form.addEventListener(
    // Event and Anonymous function 
    "submit", function (event) {
        getweather(search.value)
        event.preventDefault()
    })
