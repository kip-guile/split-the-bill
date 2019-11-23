import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import WithAuthCheck from './AuthCheck'
import Counter from './components/Counter';
import NotFound from './components/NotFound/NotFound'
import RegistrationForm from '../src/Register/register'
import NormalLoginForm from '../src/components/Login/login'
import Dashboard from './components/Dashboard';
// import {Dashboard} from './components/Dashboard';

function App() {
  return (
    <Switch>
      <WithAuthCheck path='/dashboard' component={Dashboard}/>
      <Route exact path={["/", "/login"]} component={NormalLoginForm} />
      <Route exact path="/counter" component={Counter} />
      <Route path="*" component={NotFound} />
      <Route path="/register" component={RegistrationForm} />
    </Switch>
  );
}

export default App;

// <Route path='/dashboard' render={props => withAuthCheck(Dashboard, props)}
// <Route path='/my_bill' render={props => withAuthCheck(MyBills, props)}
// <Route path='/my_debt' render={props => withAuthCheck(Debt, props)}
// <Route path='/create_bill' render={props => withAuthCheck(CreateBill, props)}
// <Route path='/my_billsplits/:billId' render={props => withAuthCheck(BillSplits, props)}
