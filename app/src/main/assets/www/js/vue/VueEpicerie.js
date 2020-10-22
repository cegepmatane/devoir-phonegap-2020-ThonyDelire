class VueEpicerie{
  constructor(){
    this.html = document.getElementById("html-vue-epicerie").innerHTML;
    this.epicerie = null;
    //this.actionModifierEpicerie = null;
  }

  initialiserEpicerie(epicerie){
    this.epicerie = epicerie;
  }
  /*initialiserActionModifierEpicerie(actionModifierEpicerie){
    this.actionModifierEpicerie = actionModifierEpicerie;
  }*/

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    //document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
    document.getElementById("epicerie-nom").innerHTML = this.epicerie.nom;
    document.getElementById("epicerie-marque").innerHTML = this.epicerie.marque;
    document.getElementById("epicerie-description").innerHTML = this.epicerie.description;
    
      
  }

  /*enregistrer(evenement){
    evenement.preventDefault();

    let id = this.epicerie.id;
    let nom = document.getElementById("epicerie-nom").value;
    let marque = document.getElementById("epicerie-marque").value;
    let description = document.getElementById("epicerie-description").value;

    this.actionModifierEpicerie(new Epicerie(id, nom, marque, description, null));

  }*/

}
