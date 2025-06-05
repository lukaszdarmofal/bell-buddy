import {type Dispatch, type SetStateAction, useState} from 'react'

type StudentProps = {
    studentId: number
    studentName: string
    studentSurname: string
    setPresenseCount: Dispatch<SetStateAction<number>>
}

const StudentItem: React.FC<StudentProps> = ( { studentId, studentName, studentSurname, setPresenseCount })=>  {

    const [isPresent, setPresense] = useState(false)

    function handlePresenseChange() {
        setPresense(!isPresent)

        if(!isPresent){
            setPresenseCount(n => n + 1)
        } else {
            setPresenseCount(n => n - 1)
        }

    }

    return (
        <>
            <tr>
                <td>{studentId}</td>
                <td>{studentName}</td>
                <td>{studentSurname}</td>
                <td>
                    <input type="checkbox" onChange={ handlePresenseChange } />
                </td>
            </tr>

        </>
    )
}

export default StudentItem;