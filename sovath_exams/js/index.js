import {Student} from './Student.js';
import {Teacher} from './Teacher.js';


// class Student get from Student 
const students = new Student();
console.log("--------------Student object---------------");
// get data from Person
students.setName("Bopha");
students.getName();
// get data from Student province
students.setProvince("kompong Cham");
students.getProvince();
students.read();
students.speak();
console.log("--------------End---------------------------");



// class Teacher get from Teacher
const teachers = new Teacher();
console.log("--------------Teacher object----------------");
// get data from Person
teachers.setName("Ready");
teachers.getName();
// get data from Teacher
teachers.setSubject("javascript");
teachers.getmSubject();
teachers.teach();
teachers.speak();
console.log("--------------End---------------------------");