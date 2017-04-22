# junction
 
### L'idée:
En javascript la jonction simple existe.  
Le but des projets contenus ici est d'avoir plusieurs variables (déclarées var) qui désignent le même objet, même si l'objet désigné change. Il est aussi ajouté des fonctionnalités supplémentaire à la jonction.    
D'une façon imagée, comment faire des miroirs en pouvant changer l'origine du reflet depuis n’importe quel miroir.  
Généralement pour coder ce type de jonction on utilise un simple accesseur du genre: oneJunction.instanceMirror mais cela ne correspond pas à mes souhaits d’écriture. J'ai donc cherché une solution plus frontale et souple.   

**Comment**  
Javascript ne permet pas d’accéder à la référence réelle d'un objet ni de travailler sur la référence contenu dans la variable qui pointe sur un objet.   

**Première approche: fonction jonction qui hérite de l'origine**  
Il est actuellement impossible de faire un get/set sur un var, une jonction sera donc une fonction qui hérite de l'instance d'un objet à "mirrorer".  
La solution repose sur la modification du chaînage des prototypes d'une fonction par:  
    \_\_proto__ ou mieux setPrototypeOf(ofObject, newLinkProto)  
Il est à noter que cette approche oblige à utiliser la syntaxe d'une fonction  (ex:myJunction(oneObjet)) pour l'affectation au lieu de myJunction = oneObject 
L'utilisation d'une fonction empèche d'utiliser les noms de variables prototype et length. 
Cette solution, bien que fonctionnelle, est déconseillé car elle touche le chainage des prototype et peut poser des problèmes d'optimisation. J'ai donc cherché vers une autre direction plus conventionnelle.
    
**Deuxième approche: objet qui hérite de l'origine**  
Une junction est ici un objet qui hérite d'une instance à "mirrorer" et possède, conjointemet ou en tant que propriété, une fonction ou un setter nommé shitch_ qui permet de controler et changer l'instance héritée par la junction.
L'affectation d'une instance à un ensemble de junction passe par l'utilisation de la function switch
Simple à mettre en oeuvre mais le nom switch_ devient "réservé" et ne peut-être utilisé dans l'instance mirrorée.  

### Projets:
    Note:
    Les propriétés d'instances (propres) de la jonction sont séparées de l'object d'origine (du reflet).  
    Il faut prendre certaine précaution si l'on veut conserver les acquis (propriétés propres) d'une jonction.
    Attention:
    Tout est public (la sécurité est donc faible) utilisez des closures.  
>    [**junctionVar**](junctionVar/) permet de faire cette jonction de façon simple  
>    [**junctionTry**](junctionTry/) permet en plus de contrôler ce que deviennent les propriétés d'instances de la jonction   
>    [**junctionNotify**](junctionNotify/) ajoute la possibilité de contrôler la répercussion finale de la jonction par un callBack  
    
