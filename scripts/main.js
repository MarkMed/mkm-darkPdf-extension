const htmlElems = {
	btn: document.querySelector("button#myBtn")
}
const sayHello = ()=>{
	console.log('Hello world from MKM Extension!');	
}
htmlElems.btn.addEventListener("click", ()=>{sayHello()})