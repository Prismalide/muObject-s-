/* junctionTry.js *//*09/2016
/* attached to muObject project from prismalide.com 
/* license lib and append code: CC BY 
/* license other : CC BY ND
/* version: 1-*
/* invasion append: Object.junctionTry
/* invasion lib: mu.junctionTry
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
        libObj.junctionTryF = function (obj){
            var fp = Object.getOwnPropertyNames(junctionTryF).reduce(function(m,c){m[c]=true; return m},{})
            function junctionTryF(obj, abort){
                //retourne toujours l'origine précédente
                //abort est en option 
                //obj=>object: changement origine du reflet, defaut (sans abort) maj ancienne origine et clear propriétés d'instance junction
                //obj=>"": clear propriétés d'instance junction
                //  abort=>true: clear propriétés d'instance junction et pas de maj ancienne origine  
                //  abort=>false garder propriétés d'instance sur la junction et maj ancienne origine
                var tp = Object.getOwnPropertyNames(junctionTryF)//IE9 oki plus tard utiliser getOwnPropertyDescriptors => not IE
                var origine = Object.getPrototypeOf(junctionTryF)
                if(typeof obj=="object"){
                    Object.setPrototypeOf(junctionTryF, obj)//IE>10
                    if (arguments.length<2) {for (var op in tp) {
                        if (!fp[tp[op]]) {origine[tp[op]] =  junctionTryF[tp[op]]; delete junctionTryF[tp[op]]}}//defaut: maj origine et maintient 
                        return origine
                        }
                    if (abort === true){for (var op in tp) {if (!fp[tp[op]]) {delete junctionTryF[tp[op]]}}; return origine}//pas de maintient ni maj origine
                    for (var op in tp) {if (!fp[tp[op]]) {origine[tp[op]] =  junctionTryF[tp[op]]}}//maintient et maj origine
                    return origine
                    }
                if(obj==""){for (var op in tp) {if (!fp[tp[op]]) {delete junctionTryF[tp[op]]}}}
                return origine
                }
            if (!obj)obj = {}
            junctionTryF(obj)
            return junctionTryF
            }
        }
/*
                                        \   /
                                      raw   code
                                        /   \     
*/
//aucun

/*
                                        \   /
                                      end   code
                                        /   \     
*/
