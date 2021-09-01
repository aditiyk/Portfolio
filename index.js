function validateForm(){
	let nameVal = document.getElementById("name").value;
	try{
		if(nameVal=""){
			throw "Warning: Please enter your name!";
		}
	}catch(e){
		document.getElementById("nameMsg").innerHTML= e;
		
	}

}
