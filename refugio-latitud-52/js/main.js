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
// PRUEBA
// =========================================

console.log("main.js funcionando");