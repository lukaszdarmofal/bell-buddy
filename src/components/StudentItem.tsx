// @ts-expect-error aaa
import { useState, useEffect } from 'react'

type StudentProps = {
    studentId: number
    studentName: string
    studentSurname: string
}

const StudentItem: React.FC<StudentProps> = ( { studentId, studentName, studentSurname })=>  {
    return (
        <>
            <tr>
                <td>{studentId}</td>
                <td>{studentName}</td>
                <td>{studentSurname}</td>
                <td>
                    <input type="checkbox" />
                </td>
            </tr>

        </>
    )
}

export default StudentItem;