/* 
Déclaration d'un objet
*/
    let user = {
        email: `j.noyer@digitalworkshop.fr`,
        age: 39,
        isMajor: true,
        skills: [ 'HTML', 'CSS', 'JS' ],

        displaySkills: () => {
            console.log(`Les skills sont ${user.skills}`);
        }
    };

    console.log(user);
    console.log(user.email);
    user.displaySkills();
// 

/* 
Boucle FOR..IN sur un objet
*/
    for( let property in user ){
        console.log(`Propriété : ${property}`);
        console.log(`Valeur : ${user[property]}`);
    };
//