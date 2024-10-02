import './App.css';
import MyButton from './MyButton';
import Counter from './Counter';
import TextInput from './TextInput';
import Counter2 from './Counter2';
import ToggleText from './ToggleText';
import ChangeColor from './ChangeColor';
import ShowHideText from './ShowHideText';
import InputText2 from './InputText2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <hr style={{ marginTop: '20px' }} />
        <Counter />
        <hr style={{ marginTop: '50px' }} />
        <TextInput />
        <hr style={{ marginTop: '20px' }} />
        <Counter2 />
        <hr style={{ marginTop: '20px' }} />
        <ToggleText />
        <hr style={{ marginTop: '20px' }} />
        <ChangeColor />
        <hr style={{ marginTop: '20px' }} />
        <ShowHideText />
        <hr style={{ marginTop: '20px' }} />
        <InputText2 />
      </header>
    </div>
  );
}

export default App;
