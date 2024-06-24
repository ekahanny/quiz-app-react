import { useNavigate } from "react-router-dom"
import Card from "../components/elements/Card"
import Congrats from "../components/elements/Congrats"
import { useState } from "react"

const Completed = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    
    const setActiveColor = () => {
        return {
            background: "linear-gradient(#E65895, #BC6BE8)"
        }

    }

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }
    
    return (
        <Card>
            {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="loading loading-spinner text-primary w-10 h-10"></span>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center" >
                    <Congrats/>
                    <h1 className="text-2xl text-white mt-10">Congrats! You completed the quiz.</h1>
                    <p className="text-xl text-white mt-6">You answer 4/10 correctly.</p>
                    <button 
                        type="button"
                        className="py-2 px-6 text-white font-semibold text-md mt-10 rounded-md"
                        style={setActiveColor()}
                        onClick={handleClick}
                    >
                        Play again
                    </button>
                </div>
            )}
        </Card>
    )

}

export default Completed