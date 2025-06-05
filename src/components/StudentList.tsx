import { useState } from 'react'
import StudentItem from "./StudentItem.tsx";


// @ts-expect-error aaa
function StudentList({students}) {

    const [presenseCount, setPresenseCount] = useState(0);

    return (
        <>
            <table className={ "student-list-table" }>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Is present?</th>
                </tr>

                {
                    // @ts-expect-error aaa
                    students.map((student, index) => (
                    <StudentItem
                        key={index}
                        studentId={student.studentId}
                        studentName={student.studentName}
                        studentSurname={student.studentSurname}
                        setPresenseCount={setPresenseCount}
                    />
                ))}

                <tr>
                    <th> </th>
                    <th>Present students:</th>
                    <th>{presenseCount}</th>
                    <th> </th>
                </tr>

            </table>
        </>
    )
}

export default StudentList;