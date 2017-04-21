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
        libObj.junctionVar = function (obj){
            var fp = Object.getOwnPropertyNames(junctionVar).reduce(function(m,c){m[c]=true; return m},{})
            function junctionVar(obj){
                //retourne toujours l'origine précédente
                //obj=>object: mise à jour reflet d'origine, clear propriétés d'instance junction et changement de reflet, 
                //obj=>"": clear propriétés d'instance junction
                //  note: pour ne pas mettre à jour reflet d'origine, faire un clear avant changement de reflet
                var tp = Object.getOwnPropertyNames(junctionVar)//IE9 oki plus tard utiliser getOwnPropertyDescriptors => not IE
                var origine = Object.getPrototypeOf(junctionVar)//IE>10
                if(obj instanceof Object){
                        for (var op in tp) {if (!fp[tp[op]]) {origine[tp[op]] = junctionVar[tp[op]]; delete junctionVar[tp[op]]}}
                        Object.setPrototypeOf(junctionVar, obj)//IE>10
                        }
                if(obj==""){ for (var op in tp) {if (!fp[tp[op]]) {delete junctionVar[tp[op]]}}}
                return origine
                }
            if (!obj)obj ={}
            junctionVar(obj)
            return junctionVar
            }
        }
/*
                                        \   /
                                      raw   code
                                        /   \     
*/
    function raw(){
        //écritiure:
        oneJunctionVar = function (obj){//simple sans controle ni mise à jours origine reflet
            var propertyNames = Object.getOwnPropertyNames(oneJunctionVar)
            for (var i in propertyNames) {delete oneJunctionVar[propertyNames[i]]}
            Object.setPrototypeOf(oneJunctionVar, obj)
            }
        myJunctionVar = function (obj){//simple avec controle object mise à jour et return origine reflet avant changement d'origine
            var origine = Object.getPrototypeOf(myJunctionVar)
            if(typeof obj=="object"){
                var propertyNames = Object.getOwnPropertyNames(myJunctionVar)
                for (var i in propertyNames) {origine[propertyNames[i]] = myJunctionVar[propertyNames[i]]; delete myJunctionVar[propertyNames[i]]}
                Object.setPrototypeOf(myJunctionVar, obj)
                return origine
                }
            }
        }
/*
                                        \   /
                                      end   code
                                        /   \     
*/
// pour test:
    if (!mu)var mu = {}
    lib(mu)//active le module
    lib(Object)//active append sur Object
    var oneJunctionVar
    var myJunctionVar
    raw()//Raw, (exemple sur myJunctionVar non générique)

