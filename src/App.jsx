import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'
import FocaEsporte from './pages/FocaEsporte'
import Consultoria from './pages/Consultoria'
import Grafica from './pages/Grafica'

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/focaesporte" component= {FocaEsporte} />
      <Route path='/consultoria' component={Consultoria} />
      <Route path="/grafica" componet={Grafica} />
    </Switch>


  )
}

export default App
