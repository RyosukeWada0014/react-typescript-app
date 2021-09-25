import React from "react";
import Counter from "./Counter";

interface AppProps {
  message?: string;
}

const App: React.FC = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
