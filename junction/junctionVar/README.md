# junctionVar {µ}s 
  Pour une présentation initiale voir [junction](../)
## Jonction sur un variant
  D'une façon imagée, comment faire des miroirs en pouvant changer l'origine du reflect depuis nimporte quel miroir.
  Le but est d'avoir la certitude que plusieur variables désignent bien le même objet même si l'objet désigné change.
  En plus on veut pouvoir changer cet objet depuis nimporte quelle variable (de ce groupe).  
**nom:**  
  Le premier nom était refVar qui vient de référence sur un variant
  Le nom de junctionVar, plus explicite, a été adopté 
### Projet:
**JunctionVar** permet de créer cette jonction avec les fonctionnalités suivantes:
>* Initialiser à volonté l'objet d'origine de la junction 
>* L'initialisation efface les anciennes propriétés d'instance 
>* Les propriétés d'instance d'une jonction:
>>* ne sont pas immédiatement répercutées sur l'objet d'origine
>>* Il est possible de les effacer à tous moments
>>* La répercussion sur l'objet d'origine se fait lors d'une nouvelle initialisation


Le fichier [junctionVar.js](junctionVar.js) inclut le code lib, append et raw.

**Deux méthodes sont disponibles:**
>    **junctionVar** utilise un objet qui hérite de l'origine  
>    **junctionVarF** utilise une fonction qui hérite de l'origine
>


