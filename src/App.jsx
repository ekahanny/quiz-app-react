import Card from "./components/elements/Card";

function App() {

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

  return (
      <Card>
        <div className="flex flex-col items-center justify-center absolute inset-0">
          <h1 style={fontStyle()}>Quiz App</h1>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full max-w-xs my-8 bg-transparent border-b-2 border-[#F27BBD] text-[#F27BBD] placeholder-[#F27BBD] p-2 text-center	focus:outline-none"
          />
          <button className="btn btn-outline btn-secondary mt-2">Secondary</button>
        </div>
      </Card>
  )
}

export default App;
