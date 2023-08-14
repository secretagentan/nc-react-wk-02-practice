import React, {useState} from "react"
import { createRoot } from "react-dom/client"

function App() {
  const [size, setSize] = useState(25);
  const [color, setColor] = useState('skyblue');
  const [likes, setLikes] = useState(0);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  }

  const handleClick = (event) => {
    setSize(20);
    setColor('pink');
  }

  return (
    <div className="grid-parent">
      <div className="header">
        <h1>Welcome To Our App</h1>
        <p>The current size is {size} and the current color is {color}.</p>
        <p>
          This page has been liked <strong>{likes}</strong> times.
        </p>
      </div>

      <div className="sidebar">
        <input type="text" value={size} onChange={handleSizeChange} />
        <input type="text" value={color} style={{color}} onChange={event => setColor(event.target.value)} />
        <button onClick={handleClick}>Make the text 20px and pink</button>
      </div>

      <div className="main-area" style={{color, fontSize:`${size}px`}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
      </div>

      <footer className="footer">
        <p>
          This is the footer. <button onClick={event => setSize(30)}>Make the text 30px but leave the color the same</button>
        </p>
        <p>
          <button>Like The Page</button>
        </p>
      </footer>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
