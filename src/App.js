// ###########################
// USE EFFECT
// ###########################

/* 
  As I mentioned "useState", we have also "useEffect". There are also other ones but these two are the
  most important ones. "useEffect" is used to run some additional functionality when for instance a 
  component renders on the screen or maybe when the state changes. To use it:
  1. import { useState, useEffect} from 'react';
  2. call: useEffect(a, b) which takes two arguments: "a" is the function which can be either an arrow
     function or a normal one, and the second argument "b" is a

*/

import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
import { useState, useEffect } from 'react';

function App() {
  // functions
  useEffect(()=> {
    console.log('we are running a test function');
  })
  //states
  const [name, setName] = useState("Marco");
  // lifted states from CreateTweet, you gotta pass them as props
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  return (
    <div>
      <h1 className={"title"}>Hello {name}</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        setName={setName}
        name={name}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
