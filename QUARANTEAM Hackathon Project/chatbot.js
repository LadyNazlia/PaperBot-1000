document.addEventListener("DOMContentLoaded", ()=> {
	document.querySelector("input").addEventListener("keydown", function(e){
		if (e.code === "Enter"){
			let input = inputField.value;
			inputField.vaule = "";
			output("Hello" + input);
		}	
	})
})