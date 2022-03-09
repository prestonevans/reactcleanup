import { useEffect, useState } from "react"

export default function Test() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', getWidth)
        return () => window.removeEventListener('resize', getWidth)
    },[width])

    function getWidth() {
        setWidth(window.innerWidth)
    }
    return (
        <>
            <h1>Hello world</h1>
            <p>the width of my screen is {width}px</p>
        </>
    )
}