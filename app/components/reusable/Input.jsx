

export default function Input ({value, onChange}) {
    return (
        <input 
        type="number"
        value={value}
        onChange={onChange}
        className="lg:w-14 lg:h-20 flex justify-evenly w-12 h-8 bg-slate-200 text-center font-semibold lg:text-2xl text-sm"/>
    )
}