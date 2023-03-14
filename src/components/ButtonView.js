import { useState } from "react"
import Radiobutton from "./Radiobutton"

const colors = [
    'red',
    'blue',
    'green',
    'yellow'
]

export default function ButtonView () {
return (
    <>
        <div className="container mx-auto space-x-1">
            {colors.map((color, index) => {
                return <Radiobutton color={color} index={index} key={index} name="option" />
            })}
        </div>
    </>
)
}