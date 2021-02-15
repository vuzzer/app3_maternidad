import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/login/login';
import Maternidad from './components/maternidad/maternidad';
import Home from './components/home/home';
import Graphic from './components/graph/graph';
import Document from './components/document/document';

function App() {
  return (
<Switch>
  <Route exact path='/' component={SignIn}></Route>
  <Route exact path='/home' component={Home}></Route>
  <Route exact path='/maternidad' component={Maternidad}></Route>
  <Route exact path='/graphic' component={Graphic}></Route>
  <Route exact path='/document' component={Document}></Route>
</Switch>
 )
}

export default App;
