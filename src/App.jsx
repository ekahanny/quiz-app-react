import bgImage from "./assets/bg.jpg";
import Categories from "./components/elements/Categories";
// import Quiz from "./pages/Quiz";

function App() {

  const background = () => {
    return {
      backgroundImage: `url(${bgImage})`,
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      top: 0,
      left: 0
    }
  }

  return (
    <div style={background()}>
      <Categories/>
      {/* <Quiz/> */}
    </div>
  )
}

export default App;
