function getTime () {
    const city = document.querySelector("#city");
    const country = document.querySelector("#country")
    
    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=1`)
    .then(function (response) {
        const data = response.data;
        console.log(data);
        document.querySelector("#fajr").innerHTML = `Fajr: ${data.data.timings.Fajr}`
        document.querySelector("#zuhur").innerHTML = `Zuhar: ${data.data.timings.Dhuhr}`
        document.querySelector("#asar").innerHTML = `Asar: ${data.data.timings.Asr}`
        document.querySelector("#maghrib").innerHTML = `Maghrib: ${data.data.timings.Maghrib}`
        document.querySelector("#isha").innerHTML = `Isha: ${data.data.timings.Isha}`
    }) 
}