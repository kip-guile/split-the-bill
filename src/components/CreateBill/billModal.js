import React from 'react';
import 'antd/dist/antd.css';
import AxiosAuth from '../../AxiosAuth/AxiosAuth';
import { Modal, Form, Input } from 'antd';


  const createBillURL = 'https://split-the-bill-api.herokuapp.com/api/bills';

const CreateBill = (props) => {

    // const createBill = (formValues, actions) => {
    //     const details = {
    //         amount: formValues.amount,
    //         title: formValues.title
    //     }


    //     AxiosAuth()
    //         .post(createBillURL, details)
    //         .then(res => {
    //             actions.resetForm();
    //             alert(res.statusText);
    //             props.history.push('/my_bills')
    //         })
    //         .catch(error => {
    //             localStorage.clear();
    //             alert(error.message);
    //         });
    // };


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

