/* 
Sélectionner des balise
*/
    // Version JS
    let myJStitle = document.getElementsByTagName('h1');
    let myJSclass = document.getElementsByClassName('myUnderTitle');
    let myJSid = document.getElementById('myHeader');

    // Version jQuery
    let myJQUERYtitle = $('h1');
    let myJQUERYclass = $('.myUnderTitle');
    let myJQUERYid = $('#myHeader');
// 


/* 
Capter un événement
*/
    /* // Version JS
    document.querySelector('button').addEventListener( 'click', function(){
        console.log('Click JS');
    });

    // Version jQuery
    $('button').click( function(){
        console.log('Click JQUERY');
    }); */
//

/* 
Les animations
*/
    $('button').click( () => {
        // $('h1').slideToggle();
        $('h1').fadeToggle( () => {
            alert('Fade');
        });
    });
//