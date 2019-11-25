import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Select } from 'antd';


const ShareBill = ({roll, visible, onCancel, onCreate, billId}) => {

    let names = []

    function handleChange(value) {
        names.push(value)
        return names
      }

    return (
      <Modal
          visible={visible}
          title="Select a users to split the bill with"
          okText="Split"
          onCancel={onCancel}
          onOk={() => onCreate(billId, names)}
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

