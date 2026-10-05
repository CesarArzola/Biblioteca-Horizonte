console.log (`Conexión con JS exitosa...`);

const video = document.querySelector("#video");
const videoNuevo = "/Biblioteca%20Horizonte/static/video/video2.mp4";

video.addEventListener("mouseover", function () {
    video.src = videoNuevo;
    console.log(video.src)
});

video.addEventListener("mouseout", function () {
    video.src = "/Biblioteca%20Horizonte/static/video/video1.mp4";
        console.log(video.src)

});

function iniciar() {
    let correo = document.getElementById("email").value;
    if (correo === ""){
        alert(`Porfavor ingresa un correo`);
    } else {
        alert(`Bienvenido/a ${correo}`);
    }
};

let contador = 0;

function libroSeleccionado() {
    contador++
    document.getElementById(`aumento`).textContent = contador;
}