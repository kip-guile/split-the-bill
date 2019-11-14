import React, {} from 'react';
import axios from 'axios';
import './login.css';

import { Form, Icon, Input, Button, message, Typography } from 'antd';

const { Title } = Typography;

const loginURL = 'https://split-the-bill-api.herokuapp.com/api/auth/login';

const NormalLoginForm = (props) => {

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
        const details = {
            email: values.email,
            password: values.password
        }

      if (!err) {
        console.log(details)
        message.loading('Logging in...', 2.5)

        axios.post(loginURL, details)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            message.success('You are logged in', 1.0)

            // actions.resetForm();
            // props.history.push('/dashboard')
        })
        .catch(error => {
            localStorage.clear();
            alert(error.response.data.message || error.message);
        });
      }
    });
  };

    const { getFieldDecorator } = props.form;

    const styles2 = {
        width: '30%',
        padding: '2em',
        margin: '3em auto',
        backgroundColor: '#D3D4D9'
    };

    return (
        <div style={styles2}>
            <div>
            <Title level={3}>Sign in</Title>
            </div>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
            <div>
          <a className="login-form-forgot" href="#">
            Forgot password?
          </a>
          </div>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <div>
          Dont have an account? <a href="#">register now!</a>
          </div>
        </Form.Item>
      </Form>
      </div>
    );

}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;