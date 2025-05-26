import { useState } from 'react';
import './App.css';
import Clock from './components/Clock.tsx'
import StudentList from './components/StudentList.tsx'
import AddStudentForm from "./components/AddStudentForm.tsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clock />
      <StudentList />
      <AddStudentForm />
    </>
  )
}

export default App
