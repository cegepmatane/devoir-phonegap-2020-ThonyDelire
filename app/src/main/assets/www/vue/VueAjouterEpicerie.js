class VueAjouterEpicerie{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-epicerie").innerHTML;
    this.actionAjouterEpicerie = null;
  }

  initialiserActionAjouterEpicerie(actionAjouterEpicerie){
    this.actionAjouterEpicerie = actionAjouterEpicerie;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let nom = document.getElementById("epicerie-nom").value;
    let marque = document.getElementById("epicerie-marque").value;
    let description = document.getElementById("epicerie-description").value;

    this.actionAjouterEpicerie(new Epicerie(nom, marque, description, null));

  }

}





















