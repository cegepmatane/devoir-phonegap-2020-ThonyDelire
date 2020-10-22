class Application {
  constructor(window, epicerieDAO, vueListeEpicerie, vueAjouterEpicerie, vueModifierEpicerie, vueEpicerie){

    this.window = window;
    this.epicerieDAO = epicerieDAO;

    this.vueListeEpicerie = vueListeEpicerie;

    this.vueAjouterEpicerie = vueAjouterEpicerie;

    this.vueModifierEpicerie = vueModifierEpicerie;

    this.vueEpicerie = vueEpicerie;

    /*this.vueListeEpicerie.initialiserListeEpicerie(this.epicerieDAO.lister());
    this.vueListeEpicerie.afficher();*/

    this.vueAjouterEpicerie.initialiserActionAjouterEpicerie(epicerie =>this.actionAjouterEpicerie(epicerie));

    this.vueModifierEpicerie.initialiserActionModifierEpicerie(epicerie =>this.actionModifierEpicerie(epicerie));
    
    //this.window.addEventListener("hashchange", () =>this.naviguer());

    //this.naviguer();

    document.addEventListener('deviceready', ()=>this.initialiserNavigation(), false);
  }

  initialiserNavigation(){
    this.window.addEventListener("hashchange", () =>this.naviguer());

    setTimeout(() =>this.naviguer(), 3000);
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeEpicerie.initialiserListeEpicerie(this.epicerieDAO.lister());
      this.vueListeEpicerie.afficher();

    }else if(hash.match(/^#ajouter-epicerie/)){

      this.vueAjouterEpicerie.afficher();

    }else if(hash.match(/^#modifier-epicerie\/([0-9]+)/)){

      let navigation = hash.match(/^#modifier-epicerie\/([0-9]+)/);
      let idEpicerie = navigation[1];

      this.vueModifierEpicerie.initialiserEpicerie(this.epicerieDAO.lister()[idEpicerie]);
      this.vueModifierEpicerie.afficher();

    }
    else{

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
  actionModifierEpicerie(epicerie){
    this.epicerieDAO.modifier(epicerie);
    this.window.location.hash = "#";

  }

}

new Application(window, new EpicerieDAO(), new VueListeEpicerie(), new VueAjouterEpicerie(), new VueModifierEpicerie(), new VueEpicerie());

