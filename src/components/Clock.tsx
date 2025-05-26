// @ts-expect-error aaa
import { useState, useEffect } from 'react'

function Clock() {


    function getDate() {
        const date = new Date()

        const currentDay = date.getDate()
        const currentMonth = date.getMonth()+1
        const currentYear = date.getFullYear()

        return `${currentDay}/${currentMonth}/${currentYear}`
    }

    function getTime() {
        const date = new Date()

        const currentHour = date.getHours()
        const currentMinute = date.getMinutes()
        const currentSecond = date.getSeconds()

        let currentSecondString = currentSecond.toString()

        if(currentSecond < 10) {
            currentSecondString = `0${currentSecond}`
        }

        return `${currentHour} : ${currentMinute} : ${currentSecondString}`
    }


    const currentDate = getDate()
    const [currentTime, setCurrentTime] = useState(getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getTime())
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <span className={"clock"}>
                <p> {currentDate} </p>
                <p> {currentTime} </p>
            </span>
        </>
    )
}

export default Clock;