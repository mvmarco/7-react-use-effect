// ###########################
// USE EFFECT
// ###########################

/* 
  As I mentioned "useState", we have also "useEffect". There are also other ones but these two are the
  most important ones. "useEffect" is used to run some additional functionality when for instance a 
  component renders on the screen or maybe when the state changes. To use it:
  1. import { useState, useEffect} from 'react';
  2. call: useEffect(a, b) which takes two arguments: "a" is the function which can be either an arrow
     function or a normal one, and the second argument "b" can be the updated "state" which tells the
     function when to be run.

  in the example below all the time the App component is rendered on the screen the function "useEffect()"
  starts to run. And we can use this function in any component. But in that case we need to remember to
  add: import { useEffect } from 'react'; 
  For instance, if we add it on the "Tweet", and all the time we submit a new Tweet the function gets
  ran. This is useful when you want to retrieve data from a database all the time you show something
  on the screen. For instance, on YouTube, when you refresh the page, the components of video gets
  rendered and the function runs and retrieve data of each video.

  Here the example, in app we add our import, and useEffect() function below our states.
  as a second argument if you dont pass anything it will run all the time you refresh the page
  because it is linked to the "App" component, which is all the page. But if we want to associated
  the useEffect() function with a specific part of the "App" component we could pass as second argument,
  for instance: "textInput", in a way that all the time you type the function runs. This in YouTube is
  associated to retrieve possible search results from the database.



*/

import TweetList from './components/TweetList.js'
import CreateTweet from './components/CreateTweet.js'
import { useState, useEffect } from 'react';

function App() {
  //states
  const [name, setName] = useState("Marco");
  // lifted states from CreateTweet, you gotta pass them as props
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  // function useEffect
  useEffect(()=> {
    console.log('we are running a test function');
  }, [])
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
