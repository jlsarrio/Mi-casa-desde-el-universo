function head(){
	respuesta='<head>';
	respuesta+='	<meta charset="utf-8">';
	respuesta+='	<title>Mi casa desde el universo 2</title>';
	respuesta+='	<link rel="stylesheet" type="text/css" href="css/estilos.css">';
	respuesta+='</head>';
	return respuesta;
}

function header(){
	respuesta='<header id="header" class="">';
	respuesta+='<div class="logotipo">';
	respuesta+='	<img src="imagenes/logo.png" width="100px" alt="">';
	respuesta+='</div>';
	respuesta+='<nav>';
	respuesta+='	<ul>';
	respuesta+='		<li><a href="index.html" title="">Inicio</a></li>';
	respuesta+='		<li><a href="presentacion.html" title="">Presentación</a></li>';
	respuesta+='		<li><a href="#" title="">Acerca de</a></li>';
	respuesta+='		<li><a href="#" title="">Contacto</a></li>';
	respuesta+='	</ul>';
	respuesta+='</nav>';
	respuesta+='</header>';
	return respuesta;
}

function aside(){
	respuesta='<aside>';
	respuesta+='<h3>Este es mi sidebar</h3>';
	respuesta+='<p>';
	respuesta+='	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	respuesta+='</p>';
	respuesta+='</aside>';
	return respuesta;
}

function footer(){
	respuesta='<footer>';
	respuesta+='<p>Web diseñada a partir de FalconMasters.com</p>';
	respuesta+='<p>';
	respuesta+='	<a href="https://www.youtube.com/watch?v=HDqJS5puXs4&index=14&list=PLhSj3UTs2_yU0fGoS1bjpHqky4kCEmTbR" target="_blank">Enlace al video</a>';
	respuesta+='</p>\n';
	respuesta+='</footer>'
	return respuesta;
}