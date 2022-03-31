import React from 'react';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register  from './pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// class App extends Component{
//   render(){
//     return(
//       <Switch>
//         <Route exact path="/" Component={Login}/>
//         <Route exact path="/login" Component={Register}/>

//       </Switch>
//     )
//   }
// }
const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Register" element={<Register/>}/>
      </Routes>
    </Router>
  ) ;
};

export default App;