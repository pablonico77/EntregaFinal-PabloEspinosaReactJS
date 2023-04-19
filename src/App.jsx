import './App.css';
import {Productos} from './components/Productos'
import {ColorSchemesExample} from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <ColorSchemesExample />
      <Productos bienvenido={"Bienvenido a nuestra tienda Online"}/>
    </div>
  )
}

export default App;
