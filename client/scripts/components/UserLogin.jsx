import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Auth from '../helpers/auth'
import { message } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  componentDidMount() {
        if(Auth.check()) {
            hashHistory.push('/dashboard')
            return false;
        }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        Auth.attempt(values).then(function (response) {
          hashHistory.push('/dashboard')
        }).catch(function (error) {
            message.error('Invalid Login');

        });
        // console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="page-login">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div>
            <h3>Sign In</h3>
        </div>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {/*{getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>*/}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const UserLogin = Form.create()(NormalLoginForm);

export default UserLogin;
