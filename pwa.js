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
            // Obtén el texto del botón y la información asociada
            const buildingName = button.textContent;
            const buildingInfoText = button.getAttribute('data-info');
            const buildingImage = button.getAttribute('data-image');

            // Muestra la información correspondiente
            buildingInfo.textContent = `${buildingInfoText}`;
            const image360 = document.getElementById('360-image');
            image360.src = buildingImage;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sceneContainer = document.getElementById('360-scene');

    if (sceneContainer) {
        const button360View = document.getElementById('360-view-button');
        const buildingButtons = document.querySelectorAll('.building-button');

        button360View.addEventListener('click', function () {
            // Crea la escena en 360 grados dinámicamente al hacer clic en el botón
            const equirectangularImage = './A.jpg';

            // Crea la escena A-Frame y la imagen en 360 grados
            const sceneElement = document.createElement('a-scene');
            const skyElement = document.createElement('a-sky');
            skyElement.setAttribute('src', equirectangularImage);
            skyElement.setAttribute('rotation', '0 -90 0');

            // Limpia el contenedor antes de agregar la nueva escena
            while (sceneContainer.firstChild) {
                sceneContainer.removeChild(sceneContainer.firstChild);
            }

            // Agrega la escena y la imagen al contenedor
            sceneElement.appendChild(skyElement);
            sceneContainer.appendChild(sceneElement);

            // Muestra los botones de edificio al hacer clic en el botón "360 grados"
            buildingButtons.forEach(button => {
                button.style.display = 'block';
            });
        });
    } else {
        console.error('No se encontró el contenedor de escena (sceneContainer).');
    }
});


// guardar datos en consola 
const browserInformation = {
    name: 'Microsoft Edge',
    version: 108,
    currentDate: new Date().toISOString()
};

localStorage.setItem('browser', JSON.stringify(browserInformation));

console.log(JSON.parse(localStorage.getItem("browser")));


