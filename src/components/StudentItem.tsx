import { useState } from 'react'

type StudentProps = {
    studentId: number
    studentName: string
    studentSurname: string
}

const StudentItem: React.FC<StudentProps> = ( { studentId, studentName, studentSurname })=>  {

    const [isPresent, setPresense] = useState(false)

    return (
        <>
            <tr>
                <td>{studentId}</td>
                <td>{studentName}</td>
                <td>{studentSurname}</td>
                <td>
                    <input type="checkbox" onChange={ () => {setPresense(!isPresent) } } />
                </td>
            </tr>

        </>
    )
}

export default StudentItem;