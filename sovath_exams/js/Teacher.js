import Person from './Person.js';
export class Teacher extends Person {
    setSubject(subject){
        this.mSubject = subject;
    }
    getmSubject(){
        console.log(this.mSubject);
    }
    teach(){
        console.log("I love Teaching!");
    }
}