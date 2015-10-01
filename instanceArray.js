/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
  var users = [];
   

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here

    //var person1 = new User()
    //users.push(person1)
    
    users.push(new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS"));
    users.push(new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags"));
    users.push(new User("Lenny", "lenny@theLenster.com", "iLoveLentilSoup"));
    
    //var tyler = new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS");    
    

  

  console.log('Tyler\'s information is ');

//Console.log all of Tylers information

  //code here

  User.prototype.display = function (){
    for (var key in this){
        console.log(this[key]);
    }
}
  
  
  //tyler.display();
  users[0].display();

//Now console.log all of Lennys information

  console.log('Lenny\'s information is ');
  //code here
  users[1].display();


//Now create another instance of User using your own information and then add that to your users array.

  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
  
  //code here
  for (var key in users){
    console.log(users[key].name);
  }
  