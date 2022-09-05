const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')
const monthNames =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]


const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let m = dateToday.getMinutes()
    let s = dateToday.getSeconds()
    let day = dateToday.getDay()
    let month = dateToday.getMonth()
    let year = dateToday.getFullYear()
    
    if (hr < 10) hr = '0' + hr
    if (m < 10) m = '0' + m
    if (s < 10) s = '0' + s

    
    dia.textContent = day
    mes.textContent = monthNames[parseInt(month)]
    ano.textContent = year

    horas.textContent = hr
    minutos.textContent = m
    segundos.textContent = s

    
}) 



