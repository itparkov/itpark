let headerTimerExtra = document.querySelector('.header__timer-extra')
let speed = 50
let count = 0
let interval

function headerTimer() {
    switch (count) {
        case 101:
            return clearInterval(interval)
            break;
        case 75:
            speed = 150
            break;
        case 85:
            speed = 200
            break;
        case 95:
            speed = 250
            break;
        default:
            break;
    }
    headerTimerExtra.innerHTML = count
    count++
    setTimeout(() => interval = headerTimer(), speed)
}
headerTimer()

const product = {
    plainBurger: {
        name: 'GAMBURGER',
        amount: 0,
        price: 10000,
        kcall: 150,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: 'freshBurger',
        amount: 0,
        price: 25000,
        kcall: 250,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: 'freshCombo',
        amount: 0,
        price: 30000,
        kcall: 350,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.amount * this.kcall
        }
    },
}

const plusOrMinus = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', () => {
        btnClicked(plusOrMinus[i])
    })
}

function btnClicked(element) {
    let mainProduct = element.closest('.main__product')
    let id = mainProduct.getAttribute('id')
    let mainProductPrice = mainProduct.querySelector('.main__product-price span')
    let mainProductNum = mainProduct.querySelector('.main__product-num ')
    let mainProductKcall = mainProduct.querySelector('.main__product-kcall span')
    let plusminus = element.getAttribute('data-symbol')
    console.log(id);
    if (plusminus === '+' && product[id].amount < 10) {
        product[id].amount++
    } else if (plusminus === '-' && product[id].amount > 0) {
        product[id].amount--
    }
    mainProductNum.innerHTML = product[id].amount
    mainProductPrice.innerHTML = product[id].Summ
    mainProductKcall.innerHTML = product[id].Kcall

}
let addcard = document.querySelector('.addCart')
let addreceipt = document.querySelector('.receipt')
let receiptWindow = document.querySelector('.receipt__window')
let receiptWindowOut = document.querySelector('.receipt__window-out')
let receiptWindowBtn = document.querySelector('.receipt__window-btn')

let arrayProduct = []
let arrayProductName = ''
let arrayProductSumm = arrayProductKcall = 0

addcard.addEventListener('click', () => {
    for (const item in product) {
        const products = product[item]
        if (products.amount > 0) {
            arrayProduct.push(products)
        }

    }
    arrayProduct.forEach(e => {
        arrayProductName += `\n${e.name}\n`
        arrayProductSumm += e.Summ
        arrayProductKcall += e.Kcall
    })
    receiptWindowOut.innerHTML = `Purchased: \n${ arrayProductName }\nTotal Summ: ${ arrayProductSumm }\n Calories:${arrayProductKcall}`

    addreceipt.style.display = 'flex'
    receiptWindow.style.top = 0
    setTimeout(() => {
        addreceipt.style.opacity = 1
    }, 500)
})
receiptWindowBtn.addEventListener('click', () => {
    window.location.reload()
})