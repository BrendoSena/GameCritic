let pesquisa = document.getElementById('pesquisa')

function place() {
	let focusPesquisa = pesquisa.classList.add('pesquisaFocus')
	return focusPesquisa
}

function placeOff() {
	pesquisa.classList.remove('pesquisaFocus')
}

function menuToggle() {
	let menu = document.getElementById('menuHidden')
	let main = document.getElementById('main')
	let body = document.body
	if(menu.style.marginLeft === '0px') {
		menu.style.marginLeft = '-300px'
		main.style.filter = 'blur(0px)'
		body.style.overflow = 'auto'
	}else {
		menu.style.marginLeft = '0px'
		main.style.filter = 'blur(1px)'
		body.style.overflow = 'hidden'
	}
}

let cont1 = document.getElementById('carrosel1')
let valor = 2500
console.log(valor);
function proximo() {
	console.log(valor);
	if(valor <= -2500){
		valor = -2500
	}else{
		valor -= 1250
	}
	cont1.style.marginLeft = `${valor}px`
}

function voltar() {
	console.log(valor);
	if(valor >= 2500){
		valor = 2500
	}else{
		valor += 1250
	}
	cont1.style.marginLeft = `${valor}px`
}

let cont2 = document.getElementById('carrosel2')
let valor2 = 2100
function proximo2() {
	console.log(valor);
	if(valor2 <= -2100){
		valor2 = -2100
	}else{
		valor2 -= 1050
	}
	cont2.style.marginLeft = `${valor2}px`
}

function voltar2() {
	console.log(valor2);
	if(valor2 >= 2100){
		valor2 = 2100
	}else{
		valor2 += 1050
	}
	cont2.style.marginLeft = `${valor2}px`
}

function randomTrailer() {
	let iframe = document.getElementById('ytvideo')
	let trailerDestaque = [ 'https://www.youtube.com/embed/gmA6MrX81z4?si=vHwxuyIbhcNFRUDx', 
	'https://www.youtube.com/embed/zw47_q9wbBE?si=5o7-YFm3Fr9Up_zc', 
	'https://www.youtube.com/embed/Lq594XmpPBg?si=fVgZIMBkxEwuzTKT']
	let trailer = Math.floor(Math.random() * trailerDestaque.length)
	let trailerURL = trailerDestaque[trailer]
	iframe.src = trailerURL
}