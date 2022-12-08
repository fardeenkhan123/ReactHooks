import logo from './logo.svg';
import './App.css';
import { Usestate } from './Components/UseState/Usestate';
import { CallbackParent } from './Components/UseCallBack/CallbackParent';
import { Useref } from './Components/UseRef/Useref';
import { UserefParent } from './Components/ForwardRef/UserefParent';
import { Usememo } from './Components/UseMemo/Usememo';
import { Parent } from './Components/ContaxApi/Parent';
import { Usereducer } from './Components/UseReducer/Usereducer';

function App() {
  return (
    <div className="App"> 
     {/* <Usestate/> */}
     {/* <CallbackParent/> */}
     {/* <Useref/> */}
     {/* <UserefParent/> */}
     {/* <Usememo/> */}
     {/* <Parent/> */}
     <Usereducer/>
    </div>
  );
}

export default App;
