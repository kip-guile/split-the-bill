import React, { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import * as actionCreators from '../../state/actionCreators';
import BillCard from './billCard'
import { Tabs } from 'antd';
import SplitsCard from '../Splits/splitsCard';
import ShareBill from './shareModal';
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
  const [isVisible, setIsVisible] = useState(false)
    
  const showModal = () => {
      setIsVisible(true)
  }

  const handleCancel = () => {
      setIsVisible(false)
  }

  const lumpstate = useSelector(state => state.lumpstate)
  const dispatch = useDispatch()

  const bills = lumpstate.currentUser.bills

    useEffect(() => {
      dispatch(actionCreators.getBills())
      dispatch(actionCreators.getSplits())
      dispatch(actionCreators.getUsers())
  }, [dispatch])

  const styles = { display: 'flex', flexWrap: 'wrap', marginRight: '0.5em',
  justifyContent: 'space-around', width: '100%', marginTop: '0.5em'}
  
  return (
    <div style={{ marginLeft: '20vw', marginTop: '90px' }}>
      <StickyContainer>
        <Tabs defaultActiveKey="1" size="large" renderTabBar={renderTabBar}>
        <TabPane tab="Owed Bills" key="1">
            {<div style={styles}>{
              lumpstate.currentUser.bills.map(bill => (
                <BillCard
                  key={bill.id}
                  bill={bill}
                  showModal={showModal}
                />
              ))}
            </div>}
          </TabPane>

        <TabPane tab="Owing Bills" key="2">
          {<div style={styles}>{
            lumpstate.currentUser.splits.map(split => (
              <SplitsCard
              key={split.id}
              split={split}
              bills={bills}
              />
            ))}
          </div>}
        </TabPane>
        </Tabs>
      </StickyContainer>

      
      <ShareBill
          visible={isVisible}
          onCancel={handleCancel}
          // onCreate={handleCreate}
          />
    </div>
    
  );
};