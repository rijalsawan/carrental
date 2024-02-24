class Human{
  constructor(){
    this.gender='male';
  }
  printGender(){
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor(){
    super ();
    this.name='Max';
    //this.gender='female';
  }
  printMyName (){
    console.log(this.name);
  }
//   printMyGender (){
//     console.log(this.gender);
//   }
}
const person=new Person ();
person.printMyName ();
person.printGender ();