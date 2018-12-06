/* 
Créer une fonction pour manipuler la NAV
*/
    const initNav = ( page ) => {

        // Capter le clic sur le BUTTON de la NAV
        $(`#${page}Btn`).click( () => {
            // Charger le contenu dans la balise MAIN
            $('main').load( `./partials/${page}.html`)
        });

    };
//

/* 
Lancer les fonction sur le BUTTON de la NAV
*/
    initNav( 'home' );
    initNav( 'portfolio' );
    initNav( 'contacts' );
//