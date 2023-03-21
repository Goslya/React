export default function Radiobutton(props) {
    const {
        color,
        name,
        index,
        text,
        ischecked,
        size,
        borderColor,
        borderHoverColor,
        textSize,
        borderPeerChecked,
        handleChange
    } = props


    return <>
        <div>
            <input type='radio' id={index} name={name} className="peer hidden" checked={!!ischecked} onChange={() => handleChange()}/>
            <label for={index} className={`bg-white flex items-center justify-center rounded-full ${size} p-2 ${borderColor} border-2 ${borderHoverColor}  hover:border-2 ${color} ${borderPeerChecked} peer-checked:border-2 `}>
                <div className= {`text-center ${textSize}`} >{text}</div>
            </label>
        </div>
    </>
}