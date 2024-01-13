var onClickShare = function (url, title) {
  navigator.share({
    url,
    title,
    text: "Trabalho de Robson Santana, desenvolvedor fullstack com experiência em React, NodeJS e outras tecnologias.",
  });
};

var onClickView = function (url) {
  window.open(url, "_blank");
};
