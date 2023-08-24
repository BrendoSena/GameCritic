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


const contJogos = [
  document.getElementById('contJogos0'),
  document.getElementById('contJogos1'),
  document.getElementById('contJogos2'),
  document.getElementById('contJogos3')
];

let contador = 0;

function proximo() {
  contJogos[contador].style.display = 'none';
  contador = (contador + 1) % contJogos.length;
  exibirConteinerAtual();
}

function voltar() {
  contJogos[contador].style.display = 'none';
  contador = (contador - 1 + contJogos.length) % contJogos.length;
  exibirConteinerAtual();
}

function exibirConteinerAtual() {
  if (contador >= 3 && contJogos[3].style.display === 'none') {
    contador = 0;
  }

  for (let i = 0; i < contJogos.length; i++) {
    contJogos[i].style.display = i === contador ? 'flex' : 'none';
  }
}
