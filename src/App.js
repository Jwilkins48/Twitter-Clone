import Header from "./components/Header";
import Home from "./components/Home";
import NotificationBar from "./components/NotificationBar";
import data from './data/tweets';
import { useState } from 'react'

function App() {
  const [twitterFeed, setTwitterFeed] = useState(data);
  return (
    <div className="App">
      <Header />
      <Home twitterFeed={twitterFeed}/>
      <NotificationBar />
    </div>
  );
}

export default App;
