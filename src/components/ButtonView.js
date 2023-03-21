import { useState } from "react"
import Radiobutton from "./Radiobutton"


const textToColor = {
    'RED': 'peer-checked:bg-red-500',
    'BLUE': 'peer-checked:bg-blue-500',
    'GREEN': 'peer-checked:bg-green-500',
    'YELLOW': 'peer-checked:bg-yellow-500',
    'PINK': 'peer-checked:bg-pink-500',
}

const size = 'h-[100px] w-[100px]'
const textSize = 'text-xl'
const borderColor = 'border-gray-300'
const borderHoverColor = 'hover:border-indigo-500/100'
const borderPeerChecked = 'peer-checked:border-indigo-500'

export default function ButtonView(props) {

    const {
        selectedButton,
        setSelectedButton,
        handleSubmit,
        
    } = props


    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className="mycontainer mx-auto space-x-1 select-none">
                    {Object.keys(textToColor).map((text, index) => {
                        return <Radiobutton color={textToColor[text]} ischecked={index === selectedButton} handleChange={() => setSelectedButton(index)}
                            index={index} key={index} text={text} name="option" size={size} borderColor={borderColor} borderHoverColor={borderHoverColor} 
                            borderPeerChecked={borderPeerChecked} textSize={textSize}/>
                    })}
                </div>
                <div className="text-center text-3xl mb-16 ">
                    <input type="submit" value="Отправить" className="border-gray-500 border-2" />
                </div>
            </form>
        </>
    )
}