/* junctionNotify.js *//*09/2016
/* attached to muObject project from prismalide.com 
/* license lib and append code: CC BY 
/* license other : CC BY ND
/* version: 1-*
/* invasion append: Object.junctionNotify
/* invasion lib: mu.junctionNotify
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
        libObj.junctionNotifyF = function (obj){
            var fp = Object.getOwnPropertyNames(junctionNotifyF).reduce(function(m,c){m[c]=true; return m},{})
            var callControl = ""
            function junctionNotifyF(obj, abort, callBack){
                //retourne l'origine précédente, false en cas de refus d'action par callBack ou un objet retourné par callBack (qui s'occupe de tout)
                //abort et callBack sont en option 
                //un callBack (enregistré) si il existe est toujours appelé en début d'action    
                //obj=>object: changement origine du reflet, defaut (sans abort) maj ancienne origine et clear propriétés d'instance junction
                //obj=>"": clear propriétés d'instance junction
                //  abort=>true: clear propriétés d'instance junction et pas de maj ancienne origine  
                //  abort=>false garder propriétés d'instance sur la junction et maj ancienne origine
                //      callBack=>par défaut, le callBack précédent, si il existe est utilisé
                //      callBack=>"": pas ou plus de callBack
                //      callBack=>uneFonction: elle permet de valider ou non l'acttion sur junction.
                //                  Elle reçoit junctionNotifyF, obj, et abort
                //                  Elle retourne true ou false pour valider l'action, ou un objet qui peut être l'origine précédente si elle s'occupe de tout  
                var tp = Object.getOwnPropertyNames(junctionNotifyF)//IE9 oki plus tard utiliser getOwnPropertyDescriptors => not IE
                var origine = Object.getPrototypeOf(junctionNotifyF)
                var callRep = typeof callControl == "function"?callBack(junctionNotifyF, obj, abort):true
                if (typeof callBack == "function" || callBack == "" )callControl = callBack
                if (callRep !== true) return callRep                
                if(typeof obj=="object"){
                    Object.setPrototypeOf(junctionNotifyF, obj)//IE>10
                    if (arguments.length<2) {for (var op in tp) {
                        if (!fp[tp[op]]) {origine[tp[op]] =  junctionNotifyF[tp[op]]; delete junctionNotifyF[tp[op]]}}//defaut: maj origine et maintient 
                        return origine
                        }
                    if (abort === true){for (var op in tp) {if (!fp[tp[op]]) {delete junctionNotifyF[tp[op]]}}; return origine}//pas de maintient ni maj origine
                    for (var op in tp) {if (!fp[tp[op]]) {origine[tp[op]] =  junctionNotifyF[tp[op]]}}//maintient et maj origine
                    return origine
                    }
                if(obj==""){for (var op in tp) {if (!fp[tp[op]]) {delete junctionNotifyF[tp[op]]}}}
                return origine
                }
            if (!obj)obj = {}
            junctionNotifyF(obj)
            return junctionNotifyF
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
