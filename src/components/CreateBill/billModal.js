import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Input } from 'antd';


const CreateBill = (props) => {


    return (
      <Modal
          visible={props.visible}
          title="Create a new bill"
          okText="Create"
          onCancel={props.onCancel}
          onOk={props.onCreate}
        >
          <Form layout="vertical">

            <Form.Item label="Title">
              {props.form.getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of the bill!' }],
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Amount">
              {props.form.getFieldDecorator('amount')(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
    )
}

const AddBill = Form.create({ name: 'normal_login' })(CreateBill);

export default AddBill;

