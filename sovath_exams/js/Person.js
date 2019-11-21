 export default class Person {
    setName(name){
        this.mName = name;
    }
    getName(){
        console.log(this.mName);
    }
    speak(){
        console.log("Speaking!");
    }
}