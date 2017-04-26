# proto
    Aide à la programmation objet en javascript
### Origine des projets
L'idée de départ est de pouvoir déclarer en javascript des prototypes privés. A la mise en œuvre est apparu la possibilité d'inclure certains concepts utilisés dans les class.  
Plusieurs implémentations étaient possibles d’où l'ensemble des projets présents ici.  
### Projets:  
> [*easyProto*](../../easyProto/proto/easyProto/) par "chaînage des privates" et this une fonction  
> [*bindProto*](../../bindProto/proto/bindProto/) par bind sur les méthodes publics  

Le mot proto est choisi, à la place de Class, pour ne pas oublier la différence.   
En javascript les membres et les héritages d'un objet sont publics. La Class dans sont utilisation habituelle en POO garantit (entre autre) un niveau supérieur de sécurité et de contrôle.  
Tous les mots réservés utilisés en dehors du moteur javascript seront écrits en ajoutant un underscore à la fin du mot (private_, static_, extends_, new_ ...) 
### Précision sur mes éléments de langage en POO Javascript
L'approche de la POO, en javascript, ne peut se faire comme avec les Class classiques:  
    - L'absence de gestion de droits d'accès aux données (private, protected ...) oblige à jongler avec la porté des variables et les closures pour mettre en place un minimum de sécurité.  
    - L'héritage est implémenté par prototype ou un objet est géré par deux espaces, par ordre d'exploration, membres d'instance (propre) et membres prototype (\_\_proto__, le chaînage des prototypes, commun à chaque objet de même famille).  
    - Les membres sont publics. Ils peuvent-être un accesseur, une variable, une méthode (fonction), un getter ou un setter (forme d'accesseur).  
    - Un accesseur est soit un objet (ex: this, that, self, ou tout autre espace de nom), soit une fonction (généralement de contrôle en renvoyant, ou non un accès)  
    - Une variable fait référence à une valeur (attribut), une propriété, une méthode (fonction) ou un objet.  
    - Un getter et un setter (qui définissent aussi une propriété) sont des fonctions qui permettent de gérer l'accès à une variable inaccessible de l'extérieur et de ne pas écrire les parenthèses de celles-ci dans une expression d'affectation.  
 