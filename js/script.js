document.addEventListener("DOMContentLoaded", () => {
    const botonMenu = document.querySelector(".menu-toggle");
    const menuPrincipal = document.querySelector("#menu-principal");

    if (!botonMenu || !menuPrincipal) {
        console.error("No se encontró el botón o el menú principal.");
        return;
    }

    botonMenu.addEventListener("click", () => {
        menuPrincipal.classList.toggle("menu-abierto");

        const menuAbierto =
            menuPrincipal.classList.contains("menu-abierto");

        botonMenu.setAttribute("aria-expanded", menuAbierto);
        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );
    });
});
