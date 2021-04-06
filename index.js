let shopBoxOpen = false;

function helloWorld() {
  console.log("hello world");
}

$(document).ready(function () {
  $(".close").click(function (_event) {
    shopBoxOpen = false;
    $("#shop-box").toggle(false);
  });

  $(".shop-rob").click(function (_event) {
    shopBoxOpen = false;
    $("#shop-box").toggle(false);
    alert("Der Shop wird nun ausgeraubt!\nDie Polizei wird nun Informiert.");
  });
});

$(document).keydown(function (e) {
  if (e.keyCode == 114) {
    shopBoxOpen = !shopBoxOpen;
    $("#shop-box").toggle(shopBoxOpen);
  }
});
