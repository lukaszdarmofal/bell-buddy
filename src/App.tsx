import { useState } from 'react';
import './App.css';
import Clock from './components/Clock.tsx'
import StudentList from './components/StudentList.tsx'
import AddStudentForm from "./components/AddStudentForm.tsx";

type Student = {
    studentId: number;
    studentName: string;
    studentSurname: string;
};

function App() {

    const [students, setStudents] = useState<Student[]>([]);

    const handleAddStudent = (student: Student) => {
        setStudents(prev => [...prev, student]);
    };

  return (
    <>
      <Clock />
      <StudentList students={students} />
      <AddStudentForm onAddStudent={handleAddStudent} />
    </>
  )
}

export default App
