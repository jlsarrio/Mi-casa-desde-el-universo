var origenWeb;

(function(){
    var script = document.currentScript;
	origenWeb = script.src;
    origenWeb=origenWeb.substring(0, origenWeb.lastIndexOf("/"));
    origenWeb=origenWeb.substring(0, origenWeb.lastIndexOf("/")+1);
}())

function head(){
	respuesta='<head>';
	respuesta+='	<meta charset="utf-8">';
	respuesta+='	<title>Mi casa desde el universo 2</title>';
	respuesta+='	<link rel="stylesheet" type="text/css" href="'+origenWeb+'css/estilos.css">';
	respuesta+='</head>';
	return respuesta;
}

function header(){
	respuesta='<header id="header" class="">';
	respuesta+='<div class="logotipo">';
	respuesta+='	<img src="'+origenWeb+'imagenes/logo.png" width="100px" alt="">';
	respuesta+='</div>';
	respuesta+='<nav>';
	respuesta+='	<ul>';
	respuesta+='		<li><a href="'+origenWeb+'index.html" title="">Inicio</a></li>';
	respuesta+='		<li><a href="'+origenWeb+'contenido/presentacion.html" title="">Presentación</a></li>';
	respuesta+='		<li><a href="'+origenWeb+'contenido/contenido.html" title="">Contenido</a></li>';
	respuesta+='		<li><a href="#" title="">Contacto</a></li>';
	respuesta+='	</ul>';
	respuesta+='</nav>';
	respuesta+='</header>';
	return respuesta;
}

function aside(){
	respuesta='<aside>';
	respuesta+='<h3>Objetivo de esta web</h3>';
	respuesta+='<p>';
	respuesta+='En esta página podrás encontrar información sobre como utilizar una Raspberry y un Arduino ';
	respuesta+='para controlar varios aparatos de casa. Partiendo desde cero hasta llegar a programar ';
	respuesta+='todo el sistema.';
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