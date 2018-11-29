/* 
Utilisation de la console
*/
    console.log(`Hello Javascript`);
    console.error(`Bad request`);
//

/* 
Les varibales
*/
    let firstName = `Julien`; // :String
    let userAge = 39; // : Number || Integer
    let average = 12.5; // : Float
    let user = {
        lastName: `Noyer` // : Object.Property
    }; // : Object
    let global = [ `Test`, firstName, true ]; // : Array<String || Boolean>
    let myTag = document.querySelector('h1'); // : DOM.element

    console.log(myTag);
//


/* 
String Templating
*/
    console.log("Un texte");
    console.log("Je suis un \"texte\" de julien");
    console.log('Je suis un "texte"');
    console.log('Je suis un \'texte\' de julien');

    console.log(`Je suis un 'texte'`);
    console.log(`Je suis un "texte"`);

    console.log("Bonjour " + firstName + " vous avez " + userAge + " ans");
    console.log('Bonjour ' + firstName + ' vous avez ' + userAge + ' ans');

    console.log(`Bonjour ${firstName} vous avez ${userAge} ans`);
//