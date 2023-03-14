export default function Radiobutton(props) {
    const {
        color,
        name,
        index
    } = props

    console.log(index)

    return <>
        <div>
            <input type='radio' id={index} name={name} className="peer hidden" />
            <label for={index} className={`bg-white flex items-center justify-center rounded-full h-[100px] w-[100px] p-2 hover:border-indigo-500/100 hover:border-2 border-gray-300 border-2 ${color} peer-checked:border-indigo-500  peer-checked:border-2 `}>
                <div className="text-center">Change color</div>
            </label>
            {/* <label for={index} className={`peer-checked:bg-${color}`}>Change color</label> */}
        </div>
    </>
}