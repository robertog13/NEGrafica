import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './pages/Home'

function App() {

  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>


  )
}

export default App
