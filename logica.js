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


