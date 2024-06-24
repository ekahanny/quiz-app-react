import { useState } from "react";
import Card from "./components/elements/Card";
import { useNavigate } from "react-router-dom";

function App() {

  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const fontStyle = () => {
    return {
      fontFamily: "Josefin Sans",
      fontWeight: "700",
      letterSpacing: "1px",
      fontStyle: "italic",
      fontSize: "40px",
      color: "#F27BBD",
      textShadow: "2px 2px 4px rgba(255, 255, 255, 0.1)"
    }
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("name", name)
    setLoading(true)
    setTimeout(() => {
      navigate("/categories")
    }, 2000)
  }

  return (
      <Card>
        {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="loading loading-spinner text-primary w-10 h-10"></span>
            </div> 
        ) : (
            <div className="flex flex-col items-center justify-center absolute inset-0">
              <h1 style={fontStyle()}>Quiz App</h1>
              <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <input 
                  name="name"
                  type="text" 
                  placeholder="Enter your name" 
                  onChange={handleChange}
                  className="w-full max-w-xs my-8 bg-transparent border-b-2 border-[#F27BBD] text-[#F27BBD] placeholder-[#F27BBD] p-2 text-center	focus:outline-none"
                  required
                />
                <button type="submit" className="btn btn-outline btn-secondary mt-2">Start</button>
              </form>
            </div>
        )}
      </Card>
  )
}

export default App;
