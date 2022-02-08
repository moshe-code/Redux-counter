import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement } from './redux/counter'
import {toggleDarkMode} from './redux/theme'


function App() {
  const count = useSelector(state => state.counter.count)
  const count = {isDarkMode}(state => state.counter.count)
  const dispatch = useDispatch()
  const isDarkMode = true
  
  return (
    <div className="App" style={{background: isDarkMode ? 'gray': 'white'}}>
      <h1 className="App-title">The count is:</h1>
      <h1 className='App-title'>{count}</h1>
      <div className="App-buttons">
        <button 
          onClick={() => {dispatch(increment())}}
        style={{backgroundColor: "green"}} 
        className="App-buttons-button">Increment</button>
        <button onClick={() => {dispatch(decrement())}}
         style={{backgroundColor: "red"}}  
         className="App-buttons-button">Decrement</button>

         <button onClick={() => {dispatch(isDarkMode())}}
         style={{backgroundColor: "blue"}}  
         className="App-buttons-button">Dark Mode</button>
        
        

      </div>
   
    </div>
  );
}

export default App;
