// =========================================
// MENU HAMBURGUESA
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


// =========================================
// CARRUSEL DE FOTOS
// =========================================

const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const dotsContainer = document.querySelector(".carousel-dots");

let currentSlide = 0;


// Solo ejecutar si existe el carrusel

if (
    slides.length > 0 &&
    prevButton &&
    nextButton &&
    dotsContainer
) {


    // =========================================
    // Crear indicadores
    // =========================================

    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.setAttribute(
            "aria-label",
            `Ir a imagen ${index + 1}`
        );

        dot.addEventListener("click", () => {

            showSlide(index);

        });

        dotsContainer.appendChild(dot);

    });


    // =========================================
    // Mostrar imagen
    // =========================================

    function showSlide(index) {

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        const dots = document.querySelectorAll(".carousel-dot");

        dots.forEach(dot => {

            dot.classList.remove("active");

        });

        slides[index].classList.add("active");

        dots[index].classList.add("active");

        currentSlide = index;

    }


    // =========================================
    // Imagen siguiente
    // =========================================

    nextButton.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });


    // =========================================
    // Imagen anterior
    // =========================================

    prevButton.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = slides.length - 1;

        }

        showSlide(currentSlide);

    });

}


// =========================================
// FORMULARIO DE CONTACTO - WHATSAPP
// =========================================

const formulario = document.querySelector(".contact-card form");

if (formulario) {

    const botonEnviar = formulario.querySelector("button");

    botonEnviar.addEventListener("click", () => {

        const nombre =
            document.getElementById("nombre").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const telefono =
            document.getElementById("telefono").value.trim();

        const mensaje =
            document.getElementById("mensaje").value.trim();


        // =========================================
        // VALIDACIÓN
        // =========================================

        if (!nombre || !email || !mensaje) {

            alert(
                "Por favor completá nombre, correo electrónico y mensaje."
            );

            return;

        }


        // =========================================
        // NÚMERO DE WHATSAPP
        // =========================================

        const numeroWhatsApp = "5492901494764";


        // =========================================
        // CREAR MENSAJE
        // =========================================

        const texto = `
Hola, soy ${nombre}.

Correo electrónico: ${email}
Teléfono: ${telefono || "No informado"}

Consulta:
${mensaje}
        `.trim();


        // =========================================
        // ABRIR WHATSAPP
        // =========================================

        const url =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

    });

}


// =========================================
// TRADUCCION DE LA WEB
// =========================================

const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_refugio: "El Refugio",
        nav_habitaciones: "Habitaciones",
        nav_contacto: "Contacto",
        nav_inicio: "Inicio",
        nav_refugio: "El Refugio",
        nav_habitaciones: "Habitaciones",
        nav_contacto: "Contacto",
        hero_eyebrow: "USHUAIA · TIERRA DEL FUEGO",
        hero_title: "Un hogar en el",
        hero_title_highlight: "Fin del Mundo",
        hero_description:
        "Hay lugares que simplemente se visitan, y otros que se sienten. En Ushuaia encontramos nuestro pequeño hogar: un espacio cálido y tranquilo donde descansar después de descubrir los paisajes del Fin del Mundo, compartir una charla, disfrutar un desayuno y sentirse un poquito más cerca de casa.",
        contact_title: "¿Querés contactarnos?",
        contact_description:
            "Estamos para ayudarte. Dejanos tu mensaje y nos pondremos en contacto.",
        contact_name: "Nombre",
        contact_name_placeholder: "Tu nombre",
        contact_email: "Correo electrónico",
        contact_email_placeholder: "tu@email.com",
        contact_phone: "Teléfono",
        contact_phone_placeholder: "Tu teléfono",
        contact_message: "Mensaje",
        contact_message_placeholder: "¿En qué podemos ayudarte?",
        contact_button: "ENVIAR CONSULTA",   
        refugio_page_title: "Nuestro refugio",
        refugio_intro:
            "Un pequeño refugio en el Fin del Mundo, pensado para relajarse y disfrutar Ushuaia.",   
        refugio_title: "Un lugar para sentirse como en casa",
        refugio_text_1:
            "Refugio Latitud 52 es un alojamiento cálido y tranquilo, pensado para quienes buscan disfrutar de Ushuaia y tener un lugar confortable donde descansar.",
        refugio_text_2:
            "Un espacio sencillo y acogedor, donde cada detalle busca que tu estadía sea cómoda y agradable.",
        refugio_location:
            "A solo 5 minutos del centro",
        refugio_city:
            "Ushuaia · Tierra del Fuego",
        amenity_wifi: "Wi-Fi",
        amenity_breakfast: "Desayuno",
        amenity_rooms: "Habitaciones confortables",  
        gallery_eyebrow: "CONOCÉ NUESTRO ESPACIO",
        gallery_title: "Un lugar para disfrutar",
        gallery_alt_entrance: "Entrada de Refugio Latitud 52",
        gallery_alt_breakfast_area: "Desayunador",
        gallery_alt_breakfast: "Desayuno",
        gallery_alt_bathroom: "Baño",
        gallery_alt_balcony: "Balcón",
        gallery_alt_ushuaia: "Ushuaia",
        carousel_previous: "Imagen anterior",
        carousel_next: "Imagen siguiente",   
        room1_eyebrow: "HABITACIÓN 01",
        room1_title: "Habitación 1",
        room1_description:
            "Un espacio cálido y confortable para descansar después de conocer Ushuaia.",
        room1_alt: "Habitación 1",
        room2_eyebrow: "HABITACIÓN 02",
        room2_title: "Habitación 2",
        room2_description:
            "Un espacio pensado para disfrutar de una estadía tranquila y agradable.",
        room2_alt: "Habitación 2",       
        rooms_page_title: "Habitaciones",
        rooms_intro:
            "Espacios cómodos y acogedores para descansar y disfrutar tu estadía en Ushuaia.",   
        room3_title: "Habitación 3",
        room3_description:
            "Un ambiente acogedor y confortable para disfrutar de una estadía agradable en Ushuaia.",
        room3_alt: "Habitación 3",           
                            
    },

    en: {
        nav_inicio: "Home",
        nav_refugio: "The Refuge",
        nav_habitaciones: "Rooms",
        nav_contacto: "Contact",
        nav_inicio: "Home",
        nav_refugio: "The Refuge",
        nav_habitaciones: "Rooms",
        nav_contacto: "Contact",
        hero_eyebrow: "USHUAIA · TIERRA DEL FUEGO",
        hero_title: "A home at the",
        hero_title_highlight: "End of the World",
        hero_description:
            "Some places are simply visited, while others are truly felt. In Ushuaia, we found our little home: a warm and peaceful place to rest after discovering the landscapes of the End of the World, share a conversation, enjoy breakfast, and feel a little closer to home.",
        contact_title: "Would you like to contact us?",
        contact_description:
            "We're here to help. Leave us a message and we'll get back to you.",
        contact_name: "Name",
        contact_name_placeholder: "Your name",
        contact_email: "Email",
        contact_email_placeholder: "your@email.com",
        contact_phone: "Phone",
        contact_phone_placeholder: "Your phone number",
        contact_message: "Message",
        contact_message_placeholder: "How can we help you?",
        contact_button: "SEND INQUIRY",   
        refugio_page_title: "Our refuge",
        refugio_intro:
            "A little refuge at the End of the World, designed to relax and enjoy Ushuaia.",   
        refugio_title: "A place that feels like home",
        refugio_text_1:
            "Refugio Latitud 52 is a warm and peaceful accommodation, ideal for those who want to enjoy Ushuaia and have a comfortable place to rest.",
        refugio_text_2:
            "A simple and welcoming space, where every detail is designed to make your stay comfortable and pleasant.",
        refugio_location:
            "Just 5 minutes from downtown",
        refugio_city:
            "Ushuaia · Tierra del Fuego",
        amenity_wifi: "Wi-Fi",
        amenity_breakfast: "Breakfast",
        amenity_rooms: "Comfortable rooms",            
        gallery_eyebrow: "DISCOVER OUR SPACE",
        gallery_title: "A place to enjoy",
        gallery_alt_entrance: "Entrance of Refugio Latitud 52",
        gallery_alt_breakfast_area: "Breakfast area",
        gallery_alt_breakfast: "Breakfast",
        gallery_alt_bathroom: "Bathroom",
        gallery_alt_balcony: "Balcony",
        gallery_alt_ushuaia: "Ushuaia",
        carousel_previous: "Previous image",
        carousel_next: "Next image",     
        room1_eyebrow: "ROOM 01",
        room1_title: "Room 1",
        room1_description:
            "A warm and comfortable space to rest after exploring Ushuaia.",
        room1_alt: "Room 1",

        room2_eyebrow: "ROOM 02",
        room2_title: "Room 2",
        room2_description:
            "A space designed for a peaceful and pleasant stay.",
        room2_alt: "Room 2",      
        rooms_page_title: "Rooms",

        rooms_intro:
            "Comfortable and welcoming spaces to rest and enjoy your stay in Ushuaia.",        
        room3_title: "Room 3",
        room3_description:
            "A welcoming and comfortable space to enjoy a pleasant stay in Ushuaia.",
        room3_alt: "Room 3",                                                              
    }

};

function cambiarIdioma(idioma) {

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.dataset.i18n;

        if (translations[idioma][clave]) {
            elemento.textContent = translations[idioma][clave];
        }

    });

    document.querySelectorAll(".language-btn").forEach(boton => {
        boton.classList.toggle(
            "active",
            boton.dataset.lang === idioma
        );
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento => {

        const clave = elemento.dataset.i18nPlaceholder;

        if (translations[idioma][clave]) {
            elemento.placeholder = translations[idioma][clave];
        }

    });    
    document.querySelectorAll("[data-i18n-alt]").forEach(elemento => {

        const clave = elemento.dataset.i18nAlt;

        if (translations[idioma][clave]) {
            elemento.alt = translations[idioma][clave];
        }

    });    
    document.querySelectorAll("[data-i18n-aria]").forEach(elemento => {

        const clave = elemento.dataset.i18nAria;

        if (translations[idioma][clave]) {
            elemento.setAttribute(
                "aria-label",
                translations[idioma][clave]
            );
        }

    });    

    localStorage.setItem("idioma", idioma);
}
document.querySelectorAll(".language-btn").forEach(boton => {

    boton.addEventListener("click", () => {
        cambiarIdioma(boton.dataset.lang);
    });

});
const idiomaGuardado =
    localStorage.getItem("idioma") || "es";

cambiarIdioma(idiomaGuardado);