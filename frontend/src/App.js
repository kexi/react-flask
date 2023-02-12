import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
  const [name, setName] = useState("Your Name")

  const onClickHandler = async () => {
    const response = await fetch('https://react-flask-backend.onrender.com', {
      mode: "cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name})
    })
    const json = await response.json()
    alert(json["greeting"])
  }

  return (
    <div className="App">
      <label>名前</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={onClickHandler}>Invoke</button>
    </div>
  );
}

export default App;
