import { useState } from "react"

const colors = [
    'red',
    'blue',
    'green',
    'yellow'
]

export default function ColorButton() {
    const [colorIndex, setColorIndex] = useState(0)


    function changeColor() {
        let index = Math.floor(Math.random() * colors.length)
        while (colorIndex === index){
            index = Math.floor(Math.random() * colors.length)
        }
        setColorIndex(index)
    }

    return (
        <>
            <div className="container">
                <button
                    className="button"
                    onClick={changeColor}
                    style={{
                        backgroundColor: colors[colorIndex]
                    }}
                >
                    Change color
                </button>
            </div>
        </>
    )
}