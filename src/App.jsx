import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'
import Consultoria from './pages/Consultoria'
import Grafica from './pages/Grafica'
import WebDesign from './pages/Web Desing'
import Contacts from './pages/Contacts'

function App() {

  return (
    <Switch>
      <Route exact path="/NEGrafica" component={Home}/>
      <Route path='/NEGrafica/consultoria' component={Consultoria} />
      <Route path="/NEGrafica/grafica" component={Grafica} />
      <Route path="/NEGrafica/webdesign" component={WebDesign} />
      <Route path="/NEGrafica/contacts" component={Contacts} />
    </Switch>


  )
}

export default App
