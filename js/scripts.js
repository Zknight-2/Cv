// para selecionar los elementos desde jv sera con un id a los elementos que lo necesiten
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");


// function toggleColors(newColors)
// var elem = document.getElementById('color')
// elem.style.coor = newColor;
// }

// const eu = document.querySelector('#eu');
// const p  = document.querySelector('color');

// ahora se le debe aplicar el color primary de la aplicacion y aqui es donde estan todas las variables de css que atraves de esta variable es donde se cambiara el color 

const rootStyles = document.documentElement.style;

// ahora para escuchar el clic se hace 

toggleTheme.addEventListener("click", () => {
    // cuando escuche el cli le dare las clases al body
    document.body.classList.toggle("dark");
    // y lo que ara es como un interructor que vera si tiene la clase o no la tiene, si no la tiene se la agrega si la tiene se la quita 
if(toggleIcon.src.includes("moon.svg")) {
    // si lo incluye es por que tengo el icon de la luna y por lo tanto tendre que cambiarlo por el del sol
    // toggleIcon.src= "assets/icons/sun.svg";
    toggleText.textContent= "Light Mode";
} else { 
    toggleIcon.src= "assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
}
// en caso controlario lo mismo pero al reves

});
// eu.addEventListener('click', () => {
    //     let R = (Math.floor(Math.random() * 250) + 1);
    //     let G = (Math.floor(Math.random() * 250) + 1);
    //     let B = (Math.floor(Math.random() * 250) + 1);
    //     // color.innerHTML = `RGB: (${R}, ${G}, ${B})`;
    //     p.style.backgroundColor = `rgb(${R}, ${G}, ${B})`; 
    // });
    
    toggleColors.addEventListener("click", (e) => {
        // console.log(e.target.dataset.color);
        
         rootStyles.setProperty("--primary-color", e.target.dataset.color);
    
    });
// // setProperty de una propieda que se desea asignar y que primary-color va imprimir atraves del valor data que le esta llegando 
// // el dataset atribuye al data que le e dado al elemento 