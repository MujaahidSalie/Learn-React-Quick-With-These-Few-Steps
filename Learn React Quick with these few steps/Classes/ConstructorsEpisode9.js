function User(emailll, nameee){
    this.emailll = emailll;
    this.nameee = name;
    this.online = false;
}
//Prototypes can be used in function
User.prototype.login = function(){
    this.online = true;
    console.log(this.emailll, 'has logged in')
};
User.prototype.logout = function(){
    this.online = false;
    console.log(this.emailll, 'has logged out')
};

//Prototypes dont work in primitive types
let userOneee = new User('mujicodes.com','muji');
let userTwooo = new User('daniel@file.com','Daniel');


console.log(userOneee);
userTwooo.login();

//Prototypes
//https://www.w3schools.com/js/js_object_prototypes.asp
