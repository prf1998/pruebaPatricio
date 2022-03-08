	/*Variables que contaran aciertos y errores */
	var aciertos = 0;
	var errores = 0;

	/*Funcion que cargara el preloader */
	function loading(pregunta){
		document.getElementsByClassName('preloader')[0].style.visibility = 'visible';
		document.getElementsByClassName('preloader')[0].style.opacity = '1';
		setTimeout(() => {
			document.getElementById('pregunta'+pregunta).style.display    = 'block'; 
			document.getElementsByClassName('preloader')[0].style.visibility = 'hidden';
			document.getElementsByClassName('preloader')[0].style.opacity =  '0';
			document.getElementsByClassName('preloader')[0].style.transition = 'visibility 0s, opacity 1s linear';
		  }, 1000); 


	}

	/*Funcion que activara la priera pregunta */
	function Comenzar() {
		document.getElementById('introduccion').innerHTML  = "¿Salvarás a la humanidad?";
		loading('1');
		document.getElementById('desarrollotest').innerHTML = "<div style='font-size:80%;margin: 10px;'>Confiamos en ti</div>";
		
	}
	
	/*Funcion que comprueba las respuestas y cuenta los aciertos y errores */
	function Contestar(pregunta){
	var  finalizar = false;
		if (pregunta == "1"){
			if ( !document.getElementById('p11384').checked && !document.getElementById('p1711').checked && !document.getElementById('p11492').checked) {
				document.getElementById('respuesta1').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
			 
				if (document.getElementById('p11492').checked){
					document.getElementById('respuesta1').innerHTML = "Correcto!!";
					aciertos++;
				}else{
			
					document.getElementById('respuesta1').innerHTML = "Incorrecto, la respuesta correcta es 1492!!";
					errores++;	
				}
			    let radios = document.getElementsByName('preg1');
				for (var i=0;i<radios.length;i++) {
					radios[i].disabled = true;
				}
				document.getElementById('responder1').style.display = "none";
				document.getElementById('siguiente1').style.display = "inline-block";
			}
			
		}
		if (pregunta == "2"){
			if ( document.getElementById('preg2').value=="") {
				document.getElementById('respuesta2').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {

				if (document.getElementById('preg2').value == "cervantes" || document.getElementById('preg2').value == "Cervantes"){
					document.getElementById('respuesta2').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta2').innerHTML = "Incorrecto, la respuesta correcta es Cervantes!!";
					errores++;	
				}
				document.getElementById('preg2').disabled = true;
				document.getElementById('responder2').style.display = "none";
				document.getElementById('anterior2').style.display = "inline-block";
				document.getElementById('siguiente2').style.display = "inline-block";
			}
		}
		if (pregunta == "3"){
			if ( !document.getElementById('p3Springfield').checked && !document.getElementById('p3Texas').checked && !document.getElementById('p3WashingtonDC').checked) {
				document.getElementById('respuesta3').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('p3WashingtonDC').checked){
					document.getElementById('respuesta3').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta3').innerHTML = "Incorrecto, la respuesta correcta es Washington D.C.!!";
					errores++;	
				}
			    let radios = document.getElementsByName('preg3');
				for (var i=0;i<radios.length;i++) {
					radios[i].disabled = true;
				}				
				document.getElementById('responder3').style.display = "none";
				document.getElementById('anterior3').style.display = "inline-block";
				document.getElementById('siguiente3').style.display = "inline-block";
			}
		}
		
		if (pregunta == "4"){
			if ( !document.getElementById('p4Estonia').checked && !document.getElementById('p4Letonia').checked && !document.getElementById('p4Ucrania').checked) {
				document.getElementById('respuesta4').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('p4Ucrania').checked){
					document.getElementById('respuesta4').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta4').innerHTML = "Incorrecto, la respuesta correcta es Ucrania!!";
					errores++;	
				}
				let radios = document.getElementsByName('preg4');
				for (var i=0;i<radios.length;i++) {
					radios[i].disabled = true;
				}	
				document.getElementById('responder4').style.display = "none";
				document.getElementById('anterior4').style.display = "inline-block";
				document.getElementById('siguiente4').style.display = "inline-block";
			}
		}
		
		if (pregunta == "5"){
			if ( document.getElementById('preg5').value=="") {
				document.getElementById('respuesta5').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('preg5').value == "2022" ){
					document.getElementById('respuesta5').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta5').innerHTML = "Incorrecto, la respuesta correcta es 2022!!";
					errores++;	
				}
				document.getElementById('preg5').disabled = true;				
				document.getElementById('responder5').style.display = "none";
				document.getElementById('anterior5').style.display = "inline-block";
				document.getElementById('siguiente5').style.display = "inline-block";
			}
		}

		if (pregunta == "6"){
			if ( document.getElementById('preg6').value=="") {
				document.getElementById('respuesta6').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('preg6').value == "5" ){
					document.getElementById('respuesta6').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta6').innerHTML = "Incorrecto, la respuesta correcta es 5!!";
					errores++;	
				}
				document.getElementById('preg6').disabled = true;	
				document.getElementById('responder6').style.display = "none";
				document.getElementById('anterior6').style.display = "inline-block";			
				document.getElementById('siguiente6').style.display = "inline-block";
			}
		}

		if (pregunta == "7"){
			if ( document.getElementById('preg7').value=="") {
				document.getElementById('respuesta7').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('preg7').value == "3" ){
					document.getElementById('respuesta7').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta7').innerHTML = "Incorrecto, la respuesta correcta es 3!!";
					errores++;	
				}
				document.getElementById('preg7').disabled = true;
				document.getElementById('responder7').style.display = "none";
				document.getElementById('anterior7').style.display = "inline-block";			
				document.getElementById('siguiente7').style.display = "inline-block";
			}
		}

		if (pregunta == "8"){
			if ( !document.getElementById('p8nuncasabesloquetevaatocar').checked && !document.getElementById('p8siempretocaalgunamargo').checked) {
				document.getElementById('respuesta8').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('p8nuncasabesloquetevaatocar').checked){
					document.getElementById('respuesta8').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta8').innerHTML = "Incorrecto, la respuesta correcta es nunca sabes lo que te va a tocar!!";
					errores++;	
				}
				let radios = document.getElementsByName('preg8');
				for (var i=0;i<radios.length;i++) {
					radios[i].disabled = true;
				}
				document.getElementById('responder8').style.display = "none";
				document.getElementById('anterior8').style.display = "inline-block";			
				document.getElementById('siguiente8').style.display = "inline-block";
			}
		}

		if (pregunta == "9"){
			if ( !document.getElementById('p9Malaga').checked && !document.getElementById('p9jaen').checked && !document.getElementById('p9sevilla').checked) {
				document.getElementById('respuesta9').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('p9jaen').checked){
					document.getElementById('respuesta9').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta9').innerHTML = "Incorrecto, la respuesta correcta es Jaén!!";
					errores++;	
				}
				let radios = document.getElementsByName('preg9');
				for (var i=0;i<radios.length;i++) {
					radios[i].disabled = true;
				}
				document.getElementById('responder9').style.display = "none";
				document.getElementById('anterior9').style.display = "inline-block";			
				document.getElementById('siguiente9').style.display = "inline-block";
			}
		}

		if (pregunta == "10"){
			if ( document.getElementById('preg10').value=="") {
				document.getElementById('respuesta10').innerHTML = "A ver figura, de verdad quieres salvarnos? Anda y marca algo!!";
			}
			 else {
				if (document.getElementById('preg10').value == "existo" ){
					document.getElementById('respuesta10').innerHTML = "Correcto!!";
					aciertos++;
				}else{
					document.getElementById('respuesta10').innerHTML = "Incorrecto, la respuesta correcta es existo!!";
					errores++;	
				}
				document.getElementById('preg10').disabled = true;

			    if (aciertos >= 5) { //Si el usuario responde a la ultima pregunta y los aciertos son mayor igual a 5 habrá ganado
				    finalizar	= true;
					document.getElementById('contenidopreguntas').innerHTML = "<div id='final'><h3> Ole y ole los caracoles!! Nos has salvado!!</h3>"+
					"<div style='color:#44f044;'> Aciertos:"+aciertos
					+"/10</div><div style='color:red;display:inline-block'>Errores:"+errores+"/10</div></div>";
					document.getElementById('final').style.display="block";
				    document.getElementById('desarrollotest').innerHTML = "<div style='display:inline-block;'> Enhorabuena!!"+
					"inténtalo de nuevo si te apetece...</div><button id='buttoncomenzar' onClick='document.location.reload()'>Volvamos a empezar...</button> ";  
				}
			}
		}
		
		if (errores >= 5) { //Si el  usuario comete 5 o más errores paralizamos el test
		document.getElementById('contenidopreguntas').innerHTML = "";
		document.getElementById('desarrollotest').innerHTML = "<div style='display:inline-block;'> Sabía yo que no podríamos confiar en ti, bueno,"+
		"inténtalo de nuevo anda...</div><button id='buttoncomenzar' onClick='document.location.reload()'>Volvamos a empezar...</button> ";  
		} else if (!finalizar){
		document.getElementById('desarrollotest').innerHTML = "<div style='color:#44f044;display:inline-block;font-size:80%;margin: 10px;'> Aciertos:"+aciertos
		+"/10</div><div style='color:#c32222;display:inline-block;font-size:80%;'>Errores:"+errores+"/10</div>";
		}
	}
//Funcion encargada de volver a la anterior pregunta
function Anterior(pregunta,preguntaanterior){
		loading(pregunta);

		document.getElementById('pregunta'+preguntaanterior).style.display = "none";
}

//Función encargada de ir a la siguiente pregunta	
function Siguiente(pregunta){
		loading(pregunta);	
		pregunta-=1;
		document.getElementById('pregunta'+pregunta).style.display = "none";
}
