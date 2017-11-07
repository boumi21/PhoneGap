var CadeauVue = function(cadeau){
	this.afficher = function(){
		//var pageCadeau = $("#page-cadeau").html();
		console.log("CadeauVue-->"+cadeau.id);
		$("body").html(CadeauVue.pageCadeau);

		$("#cadeau-nom").html(cadeau.nom);
		$("#cadeau-marque").html(cadeau.marque);
		$("#cadeau-description").html(cadeau.description);

		
	}
}

CadeauVue.pageCadeau = $("#page-cadeau").html();