/* junctionVar.js *//*09/2016
/* attached to muObject project from prismalide.com 
/* license lib and append code: CC BY 
/* license raw code: CC0
/* license other : CC BY ND
/* version: 1-*
/* invasion append: Object.junctionVar
/* invasion lib: mu.junctionVar
/* compatibility: ES6 IE>10
/***/

/*
                                        \   /
                                   append   code
                                        /   \     
*/
//idem lib code mais sur Object (pour libObj)

/*
                                        \   /
                                      lib   code
                                        /   \     
*/
    function lib(libObj){
        libObj.junctionVarF = function (obj){
            var fp = Object.getOwnPropertyNames(junctionVarF).reduce(function(m,c){m[c]=true; return m},{})
            function junctionVarF(obj){
                //retourne toujours l'origine précédente
                //obj=>object: mise à jour reflet d'origine, clear propriétés d'instance junction et changement de reflet, 
                //obj=>"": clear propriétés d'instance junction
                //  note: pour ne pas mettre à jour reflet d'origine, faire un clear avant changement de reflet
                var tp = Object.getOwnPropertyNames(junctionVarF)//IE9 oki plus tard utiliser getOwnPropertyDescriptors => not IE
                var origine = Object.getPrototypeOf(junctionVarF)//IE>10
                if(obj instanceof Object){
                        for (var op in tp) {if (!fp[tp[op]]) {origine[tp[op]] = junctionVarF[tp[op]]; delete junctionVarF[tp[op]]}}
                        Object.setPrototypeOf(junctionVarF, obj)//IE>10
                        }
                if(obj==""){ for (var op in tp) {if (!fp[tp[op]]) {delete junctionVarF[tp[op]]}}}
                return origine
                }
            if (!obj)obj ={}
            junctionVarF(obj)
            return junctionVarF
            }
        }
/*
                                        \   /
                                      raw   code
                                        /   \     
*/
    function raw(){ // pas de gestion du clear ni mise à jour origine
        //écritiure:
        oneJunctionVarF = function (obj){//simple sans controle ni mise à jours origine reflet
            var propertyNames = Object.getOwnPropertyNames(oneJunctionVarF)
            for (var i in propertyNames) {delete oneJunctionVarF[propertyNames[i]]}
            Object.setPrototypeOf(oneJunctionVarF, obj)
            }
        myJunctionVarF = function (obj){//pas de gestion du clear mais mise à jour de l'origine et return origine reflet avant changement d'origine
            var origine = Object.getPrototypeOf(myJunctionVarF)
            if(typeof obj=="object"){
                var propertyNames = Object.getOwnPropertyNames(myJunctionVarF)
                for (var i in propertyNames) {origine[propertyNames[i]] = myJunctionVarF[propertyNames[i]]; delete myJunctionVarF[propertyNames[i]]}
                delete origine.prototype
                delete origine.length
                Object.setPrototypeOf(myJunctionVarF, obj)
                return origine
                }
            }
        }
/*
                                        \   /
                                      end   code
                                        /   \     
*/


