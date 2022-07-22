import { useState } from "react";
import Header from "./components/Header";
import CoronaForCountry from "./components/CoronaForCountry";
import RecordedCorona from "./components/RecordedCorona";

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
        {key === 1 && <CoronaForCountry />}
        {key === 2 && <RecordedCorona/>}
        
      </div>
    </>
  );
}

export default App;
