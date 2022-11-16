// dom

const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const par = document.querySelector('p')

// funkcje i ich zmienne

let fontSize = 36

const increase = () => {
	if (fontSize >= 48) return
	fontSize += 2
	par.style.fontSize = fontSize + 'px'
}
const decrease = () => {
	if (fontSize <= 21) return
	fontSize -= 2
	par.style.fontSize = fontSize + 'px'
}

const colorChanger = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	par.style.color = `rgb(${r},${g},${b})`
}

// listenery

sizeUp.addEventListener('click', increase)
sizeDown.addEventListener('click', decrease)
color.addEventListener('click', colorChanger)
