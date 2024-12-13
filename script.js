// Selección de elementos del DOM
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const encryptButton = document.getElementById("encryptButton");
const decryptButton = document.getElementById("decryptButton");
const copyButton = document.getElementById("copyButton");

// Función para validar el texto (sin mayúsculas ni caracteres especiales)
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Función para cifrar el texto
function cifrarTexto(texto) {
    const reemplazos = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };
    return texto.replace(/[aeiou]/g, letra => reemplazos[letra]);
}

// Función para descifrar el texto
function descifrarTexto(texto) {
    const reemplazos = { "ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u" };
    return texto.replace(/ai|enter|imes|ober|ufat/g, secuencia => reemplazos[secuencia]);
}

// Manejo de eventos para el botón de cifrar
encryptButton.addEventListener("click", () => {
    const texto = inputText.value;
    if (!validarTexto(texto)) {
        alert("El texto solo puede contener letras minúsculas y espacios.");
        return;
    }
    outputText.value = cifrarTexto(texto);
});

// Manejo de eventos para el botón de descifrar
decryptButton.addEventListener("click", () => {
    const texto = inputText.value;
    if (!validarTexto(texto)) {
        alert("El texto solo puede contener letras minúsculas y espacios.");
        return;
    }
    outputText.value = descifrarTexto(texto);
});

// Manejo de eventos para el botón de copiar
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(outputText.value)
        .then(() => alert("Texto copiado al portapapeles."))
        .catch(() => alert("No se pudo copiar el texto."));
});
