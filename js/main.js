/* =====================================================
   LuckyYou - JS principal
   Archivo: js/main.js
   Funciones básicas para el Sprint 1
   ===================================================== */

/**
 * Esperar a que todo el DOM esté cargado antes de ejecutar el script.
 */
document.addEventListener('DOMContentLoaded', function () {

  console.log("✅ LuckyYou Sprint 1 — JavaScript cargado correctamente");

  /* =====================================================
     MANEJO DEL FORMULARIO DE CONTACTO
     ===================================================== */
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita recargar la página

      // Captura los datos ingresados
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validación simple
      if (nombre === "" || email === "" || mensaje === "") {
        formMessage.textContent = "⚠️ Por favor, completa todos los campos.";
        formMessage.style.color = "red";
        return;
      }

      // Simulación de envío
      formMessage.textContent = "✅ ¡Gracias por contactar con LuckyYou! Te responderemos pronto.";
      formMessage.style.color = "#0b6efd";

      // Limpia el formulario
      form.reset();

      // Log en consola para ver el funcionamiento
      console.log(`Formulario enviado:
      Nombre: ${nombre}
      Email: ${email}
      Mensaje: ${mensaje}`);
    });
  }

  /* =====================================================
     TEST MANUAL BÁSICO
     ===================================================== */
  console.log("🧩 Test manual: Verificar que el formulario muestra el mensaje al enviar.");
  console.log("🧩 Test manual: Revisar que los enlaces del menú funcionan (no se rompen).");
  console.log("🧩 Test manual: Comprobar que el CSS está aplicado correctamente.");
});
