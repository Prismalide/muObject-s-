/* easyProto.js *//*09/2016
/* attached to muObjects/proto Projects from prismalide.com 
/* license lib code: CC BY 
/* license other : CC BY ND
/* version: 1-*
/* invasion lib: mu.easyProto
/* compatibility: ES6 IE>10
/***/
/*
                                        \   /
                                      lib   code
                                        /   \     
*/
    function lib ( libObj ) {
        libObj. Proto =  function (  ) {
            
            }
    //  debut ... autoClosure ... easyProto ...
        libObj. easyProto = ( function (  ) {
/****\\\                                     
/* gestion----des----Protos----|
/****///                            
            /// --- memos --- Protos ---->
            var Proto = {}
            var numberOfProto = 0
            var numberOf = false
            var NameOf = false
            /// --- transit --- Protos --->
            var declareProto
            commandsInit( )
        //  retour ... autoClosure ... easyProto ...
settingsLine( )
easyProto_settingsLine( )
            return commandsLine // => en fin de code
/****\\\                                     
/* déclaration----du----Proto----|
/****///                            
            function declaredProto ( declared ) {
                var extends_ = declareProto. extends_
                var proto = {}, listAbstract = {}
                declareProto. proto = proto
                declareProto. listAbstract = listAbstract
                declareProto. declared = declared
                if ( declareProto. protoName ) Proto[ declareProto. protoName ] =  declareProto
                /// --- implement --- controle --->
                if ( declareProto. implements_ ) {
                    if ( typeof declareProto. implements_ == "string" ) {
                        if ( !Proto[ declareProto. implements_ ] ) { throw new Error( "Implement: '"+implement+"' inconnu!" ) }    
                        if ( !Proto[ declareProto. implements_ ].isInterface ) { throw new Error( "'"+implement+"' n'est pas une interface" ) }    
                        
                    } else { throw new Error( "type implement incompatible!" ) }
                    }
                /// --- instancier --- Proto
                instancesProto ( declareProto )
                var static_Privates = declareProto. static_Privates
                var EasyProto = declareProto. EasyProto
                var privateConstructor = declareProto. privateConstructor
                proto. constructor_ = undefined
                /// --- extend --- création --- héritage --- public --->
                if ( extends_){
                    /// héritage public
                    EasyProto. prototype = Object. create( extends_.prototype) // create permet de ne pas passer pas par le constructeur
                    Object. defineProperty( EasyProto. prototype, "constructor", { value : EasyProto } )
                    proto. constructor_ = function ( ) { proto. static_. chainings =   extends_.apply( this(), arguments ) } // constructeur proto par défaut avec extend
                    proto. super_ = function chainingsConstructor ( ) {
                        // ---  transmission --- externe --- du --- thisPublic --- ok --- sécurité --->
                         proto. static_. chainings = extends_.apply( this. static_. actualThisPrivate( ), arguments )
                        }
                    }
                proto. public_ = EasyProto. prototype // important! après EasyProto.prototype = ...
                proto. private_ = privateConstructor. prototype
                proto. _= static_Privates
                /// --- par --- défaut --- static --- est --- private --->
                proto. static_ = static_Privates 
                proto. static_ .private_ = static_Privates
                proto. static_ .public_ = EasyProto
                proto. abstract_ = {}
                proto. abstract_ .private_ = {}
                proto. abstract_ .public_ = {}
                declared( proto )
                if ( !proto. constructor_ ) proto. constructor_ = function ( ) { return } // constructeur proto par défaut
                listAbstract. abstractPriva = Object. getOwnPropertyNames ( proto. abstract_. private_ )
                listAbstract. abstractPubli = Object. getOwnPropertyNames ( proto. abstract_. public_ )
                if ( listAbstract. abstractPriva. length > 0 || listAbstract. abstractPriva. length > 0 ) asAbstract = true
                commandsInit () // pour prochaine ligne de commande easyProto
                /// --- transmission --- constructeur --- public --- ok --- sécurité --->
                return declareProto. EasyProto
                }
/****\\\                                     
/* constructeurs----du----Proto----|
/****///                            
            function instancesProto ( declareProto ){
                declareProto. static_Privates = static_Privates
                declareProto. privateConstructor = privateConstructor
                declareProto. EasyProto = EasyProto
                var proto = declareProto. proto
                return
                /// --- instance --- static --- private --->
                function static_Privates ( actualThis ) { // static private singleton
                    if ( actualThis ){ actualThis(); return static_Privates. actualThisPrivate } // actualThisPrivate initialisé par this() soit thisPublic()
                    return EasyProto // static-public idem constructeur public
                    }
                /// --- constructeur --- private --->
                function privateConstructor ( thisPublic ) { // constructeur private 
                    function thisPrivate ( ) { return thisPublic }
                    Object. setPrototypeOf ( thisPrivate, this ) // déconseillé par MDN
                    thisPrivate. prototype. constructor = thisPrivate
                    return thisPrivate // thisPrivate() devient l'instance private de l'objet
                    }
                /// --- constructeur --- public --->
                function EasyProto ( ) { // constructeur public et espace static public
                    /// instance public
                    var thisPublic = ( proto.super_ )
                        ? function thisPublicExtend ( ) { static_Privates. actualThisPrivate = instancePrivate; chainings ( ); return thisPublic }
                        : function thisPublicFinale ( ) { static_Privates. actualThisPrivate = instancePrivate; return thisPublic }
                    /// la fonction thisPublic hérite de this standard
                    Object. setPrototypeOf ( thisPublic, this ) // déconseillé par MDN
                    /// --- instance --- private --->
                    var instancePrivate = new privateConstructor( thisPublic )
                    static_Privates. actualThisPrivate = instancePrivate
                    /// --- appel --- constructeur --- déclaré --- et --- chainage --- des --- constructeur --->
                    proto. constructor_. apply( instancePrivate, arguments ) // transmission interne ok sécurité
//TODO: prévoire un chainage directect unique vers le Proto concerné
//  il est inutil de chainer sur tous les ascendants.
                    var chainings = static_Privates. chainings // affecté par super_ dans constructor_
                    /// --- chainage --- propagation --- this() --- actualThisPrivate(s) --->
                    if ( !( chainings instanceof EasyProto ) ) { chainings = function(){}; return thisPublic }
                    /// --- retourne --- function --- thisPublic --- comme --- instance --- this --->
                    return thisPublic
                    }
                }
/****\\\                                     
/* commande----line----easyProto----|
/****///                            
            /// --- départ --- ligne --- de --- commande --->
            function commandsInit ( ){
                defineNextCommands( declaredProto )
                defineNextCommands( commandsLine )
                }
            function commandsLine ( nomProto ) {
                declareProto = {}
                declareProto.protoName = undefined
                declareProto.implements_ = undefined
                declareProto.abstract_ = undefined
                declareProto.interface_ = undefined
                if ( typeof nomProto == "function" ) return declaredProto ( nomProto ) 
                // déclaration nom du proto. Utilisation future nomProto evolution path/name 
                declareProto.protoName = nomProto
                //...
                return declaredProto
                }
            function defineNextCommands ( where ) {
                where.extends_ = extends_
                where.implements_ = implements_
                Object.defineProperty(
            /// --- abstract --- déclaration --->
                where, "abstract_",{configurable : true, get : function(){
                  if ( !declareProto.protoName ) throw new Error( "Un Proto abstract doit avoir un nom" )
                    declareProto.abstract_ = true
                    delete where.abstract_
                    return where
                    }})
                Object.defineProperty(
            /// --- interface --- déclaration --->
                where, "interface_",{configurable : true, get : function(){
                    if ( !declareProto.protoName ) throw new Error( "l'interface doit avoir un nom" )
                    declareProto.interface_ = true
                    delete where.abstract_
                    delete where.extends_
                    return where
                    }})
                }
            /// --- extend --- déclaration --->
            function extends_ ( extender ) { 
                declareProto.extends_ = extender
                delete declaredProto.extends_
                return declaredProto
                }
            /// --- implement --- déclaration --->
            function implements_ ( implementer ) {
                declareProto.implements_ = implementer
                delete declaredProto.implements_
                return declaredProto
                }

/****\\\
/* <----settingsLine---->
/****///
            function settingsLine ( objSettingLine ) {


                var allId = {} // all id : objSettingLine
                var root = {}
                var use
                var allUse = {} // allUse[id] :   
                var cp = root
                var actualId
                var presentCommands
                var progSettingsLine = {
                //  actuelles => ( cl=> commande ligne, cp=> commandes possibles, nc=> nom commande ) 
                    id: function id ( dataInit ) {
                        var stringId =  Object. keys( dataInit )[ 0 ]
                        if ( allId[ stringId ] ) throw new Error( "settingsLine doublon Id: '" + stringId + "'" )
                        actualId = allId[ stringId ] = {}
                        dataInit = dataInit[ stringId ]
                        actualId. init = dataInit
                        if ( dataInit. use instanceof Object )  dataInit. use = { }  //defaut use
                        if ( dataInit. exec ) cp = dataInit. exec
                        },
                    top: function top ( ) {
                        
                        },
                    other: function other ( ) {
                        
                        },
                    bottom: function bottom ( ) {
                        
                        },
                    out: function out ( ) {//sortir
                        
                        },
                    exit: function exit ( ) {//erreur
                        
                        },
                    use: function use ( data ) {
                        
                        },
                    exec: function exec ( data ) {
                        
                        },
                    args_os: function args_os ( dataInit ) { // function one_shot mémo arguments
                        /// --- phase --- init ---
                        if ( dataInit. init ) cp[ nc ] = undefined
                        /// --- phase --- exec ---
                        dataInit.exec.value = true
                        dataInit.value = true
                        cp[ nc ] = ( dataInit. exec ) ? x_os_exec. bind( dataInit.exec ) : x_os. bind( dataInit )
                        },
                    on_os: function on_os ( dataInit ) { // one_shot config with true
                        /// --- phase --- init ---
                        if ( dataInit. init ) cp[ nc ] = undefined
                        /// --- phase --- exec ---
                        Object. defineProperty(
                        cp, nc, { configurable : true, get : ( dataInit. exec ) ? x_os_exec. bind( dataInit. exec ) : x_os. bind( dataInit ) } )
                        },
                    }
                /// --- settingsLine --- fonctions --- utils --- 
                function x_os ( data ) { use[ nc ] = ( this. value ) ? true : data; delete cp[ nc ] }
                function x_os_exec ( data ) { if ( this ( ) ) { use[ nc ] = ( this. value ) ? true : data; delete cp[ nc ] } }
                /// --- 
                }
        
/****\\\                                     
/* commande line----easyProto----|
/****///                            
            function easyProto_settingsLine() {
                return {
                    id:{ debut: {use: declareProto, exec: function ( actual_cl ,use ) {
                        use = {}
                        } } },
                    top: function ( nomProto ) { // fonction sans nom en premier => ( "nomDuProto" )
                        if ( typeof nomProto == "function" ) return declaredProto ( nomProto ) 
                        // déclaration nom du proto. Utilisation future nomProto evolution path/name 
                        use. protoName = nomProto
                        //...
                        },
            //                into: false, // une, ou liste de, fonction(s) sans nom  après top:
            //                sequence: false,
                    other: {
                        implements_: { args_os:{ init: false } }, 
                        extends_: { args_os:{ init: false } },
                        abstract_: { on_os:{ init: false, exec: function () {
                            if ( !declareProto. protoName ) throw new Error( "Un Proto abstract doit avoir un nom: easyProto('nom')" )
                            delete declareProto. interface_
                            } } },
                        interface_: { on_os: { init: false, exec: function () {
                            if ( !declareProto. protoName ) throw new Error( "Une interface doit avoir un nom: easyProto('nom')" )
                            delete declareProto. implements_
                            delete declareProto. extends_
                            delete declareProto. abstract_
                            } } }
                        },
                    bottom : declaredProto, // fonction sans nom de fin de commandes => ()
                    out : declaredProto,
            //                exit : function () {},
                    }
                }
            
        //  fin ... autoClosure ... easyProto ...
            })()
/*
                                        \   /
                                      lib   fin
                                        /   \     
*/      }

/*
                                        \   /
                                      FIN   code
                                        /   \     
*/
