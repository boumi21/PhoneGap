var CadeauDAO = function(){

var cadeau1 = new Cadeau( "Pebble", "Pebble", 16, "Montre", 1);
var cadeau2 = new Cadeau( "Model", "Tesla", 8500, "Voiture électrique", 2);

listeCadeau = [cadeau1, cadeau2];
   /* listeCadeau = [
        {"id":1, "nom":"Pebble", "marque":"Pebble", "description":"Montre"},
        {"id":5, "nom":"Model 5", "marque":"Tesla", "description":"Voiture électrique"},
    ];*/


    this.getListeCadeau = function() {
    return listeCadeau;
    }


    this.getCadeauParId = function(id){
    	/*for (var cadeau in listeCadeau) {
    		if (cadeau.id == id) return cadeau;
    	}*/

    	for(var indiceCadeau in listeCadeau){
		    cadeau = listeCadeau[indiceCadeau];
		    if (cadeau.id == id) return cadeau;
		}
    }

}