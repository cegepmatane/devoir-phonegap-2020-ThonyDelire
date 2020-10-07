class Application {
  constructor(window, epicerieDAO, vueListeEpicerie, vueAjouterEpicerie, vueEpicerie){

    this.window = window;
    this.epicerieDAO = epicerieDAO;

    this.vueListeEpicerie = vueListeEpicerie;

    this.vueAjouterEpicerie = vueAjouterEpicerie;

    /*this.vueListeEpicerie.initialiserListeEpicerie(this.epicerieDAO.lister());
    this.vueListeEpicerie.afficher();*/
    this.vueAjouterEpicerie.initialiserActionAjouterEpicerie(epicerie =>this.actionAjouterEpicerie(epicerie));

    this.vueEpicerie = vueEpicerie;

    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeEpicerie.initialiserListeEpicerie(this.epicerieDAO.lister());
      this.vueListeEpicerie.afficher();

    }else if(hash.match(/^#ajouter-epicerie/)){

      this.vueAjouterEpicerie.afficher();

    }else{

      let navigation = hash.match(/^#epicerie\/([0-9]+)/);
      let idEpicerie = navigation[1];

      this.vueEpicerie.initialiserEpicerie(this.epicerieDAO.lister()[idEpicerie]);
      this.vueEpicerie.afficher();

    }
  }

  actionAjouterEpicerie(epicerie){
    this.epicerieDAO.ajouter(epicerie);
    this.window.location.hash = "#";

  }

}

new Application(window, new EpicerieDAO(), new VueListeEpicerie(), new VueAjouterEpicerie(), new VueEpicerie());

