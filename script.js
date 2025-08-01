function togglemode(){
    const html = document.documentElement
     
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")){
        img.setAttribute("src",   "./assets/lightttt.png")
    } else{
        img.setAttribute("src",   "./assets/dsdads.png")
    }



}

const imagemPerfil = document.querySelector("#profile img");

imagemPerfil.addEventListener("click", () => {
  imagemPerfil.classList.add("animar");

  setTimeout(() => {
    imagemPerfil.classList.remove("animar");
  }, 400);
});