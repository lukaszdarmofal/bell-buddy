
import { useState } from 'react'

// @ts-expect-error aaa
function AddStudentForm({ onAddStudent } ) {

    const [formData, setFormData] = useState({
        studentId: '',
        studentName: '',
        studentSurname: '',
    })

    //@ts-expect-error aaa
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    //@ts-expect-error aaa
    const handleSubmit = (e) => {
        e.preventDefault()

        onAddStudent({
            studentId: Number(formData.studentId),
            studentName: formData.studentName,
            studentSurname: formData.studentSurname,
        })

        setFormData({ studentId: '', studentName: '', studentSurname: '' })
    }

    return (
        <form onSubmit={handleSubmit} className={"add-student-form"}>
            <input type="number" value={formData.studentId} onChange={handleChange} name="studentId" placeholder="Student Id" required />
            <input type="text" value={formData.studentName} onChange={handleChange} name="studentName" placeholder="Student Name" required />
            <input type="text" value={formData.studentSurname} onChange={handleChange} name="studentSurname" placeholder="Student Surname" required />

            <button type="submit">Add Student</button>
        </form>
    )
}

export default AddStudentForm;