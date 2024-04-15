const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
myImage.setAttribute("src", "imagens/cinestoico.jpg");
  } else {myImage.setAttribute("src", "imagens/cinestoico2.jpg");
  }
};