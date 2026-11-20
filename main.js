import students from "./data.js";

import{
    findstudent,
    average,
    displaystudents
 } from "./utils.js";


 console.log("Display all students");
 displaystudents();

 console.log("SEARCH a particular student NAME");
 console.log(findstudent("Abdulrehman"));

 console.log("FIND AVERAGE MARKS");
 console.log(average());

 console.log("TOTAL STUDENTS");
 console.log(students.length);
