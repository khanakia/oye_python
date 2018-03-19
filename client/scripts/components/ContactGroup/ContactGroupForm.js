import { Button, Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;

const ContactGroupForm = Form.create()(
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
              rules: [{ required: true, message: 'Please input the title of group!' }],
              initialValue : item.title
            })(
              <Input  />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

export default ContactGroupForm;