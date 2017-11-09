var CadeauDAO = function(){


    listeCadeau = null;
    initialiser = function(){
        if(!listeCadeau && localStorage['cadeau']){
            listeCadeau = new Array();
            listeAnonyme = JSON.parse(localStorage['cadeau']);

            for(var indiceAnonyme in listeAnonyme){
                cadeauAnonyme = listeAnonyme[indiceAnonyme];
                cadeau = new Cadeau(cadeauAnonyme.nom, cadeauAnonyme.marque, cadeauAnonyme.prix, cadeauAnonyme.description, cadeauAnonyme.id);
                listeCadeau.push(cadeau);
            }
        } 
        if(!listeCadeau){
            listeCadeau = new Array();
        }
        
            
    }


    this.getListeCadeau = function(){
/*
        for(position in this.listeCadeau){
            var cadeau = this.listeCadeau[position];
        }*/
        return listeCadeau;
    }

    this.getCadeauParId = function(id){
        
        for(var indiceCadeau in listeCadeau){
            cadeau = listeCadeau[indiceCadeau];
            if (cadeau.id == id) return cadeau;
        }
    }

    trouverNouvelId = function(){
        maximum = 0;
        for(var indiceCadeau in listeCadeau){
            cadeau = listeCadeau[indiceCadeau];
            if (cadeau.id > maximum) maximum = cadeau.id;
        }
        return maximum+ 1;
    }

    this.ajouterCadeau = function(cadeau){
        console.log(cadeau);
        cadeau.id = trouverNouvelId();
        listeCadeau.push(cadeau);
        localStorage['cadeau'] = JSON.stringify(listeCadeau);
    }

    initialiser();

}