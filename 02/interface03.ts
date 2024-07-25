// Interface can be extended by interface 

interface Person {
    name: string;
    age: number;
  }
  
  interface Student extends Person {
    rollno: number;
    class: string;
  }
  
  interface Teacher extends Person {
    subject: string;
    salary: number;
  }
  
  function School(student: Student, teacher: Teacher): string {
    return `Student name is ${student.name} and age is ${student.age} and roll no is ${student.rollno} and class is ${student.class} and teacher name is ${teacher.name} and age is ${teacher.age} and subject is ${teacher.subject} and salary is ${teacher.salary}`;
  }
  
  console.log(School({
    name: "Suvam",
    age: 22,
    rollno: 12345,
    class: "10th"
  }, {
    name: "Satya",
    age: 22,
    subject: "Computer Science",
    salary: 10000
  }));
  
  // Expected output
  // Student name is Suvam and age is 22 and roll no is 12345 and class is 10th and teacher name is Suvam and age is 22 and subject is Computer Science and salary is 10000
  