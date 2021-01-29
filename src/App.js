import React, { useState } from "react";

 
function App() {
  const [inputList, setInputList] = useState([{ type: "", soal: "", a: "", b: "", c: "", d: "", kunci: "", score:"" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { type: "", soal: "", a: "", b: "", c: "", d: "", kunci: "", score: "" }]);
  };
 
  return (
    <div className="App">
      
      {inputList.map((x, i) => {
        return (
          <div>
            <select name="type"
              value={x.type}
              onChange={e => handleInputChange(e, i)}>
                <option>Pilih</option>
               <option value="radio">Radio</option>
               <option value="checkbox">Checkbox</option>
               <option value="textarea">Textarea</option>
            </select><br/>
            soal :<br/>
            <input
              name="soal"
              value={x.soal}
              onChange={e => handleInputChange(e, i)}
            /><br/>
            jawab a :<br/>
            <input
              name="a"
              value={x.a}
              onChange={e => handleInputChange(e, i)}
            /> <br/>
             jawab b :<br/>
            <input
              name="b"
              value={x.b}
              onChange={e => handleInputChange(e, i)}
            /> <br/>
             jawab c :<br/>
             <input
              name="c"
              value={x.c}
              onChange={e => handleInputChange(e, i)}
            /> <br/>
             jawab d :<br/>
             <input
              name="d"
              value={x.d}
              onChange={e => handleInputChange(e, i)}
            /> <br/>
            kunci : <br/>
             <input
              name="kunci"
              value={x.kunci}
              onChange={e => handleInputChange(e, i)}
            /> <br/>
            score : <br/>
             <input
              name="score"
              value={x.score}
              onChange={e => handleInputChange(e, i)}
            /> 
            <div>
            <br/> <button onClick={handleAddClick}>Submit</button>
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}
 
export default App;