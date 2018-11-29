/* 
Créer un tableau contenant 4 prénoms
*/
    let usersCollection = [ `Robert Nesta`, `Peter`, `Bunny`, `Lee Scratch` ];
    
//

/* 
Boucle While
*/
    let i = 0;

    while( i < usersCollection.length ){
        console.log(`Salut ${usersCollection[i]}`);

        // Incrémenter i de 1
        i++;
    };
//

/* 
Boucle For
*/
    for( let i = 0; i < usersCollection.length; i++ ){
        console.log(`Salut ${usersCollection[i]}`);
    };
//

/* 
Boucle FOR ... OF
- Collection d'objet
*/
    for( let item of usersCollection ){
        console.log(`Salut ${item}`);
    };
//

/* 
Boucle FOR EACH
- Collection d'objet
*/
    // ES6
    usersCollection.forEach( item => {
        console.log(`Salut ${item}`);
    });

    // ES5
    usersCollection.forEach( function(item){
        console.log(`Salut ${item}`);
    });
//

/* 
Boucle MAP
- Collection d'objet
*/
    // ES6
    usersCollection.map( item => {
        console.log(`Salut ${item}`);
    });

    // ES5
    usersCollection.map( function(item){
        console.log(`Salut ${item}`);
    });
//