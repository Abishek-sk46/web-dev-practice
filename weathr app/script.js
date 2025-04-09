
// http://api.weatherapi.com/v1/current.json?key= ca3b2ecc48e845a8a21153729243107&q=mumbai&aqi=no
const temperaturefield = document.querySelector(".temp")
const locationfeild = document.querySelector(".time_location p")
const dataandtimefield = document.querySelector(".time_location span")
const conditionfield = document.querySelector(".icon p")
const searchfield = document.getElementById("search-bar")
// const serachbutton=document.querySelector(".btn")
const form1 = document.querySelector("form")


form1.addEventListener('submit', searchforlocation)
let target = `pollachi`
const fetchresult = async (targetlocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=ca3b2ecc48e845a8a21153729243107&q=${targetlocation}&aqi=no`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    let locationname = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text;
    updatedetails(temp, locationname, time, condition)

};

function updatedetails(temp, locationname, time, condition) {
    let splitdate = time.split(" ")[0]
    let splittime = time.split(" ")[1]
    let currentday = getdayname(new Date(splitdate).getDate())
    temperaturefield.innerText = temp;
    locationfeild.innerText = locationname;
    dataandtimefield.innerText = `${splitdate} ${currentday} ${splittime}`;
    conditionfield.innerText = condition;
}
function searchforlocation(e) {
    e.preventDefault()
    target = searchfield.value
    fetchresult(target)
}
fetchresult(target)


function getdayname(number) {
    switch (number) {
        case 1:
            return 'sunday'
        case 2:
            return 'monday'
        case 3:
            return 'tuesday'
        case 4:
            return 'wednesday'
        case 5:
            return 'thursday'
        case 6:
            return 'friday'
        case 7:
            return 'sstaurday'
    }
}