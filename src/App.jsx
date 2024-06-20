import Card from "./components/elements/Card";

function App() {

  const fontStyleh1 = () => {
    return {
      fontFamily: "Josefin Sans",
      fontWeight: "700",
      letterSpacing: "1px",
      fontStyle: "italic",
      fontSize: "40px"
    }
  } 

  const fontStyleh2 = () => {
    return {
      fontFamily: "Playwrite NG Modern",
      fontSize: "30px",
      marginTop: "5px"

    }
  } 


  return (
    <div>
        <Card>
            <div className="flex justify-center items-center flex-col text-white">
              <h1 style={fontStyleh1()}>Welcome to...</h1>
              <h2 style={fontStyleh2()}>Quiz App</h2>
              <input type="text" placeholder="Enter your name" className="input input-bordered input-primary w-full max-w-xs mt-5" />
              <button className="btn btn-outline btn-secondary mt-5">Start</button>
            </div>
        </Card>
    </div>
  )
}

export default App;