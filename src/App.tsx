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

    const [activeTab, setActiveTab] = useState("Clock");


  return (
    <>
          <header>
              <button onClick={ () => { setActiveTab("Clock") } }>Clock</button>
              <button onClick={ () => { setActiveTab("List") } }>Student List</button>
              <button onClick={ () => { setActiveTab("Form") } }>Add Form</button>
          </header>

        {activeTab === "Clock" && <Clock />}
        {activeTab === "List" && <StudentList students={students} />}
        {activeTab === "Form" && <AddStudentForm onAddStudent={handleAddStudent} students={students} />}
    </>
  )
}

export default App
