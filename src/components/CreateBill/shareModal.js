import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import 'antd/dist/antd.css';
import { Modal, Select } from 'antd';

const { Option } = Select;


const ShareBill = (props) => {
    const users = useSelector(state => state.lumpstate.users)

    const roll = users.map(user => 
    <Option key={user.id}>{<p>{user.firstName + ' ' + user.lastName}</p>}</Option>)

function handleChange(value) {
    let names = []
    names.push(value)
    console.log(names)
  }


    return (
      <Modal
          visible={props.visible}
          title="Select a users to split the bill with"
          okText="Split"
          onCancel={props.onCancel}
          onOk={props.onCreate}
        >
              <Select
                mode="multiple"
                style={{ width: '50%' }}
                placeholder="Please select user"
                defaultValue={[]}
                onChange={handleChange}
                >
                {roll}
                </Select>
        </Modal>
    )
}

export default ShareBill;

