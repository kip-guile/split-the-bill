import React, { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import * as actionCreators from '../../state/actionCreators';
import BillCard from './billCard'
import { Tabs, Select, message } from 'antd';
import SplitsCard from '../Splits/splitsCard';
import ShareBill from './shareModal';
import AxiosAuth from '../../AxiosAuth/AxiosAuth'
import SettleModal from '../settle/settleModal';

const { Option } = Select;
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
  const [settleVisible, setSettleVisible] = useState(false)
  const [billId, setBillId] = useState('')
  const [data, setData] = useState([])


  const lumpstate = useSelector(state => state.lumpstate)
  const dispatch = useDispatch()

  const bills = lumpstate.currentUser.bills
  const users = lumpstate.users

  const split = (id, users) => {

    AxiosAuth()
      .post(`https://split-the-bill-api.herokuapp.com/api/bills/${id}/split`, {
        splitters: (users[users.length - 1]),
      })
      .then(res => {
        message.success('Bill splitted successfully')
        dispatch(actionCreators.getBills())
        setIsVisible(false)
      })
      .catch(err => {
        message.error(err.message)
      })
  };

  const handleSettleCreate = () => {

  }
    
  const showModal = (id) => {
    setBillId(id)
    setIsVisible(true)
  }

  const showSettleModal = (bid) => {
    const currentbill = bills.find(({id}) => id === bid)
    setData(currentbill.splits)
    console.log(bills, bid, currentbill, currentbill.splits)
    setSettleVisible(true)
  }

  const handleCancel = () => {
      setIsVisible(false)
  }

  const onSettleCancel = () => {
    setSettleVisible(false)
}
  

  const roll = users.map(user => 
  <Option key={user.id}>{<p>{user.firstName + ' ' + user.lastName}</p>}</Option>)

    useEffect(() => {
      dispatch(actionCreators.getBills())
      dispatch(actionCreators.getSplits())
      dispatch(actionCreators.getUsers())
  }, [dispatch])

  console.log(lumpstate.currentUser.bills)

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
                  showSettleModal={showSettleModal}
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

      <SettleModal
      settleVisible={settleVisible}
      onSettleCancel={onSettleCancel}
      handleSettleCreate={handleSettleCreate}
      data={data}
      setSettleVisible={setSettleVisible}
      />

      
      <ShareBill
          visible={isVisible}
          onCancel={handleCancel}
          roll={roll}
          billId={billId}
          onCreate={split}
          />
    </div>
    
  );
};