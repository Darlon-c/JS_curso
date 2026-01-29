function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.getElementById('relogio')
const start = document.getElementById('start')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')

let seconds = 0
let timer;

function startClock() {
    timer = setInterval(function() {
        seconds++
        relogio.innerHTML = getTimeSeconds(seconds)
    }, 1000)
}

start.addEventListener('click', function(e) {
    clearInterval(timer)
    startClock()
})

pause.addEventListener('click', function(e) {
   clearInterval(timer)
})

reset.addEventListener('click', function(e) {
   clearInterval(timer)
   seconds = 0
   relogio.innerHTML = '00:00:00'
})

