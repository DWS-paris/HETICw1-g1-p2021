/* 
Charger du contenu HTML dans l'index.html
*/
    $('main').load( './partials/home.html #toLoad', () => {

        $('section').fadeIn(3000, () => {
            alert('Fin du FadeIn');
        });

    });    
//