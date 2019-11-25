import React, {useState, useCallback} from 'react'
import {useDispatch} from 'react-redux';
import { Button, message } from 'antd';
// import * as types from '../../../state/actionTypes'
import * as actions from '../../../state/actionCreators'
import AxiosAuth from '../../../AxiosAuth/AxiosAuth'
import CreateBill from '../../CreateBill/billModal'


const createBillURL = 'https://split-the-bill-api.herokuapp.com/api/bills';

const SideProfile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [formRef, setFormRef] = useState(null);

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
        
        AxiosAuth()
            .post(createBillURL, details)
            .then(res => {
                debugger
                // const data = res.data.bill
                formRef.resetFields();
                message.info('Bill Created');
                // dispatch({type: types.UPDATE_BILLS, payload: data})
                dispatch(actions.getBills())
                setIsVisible(false);
            })
            .catch(error => {
                debugger
                localStorage.clear();
                message.error(error.message);
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
            <img
            src="https://cdn2.iconfinder.com/data/icons/people-139/32/People_male_emo_young_makeup_dark_alternative-512.png"
            alt="icon"
            style={imageStyle}
            />
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