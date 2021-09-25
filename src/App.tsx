import React from "react";
import CounterWithReducer from "./CounterWithReducer";

interface AppProps {
  message?: string;
}

const App: React.FC = () => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

export default App;
