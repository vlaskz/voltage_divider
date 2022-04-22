let ratio = document.getElementById("RATIO")
let vout = document.getElementById('VOUT')
let vin = document.getElementById('VIN')
let res1 = document.getElementById('R1')
let res2 = document.getElementById('R2')
let fml = document.getElementById('formula')


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

    function hideAll(){
        document.getElementById('formula_r1').style["display"] = "none"
        document.getElementById('formula_r2').style["display"] = "none"
        document.getElementById('formula_vin').style["display"] = "none"
        document.getElementById('formula_vout').style["display"] = "none"
    }


    if(c1.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_r2').style["display"] = "block"
        console.log(`calculating from ${c1} variables`)
        vin.valueAsNumber = vout.valueAsNumber/ratio.valueAsNumber
        res2.valueAsNumber = (ratio.valueAsNumber*res1.valueAsNumber)/(1-ratio.valueAsNumber)
    }
    if(c2.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_r1').style["display"] = "block"
        console.log(`calculating from ${c2} variables`)
        vin.valueAsNumber = vout.valueAsNumber/ratio.valueAsNumber
        res1.valueAsNumber = res2.valueAsNumber * (1+(1/ratio.valueAsNumber))
    }
    if(c3.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_r2').style["display"] = "block"
        console.log(`calculating from ${c3} variables`)
        vout.valueAsNumber = ratio.valueAsNumber / vin.valueAsNumber
        res2.valueAsNumber = (ratio.valueAsNumber*res1.valueAsNumber)/(1-ratio.valueAsNumber)
    }
    if(c4.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_r1').style["display"] = "block"
        console.log(`calculating from ${c4} variables`)
        vout.valueAsNumber = ratio.valueAsNumber / vin.valueAsNumber
        res1.valueAsNumber = res2.valueAsNumber * (1+(1/ratio.valueAsNumber))
    }
    if(c5.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_r2').style["display"] = "block"
        console.log(`calculating from ${c5} variables`)
        ratio.valueAsNumber = vout.valueAsNumber / vin.valueAsNumber
        res2.valueAsNumber = (ratio.valueAsNumber*res1.valueAsNumber)/(1-ratio.valueAsNumber)
    }
    if(c6.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_r1').style["display"] = "block"
        console.log(`calculating from ${c6} variables`)
        ratio.valueAsNumber = vout.valueAsNumber / vin.valueAsNumber
        res1.valueAsNumber = res2.valueAsNumber * (1+(1/ratio.valueAsNumber))
    }
    if(c7.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_vin').style["display"] = "block"
        console.log(`calculating from ${c7} variables`)
        vin.valueAsNumber = (vout.valueAsNumber*(res1.valueAsNumber+res2.valueAsNumber))/res2.valueAsNumber
        ratio.valueAsNumber = vout.valueAsNumber/vin.valueAsNumber
    }
    if(c8.every(i=>queue.includes(i))){
        hideAll()
        document.getElementById('formula_vout').style["display"] = "block"
        console.log(`calculating from ${c8} variables`)
        console.log(vin.valueAsNumber, res2.valueAsNumber, res1.valueAsNumber)
        console.log(res2.valueAsNumber + res1.valueAsNumber)
        vout.valueAsNumber = vin.valueAsNumber*(res2.valueAsNumber/(res1.valueAsNumber+res2.valueAsNumber))
        ratio.valueAsNumber = vout.valueAsNumber/vin.valueAsNumber
    }
}

function clr(){
    console.log("Cleared")
    queue = []
    ratio.valueAsNumber = ''
    vout.valueAsNumber = ''
    vin.valueAsNumber = ''
    res1.valueAsNumber = ''
    res2.valueAsNumber = ''
}

function copyPixKey(){
    const pixKey = "375aea96-bc5c-45ef-8977-506034401c3a"
    navigator.clipboard.writeText(pixKey).then((r) => {
        alert("Chave copiada!")
        console.log('pix was copied')
    })

}
