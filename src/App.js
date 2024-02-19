import { useState,useEffect } from 'react';
import axios from 'axios';
//外部套件
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss'

function App() {
  const [text,setText] = useState('')
  const onChangeHandler = (e)=>{
    setText(e.target.value)
  }
  useEffect(()=>{
    (async () => {
      const path = process.env.REACT_APP_PATH
      const result = await axios.get(path)
      console.log(result);
    })()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente assumenda alias odio ipsa error. Odio aperiam expedita aut officia, repellendus quas quaerat natus ullam dolorem veniam quia animi enim facere.
          Ex quae consequuntur enim corrupti voluptas consectetur sint harum magnam. Iste aspernatur ullam, impedit explicabo quisquam nemo laborum asperiores magni repellat velit? Eligendi, autem obcaecati. Sit exercitationem consequuntur expedita aut?
          Laborum, itaque dolore. Porro provident quae aperiam doloribus accusantium distinctio. Expedita quia commodi fugiat exercitationem alias sapiente dicta! Illo ipsam id facilis dolorum similique odio expedita cupiditate fuga libero error.
          Iusto ducimus adipisci eaque modi eum voluptatibus a harum? Ipsum ratione dignissimos earum officiis nam laborum inventore quaerat vero eum, iure dolorem recusandae et blanditiis excepturi est molestiae aut rem?
          Iure eaque consequuntur, culpa rerum at dolores incidunt dicta? Repudiandae modi suscipit sed magnam quis minus fugiat aperiam, voluptate, iste odio fugit esse perferendis iure possimus rem deleniti. Laudantium, incidunt?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        {text}
          <button type="button" className="btn btn-primary">Primary</button>
          <Input id="sampleText" text= "這是一個input" value={text} onChangeHandler={onChangeHandler}/>
      </header>
    </div>
  );
}

export default App;
