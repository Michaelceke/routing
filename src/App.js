import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,NavLink} from "react-router-dom"
import Route from "react-router-dom/Route";



const User=({match})=>{
    return (<h1> Welcome user oooo {match.params.username}</h1>)
};

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li> <NavLink to="/about" activeStyle={{color:"red"}}> About</NavLink></li>
          <li> <Link to="/user/john"> john</Link></li>
        </ul>
       
        <Route path="/"  exact render={
          ()=>{
            return (<h1>Welcome Home</h1>)
          }
        }/>

       <Route path="/about" exact strict render={
          ()=>{
            return (<h1>about</h1>)
          }
        }/>

         <Route path="/user/:username" exact strict component={User}
        />
     
     </div>
    </Router>
    
  );
}

export default App;
