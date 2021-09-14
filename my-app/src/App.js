import './App.css';
import Hello1 from './Components/Hello1';
import Hello2 from './Components/Hello2';
import Hello3 from './Components/Hello3';
import Hello4 from './Components/Hello4';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Hello1 />
      <Hello2 />
      <Hello3 />
      {Hello4}
      <Counter />
    </div>
  );
}

export default App;
