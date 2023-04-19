import logo from './logo.svg';
import './App.css';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';

function App() {
  return (
     <div className='App'>
      <header className='App-header'>
        <ClassCounter/>
        <FunctionCounter/>
        </header>
     </div>
     
      
  )
}

export default App;
