var UP = {
	_show: function( o ) {
		o.innerHTML = UP.testCookies() ? '<div id=\"upasaporte\"><div id=\"upform\" style=\"overflow:auto\"><form method=\"post\" action=\"https://www.u-cursos.cl/upasaporte/adi\" name=\"frm5ee1b8898db4b\" onsubmit=\"return window.validadorUniversal ? validadorUniversal(this) : true\"><input type=\"hidden\" name=\"servicio\" value=\"ucursos\" /><input type=\"hidden\" name=\"debug\" value=\"0\" /><input type=\"hidden\" name=\"extras[UCURSOS_SERVER]\" value=\"web31-int\" /><input type=\"hidden\" name=\"extras[lang]\" value=\"es\" /><input type=\"hidden\" name=\"extras[_sess]\" value=\"9jp4ihespt96c0dir6l118o765\" /><input type=\"hidden\" name=\"extras[recordar]\" value=\"1\" /><dl><dt>Usuario</dt><dd class=\"req user\"><input name=\"username\" value=\"\" type=\"text\" class=\" autofocus\" placeholder=\"Usuario\" /><em>Ej: mamonzal / password</em></dd><dt>Clave</dt><dd class=\"req pass\"><input name=\"password\" type=\"password\" placeholder=\"Clave\" /></dd><dd class=\"remember\"><label><input type=\"checkbox\" name=\"recordar\" value=\"1\" />No cerrar sesión</label></dd><input type=\"submit\" value=\"Ingresar\" class=\"boton\" /></dl></form><ul class=\"help\"><li><a href=\"https://cuenta.uchile.cl/solicitar-recuperar-cuenta\">Ayuda con la Clave</a></li></ul></div><style type=\"text/css\">.hlp { display:none; }</style><div id=\"h1\" class=\"hlp\"><h1>¡Buen día!</h1><p>Para ayudarte a entrar a la plataforma te haremos algunas preguntas</p><a href=\"javascript:UP.help(\'h2\')\" class=\"boton ok\">Vamos</a></div><div id=\"h2\" class=\"hlp\"><h1>¿Tienes Cuenta Uchile?</h1><a onclick=\"UP.help(\'h3\')\" class=\"boton ok\">¡Si!</a><a onclick=\"UP.help(\'h4\')\" class=\"boton wrong\">No o No sé</a></div><div id=\"h3\" class=\"hlp\"><h1>Excelente!<br />¿Recuerdas la Clave?</h1><a onclick=\"UP.help(\'h5\')\" class=\"boton ok\">¡Si!</a><a onclick=\"UP.help(\'h6\')\" class=\"boton wrong\">No o No sé</a></div><div id=\"h4\" class=\"hlp\"><h1>Ok, veamos...<br />Si no tienes o no recuerdas tu clave</h1><p>Crea una Cuenta Uchile siguiendo las instrucciones y luego vuelve a esta página</p><a class=\"boton ok\" href=\"https://cuenta.uchile.cl/crear-cuenta\" target=\"_blank\" onclick=\"UP.help(\'h5\')\">Ir a crear Cuenta</a></p></div><div id=\"h5\" class=\"hlp\"><h1>¿Ya creaste tu Cuenta Uchile?<br />¡Estupendo!</h1><p>Escribe el nombre de usuario y clave de tu Cuenta Uchile en el formulario de acceso</p><form method=\"post\" action=\"https://www.u-cursos.cl/upasaporte/adi\" name=\"frm5ee1b8898db4b\" onsubmit=\"return window.validadorUniversal ? validadorUniversal(this) : true\"><input type=\"hidden\" name=\"servicio\" value=\"ucursos\" /><input type=\"hidden\" name=\"debug\" value=\"0\" /><dl><dt>Usuario</dt><dd class=\"req user\"><input name=\"username\" value=\"\" type=\"text\" placeholder=\"Usuario\" /></dd><dt>Clave</dt><dd class=\"req pass\"><input name=\"password\" type=\"password\" placeholder=\"Clave\" /></dd><input type=\"submit\" value=\"Ingresar\" class=\"boton\" /></dl></form></div><div id=\"h51\" class=\"hlp\"><h1>¿Ya obtuviste tu clave de Cuenta Uchile?<br />¡Estupendo!</h1><p>Escribe el nombre de usuario y clave de tu Cuenta Uchile en el formulario de acceso</p><form method=\"post\" action=\"https://www.u-cursos.cl/upasaporte/adi\" name=\"frm5ee1b8898db4b\" onsubmit=\"return window.validadorUniversal ? validadorUniversal(this) : true\"><input type=\"hidden\" name=\"servicio\" value=\"ucursos\" /><input type=\"hidden\" name=\"debug\" value=\"0\" /><dl><dt>Usuario</dt><dd class=\"req user\"><input name=\"username\" value=\"\" type=\"text\" placeholder=\"Usuario\" /></dd><dt>Clave</dt><dd class=\"req pass\"><input name=\"password\" type=\"password\" placeholder=\"Clave\" /></dd><input type=\"submit\" value=\"Ingresar\" class=\"boton\" /></dl></form></div><div id=\"h6\" class=\"hlp\"><h1>¿No recuerdas tu clave?</h1><p>Utiliza la página de \"Cuenta Uchile\" para recordar tu clave y vuelve a esta página</p><a class=\"boton ok\" href=\"https://cuenta.uchile.cl/solicitar-recuperar-cuenta\" target=\"_blank\" onclick=\"UP.help(\'h51\')\">Ir a recordar clave</a></div><div id=\"h8\" class=\"hlp\"><h1>Algo anda mal...<br />¿Tu clave sirve en otras plataformas de la U?</h1><p>Intenta entrar con tu nombre de usuario y clave a la plataforma \"Mi Uchile\"</p><a class=\"boton ok\" href=\"https://mi.uchile.cl/\" target=\"_blank\" onclick=\"UP.help(\'h9\')\">Ir a Mi Uchile</a></div><div id=\"h9\" class=\"hlp\"><h1>¿Pudiste entrar?</h1><a onclick=\"UP.help(\'h11\')\" class=\"boton ok\">¡Si!</a><a onclick=\"UP.help(\'h10\')\" class=\"boton wrong\">No</a></div><div id=\"h10\" class=\"hlp\"><h1>Oh! Tenemos un problema que no podemos resolver :(</h1><p>Como tu clave no funciona en Mi Cuenta Uchile, debes contactarte con la Mesa de Ayuda de los Servicios Centrales de la Universidad</p><a class=\"boton ok\" href=\"http://www.mesadeayuda.uchile.cl/\" target=\"_top\">Ir a la Mesa de Ayuda</a></div><div id=\"h11\" class=\"hlp\"><h1>Ups! Entonces tenemos un problema</h1><p>Tu clave de Cuenta Uchile <strong>si funciona</strong>, pero no tenemos registros sobre ti.</p><a class=\"boton ok\" href=\"https://www.u-cursos.cl/upasaporte/contacto?base=guia\">Danos más detalles</a></div></div>' : '<div id="mensaje">Debe activar las cookies de su navegador</div>';
	},

	show: function( id ) {
		if( id ) return UP._show( document.getElementById( id ) );
		var e = document.getElementsByTagName( 'script' );
		for( var i = 0; i < e.length; ++i ) {
			if( e[i].src.indexOf( '/upasaporte/up.js' ) < 0 ) continue;
			var s = document.createElement( 'div' );
			s.id = 'id5ee1b8898db92';
			e[i].parentNode.insertBefore( s, e[i] );
			return UP._show( s );
		}
	},

	testCookies: function() {
		document.cookie = 'test=ok; path=/';
		if( document.cookie.indexOf( 'test=ok' ) == -1 ) return false;
		document.cookie = 'test=ok; path=/; expires='+new Date().toGMTString();
		return true;
	},

	p: 'h1',

	help: function( p ) {
		if( ! p ) p = UP.p;
		var divs = document.querySelectorAll('#upasaporte > div');
		for( var i = 0; i < divs.length; i++ ) divs[i].style.display = 'none';

		document.getElementById(p).style.display = 'block';
		UP.p = 'h8';

		try {
			_gaq.push( ['_trackEvent', 'help', p] );
		} catch( e ) {};
		return void(0);
	},
}
