import React from "react";
import BotsPage from "../bot/BotsPage";

function App() {
  const [botCollection, setBotCollection] = React.useState([]) 
  const [checkBotCollection, setCheckBotCollection] = React.useState(false) 

  //fetching data from the server
  React.useEffect(() => {
    fetch("https://api.npoint.io/fc95b7d51ec3b28254bc/bots/")
      .then(res => res.json())
      .then(bots => {
        
        setBotCollection(bots)
      })
      
  }, [checkBotCollection]) 
  
  return (
    <div className="App">
      <BotsPage 
      
      botCollection = {botCollection}
      setBotCollection = {setBotCollection}
      setCheckBotCollection = {setCheckBotCollection}
      />
    </div>
  );
}

export default App;