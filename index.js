let services = []

let washbtn = document.getElementById('wash-btn')
let mowbtn = document.getElementById('mow-btn')
let pullbtn = document.getElementById('pull-btn')
let chargezone = document.getElementById('charges')
let totalzone = document.getElementById('total')

let totalPrice = 0
let serviceRendered = ''
let servicePrice = 0

let washcar = {job: 'Wash Car', price: 10, charged:false}
let mowlawn = {job: 'Mow Lawn', price: 20, charged:false}
let pullweeds = {job: 'Pull Weeds', price: 30, charged:false}

function writer() {
    for (let i = 0; i < services.length; i++) {
        serviceRendered = services[i].job
        servicePrice = services[i].price
        totalPrice = services.reduce((accum, item) => accum + item.price, 0)
        totalzone.innerHTML = `<span style="float: right; font-size: 36px;">$${totalPrice}</span>`
    }
    chargezone.innerHTML += `<br><div class="mb-3"><span style="float: left">${serviceRendered}
    <button class='delete' onClick='remove()'>Remove</button></span>
    <span style="float: right">$${servicePrice}</span></div>`
}

// function remove(i) {
//         if (services[i] = 0) {
//           services.splice(0, 1);
//         }
//         else if (services[i] = 1 ) {
//             services.splice(1, 1);
//           }
//           else if (services[i] = 2 ) {
//             services.splice(2, 1);
//           }
//       console.log(services)
// }

function reset() {
    chargezone.innerHTML = ""
    services = []
    // console.log(services)
    washcar.charged = false
    mowlawn.charged = false
    pullweeds.charged = false
    totalzone.innerHTML = `<span style="float: right; font-size: 36px;">$0</span>`

}

washbtn.addEventListener('click', function() {
        if (washcar.charged) {
            console.log('Service already added')
        } else {
            services.push(washcar)
            // console.log(washcar)
            writer()
            washcar.charged = true
            // console.log(washcar)
        }
        console.log(services)
})

mowbtn.addEventListener('click', function() {
    if (mowlawn.charged) {
        console.log('Service already added')
    } else {
        services.push(mowlawn)
        // console.log(mowlawn)
        writer()
        mowlawn.charged = true
        // console.log(mowlawn)
    }
    console.log(services)
})

pullbtn.addEventListener('click', function() {
    if (pullweeds.charged) {
        console.log('Service already added')
    } else {
        services.push(pullweeds)
        // console.log(pullweeds)
        writer()
        pullweeds.charged = true
        // console.log(pullweeds)
    }
    console.log(services)
})
