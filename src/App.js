import React, { useContext } from 'react';
//import './styles/App.css';
import { Route, Redirect, Switch  } from 'react-router-dom';
import Loading from './views/Loading';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';
import 'normalize.css';
import { AuthContext } from './controller/Auth';

/*const PrivateRoute = ({ pathText, component, user}) => {
    let finalComponent =  user ? component : Login;
    if(pathText === '/signup' && !user){
        finalComponent = SignUp;
    }
    return <Route path={pathText} component={finalComponent} />;
}*/

const App = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <Switch>
            <Route exact path = '/home' component = { !!currentUser ? Home : Login }/>
            <Route exact path = '/login' component = { !!currentUser ? Home : Login } />
            <Route exact path = '/signup' component = {!!currentUser ? Home : SignUp} />
            <Redirect to='/home'/>
        </Switch>
    );
};

export default App;

/*
<Switch>
    <PrivateRoute exact path='/home' component={TempLogout} user={currentUser}/>;
    <PrivateRoute exact path='/login' component={Login} user={currentUser}/>;
    <PrivateRoute exact path='/signup' component={SignUp} user={currentUser}/>;
    <Redirect to='/home'/>;
</Switch>

<Switch>
    <Route exact path = '/' component = { !!currentUser ? TempLogout : Login }/>
    <Route exact path = '/login' component = { !!currentUser ? Home : Login } />
    <Route exact path = '/signup' component = {!!currentUser ? Home : SignUp} />
    <Route exact path = '/' component = { !!currentUser ? Home : Login}/>
    <Redirect to='/'/>
</Switch>
*/
