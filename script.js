//your JS code here. If required.
function updateText(params) {
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
	resolve("Hello world!");
},1000);

});
}

updateText.then((result)=>{
	const Output = document.getElementById("output");
	Output.innerText = result;
})

