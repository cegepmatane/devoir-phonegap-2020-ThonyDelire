class Application {
  constructor(window, epicerieDAO, vueListeEpicerie, vueAjouterEpicerie){

    this.window = window;
    this.epicerieDAO = epicerieDAO;

    this.vueListeEpicerie = vueListeEpicerie;

    this.vueAjouterEpicerie = vueAjouterEpicerie;

    /*this.vueListeEpicerie.initialiserListeEpicerie(this.epicerieDAO.lister());
    this.vueListeEpicerie.afficher();*/
    this.vueAjouterEpicerie.initialiserActionAjouterEpicerie(epicerie =>this.actionAjouterEpicerie(epicerie));

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

    }
  }

  actionAjouterEpicerie(epicerie){
    this.epicerieDAO.ajouter(epicerie);
    this.window.location.hash = "#";

  }

}

new Application(window, new EpicerieDAO(), new VueListeEpicerie(), new VueAjouterEpicerie());

