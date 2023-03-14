import Radiobutton from "./Radiobutton"

const colors = [
    'peer-checked:bg-red-500',
    'peer-checked:bg-blue-500',
    'peer-checked:bg-green-500',
    'peer-checked:bg-yellow-500',
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