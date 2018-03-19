import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

import { Table, Divider, Popconfirm, message } from 'antd';

import ContactForm from "./ContactForm"

@inject('contactStore')
@observer
class Contact extends Component {

	constructor(props) {
        super(props);
	    this.state = {
		    visible: false,
		    item: {}
		};
    }

    componentDidMount() {
        this.props.contactStore.fetchList()
    }

    showModal = () => {
        this.setState({ visible: true, item: {} });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);

            Api.Contact.save(values, this.state.item.id).then((res) => {
            	this.props.contactStore.fetchList()
            })
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }

    handleDelete = (id) => {
 		Api.Contact.delete(id).then((res) => {
          	this.props.contactStore.fetchList()
	   		message.success('Successfully Deleted');
        })
    }


    handleEdit = (e, record) => {
    	e.preventDefault()
 		// this.props.contactStore.contact_group_item = data
 		this.setState({
 			visible: true,
 			item: record
 		})
    }



    render() {
		const columns = [
        {
		    title: 'Name',
		    dataIndex: 'title',
		    key: 'title',
		},
        {
            title: 'Phone',
            dataIndex: 'phone_no',
            key: 'phone_no',
        }, 
        {
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => (
		    <span>
      		<a href="#" onClick={(e) => this.handleEdit(e, record)}>Edit</a>
			<Divider type="vertical" />
		    <Popconfirm title="Are you sure delete this?" onConfirm={() => this.handleDelete(record.id)} okText="Yes" cancelText="No">
			    <a href="#">Delete</a>
			</Popconfirm>
		    {/*<i className="icon ion-trash-a clickable" onClick={() => this.handleDelete(record.id)}></i>*/}
		    </span>
		  ),
		}];

        const { contact_list } = this.props.contactStore
        let list = (contact_list.slice())


        return (
            <div>
         		<h5>Contact <button className="btn btn-primary btn-sm"  onClick={this.showModal}>Add New</button></h5>
         		<ContactForm
		          ref={this.saveFormRef}
		          item={this.state.item}
		          visible={this.state.visible}
		          onCancel={this.handleCancel}
		          onCreate={this.handleCreate}
		        />
         		<Table dataSource={list} columns={columns} size='middle' rowKey="id" bordered />

            </div>
        );
    }
}

export default Contact;
