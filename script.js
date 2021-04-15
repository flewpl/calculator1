

let input = document.getElementById('input') 

function function1() {
	let input = document.getElementById('input')
	let inputValue = input.value
	console.log(typeof(input.value))
	input.value = input.value.slice(0, inputValue.length-1)
}

function result() {
	let input = document.getElementById('input')
	input.value = eval(input.value)
}

function function2() {
	let input = document.getElementById('input')
	input.value = ''
}

function sqrt() {
	let input = document.getElementById('input')
	input.value = Math.sqrt(input.value)
}

function sqrted() {
	let input = document.getElementById('input')
	input.value = input.value**2
}

function but1(buttonId) {
	let elem = document.getElementById(buttonId).value
	input.value = input.value + elem
}