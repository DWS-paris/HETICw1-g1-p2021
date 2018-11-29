/* 
Déclarations ES5 d'une fonction
*/
    function testFirst(name){
        return `Hello 2 ${name}`;
    };
    console.log( testFirst('Julien') );

    var testSeconde = function(name){
        return `Hello 2 ${name}`;
    };
    console.log( testSeconde('Paul') );
//

/* 
Déclaration ES6 d'une fonction
*/
    const sayHello = () => {
        return 'Hello';
    };
    console.log( sayHello() );

    const sayCiao = () => 'Ciao';
    console.log( sayCiao() );

    const sayHola = name => {
        return `Hola ${name}`;
    }
    // const sayHola = name => `Hello 2 ${name}`;
    console.log( sayHola('Julien') );

    const sayBonjour = (name = 'Pierre') => {
        return `Bonjour ${name}`;
    };
    // const sayBonjour = (name = 'Pierre') => `Bonjour ${name}`;

    console.log( sayBonjour() );
    console.log( sayBonjour('Bunny') );
//

/* 
ES6 Rest parameter
*/
    const userSkills = (name, ...skills) => {
        console.log(name);
        console.log(...skills);
        console.log(skills);

        // Boucle
        skills.map( item => {
            console.log(item)
        });
    };

    userSkills( 'Julien', 'HTML', 'JS', 'CSS', 'Photoshop' );
//
