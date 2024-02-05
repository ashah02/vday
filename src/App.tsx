import { useState } from "react";

import "./App.css";

function App() {
  const [nocount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = nocount * 20 + 16;

  function handleNoClick() {
    setNoCount(nocount + 1);
  }
  function getNoButtonText() {
    const phrases = [
      "No",
      "Are you Sure",
      "Really sure",
      "like REAALLYYY",
      "Preettty Pleaseee",
      "me cry cry",
      "you're breaking my heart :( sed me ",
      "you might be delulu cause i'm your only solulu",
    ];
    return phrases[Math.min(nocount, phrases.length - 1)];
  }

  return (
    <div className="container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">YAYYY!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div className="">WILL YOU BE MY VALENTINE</div>
          <div className="">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
              }}
            >
              YESS
            </button>
            <button className="noButton" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
