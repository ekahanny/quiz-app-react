import bgImage from "./assets/bg.jpg";
import CardQuest from "./components/fragments/CardQuestion";

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
      <CardQuest/>
    </div>
  )
}

export default App;
