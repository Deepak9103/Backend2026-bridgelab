// 1 Hello World 
console.log("node.js Backend Started");
 //it is in built function which the output on the console
// 2 Variable
let name ="Deepak";   //string  let is used for variable declare in block scope 
//means it is used in {}
let age = 22;         //number
const Country = "India";  // constant it is also block scope but can not be redeclare
let isStudent = true;    // boolean

console.log(name); 
console.log(age);
console.log(Country);
console.log(isStudent);

//Data Type Example
let score;       //undefined when we declare any variable without giving the 
// value it automatically assingn undefined
let data = null;   //null it means that it is intentionally empty

console.log(score);
console.log(data);

//object it is collection of data with key - value pairs
let user ={
    name : "Deepak",
    age :22,
    email:"deepusingh9104gmail.com"
};

console.log(user);
console.log(user.name);


//Array
let number =[2,3,4,5,6,];
let users =["Deepak","Harsh","Ajay","Dev"];

console.log(numbers);
console.log(user[1]);

//6 opeartors 
let a=10;
let b=5;
console.log("Add:",a+b);
console.log("Sub:",a-b);
console.log("Mul:",a*b);
console.log("Div:",a/b);

//Condition (if-else)
    if(loginAge =>18){
        console.log("Allow to login");
        
    }
    else {
            console.log("Not Allowed");
        }
    //tenary way condition ? true_value: false_value
    let isAge= age =>18 ? "Allow to login" :  "Not Allowed" ;
    

    
