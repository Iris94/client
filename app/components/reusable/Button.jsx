

export default function Button ({buttonText, handlePrompt}) {

    return (
        <button 
        type="button"
        onClick={handlePrompt}
        className="w-1/3 h-7 rounded-sm bg-blue-400 text-white font-semibold"
        >
            {buttonText}
            </button>
    )
}