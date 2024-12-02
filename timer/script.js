const pageTime = document.querySelectorAll(".timer__data");

function timeDifference(years, mounth, day, hours, minute, second) {
    const endTime = new Date(years, mounth, day, hours, minute, second);

    const toDayDate = new Date().getTime();

    const dateDifference = endTime - toDayDate;

// считаем сколько единицы времени в милисекундах
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    const dayLeft = Math.floor(dateDifference / oneDay);

    const hoursLeft = Math.floor(dateDifference % oneDay / oneHour);

    const minuteLeft = Math.floor(dateDifference % oneHour / oneMinute);

    const secondLeft = Math.floor(dateDifference % oneMinute / 1000);

    const values = [dayLeft, hoursLeft, minuteLeft, secondLeft]

    pageTime.forEach(function (item, index){
        item.innerHTML = values[index];
    })
}

timeDifference('2024', '12', '22', 0, 0, 0)