var applicationListeNoel = {
	cadeauDAO : new CadeauDAO(),
	ajouterCadeauVue : new AjouterCadeauVue(),

	//Premiere fonction
	lancer:function(){
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		this.naviguer();
	},

	naviguer:function(){
		var ancre = window.location.hash;
		if(!ancre){
			console.log(cadeau)
			var listeCadeau = this.cadeauDAO.getListeCadeau();

			var listeCadeauVue = new ListeCadeauVue(listeCadeau);
			listeCadeauVue.afficher();
		}
		else if (ancre.match(/^#ajouter-cadeau/)) {

			this.ajouterCadeauVue.afficher();

		} else if (ancre.match(/^#AjouterCadeauVue:NouveauCadeau/)) {

			var cadeau = this.ajouterCadeauVue.cadeau;
			this.cadeauDAO.ajouterCadeau(cadeau);
			window.location.hash = "#";

		}else {
			var trouvaille = ancre.match(/^#cadeau\/([0-9]+)/);
			var id = trouvaille[1];
			var cadeau = this.cadeauDAO.getCadeauParId(id);
			console.log(cadeau)
			var cadeauVue = new CadeauVue(cadeau);

			cadeauVue.afficher();

		} 


	}
}

applicationListeNoel.lancer();












//var listeCadeauVue = new ListeCadeauVue();

//listeCadeauVue.afficher();

/*var cadeauDAO = new CadeauDAO();
var listeCadeaux = cadeauDAO.getListeCadeau();

//var cadeau = listeCadeaux[0];
var cadeau = cadeauDAO.getCadeauParId(1);
var cadeauVue = new CadeauVue(cadeau);

cadeauVue.afficher();*/