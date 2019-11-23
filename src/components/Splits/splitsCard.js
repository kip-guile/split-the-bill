import React, {useState, useCallback} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import { Card, Button, message } from 'antd'
import SettleUp from './splitsModal'
import AxiosAuth from '../../AxiosAuth/AxiosAuth'
import * as creators from '../../state/actionCreators'

const patchURL = 'https://split-the-bill-api.herokuapp.com/api/splits'
const initalSplit = ''


export default function SplitsCard({ split, bills }) {
    const [isVisible, setIsVisible] = useState(false)
    const [formRef, setFormRef] = useState(null)
    const [splitToSettle, setSplitToSettle] = useState(initalSplit)

    // const lumpstate = useSelector(state => state.lumpstate)
    // const dispatch = useDispatch()
    

    const handleCreate = (props) => {
        formRef.validateFields((err, values) => {
          if (err) {
            return;
          }

          const details = {
            amount: values.amount
        }

        AxiosAuth().patch(`${patchURL}/${splitToSettle}/settleUp?au&=`, details)
        .then(res => {
            // const index = lumpstate.currentUser.splits.findIndex(split => 
            //     split.id === res.data.split.id)
            // console.log(index)
            // const splits = lumpstate.currentUser.splits
            // splits.splice(index, 1, res.data.split)
            // console.log(splits)
            // console.log(res.data.split)
            // console.log(lumpstate)
            creators.getSplits()
            formRef.resetFields();
            message.info('Paid Successfully')
            setIsVisible(false)
        })
        .catch(err => {
            console.log(err.message)
        })
        });
      };

    const showModal = (id) => {
        setSplitToSettle(id)
        setIsVisible(true)
    }
  
    const handleCancel = () => {
        setIsVisible(false)
    }

    const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node)
        }
      }, [])

  
  return (
    <div>
    <Card title={split.bill.title} style={{ width: 300, marginBottom: '0.5em',
    backgroundColor: '#D3D4D9' }}>
      <p style={{ color: '#91BF26' }}>Amount: {split.amount}</p>
      <p>status: {split.status}</p>
      {split.status === 'pending' ?
            <Button
            onClick={() => showModal(split.id)}         
              style={{
                  background: '#BB0A21',
                  border: 'none',
                  color: 'white',
                  marginTop: '10%'
                  }}>
                Settle Bill
              </Button>
               :             
               <Button             
                 style={{
                     background: '#4B88A2',
                     border: 'none',
                     color: 'white',
                     marginTop: '10%'
                     }}>
                   Settled
            </Button>}

        <SettleUp
          ref={saveFormRef}
          visible={isVisible}
          onCancel={handleCancel}
          onCreate={handleCreate}
         />

    </Card>
    </div>
  )
}