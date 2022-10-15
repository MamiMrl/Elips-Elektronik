function tabFunction_2() {
  var element1 = document.getElementById("solutionsTab");
  element1.classList.add("solutions-active");
  var element2 = document.getElementById("servicesTab");
  element2.classList.remove("services-active");
}

function tabFunction_1() {
  var element2 = document.getElementById("servicesTab");
  element2.classList.add("services-active");
  var element1 = document.getElementById("solutionsTab");
  element1.classList.remove("solutions-active");
}

tabFunction_1();
