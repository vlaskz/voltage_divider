let ratio = document.getElementById("RATIO")
let vout = document.getElementById('VOUT')
let vin = document.getElementById('VIN')
let res1 = document.getElementById('R1')
let res2 = document.getElementById('R2')


let queue = []
function divide(el){
    if(!queue.includes(el)){
        queue.push(el)
        queue = queue.slice(-3)
    }
        console.log(queue)


    console.log('calculate!')

    let c1 = ['ratio','vout','r1' ]
    let c2 = ['ratio','vout','r2']
    let c3 = ['ratio','vin','r1']
    let c4 = ['ratio','vin','r2']
    let c5 = ['vout','vin','r1']
    let c6 = ['vout','vin','r2']
    let c7 = ['vout', 'r1','r2']
    let c8 = ['vin', 'r1','r2']
    if(c1.every(i=>queue.includes(i))){
        console.log(`calculating from ${c1} variables`)
        vin.value = vout.value/ratio.value
        res2.value = (ratio.value*res1.value)/(1-ratio.value)
    }
    if(c2.every(i=>queue.includes(i))){
        console.log(`calculating from ${c2} variables`)
        vin.value = vout.value/ratio.value
        res1.value = res2.value * (1+(1/ratio.value))
    }
    if(c3.every(i=>queue.includes(i))){
        console.log(`calculating from ${c3} variables`)
        vout.value = ratio.value / vin.value
        res2.value = (ratio.value*res1.value)/(1-ratio.value)
    }
    if(c4.every(i=>queue.includes(i))){
        console.log(`calculating from ${c4} variables`)
        vout.value = ratio.value / vin.value
        res1.value = res2.value * (1+(1/ratio.value))
    }
    if(c5.every(i=>queue.includes(i))){
        console.log(`calculating from ${c5} variables`)
        ratio.value = vout.value / vin.value
        res2.value = (ratio.value*res1.value)/(1-ratio.value)
    }
    if(c6.every(i=>queue.includes(i))){
        console.log(`calculating from ${c6} variables`)
        ratio.value = vout.value / vin.value
        res1.value = res2.value * (1+(1/ratio.value))
    }
    if(c7.every(i=>queue.includes(i))){
        console.log(`calculating from ${c7} variables`)
        vin.value = (vout.value*(res1.value+res2.value))/res2.value
        ratio.value = vout.value/vin.value
    }
    if(c8.every(i=>queue.includes(i))){
        console.log(`calculating from ${c8} variables`)
        vout.value = vin.value*res2.value/(res1.value+res2.value)
        ratio.value = vout.value/vin.value
    }
}

function clr(){
    console.log("Cleared")
    queue = []
    ratio.value = ''
    vout.value = ''
    vin.value = ''
    res1.value = ''
    res2.value = ''
}

function copyPixKey(){
    const pixKey = "375aea96-bc5c-45ef-8977-506034401c3a"
    navigator.clipboard.writeText(pixKey).then((r) => {
        alert("Chave copiada!")
        console.log('pix was copied')
    })

}
