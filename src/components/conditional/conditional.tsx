import { useState } from 'react'
import './conditional.css'

export default function Conditional() {
    const [cool, setCool] = useState(true)

    function isCoolHandler() {
        setCool(!cool)
    }

    return (
        <>
            {cool ? <p>Preston is the coolest</p>
                :
                <p>Preston is the worst</p>
            }
            <button onClick={isCoolHandler}>Is He??</button>
        </>
    )
}