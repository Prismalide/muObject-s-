# junction

### L'idée:
En javascript la junction simple existe.  
Le but des projets contenus ici est de complèter les possibilités de ces jonctions.  
D'une façon imagée, comment faire des miroirs en pouvant changer l'origine du reflect depuis nimporte quel miroir.  
Le but est d'avoir plusieur variables (déclarées var) qui désignent le même objet, même si l'objet désigné change.  

**Comment**
Javascript ne permet pas d'accèder à la référence réelle d'un objet ni de travailer sur le pointage d'une référence à un objet.   

**Première approche**  
    Il est actuellement impossible de faire un get/set sur un var, une jonction sera donc une fonction qui hérite de l'instance d'un objet à "mirrorer".  
    La solution repose sur la modification du chaînage des prototypes d'une fonction par:  
        \_\_proto__ ou mieux setPrototypeOf(ofObject, newLinkProto)  
    Il est à noter que cette approche oblige à utiliser la syntaxe d'une fonction  (ex:myJunction(oneObjet)) pour l'affectation au lieu de myJunction = oneObject 
    Cette solution, bien que fonctionnelle, est déconseillé car elle touche le chainage des prototype et peut poser des problèmes d'optimisation. J'ai donc cherché vers une autre direction plus conventionnelle.
    
**Deuxième approche**  
    Une junction est ici un objet qui hérite d'une instance à "mirrorer" et possède, conjointemet ou en tant que propriété, une fonction ou un setter nommé shitch_ qui permet de controler et changer l'instance héritée par la junction.
    
    Simple à mettre en oeuvre mais le nom switch_ ne peut-être utilisé (dans le cadre d'une jointion) et l'affectation d'une instance à un ensemble de junction passe par l'utilisation de la function switch

### Projets:
    Note:
    Les propriétés d'instances (propres) de la junction sont séparées de l'object d'origine (du reflet).  
    Il faut prendre certaine précaution si l'on veut conserver les acquis (propriétés propres) d'une jonction avant de changer d'instance pointée par la jonction.
    Attention:
    Tout est public (la sécurité est donc faible) utilisez des closures.
>    **junctionVar** permet de faire cette junction de façon simple
>    **junctionTry** permet en plus de controler ce que deviennent les propriétés d'instances de la junction 
>    **junctionNotify** ajoute la possibilité de controler la répercution finale de la junction par un callBack  
    
