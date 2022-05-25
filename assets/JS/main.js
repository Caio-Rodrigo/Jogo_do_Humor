window.onload = function () {
  let btnAll = document.querySelector("#btn");

   btnAll.addEventListener("click", function() {
    let texts = document.querySelector("#txt");
    let img = document.querySelector("#imagen");

    btnAll.value++

    if (btnAll.value == "1") {
      texts.innerText = "Posso te contar uma piada?";
      img.setAttribute("src", "assets/img/normal.jpg");
      // btnAll.value = "1";
    } else if (btnAll.value == "2") {
      texts.innerText =
        "Qual o nome da ciência que transforma cachorro em gato?";
      img.setAttribute("src","assets/img/feliz.jpg" );
      // btnAll.value = "2";
    } else if (btnAll.value == "3") {
      texts.innerText = "Au que mia";
      img.setAttribute("src", "assets/img/fala_serio.jpg");
      // btnAll.value = "3";
    } else if (btnAll.value == "4") {
      texts.innerText = ";D, Muito Obrigado, até uma proxima!";
      img.setAttribute("src", "assets/img/sacanagem.jpg");
      btnAll.value = "0";
    }
  })
};
