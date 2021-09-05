import React from "react";
import "./App.css";
import { Dashboard } from "./Pages/Dashboard";
import { Detector } from "react-detect-offline";

function App() {
  return (
    <div className="App">
      <Detector
        render={({ online }) => (
          <>
            {!online && (
              <span className="red">
                You're offline right now. <button class="button">RETRY</button>
              </span>
            )}
            <Dashboard />
          </>
        )}
      />
    </div>
  );
}

export default App;
