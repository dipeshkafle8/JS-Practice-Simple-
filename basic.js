// a=20;
// console.log(a);
// console.log(typeof a);
// a="Dipesh";
// console.log(typeof a);

//var is function scoped not local scoped
// function data(){
//     var x=10;
// }
// {
//     var x=20;
// }
// console.log(x);

// console.log("55"*5);   //executes
// console.log("55"+20);   //5520
// console.log("Dipesh"*20);   //NaN
// console.log(Number("55")+2);   //57
// console.log(2**3);            //8
// console.log(Math.pow(2,3));    //8
// console.log(3++); //error
// let x=2;
// console.log(x++) //exeecutes output=


// let str="I am Dipesh Kafle,
// I am 20 years old";           //line break is not allowed

// let str="I am Dipesh Kafle \n I am 20 years old";
// console.log(str);
//  or
// let str1=`I am Dipesh kafle
// I am 20 years old`;
// console.log(str1);

//including quotation in your string

// let str="My name is Dipesh "kafle"";  //not possible error

// let str1='My name is Dipesh "kafle"';
// console.log(str1);
//  or
// let str="My name is Dipesh \"kafle\"";    "\ is used to tell to the char " as a text"
// console.log(str);



// let str1="I am Dipesh Kafle am";
// console.log(str1.length);

// console.log(str1.includes("Kaf"));

// console.log(str1.includes("xyz"));

// console.log(str1.startsWith("I"));

// console.log(str1.endsWith("fle"));

// if((0.1+0.2)==0.3){                
//     console.log("true");
// }else{
//     console.log((0.1+0.2));
//     console.log("false");
// }




// let data=prompt("Hello enter your value");
// alert(data);
// let result=confirm("Are you 18+");
// console.log(result);

//arguments object

// let arr=()=>{
//     console.log(arguments[0]);   //not used in arrow functions
// }

// // function arr(){
// //     console.log(arguments[0]);
// // }
// arr(10,20);
