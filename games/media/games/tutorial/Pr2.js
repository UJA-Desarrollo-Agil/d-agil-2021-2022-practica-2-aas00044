// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000;

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500;

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500;

//Variable nombre que almacena el nombre del jugador
var nombre;
nombre = prompt(
    "Antes de comenzar, por favor, ingrese un nombre para su jugador/a: "
);

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>CAP�TULO 1: LA HISTORIA COMIENZA...</h1>\
    <img src='./media/img/despertador.jpg' class='float_ce' width='500' height='400'>\
        <p>Me despierto de la siesta... <br> Froto mis ojos hasta que consigo abrirlos por completo.</p>\
        <p>�Qu� hora es? ��SON LAS SEIS!! Hab�a quedado a las 18:30...</p>\
        <p> Deber�a ducharme... Pero si me ducho a lo mejor llego tarde y Cristina me va a matar...</p>\
        <p><a href='me_ducho'>Venga, va, me ducho,</a> seguro que me da tiempo, pero\
        <a href='no_ducha'>es que siempre llego tarde y Cristina ya me advirti� seriamente que no llegara tarde m�s veces...</a>.</p>"
    ),
    no_ducha: new undum.SimpleSituation(
        "<img src='./media/img/vestirse.jpeg' class='float_right' width='250' height='250'>\
    <p>Me visto, me peino y me pongo guapo.</p>\
      <p>Hoy vamos a ver una obra de teatro sobre El Se�or de los Anillos. </p>\
      <p>A los dos nos encanta, as� que seguro que nos lo pasamos bien.</p>\
      <p>Voy a salir ya, cojo la cartera, el m�vil y las llaves... �D�nde est�n las llaves?</p>\
	  <p>Las busco como un loco por toda la casa, no puedo salir sin ellas. �Qu� estr�s! �D�nde las habr� dejado?</p>\
	  <p>�Aqu� est�n! Qu� alivio, por fin. �Pero ya voy tarde! <a href='coche'> �Cojo el coche </a> o <a href='andar'> voy andando? </a> </p>\ ",
        {
            heading: "Me visto",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 10
                );
            },
        }
    ),

    coche: new undum.SimpleSituation(
        "<img src='./media/img/coche.jpg' class='float_right' width='250' height='250'>\
    <p> Son las 18:20. He quedado con ella en 10 minutos. Como haya mucho tr�fico no me va a dar tiempo... </p>\
	<p> Podr�a <a href='llamada'> llamarla </a>, explicarle lo que ha pasado, seguro que lo entiende... </p>\
	<p>Adem�s, es mejor eso que llegar tarde sin avisar.</p>\ ",
        {
            heading: "De camino en coche",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 3
                );
            },
        }
    ),

    andar: new undum.SimpleSituation(
        "<img src='./media/img/andar.jpg' class='float_right' width='250' height='250'>\
    <p>Salgo de casa. Est� un poco lejos el sitio, pero si me doy prisa puedo llegar a tiempo. </p>\
	<p> VOy caminando y veo algo en el suelo... �Que ser�? Me acerco y veo que es un billete de 50�. </p>\
	<p> �Qu� suerte! Ver�s cuando se lo cuente a Cristina. �Podremos ir a cenar gratis! </p>\
	<p> De repente, una persona se cae. Voy tarde, no s� si deber�a <a href='seguir'> hacer como si no hubiese visto nada </a> o <a href='socorrer'> socorrerle. </a> </p>",
        {
            heading: "De camino andando.",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 6
                );
                system.setQuality("Billete", character.qualities.billete + 1);
            },
        }
    ),

    llamada: new undum.SimpleSituation(
        "<img src='./media/img/llamada.png' class='float_right' width='250' height='250'>\
    <p> <b> Cristina: </b> Hola " + nombre + ". �Qu� pasa?</p>\
	<p> <b>" + nombre + ":</b> Hola Cristina. Estoy de camino, voy con el coche. Quiz�s llego un pel�n tarde porque no encontraba las llaves. </p>\
	<p> <b> Cristina: </b> Vale, no te preocupes. Yo ya mismo llego, te espero donde dijimos. Adi�s. </p>\
	<p> Parece que no se lo ha tomado mal... Menos mal. </p>\
	<p> �Anda! Ah� hay un sitio, voy a <a href='encuentro'> aparcar. </a> </p> ",
        {
            heading: "Llamada a Cristina",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 5
                );
            },
        }
    ),

    seguir: new undum.SimpleSituation(
        "<img src='./media/img/andar.jpg' class='float_right' width='250' height='250'>\
    <p> Sigo mi camino. Ha sido una ca�da sin importancia, seguro que est� bien. </p>\
	<p> Ya mismo llego, estoy a 5 minutos. Voy un poco tarde, pero no pasa nada </p>\
	<p> Mira, <a href='encuentro'> ah� est� Cristina. </a> </p> ",
        {
            heading: "Sigo andando",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 1
                );
            },
        }
    ),

    socorrer: new undum.SimpleSituation(
        "<img src='./media/img/ayudar.jpg' class='float_right' width='250' height='250'>\
    <p>Voy donde se ha ca�do el muchacho.</p>\
	<p> <b>" + nombre + ":</b> �Est�s bien? �Te puedo ayudar? </p>\
	<p> <b> Hombre: </b> S�, estoy bien, ha sido un tropez�n, gracias. </p>\
	<p> Sigo mi camino y <a href='encuentro'> voy donde est� Cristina.</a></p> ",
        {
            heading: "Me acerco a ver qu� ha pasado",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 1
                );
            },
        }
    ),

    me_ducho: new undum.SimpleSituation(
        "<img src='./media/img/ducha.jpg' class='float_right' width='250' height='250'>\
    <p>No hay agua caliente porque no estaba encendido el termo. No puedo esperar a que se caliente el agua. </p>\
    <p>Si espero llegar� super tarde, as� que tengo que <a href='ducha'> ducharme </a> ya</p>\ ",
        {
            heading: "Me ducho",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 20
                );
            },
        }
    ),

    ducha: new undum.SimpleSituation(
        "<img src='./media/img/vestirse.jpeg' class='float_right' width='250' height='250'>\
    <p>Que fr�o hace. No me ten�a que haber duchado... El agua estaba helada.</p>\
    <p>Venga, me visto, cojo y todo y me voy ya. Espero no llegar muy tarde.</p>\
	<p>Hoy vamos a ver una obra de teatro sobre El Se�or de los Anillos. </p>\
	<p>A los dos nos encanta, as� que seguro que nos lo pasamos bien. </p>\
	<P> <a href='encuentro'> Ah, ah� est� Cristina </a> </p> ",
        {
            heading: "Me visto",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 1
                );
            },
        }
    ),

    /*Comienzo capitulo 2*/
    encuentro: new undum.SimpleSituation(
        "<h1>CAPITULO 2 - CITA EN EL TEATRO</h1>\
    <img src='./media/img/teatro.jpg' class='float_right' width='250' height='250'>\
        <p> Nos saludamos y entramos al teatro. Por suerte no me dijo nada por haberme esperado.</p>\
		<p> Al entrar vimos que se pod�a comer. Nos sorprendi� un poco ya que era un teatro y no un cine </p>\
		<p> <b>" + nombre + ":</b> �Quieres palomitas? </p>\
		<p> <b> Cristina: </b> Vale </p>\
		<p> �Preferir� <a href='compartir'> compartir palomitas </a> o <a href='no_compartir'> compro una para cada uno? </a> </p>"

    ),

    compartir: new undum.SimpleSituation(
        "<img src='./media/img/Palomitas.jpg' class='float_right' width='250' height='250'>\
		<p>Decido comprar palomitas para compartirlas. </p>\
		<p> Nos sentamos en las butacas y esperamos a que empiece la funci�n. Voy a voger palomitas y me da un manotazo</p>\
	  <p><b>Cristina:</b> No cojas hasta que no empiece. </p>\
	  <p> Le sonr�o y espero pacientemente a que empiece. </p>\
	  <p> Mientras tanto, no s� si <a href='silencio'> quedarme callado </a> o <a href= 'no_silencio'> sacar tema de conversaci�n. </a> </p> ",
        {
            heading: "Cita en el teatro",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 15
                );
            },
        }
    ),

    no_compartir: new undum.SimpleSituation(
        "<img src='./media/img/Palomitas.jpg' class='float_right' width='250' height='250'>\
     <p>Cuando le di sus palomitas parec�a decepcionada. No le quise dar m�s importancia y esperamos a que empezara la obra</p>\
	<p>Termin� la obra y le pregunt� si quer�a ir a cenar. Me dijo que no, que si pod�a <a href='no_cenar'> llevarla a casa. </a></p>\
	<p>Le dije que s�, pero me dej� preocupado eso. �Le habr� molestado lo de las palomitas?</p> ",
        {
            heading: "Cita en el teatro ",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 1
                );
            },
        }
    ),

    silencio: new undum.SimpleSituation(
        " <p>Estoy bastante nervioso y no s� que decir as� que antes de cagarla prefiero no hablar.</p>\
      <p>Por suerte la funci�n empieza ya as� que no ha quedado raro el silencio.</p>\
	  <p>Termina la funci�n, salimos y nos vamos. <b< Cristina:</b>�Quieres <a href='cenar'> ir a cenar </a> o <a href='no_cenar'> nos vamos ya? </a> </p> "
    ),

    no_silencio: new undum.SimpleSituation(
        " <p> Le pregunto que qu� tal le ha ido el d�a. Me responde con entusiasmo, as� que me alegro.</p>\
		<p>Mientras me contaba empieza la funci�n, as� que todo fue bastante fluido. </p>\
		<p>Termina la funci�n, salimos y nos vamos. <b> Cristina:</b>�Quieres <a href='cenar'> ir a cenar </a> o <a href='no_cenar'> nos vamos ya? </a></p>"
    ),
    cenar: new undum.SimpleSituation(
        " <p> Cenamos tranquilamente y hablamos toda la noche. Pago con el billete que me encontr�.</p>\
	<p> Se hizo un poco tarde y le ofrec� llevarla a casa. Acept� y nos fuimos. </p>\
	<p>Despu�s de dejarla yo me <a href='casa2'> fui a mi casa </a> pensando en lo bien que me lo hab�a pasado con ella </p>"
    ),

    no_cenar: new undum.SimpleSituation(
        " <p>Me preocupa que no quiera ir a cenar. La dejo en su casa y me voy a <a href='casa1'> la mia </a> preocupado.</p>"
    ),

    casa1: new undum.SimpleSituation(
        "<p>Me apetece llamarla, pero no s� si es la mejor opci�n o esperarme. Me he quedado con ganas de m�s.</p>\
		<p><a href='fin_historia1'>Decido llamarla mejor ma�ana</a> para no agobiarla.</p>"
    ),
    casa2: new undum.SimpleSituation(
        "<p>Me apetece llamarla, pero no s� si es la mejor opci�n o esperarme. Me he quedado con ganas de m�s.</p>\
        <p><a href='fin_historia2'>Decido llamarla</a> y pasamos toda la noche hablando.</p>"
    ),

    fin_historia1: new undum.SimpleSituation(
        "<p>Me voy a la cama con una sensaci�n agridulce.</p>",
        {
            heading: "Final",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 5
                );
            },
        }
    ),

    fin_historia2: new undum.SimpleSituation(
        "<p>Me voy a la cama muy contento.</p>",
        {
            heading: "Final",
            enter: function (character, system, from) {
                system.setQuality(
                    "progreso_historia",
                    character.qualities.progreso_historia + 5
                );
            },
        }
    ),

};
// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";
// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {


    progreso_historia: new undum.IntegerQuality("Progreso %:", {
        priority: "0001",
        group: "stats",
    }),
    equipamiento: new undum.IntegerQuality("Equipamiento", {
        priority: "0001",
        group: "stats",
    }),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, { priority: "0001" }),


    progress: new undum.QualityGroup("Progress", { priority: "0002" }),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {

    system.setCharacterText("<p>Listado de objetos que lleva encima:</p>");
};
