import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Input } from 'antd';


const SettleUp = (props) => {


    return (
      <Modal
          visible={props.visible}
          title="Settle Bill"
          okText="Settle"
          onCancel={props.onCancel}
          onOk={props.onCreate}
        >
          <Form layout="vertical">

            <Form.Item label="Amount">
              {props.form.getFieldDecorator('amount', {
                rules: [{ required: true, message: 'Enter amount to be paid' }],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
    )
}

const SplitsModal = Form.create({ name: 'normal_login' })(SettleUp);

export default SplitsModal;