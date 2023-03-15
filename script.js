//your JS code here. If required.
function updateText() {
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
	resolve("Hello, world!");
},1000);

});
}

updateText().then((result)=>{
	const output = document.getElementById("output");
	output.innerText = result;
})

