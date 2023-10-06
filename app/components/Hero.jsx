import { NumbersSection } from "."

export default function Hero () {
    return (
        <div className="bg-white rounded-md shadow-md shadow-black lg:w-1/2 w-5/6 lg:h-3/6 h-4/6 flex flex-col">
            <div className="h-1/6 w-full flex justify-center items-center">
                <h3 className="font-semibold text-black">Enter or fill fields with random data</h3>
            </div>
            <NumbersSection />
        </div>
    )
}