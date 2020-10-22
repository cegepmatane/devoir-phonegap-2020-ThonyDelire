﻿class EpicerieDAO{
  constructor(){

    this.listeEpicerie = [];
    //this.epicerie = null;

  }

  lister(){
    if(localStorage['epicerie']){
      this.listeEpicerie = JSON.parse(localStorage['epicerie']);
    }

    for(let position in this.listeEpicerie){
      let epicerie = new Epicerie(this.listeEpicerie[position].nom,
                              this.listeEpicerie[position].marque,
                              this.listeEpicerie[position].description,
                              this.listeEpicerie[position].id);

      this.listeEpicerie[epicerie.id] = epicerie;
    }

    return this.listeEpicerie;
  }

  ajouter(epicerie)
  {
    
    if(this.listeEpicerie.length > 0)
      epicerie.id = this.listeEpicerie[this.listeEpicerie.length-1].id + 1;
    else
      epicerie.id = 0;

    this.listeEpicerie[epicerie.id] = epicerie;
    localStorage['epicerie'] = JSON.stringify(this.listeEpicerie);
    console.log("JSON.stringify(this.listeEpicerie) : " + JSON.stringify(this.listeEpicerie));
  }

  modifier(epicerie)
  {
    this.listeEpicerie[epicerie.id] = null;

        console.log("JSON.stringify(this.listeEpicerie) : " + JSON.stringify(this.listeEpicerie));
        console.log("epicerie : " + epicerie.nom + epicerie.marque + epicerie.description + epicerie.id);

        this.listeEpicerie[epicerie.id] = epicerie;
        localStorage['epicerie'] = JSON.stringify(this.listeEpicerie);

        console.log("JSON.stringify(this.listeEpicerie) : " + JSON.stringify(this.listeEpicerie));
        
  }
  /*modifier = function(epicerie) {

    this.listeEpicerie[epicerie.id] = epicerie;
    localStorage['epicerie'] = JSON.stringify(this.listeEpicerie);
};*/

}















