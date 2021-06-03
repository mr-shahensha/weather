var buton=document.querySelector('.button');
var inputValue=document.querySelector('.inputValue');
var city=document.querySelector('.city');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');

buton.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9ad8b0077bad1ff9898d38b92f6a5d19')

.then(response=>response.json())
// .then(data => console.log(data))

.then(data =>{
    console.log(data)
    var nameValue = data['name'];
    var temper=data['main']['temp']
    var descValue =data['weather'][0]['description'];

    desc.innerText=descValue;
    city.innerText=nameValue;
    temp.innerText=temper;
    temper=temper-273;
        temper=temper.toFixed(2);
        temper=temper+"ºC";
        temp.innerText=temper;
  
})

.catch(err =>alert("wrong city name !"))
})