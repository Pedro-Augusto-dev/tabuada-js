 function Tabuada() {
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.length == 0 || end.value.length == 0){
      window.alert(`[ERRO] por favor coloque seus dados sesejados`)
    } else{
    var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var r = ''
    var resultado = window.document.getElementById('resultado')
    resultado.innerHTML = `a tabuada do ${n} é <br>`
    do{
        r = n*x
        resultado.innerHTML += `${x} x ${n} = ${r} <br>`
        x++
    }  while (x <= e)
  }
}
