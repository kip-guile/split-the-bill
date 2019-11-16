import React, { useEffect, useState, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AxiosAuth from '../../AxiosAuth/AxiosAuth';
import * as actionCreators from '../../state/actionCreators';
import CreateBill from './billModal';
import BillCard from './billCard'
import { Button, message } from 'antd';


const createBillURL = 'https://split-the-bill-api.herokuapp.com/api/bills';


export default function MyBills (props) {
    const [isVisible, setIsVisible] = useState(false)
    const [formRef, setFormRef] = useState(null);

    const showModal = () => {
        setIsVisible(true)
    }
  
    const handleCancel = () => {
        setIsVisible(false)
    }

    const handleCreate = (props) => {
        formRef.validateFields((err, values) => {
          if (err) {
            return;
          }

          const details = {
            amount: values.amount,
            title: values.title
        }

        
        AxiosAuth()
            .post(createBillURL, details)
            .then(res => {
                formRef.resetFields();
                message.info('Bill Created');
                dispatch(actionCreators.getBills())
                setIsVisible(false);
                // props.history.push('/my_bills')
            })
            .catch(error => {
                localStorage.clear();
                message.error('Failure');
            });
        });
      };

      const styles = { display: 'flex', flexWrap: 'wrap' }
    
      const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node)
        }
      }, [])

    const lumpstate = useSelector(state => state.lumpstate)
    const dispatch = useDispatch()
        useEffect(() => {
            dispatch(actionCreators.getBills())
        }, [dispatch])


  
  return (
    
    <div>
      <Button type="primary" onClick={showModal}>
        Create A Bill
      </Button>

      <CreateBill
          ref={saveFormRef}
          visible={isVisible}
          onCancel={handleCancel}
          onCreate={handleCreate}
        />

      <div style={styles}>
        {lumpstate.currentUser.bills.map(bill => (
          <BillCard
            key={bill.id}
            bill={bill}
          />
        ))}
        </div>
    </div>
    
  );
};