import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return (
    <Switch>

      <Route exact path='/' component={Home} />
    

    </Switch>
  )
}
export default App;
