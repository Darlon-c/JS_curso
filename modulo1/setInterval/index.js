
function showHour() {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

setInterval(function () {
    console.log(showHour())
}, 1000)

