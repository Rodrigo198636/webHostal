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
        contact_title: "¿Querés consultarnos?",
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