// pwa.js

// Obtenemos una referencia a los elementos de los botones y la información.
const buildingButtons = document.querySelectorAll('.building-button');
const buildingInfo = document.getElementById('building-info');

// Añadimos eventos para mostrar y ocultar los botones individualmente
const imageContainer = document.querySelector('.image-container');
let isMouseOverButton = false;

buildingButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        isMouseOverButton = true;
        button.style.display = 'block';
    });

    button.addEventListener('mouseout', () => {
        isMouseOverButton = false;
        button.style.display = 'none';
    });
});

// Mostrar los botones cuando el mouse está sobre la imagen
imageContainer.addEventListener('mouseover', () => {
    buildingButtons.forEach(button => {
        button.style.display = 'block';
    });
});

// Ocultar los botones cuando el mouse sale de la imagen
imageContainer.addEventListener('mouseout', () => {
    if (!isMouseOverButton) {
        buildingButtons.forEach(button => {
            button.style.display = 'none';
        });
    }
});

// Añadimos eventos clic a los botones de los edificios
buildingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtén el texto del botón y muestra la información correspondiente
        const buildingName = button.textContent;
        buildingInfo.textContent = `Información sobre ${buildingName}. Aquí puedes mostrar detalles sobre el edificio.`;
    });
});

// guardar datos en consola 
const browserInformation = {
    name: 'Microsoft Edge',
    version: 108,
    currentDate: new Date().toISOString()
};

localStorage.setItem('browser', JSON.stringify(browserInformation));

console.log(JSON.parse(localStorage.getItem("browser")));


