class VueModifierEpicerie{
constructor(){
    this.html = document.getElementById("html-vue-modifier-epicerie").innerHTML;
    this.epicerie = null;
    this.actionModifierEpicerie = null;
  }

  initialiserEpicerie(epicerie){
    this.epicerie = epicerie;
  }
  initialiserActionModifierEpicerie(actionModifierEpicerie){
  this.actionModifierEpicerie = actionModifierEpicerie;
}

afficher(){
  document.getElementsByTagName("body")[0].innerHTML = this.html;
  document.getElementById("epicerie-nom").value = this.epicerie.nom;
  document.getElementById("epicerie-marque").value = this.epicerie.marque;
  document.getElementById("epicerie-description").value = this.epicerie.description;
  document.getElementById("formulaire-modifier").addEventListener("submit",evenement =>this.enregistrer(evenement));
  
    
}

enregistrer(evenement){
  evenement.preventDefault();

  let id = this.epicerie.id;
  let nom = document.getElementById("epicerie-nom").value;
  let marque = document.getElementById("epicerie-marque").value;
  let description = document.getElementById("epicerie-description").value;

  this.actionModifierEpicerie(new Epicerie(nom, marque, description, id));

}


}