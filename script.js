let weather = {
	"apikeys": "20933d03d3e76aab4db999be02668427",
	fetchweather : function (city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
		+ city + 
		"&appid=" 
		+ this.apikeys+ 
		"&units=metric" //this is for converting the fahrenheit to celcius as cause in data set the temperature is given in fahrenheit form
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data))

	},
	displayWeather:function(data) {
		const {name}=data;
		const {icon,description}=data.weather[0];
		const {temp,humidity}=data.main;
		const {speed}=data.wind;
		console.log(name,icon,description,temp,humidity,speed);
		//displaying on the page
		document.querySelector(".city").innerText= "Weather in " + name;
		document.querySelector(".description").innerText= description;//it will change the description in the screen according to the city 
		document.querySelector(".temp").innerText= temp + "°C"; //it will change the temperature in the screen according to the city 
		document.querySelector(".humidity").innerText="Humidity: " + humidity + "%"; //it will change the humidity in the screen according to the city 
		document.querySelector(".wind").innerText="Wind speed: " + speed + "km/hr"; //it will change the humidity in the screen according to the city
		document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" + name + "')"
		//it will change the backgroundimage in the screen according to the city name
	}, 
		search: function() {
			this.fetchweather(document.querySelector(".search-bar").value);
		}
}
//Now enabling the search option in the page
document.querySelector(".search button").addEventListener("click", function() {
	weather.search();		
});
//adding event Listener when we will press enter key
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
	if(event.key == "Enter")
		weather.search();		
});
