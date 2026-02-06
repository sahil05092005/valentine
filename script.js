const noBtn = document.getElementById("no");

noBtn.addEventListener("mousedown", function (e) {
  document.onmousemove = (ev) => {
    noBtn.style.left = ev.pageX + "px";
    noBtn.style.top = ev.pageY + "px";
  };
});

document.onmouseup = () => {
  document.onmousemove = null;
};
