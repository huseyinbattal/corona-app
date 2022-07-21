import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card"

function App() {
  const [key, setKey] = useState(1);
  return (
    <>
      <Header
        onMenuChange={(_key) => {
          setKey(_key);
        }}
      />

      <div className="md:container md:mx-auto p-8  page-content ">
        {key === 1 && <Card/>}
      </div>
    </>
  );
}

export default App;
