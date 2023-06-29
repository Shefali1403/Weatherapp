let time=document.getElementById("time");
function updateTime(){
    time.innerHTML=new Date();
}
setInterval(updateTime,1000);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f5ef62a4bemshcfa47c89ba11ff1p1e1619jsndd596a950ada',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function getdata(city){
     cityname.innerHTML=city;
try{
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
	const result = await response.json();
	console.log(result);
	cloud_pct.innerHTML= result.cloud_pct
    feels_like.innerHTML= result.feels_like
    humidity.innerHTML= result.humidity
    max_temp.innerHTML= result.max_temp
    min_temp.innerHTML= result.min_temp
    sunrise.innerHTML= result.sunrise
    sunset.innerHTML= result.sunset
    temp.innerHTML= result.temp
    wind_degrees.innerHTML= result.wind_degrees
    wind_speed.innerHTML= result.wind_speed
} catch (error) {
	console.error(error);
}
}
let but=document.getElementById("but");
let city=document.getElementById("city");
let cityname=document.getElementById("cityname");
but.addEventListener("click" ,(e)=>{
	e.preventDefault();
	getdata(city.value);
})
getdata("Delhi");
let tempbtn=document.getElementById("tempbtn");
let humidbtn=document.getElementById("humidbtn");
let windbtn=document.getElementById("windbtn");
tempbtn.addEventListener("click", (e)=>{
	box1.classList.toggle("beige");
})
humidbtn.addEventListener("click", (e)=>{
	box2.classList.toggle("green");
})
windbtn.addEventListener("click", (e)=>{
	box3.classList.toggle("pink");
})

