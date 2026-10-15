
/* =========================================================
   CALLEJEROS WEB
========================================================= */

console.log("SCRIPT.JS SE ESTÁ EJECUTANDO");


/* =========================================================
   LOADER
========================================================= */

const loader = document.getElementById("loader");

if (loader) {
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1200);
}


/* =========================================================
   FRASES
========================================================= */

const quotes = [
    "La música también guarda memoria.",
    "Hay canciones que nunca dejan de sonar.",
    "El rock también cuenta historias.",
    "Las canciones pueden convertirse en recuerdos.",
    "La memoria también tiene sonido.",
    "Algunas historias continúan a través de sus canciones.",
    "Callejeros, una historia que sigue sonando.",
    "La música no se olvida.",
    "La música no mata.",
    "Inocente.",
    "Las canciones también forman parte de la memoria.",
    "Una canción puede guardar una historia.",
    "El rock deja huellas.",
    "Hay historias que permanecen en cada canción.",
    "La memoria también puede escucharse.",
    "Una banda, muchas canciones, una historia.",
    "El tiempo pasa, las canciones quedan.",
    "Recordar también es escuchar.",
    "El rock argentino también está hecho de historias.",
    "Callejeros sigue formando parte de la memoria del rock.",
    "No somos los mismos de antes.",
    "La música permanece cuando todo cambia.",
    "Cada canción tiene algo que contar.",
    "Hay recuerdos que vuelven con una canción.",
    "El tiempo no borra todo.",
    "Las canciones quedan guardadas en la memoria.",
    "Callejeros dejó una marca en el rock argentino.",
    "La historia también se cuenta cantando.",
    "Algunas canciones se convierten en parte de nosotros.",
    "El pasado también puede escucharse.",
    "Una melodía puede traer un recuerdo.",
    "El rock también es memoria.",
    "Cada acorde puede contar una historia.",
    "Las canciones sobreviven al tiempo.",
    "Hay historias que nunca terminan de sonar."
];

const quoteText = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote");

let quoteIndex = 0;

function cambiarFrase() {
    if (!quoteText) return;

    quoteIndex = (quoteIndex + 1) % quotes.length;

    quoteText.style.opacity = "0";

    setTimeout(() => {
        quoteText.textContent = quotes[quoteIndex];
        quoteText.style.opacity = "1";
    }, 200);
}

if (newQuoteButton) {
    newQuoteButton.addEventListener("click", cambiarFrase);
}


/* =========================================================
   MODAL DE ÁLBUMES: ELEMENTOS HTML
========================================================= */

const albumModal = document.getElementById("album-modal");
const closeAlbumModal = document.getElementById("close-album-modal");

const modalAlbumImage = document.getElementById("modal-album-image");
const modalAlbumYear = document.getElementById("modal-album-year");
const modalAlbumTitle = document.getElementById("modal-album-title");
const modalAlbumDescription = document.getElementById("modal-album-description");
const modalAlbumCuriosity = document.getElementById("modal-album-curiosity");
const modalTracklist = document.getElementById("modal-tracklist");
const modalSpotifyPlayer = document.getElementById("modal-spotify-player");
const modalSpotifyLink = document.getElementById("modal-spotify-link");

/* =========================================================
   INFORMACIÓN DE LOS ÁLBUMES
========================================================= */


const albums = {
    sed: {
        title: "SED",
        year: "2001",
        image: "disco-01-sed.jpg",

        description: `Publicado en 2001, Sed es el primer álbum de estudio
        de Callejeros. Con este trabajo comenzó una etapa fundamental
        en la construcción de la identidad musical de la banda y su
        vínculo con el rock barrial argentino.`,

        curiosity: `El álbum contiene 12 canciones. Entre ellas se encuentran
        "Los invisibles", "El nudo", "Vicioso, jugador y mujeriego" y "Sed".`,

        spotifyEmbed: "3ueLVrmcgTZcEAsFNNhsX3",
        spotifyUrl: "https://open.spotify.com/album/3ueLVrmcgTZcEAsFNNhsX3",

        tracks: [
            "Los invisibles",
            "Rompiendo espejos",
            "El nudo",
            "Milonga del rocanrol",
            "Jugando",
            "Vicioso, jugador y mujeriego",
            "Palo borracho",
            "Sonando",
            "Tiempo de estar",
            "Teatro",
            "Sed",
            "Ojalá se los lleve"
        ]
    },

    presion: {
        title: "PRESIÓN",
        year: "2003",
        image: "disco-02-presion.jpg",

        description: `Lanzado en 2003, Presión es el segundo álbum de estudio
        de Callejeros. Sus canciones profundizan el sonido de la banda y
        refuerzan el vínculo con un público que encuentra en sus letras
        experiencias, emociones y contradicciones propias.`,

        curiosity: `Contiene 14 canciones. "Una nueva noche fría" es uno
        de los temas más reconocidos de este álbum.`,

        spotifyEmbed: "",
        spotifyUrl: "https://open.spotify.com/search/Presi%C3%B3n%20Callejeros",

        tracks: [
            "Otro viento mejor",
            "Presión",
            "Tres",
            "Una nueva noche fría",
            "Fantasía y realidad",
            "Morir",
            "Cristal",
            "Imposible",
            "Callejero de Boedo",
            "Si me cansé",
            "Ahogados de razón",
            "Tiempo perdido",
            "El duende del árbol",
            "Ilusión"
        ]
    },

    rocanroles: {
        title: "ROCANROLES SIN DESTINO",
        year: "2004",
        image: "disco-03-rocanroles-sin-destino.jpg",

        description: `Publicado en 2004, Rocanroles sin destino fue un paso
        importante en la trayectoria de Callejeros. Sus canciones combinan
        fuerza, melodía y letras que exploran sentimientos y contradicciones.
        El álbum amplió el alcance de la banda y se convirtió en una obra
        destacada del rock argentino de aquella época.`,

        curiosity: `El disco tiene 14 canciones. Entre las más conocidas
        se encuentran "Distinto", "Sería una pena", "Prohibido",
        "La llave" y "Rocanroles sin destino".`,

        spotifyEmbed: "3fyFk4hNkdXZK7eIuAvkyz",
        spotifyUrl: "https://open.spotify.com/album/3fyFk4hNkdXZK7eIuAvkyz",

        tracks: [
            "Distinto",
            "Sé que no sé",
            "Sería una pena",
            "Algo peor, algo mejor",
            "Rebelde, agitador y revolucionario",
            "Un lugar perfecto",
            "Todo eso",
            "Prohibido",
            "Tan perfecto que asusta",
            "Tratando de olvidar",
            "Rocanroles sin destino",
            "La llave",
            "Parte menor",
            "Canciones y almas"
        ]
    },

    senales: {
        title: "SEÑALES",
        year: "2006",
        image: "disco-04-senales.jpg",

        description: `Señales se publicó en 2006 y fue el primer álbum de
        Callejeros después de la tragedia de República Cromañón. El disco
        quedó estrechamente vinculado a un período doloroso para la banda,
        sus seguidores y las familias de las víctimas. Su lanzamiento forma
        parte de un capítulo fundamental de la historia del rock argentino.`,

        curiosity: `El álbum lleva la dedicatoria "A los invisibles. Por siempre".
        Su publicación, después de Cromañón, quedó ligada a la memoria de
        las víctimas y de quienes atravesaron aquella tragedia. Es importante
        recordar ese contexto con respeto, sin reducir todo el significado
        del disco a un único acontecimiento.`,

        spotifyEmbed: "",
        spotifyUrl: "https://open.spotify.com/search/Se%C3%B1ales%20Callejeros",

        tracks: [
            "Daños",
            "Puede",
            "Límites",
            "Creo",
            "Frente al río",
            "Sin paciencia",
            "Día a día",
            "Sueño",
            "Hoy",
            "9 de Julio",
            "Señales",
            "Desencuentro"
        ]
    },

    escultura: {
        title: "DISCO ESCULTURA",
        year: "2008",
        image: "disco-05-escultura.jpg",

        description: `Publicado en 2008, Disco Escultura es el quinto álbum
        de estudio de Callejeros. El grupo amplía su búsqueda sonora y
        combina distintos estilos musicales sin abandonar su identidad
        rockera. Es el último álbum de estudio publicado por la banda
        bajo el nombre Callejeros.`,

        curiosity: `El álbum contiene 13 canciones y fue publicado en julio
        de 2008. Su propuesta explora diferentes matices musicales dentro
        del sonido característico del grupo.`,

        spotifyEmbed: "0gcQfNrOt75OgLeYeybHSb",
        spotifyUrl: "https://open.spotify.com/album/0gcQfNrOt75OgLeYeybHSb",

        tracks: [
            "Guiños",
            "El espejo",
            "La canción",
            "Rehén",
            "Esa invisible línea",
            "Más allá",
            "Quedó",
            "Siempre un poco más",
            "El ignorante",
            "Lo que hay",
            "Canción de cuna para Julieta",
            "Si querés que sea yo",
            "Pompeya"
        ]
    }
};


/* =========================================================
   ABRIR MODAL DE ÁLBUM
========================================================= */

function abrirAlbum(card) {
    const albumId = card.dataset.album;
    const album = albums[albumId];

    if (!album) {
        console.warn("No se encontró el álbum:", albumId);
        return;
    }

    if (!albumModal) {
        console.error('No se encontró el elemento #album-modal.');
        return;
    }

    if (
        !modalAlbumImage ||
        !modalAlbumYear ||
        !modalAlbumTitle ||
        !modalAlbumDescription ||
        !modalTracklist
    ) {
        console.error("Faltan elementos del modal en el HTML.");
        return;
    }

    // Portada
    modalAlbumImage.src = album.image;
    modalAlbumImage.alt = "Portada de " + album.title;

    // Información
    modalAlbumYear.textContent = album.year;
    modalAlbumTitle.textContent = album.title;
    modalAlbumDescription.textContent = album.description;

    // Curiosidad
    if (modalAlbumCuriosity) {
        modalAlbumCuriosity.textContent = album.curiosity || "";
    }

    // Lista de canciones
    modalTracklist.replaceChildren();

    album.tracks.forEach((track) => {
        const li = document.createElement("li");
        li.textContent = track;
        modalTracklist.appendChild(li);
    });

    modalTracklist.style.display =
        album.tracks.length > 0 ? "" : "none";

    // Spotify: usar las constantes declaradas junto al modal
    if (modalSpotifyLink) {
        modalSpotifyLink.href = album.spotifyUrl || "https://open.spotify.com/";
    }

    if (modalSpotifyPlayer) {
        if (album.spotifyEmbed) {
            modalSpotifyPlayer.src =
                "https://open.spotify.com/embed/album/" +
                album.spotifyEmbed +
                "?utm_source=generator";

            modalSpotifyPlayer.style.display = "block";
        } else {
            modalSpotifyPlayer.src = "";
            modalSpotifyPlayer.style.display = "none";
        }
    }

    // Mostrar ventana
    albumModal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* =========================================================
   EVENTOS DE LAS TARJETAS
========================================================= */

const albumCards = document.querySelectorAll(".album-card");

albumCards.forEach((card) => {
    card.addEventListener("click", () => {
        abrirAlbum(card);
    });
});


/* =========================================================
   CERRAR MODAL
========================================================= */

function cerrarAlbum() {
    if (!albumModal) return;

    albumModal.classList.remove("active");
    document.body.style.overflow = "";

    // Detener el reproductor al cerrar
    if (modalSpotifyPlayer) {
        modalSpotifyPlayer.src = "";
    }
}


// Botón X
if (closeAlbumModal) {
    closeAlbumModal.addEventListener("click", cerrarAlbum);
}


// Clic en el fondo oscuro
if (albumModal) {
    albumModal.addEventListener("click", (event) => {
        if (event.target === albumModal) {
            cerrarAlbum();
        }
    });
}


// Tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        cerrarAlbum();
    }
});

/* =========================================================
   CONFIRMACIÓN
========================================================= */

console.log("Callejeros Web: JavaScript cargado correctamente.");
console.log("Tarjetas de álbum encontradas:", albumCards.length);
