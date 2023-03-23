import { useState } from "react"
import Radiobutton from "./Radiobutton"


const textToConfig = { 
    'RED': {
        color: 'peer-checked:bg-red-500',
        size: 'h-[100px] w-[100px]',
        textSize: 'text-xl',
        borderColor: 'border-gray-300',
        borderHoverColor: 'hover:border-indigo-500/100',
        borderPeerChecked: 'peer-checked:border-indigo-500',
    },
    'BLUE': {
        color: 'peer-checked:bg-blue-500',
        size: 'h-[100px] w-[100px]',
        textSize: 'text-xl',
        borderColor: 'border-gray-300',
        borderHoverColor: 'hover:border-indigo-500/100',
        borderPeerChecked: 'peer-checked:border-indigo-500',
    },
    'GREEN': {
        color: 'peer-checked:bg-green-500',
        size: 'h-[100px] w-[100px]',
        textSize: 'text-xl',
        borderColor: 'border-gray-300',
        borderHoverColor: 'hover:border-indigo-500/100',
        borderPeerChecked: 'peer-checked:border-indigo-500',
    },
    'YELLOW': {
        color: 'peer-checked:bg-yellow-500',
        size: 'h-[100px] w-[100px]',
        textSize: 'text-xl',
        borderColor: 'border-gray-300',
        borderHoverColor: 'hover:border-indigo-500/100',
        borderPeerChecked: 'peer-checked:border-indigo-500',
    },
    'PINK': {
        color: 'peer-checked:bg-red-500',
        size: 'h-[100px] w-[100px]',
        textSize: 'text-xl',
        borderColor: 'border-gray-300',
        borderHoverColor: 'hover:border-indigo-500/100',
        borderPeerChecked: 'peer-checked:border-indigo-500',
    }
}


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
                    {Object.keys(textToConfig).map((text, index) => {

                        const c = textToConfig[text]

                        return <Radiobutton color={c.color} ischecked={index === selectedButton} handleChange={() => setSelectedButton(index)}
                            index={index} key={index} text={text} name="option" size={c.size} borderColor={c.borderColor} borderHoverColor={c.borderHoverColor}
                            borderPeerChecked={c.borderPeerChecked} textSize={c.textSize} />
                    })}
                </div>
                <div className="text-center text-3xl mb-16 ">
                    <input type="submit" value="Отправить" className="border-gray-500 border-2" />
                </div>
            </form>
        </>
    )
}