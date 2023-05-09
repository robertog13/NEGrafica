import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'
import FocaEsporte from './pages/FocaEsporte'
import Consultoria from './pages/Consultoria'
import Grafica from './pages/Grafica'

function App() {

  return (
    <Switch>
      <Route exact path="/NEGrafica" component={Home}/>
      <Route path="/NEGrafica/focaesporte" component= {FocaEsporte} />
      <Route path='/NEGrafica/consultoria' component={Consultoria} />
      <Route path="/NEGrafica/grafica" componet={Grafica} />
    </Switch>


  )
}

export default App
