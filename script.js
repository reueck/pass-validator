// dom

const pass = document.querySelector('#password')
const charsContain = document.querySelector('.chars')
const lettersContain = document.querySelector('.letters')
const digitsContain = document.querySelector('.digits')
const specialCharsContain = document.querySelector('.special-chars')
const rankBtn = document.querySelector('.btn')
// variables

const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 8

// functions

const validateChars = () => {
	if (pass.value.length > minValue) {
		charsContain.classList.add('icon--ok')
	} else {
		charsContain.classList.remove('icon--ok')
	}
}

const validateLetters = () => {
	if (pass.value.match(letters)) {
		lettersContain.classList.add('icon--ok')
	} else {
		lettersContain.classList.remove('icon--ok')
	}
}

const validateDigits = () => {
	if (pass.value.match(numbers)) {
		digitsContain.classList.add('icon--ok')
	} else {
		digitsContain.classList.remove('icon--ok')
	}
}

const validateSpecialChars = () => {
	if (pass.value.match(special)) {
		specialCharsContain.classList.add('icon--ok')
	} else {
		specialCharsContain.classList.remove('icon--ok')
	}
}

// listeners

rankBtn.addEventListener('click', validateChars)
rankBtn.addEventListener('click', validateLetters)
rankBtn.addEventListener('click', validateDigits)
rankBtn.addEventListener('click', validateSpecialChars)
