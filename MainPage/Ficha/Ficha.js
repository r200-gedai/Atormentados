function calcular(){
	var num1 =parseFloat(document.getElementById('numero1').value);
	var num2 =parseFloat(document.getElementById('numero2').value);
	var op =document.getElementById('operador').value;
	if(op=="+"){
		var r=num1+num2;
		document.getElementById("resultado").value=r;
	}
	if(op=="-"){
		var r=num1-num2;
		document.getElementById("resultado").value=r;
	}
	if(op=="/"){
		var r=num1/num2;
		document.getElementById("resultado").value=r;
	}
	if(op=="*"){
		var r=num1*num2;
		document.getElementById("resultado").value=r;
	}
	
};