import React from 'react';
import {useDispatch} from 'react-redux';
import 'antd/dist/antd.css';
import { Modal, message } from 'antd';
import SettleList from './settleList'
import AxiosAuth from '../../AxiosAuth/AxiosAuth'
import * as actionCreators from '../../state/actionCreators'

const approveURL = 'https://split-the-bill-api.herokuapp.com/api/splits'

const SettleModal = (props) => {
    const {settleVisible, onSettleCancel, handleSettleCreate, data, setSettleVisible} = props

    const dispatch = useDispatch()

    const approve = (id) => {

        AxiosAuth().patch(`${approveURL}/${id}/approve`)
            .then(res => {
                debugger
                dispatch(actionCreators.getBills())
                setSettleVisible(false)
                message.success('Bill confirmed successfully')
            })
            .catch(err => {
                message.error(err.message)
            })
    }

    return (
      <Modal
          visible={settleVisible}
          okText="Done"
          onCancel={onSettleCancel}
          onOk={handleSettleCreate}
        >
            <SettleList
            data={data}
            approve={approve}/>
        </Modal>
    )
}

export default SettleModal