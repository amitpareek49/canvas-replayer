import { useRef, useEffect } from "react";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { events } from "./events";

export default function App() {
  const playerElRef = useRef();
  const playerRef = useRef();
  useEffect(() => {
    playerElRef.current = new rrwebPlayer({
      target: playerElRef.current,
      props: {
        events
      }
    });
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(playerElRef.current);
          if (playerRef.current) {
            playerRef.current.pause();
          }
        }}
      >
        stop from react
      </button>
      <div style={{ width: 1024, height: 768 }} ref={playerElRef} />
    </div>
  );
}
