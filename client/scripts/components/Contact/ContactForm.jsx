import { Button, Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

const ContactForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, item } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Contact Group"
        okText="Save"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title.' }],
              initialValue : item.title
            })(
              <Input  />
            )}
          </FormItem>
          <FormItem label="Phone No.">
            {getFieldDecorator('phone_no', {
              rules: [{ required: true, message: 'Please input the phone no.' }],
              initialValue : item.phone_no
            })(
              <Input  />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

export default ContactForm;