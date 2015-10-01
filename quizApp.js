//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
  var User = function(name, email, password, totalScore){
  	this.name = name;
  	this.email = email;
  	this.password = password;
  	this.totalScore = totalScore;
  }


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here

  var Question = function(title, answersArray, rightAnswer, difficulty){
  	this.title = title;
  	this.answersArray = answersArray;
  	this.rightAnswer = rightAnswer;
  	this.difficulty = difficulty;
  }


//Create a users Array which is going to hold all of our users.

  //code here
  var users = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
	users.push(new User("Joe", "joe@gmail.com", "joe123", 34));
	users.push(new User("Mellisa", "mellisa@gmail.com", "mel12345", 100));
	users.push(new User("Jenny", "jenny@gmail.com", "jenny1234567", 67));


//Create a questions Array which is going to hold all of our questions

  //code here
  var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
  var question1 = new Question('Question 1','T/F: Inheritance is achieved in JavaScript through Prototypes?', 'T', 5);
  var question2 = new Question('Question 2','T/F: JavaScript is just a scripting version of Java?', 'F', 9);
  var question3 = new Question('Question 3', "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", 'T', 10);
  


//Now push all of your instances of Question into the questions Array

  //code here
  questions.push(question1);
  questions.push(question2);
  questions.push(question3);
  

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here
  for (var key in users){
  	console.log(users[key].name + " " + users[key].email + " " + users[key].password + " " + users[key].totalScore);
  }

  for (var key in questions){
  	console.log(questions[key].title + " " + questions[key].answersArray + " " + questions[key].rightAnswer + " " + questions[key].difficulty);
  }

  for (var i=0; i<users.length; i++){
  	console.log(users[i].name + " " + users[i].email + " " + users[i].password + " " + users[i].totalScore);
  }

  for (var i=0; i<questions.length; i++){
  	console.log(questions[i].title + " " + questions[i].answersArray + " " + questions[i].rightAnswer + " " + questions[i].difficulty);
  }