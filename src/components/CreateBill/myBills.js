import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import * as actionCreators from '../../state/actionCreators';
import BillCard from './billCard'
import { Tabs, Result, Icon, Button, message } from 'antd';
const { TabPane } = Tabs;



const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        style={{ ...style, zIndex: 1, background: '#fff', top: '90px' }}
      />
    )}
  </Sticky>
)





export default function MyBills (props) {

  const lumpstate = useSelector(state => state.lumpstate)
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(actionCreators.getBills())
  }, [dispatch])

  // const owed = 
  // lumpstate.currentUser.bills.map(bill => (
  //   <BillCard
  //     key={bill.id}
  //     bill={bill}
  //   />
  // ))

    

  




  const styles = { display: 'flex', flexWrap: 'wrap', marginRight: '0.5em',
  justifyContent: 'space-around', width: '100%', marginTop: '0.5em'}
  
  return (
    <div style={{ marginLeft: '20vw', marginTop: '90px' }}>
      <StickyContainer>
        <Tabs defaultActiveKey="1" size="large" renderTabBar={renderTabBar}>
        <TabPane tab="Opened Tickets" key="1">
            {<div style={styles}>{
              lumpstate.currentUser.bills.map(bill => (
                <BillCard
                  key={bill.id}
                  bill={bill}
                />
              ))}
            </div>}
          </TabPane>

        </Tabs>
      </StickyContainer>
    </div>
    
  );
};