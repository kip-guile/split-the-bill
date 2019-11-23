import React, {useState, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Button, Icon, message } from 'antd';
import * as types from '../../../state/actionTypes'
import AxiosAuth from '../../../AxiosAuth/AxiosAuth'
import CreateBill from '../../CreateBill/billModal'


const createBillURL = 'https://split-the-bill-api.herokuapp.com/api/bills';

const SideProfile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [formRef, setFormRef] = useState(null);

    const lumpstate = useSelector(state => state.lumpstate)
    const dispatch = useDispatch()

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

        console.log(lumpstate)

        
        AxiosAuth()
            .post(createBillURL, details)
            .then(res => {
                debugger
                const data = res.data.bill
                formRef.resetFields();
                message.info('Bill Created');
                dispatch({type: types.UPDATE_BILLS, payload: data})
                setIsVisible(false);
            })
            .catch(error => {
                debugger
                localStorage.clear();
                message.error(error.data.message);
            });
        });
      };

      const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node)
        }
      }, [])

    const imageStyle = {
        paddingTop: '20%',
        borderRadius: '50%',
        paddingBottom: '1em',
        width: '100px',
        height: '100%'
      }

    return (
        <div style={{ textAlign: 'center' }}>
            <Icon type="user" style={imageStyle}/>
            <br />
            <h3 style={{ color: 'white', paddingTop: '20%' }}>Welcome Alex</h3>
            <br/>
            <br/>
            <Button
            onClick={showModal}
            style={{
                background: '#BB0A21',
                border: 'none',
                color: 'white',
                marginTop: '10%'
                }}>
                Create Bill +
            </Button>
            <CreateBill
            ref={saveFormRef}
            visible={isVisible}
            onCancel={handleCancel}
            onCreate={handleCreate}
            />
        </div>
    )
}

export default SideProfile