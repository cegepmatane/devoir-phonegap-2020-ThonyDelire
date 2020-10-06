class EpicerieDAO{
  constructor(){

    this.listeEpicerie = [{nom:"pomme", marque:"macintosh", description:"Prete a manger", id:0},
                          {nom:"piment", marque:"jalapenio", description:"Tres piquant", id:1},
                          {nom:"pain", marque:"pom", description:"Tres frais", id:2}]

  }

  lister(){

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
  }

}















