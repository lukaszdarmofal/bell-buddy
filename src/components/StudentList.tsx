// @ts-expect-error aaa
import { useState } from 'react'
import StudentItem from "./StudentItem.tsx";

function StudentList() {
    return (
        <>
            <table className={ "student-list-table" }>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Is present?</th>
                </tr>

                { /* example item */ }
                <StudentItem studentId={1} studentName={"Łukasz"} studentSurname={"Darmofał"} />

            </table>
        </>
    )
}

export default StudentList;