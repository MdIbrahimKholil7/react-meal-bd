import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Meals from './component/mealContainer/Meals';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Meals></Meals>
    </div>
  );
}

export default App;
