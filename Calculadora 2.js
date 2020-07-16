function somar(){
    var soma = document.getElementById('soma')
    var soma1 = document.getElementById('soma1')
    var x = Number(soma.value)
    var y = Number(soma1.value)
    var z = Number(x) + Number(y)
    var res = document.getElementById('res')
    res.innerHTML = `Resultado: ${z}`
}

function subtrair(){
    var sub = document.getElementById('sub')
    var sub1 = document.getElementById('sub1')
    var a = Number(sub.value)
    var c = Number(sub1.value)
    var d = Number(a) - Number(c)
    var res1 = document.getElementById('res1')
    res1.innerHTML = `Resultado: ${d}`
}

function multiplicar(){
    var multi = document.getElementById('multi')
    var multi1 = document.getElementById('multi1')
    var e = Number(multi.value)
    var f = Number(multi1.value)
    var g = Number(e) * Number(f)
    var res2 = document.getElementById('res2')
    res2.innerHTML = `Resultado: ${g}`
}

function dividir(){
    var div = document.getElementById('div')
    var div1 = document.getElementById('div1')
    var h = Number(div.value)
    var i = Number(div1.value)
    var j = Number(h) / Number(i)
    var res3 = document.getElementById('res3')
    res3.innerHTML = `Resultado: ${j}`
}