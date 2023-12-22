function toogleBackground(element){
  if(element.style.backgroundColor !== "navy"){
    element.style.transition = "background-color 1.2s"
    element.style.backgroundColor = "navy";

    setTimeout(function() {
      element.style.transition = "background-color 1.3s";
      element.style.backgroundColor = "";
    }, 2000);

  }else { 
    element.style.transition = "background-color 1.3s"
    element.style.backgroundColor = "";
  }
}
