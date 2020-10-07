class VueEpicerie{
  constructor(){
    this.html = document.getElementById("html-vue-epicerie").innerHTML;
    this.epicerie = null;
  }

  initialiserEpicerie(epicerie){
    this.epicerie = epicerie;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("epicerie-nom").innerHTML = this.epicerie.nom;
    document.getElementById("epicerie-marque").innerHTML = this.epicerie.marque;
    document.getElementById("epicerie-description").innerHTML = this.epicerie.description;
  }

}
