var AjouterCadeauVue = function(){
	this.cadeau = null;
	this.afficher = function(){

		this.cadeau = null;
		$("body").html(AjouterCadeauVue.pageAjouterCadeau);
		$("#formulaire-ajouter").on("submit", function(e){

			var nom = $("#nom").val();
			var marque = $("#marque").val();
			var description = $("#description").val();
			this.cadeau = new Cadeau(nom, marque, prix, description);
			window.location.hash = "#AjouterCadeauVue-->NouveauCadeau";
			e.preventDefault();

		});

		
	}
}

AjouterCadeauVue.pageAjouterCadeau = $("#page-ajouter-cadeau").html();