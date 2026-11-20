//function to find student

import students from "./data.js"

export function findstudent(name){
    return students.find(student =>
        student.name.toLowerCase()===name.toLowerCase());
}

//calculate average marks
export function average(){
    let total=0;
    students.forEach(student=>{
        total+=student.marks;}
    );
    return total / students.length;
}

//display all students
export function displaystudents(){
    students.forEach(student=>{
        console.log(
            student.name,
            student.age,
            student.course,
            student.marks,
            student.studentId);
    });
}