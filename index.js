let services = []

let washbtn = document.getElementById('wash-btn')
let mowbtn = document.getElementById('mow-btn')
let pullbtn = document.getElementById('pull-btn')
let chargezone = document.getElementById('charges')
let totalzone = document.getElementById('total')

let totalPrice = 0
let serviceRendered = ''
let servicePrice = 0

function writer() {
    for (let i = 0; i < services.length; i++) {
        serviceRendered = services[i].job
        servicePrice = services[i].price
        totalPrice = services.reduce((accum, item) => accum + item.price, 0)
        totalzone.innerHTML = `<span style="float: right; font-size: 36px;">$${totalPrice}</span>`
    }
    chargezone.innerHTML += `<br><div class="mb-3"><span style="float: left">${serviceRendered}</span>
    <span style="float: right">$${servicePrice}</span></div>`
}

washbtn.addEventListener('click', function() {
    services.push({job: 'Wash Car', price: 10})
    // console.log(services)
    // console.log(totalPrice)
    writer()
})

mowbtn.addEventListener('click', function() {
    services.push({job: 'Mow Lawn', price: 20})
    // console.log(services)
    writer()
})

pullbtn.addEventListener('click', function() {
    services.push({job: 'Pull Weeds', price: 30})
    // console.log(services)
    writer()
})
