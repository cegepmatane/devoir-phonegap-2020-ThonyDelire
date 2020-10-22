class VueListeEpicerie{
  constructor(){
    this.html = document.getElementById("html-vue-liste-epicerie").innerHTML;
    this.listeEpicerieDonnee = null;
  }

  initialiserListeEpicerie(listeEpicerieDonnee){
    this.listeEpicerieDonnee = listeEpicerieDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listeEpicerie = document.getElementById("liste-epicerie");
    const listeEpicerieItemHTML = listeEpicerie.innerHTML;
    let listeEpicerieHTMLRemplacement = "";

    for(var numeroEpicerie in this.listeEpicerieDonnee){
      let listeEpicerieItemHTMLRemplacement = listeEpicerieItemHTML;
      listeEpicerieItemHTMLRemplacement = listeEpicerieItemHTMLRemplacement.replace("{Epicerie.id}",this.listeEpicerieDonnee[numeroEpicerie].id);
      listeEpicerieItemHTMLRemplacement = listeEpicerieItemHTMLRemplacement.replace("{Epicerie.id}",this.listeEpicerieDonnee[numeroEpicerie].id);
      listeEpicerieItemHTMLRemplacement = listeEpicerieItemHTMLRemplacement.replace("{Epicerie.nom}",this.listeEpicerieDonnee[numeroEpicerie].nom);
      listeEpicerieHTMLRemplacement += listeEpicerieItemHTMLRemplacement;
    }

    listeEpicerie.innerHTML = listeEpicerieHTMLRemplacement;
  }

}
