document.querySelector(".red").addEventListener("mouseenter", function () {
  document.querySelector(".ligne").style.visibility="visible";
  document.querySelector(".film").style.visibility="visible";
  document.querySelector(".triangle").style.visibility="visible";
});

document.querySelector(".red").addEventListener("mouseout", function () {
  document.querySelector(".ligne").style.visibility="hidden";
  document.querySelector(".film").style.visibility="hidden";
  document.querySelector(".triangle").style.visibility="hidden";
});
