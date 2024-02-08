function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 13
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'Modelo/dia.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >=12 && hora <= 18) {
    // BOA TARDE!
    img.src = 'Modelo/tarde.png'
    document.body.style.background = '#dc6f18'
} else {
    // BOA NOITE!
    img.src = 'Modelo/noite.png'
    document.body.style.background = '#34223a'
}

}


    
