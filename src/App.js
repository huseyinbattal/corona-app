import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [key, setKey] = useState(1);
  return (
    <>
      <Header onMenuChange={(_key) => {
        setKey(_key)
      }} />
      {key===1 && "merhaba"}

    </>
  );
}

export default App;
