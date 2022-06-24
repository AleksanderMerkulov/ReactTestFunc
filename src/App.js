import React from "react";
import './style/style.css'
import Request from "./components/request";
import Counter from "./components/counter";
import TwoWayInput from "./components/Two-Way-Input";

function App() {
  return (
    <div>
        {/*Axios - отправка HTTP запросов*/}
        <Request/>
        {/*counter with two-way // счётчик с двойной привязкой*/}
        <Counter/>
        {/*Two way input // двусторонняя привязки инпута*/}
        <TwoWayInput/>
    </div>
  );
}

export default App;
