import React, { Component } from "react";
import { Select } from 'antd';
const Option = Select.Option;
import { Button } from 'antd';
import { Table, Divider } from 'antd';


import axios from 'axios';
import {API_CONFIG} from '../Constant'

class CaspioEstimate extends Component {
	handleChange(value) {
	  console.log(`selected ${value}`);
	}

	state = {
	    company: 1 ,
	    data: []
	}

	handleChange = (company) => {
	    this.setState({
	      company,
	    });
	  }

	handleClick = () => {
		console.log(this.state.company)
		axios({
            method: 'post',
            headers: null,
            url: API_CONFIG.host + '/caspio',
            data: {
            	company: this.state.company
            }
        }).then((res)=>{
        	console.log(res.data)
        	const dataSource = [{
			  key: '1',
			  title: 'Failed',
			  records: res.data.failed,
			}, {
			  key: '2',
			  title: 'Passed',
			  records: res.data.passed,
			}];

			this.setState({
				data : dataSource
			})
        })
	}

    render() {
    	

		const columns = [{
		  title: 'Title',
		  dataIndex: 'title',
		  key: 'title',
		}, {
		  title: 'Records',
		  dataIndex: 'records',
		  key: 'records',
		}];


        return (
            <div>
            <h4>Process Estimate</h4>
           	<Select defaultValue="1" style={{ width: 120 }}  onChange={this.handleChange}>
			    <Option value="1">Phototech</Option>
			    <Option value="2">Chrysler</Option>
		    </Select>

		    <Button type="primary" className="ml-2" onClick={this.handleClick}>Process</Button>

		    <div className="mt-2">
			    {this.state.data.length>0 ?
			    	<Table dataSource={this.state.data} columns={columns} />
			    	: ''
			    }
		    </div>
    		
            </div>
        );
    }
}

export default CaspioEstimate;