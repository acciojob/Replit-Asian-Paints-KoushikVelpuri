//your JS code here. If required.
let container = document.getElementById('grid-container')
for(let i=0; i<9; i++){
	let box = document.createElement('div')
	box.id = i
	box.className = 'grid-item'
	box.innerHTML = i
	container.appendChild(box)
}
function changeColor(){
	let blockId = document.getElementById('block_id').value
	let colorId = document.getElementById('colour_id').value
	let boxes = document.getElementsByClassName('grid-item')
	for(let i=0; i<boxes.length; i++){
		boxes[i].style.backgroundColor = 'transparent'
	}
	if(blockId<1 || blockId>9 || blockId==''){
		alert('Enter a valid Block ID b/w 1 and 9')
		return 
	}
	if(colorId == ''){
		alert('Please enter a color')
		return
	}
	document.getElementById(blockId).style.backgroundColor = colorId
}
function reset(){
	let boxes = document.getElementsByClassName('grid-item')
	for(let i=0; i<boxes.length; i++){
		boxes[i].style.backgroundColor = 'transparent'
	}
}