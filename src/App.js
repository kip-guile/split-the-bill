import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import withAuthCheck from './AuthCheck'
import Counter from './components/Counter';
import RegistrationForm from '../src/Register/register'
import NormalLoginForm from '../src/components/Login/login'
import MyBills from './components/CreateBill/myBills'
import {Dashboard} from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={NormalLoginForm} />
      <Route exact path="/counter" component={Counter} />
      <Route path="/register" component={RegistrationForm} />
      <Route path='/dashboard' render={props => withAuthCheck(Dashboard, props)} />
      <Route path='/my_bills' render={props => withAuthCheck(MyBills, props)} />
      {/* <Route path='/my_debt' render={props => withAuthCheck(Debt, props)} />
      <Route path='/create_bill' render={props => withAuthCheck(CreateBill, props)} />
      <Route path='/my_billsplits/:billId' render={props => withAuthCheck(BillSplits, props)} /> */}
    </div>
  );
}

export default App;
