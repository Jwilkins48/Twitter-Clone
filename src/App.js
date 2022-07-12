import Header from "./components/Header";
import Home from "./components/Home";
import NotificationBar from "./components/NotificationBar";
import data from './data/tweets';
import news from './data/newsFeed';
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'


function App() {
  const [twitterFeed, setTwitterFeed] = useState(data);
  const [newsFeed, setNewsFeed] = useState(news);

  const addTweet = (newTweet) => {
    newTweet.id = uuidv4();
    setTwitterFeed([newTweet, ...twitterFeed]);
  }

  const deleteTweet = (id) => {
    
    setTwitterFeed(twitterFeed.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <div className="appRightSide">
        <Home twitterFeed={twitterFeed} addTweet={addTweet} deleteTweet={deleteTweet}/>
        <NotificationBar newsFeed={newsFeed} />
      </div>
    </div>
  );
}

export default App;
