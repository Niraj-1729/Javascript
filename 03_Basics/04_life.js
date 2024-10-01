// Immeddiately Invoked Function Expression 

(function chai() {
    console.log('DB CONNECTED');
})();  // ; needs to be added in order to execute tow named IIFE


    ((name) => {
        console.log(`DB CONNECTED ${name}` );
    })('Mongo DB')