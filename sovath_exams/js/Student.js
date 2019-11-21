import Person from './Person.js';
export class Student extends Person {
    setProvince(province){
        this.mProvince = province;
    }
    getProvince(){
        console.log(this.mProvince);
    }
    read(){
        console.log("I love reading!");
    }
}