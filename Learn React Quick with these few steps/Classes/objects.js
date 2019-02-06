//Object
let userOne = {
    //Properties
    email: 'muji,codes.com',
    name: 'Muji',
    //Function
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
userOne.logout();

//Dot Notation
//Updating,Editing Properties in a object
//userOne Object property name will be Daniel
userOne.name = "Daniel";
//Square Notation - Array way
userOne.name = ['Daniel'];

//It best in OOP that you should keep all your properties in objects and not outside object
//Example - object with property outside
let car = {

};
car.color = "Blue";
car.model = "2010";
car.numberplate = "123456";
console.log(car);

//Example - object with property inside
let cartwo = {
        color : "Blue",
        model : "2010",
        numberplate : "123456",
};
console.log(cartwo);


//Class Constructors
//super class
class User {
    constructor(emaill, namee){
                this.emaill = emaill;
                this.namee = namee;
                this.score = 0;
    }
    login(){
        console.log(this.emaill, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.emaill, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.emaill, 'score is now', this.score);
        return this;
    }
}
//extends inheritance from super class
//sub class
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email !== user.email;
        })
    }
}
let userOnee = new User('mujicodes.com','muji');
let userTwoo = new User('daniel@file.com','Daniel');
let admin = new Admin("shaun@woo.com","shaun");



let users = [userOnee,userTwoo, admin];

admin.deleteUser(userTwoo);


// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

//Method Chaining
userOnee.login().updateScore().updateScore().logout();
