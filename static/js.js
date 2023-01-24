

// const boton = document.querySelector('#boton')
// const menu = document.querySelector('#menu')
// boton.addEventListener('click', () =>{
//   console.log('mediste click')
//   menu.classList.toggle('hidden')
// } )


// // grab everything we need
// const btn = document.querySelector(".mobile-menu-button");
// const sidebar = document.querySelector(".sidebar");

// // add our event listener for the click
// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("-translate-x-full");
// });

document.getElementById('nav-toggle').onclick = function(){
  document.getElementById("nav-content").classList.toggle("hidden");
 
}



