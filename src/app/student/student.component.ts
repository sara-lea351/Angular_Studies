import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  students: Student[] = [{name: "Sara Cohen", age: 20},{name: "Lea Levi", age: 19},{name: "Naomi Koler", age: 18}]

  deleteStudent(student: Student){
    let indexOfStudent = this.students.indexOf(student);
    this.students.splice(indexOfStudent,1)
  }

  studentToShow?: Student;

  showStudentDetails(student: Student){
    this.studentToShow = student
  }
}
