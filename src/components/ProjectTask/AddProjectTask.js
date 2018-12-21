import React, { Component } from 'react'
import {
    Form, Icon, Input, Button, Row, Col,
    Alert 
} from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addProjectTask } from '../../actions/projectTaskActions'

const FormItem = Form.Item

class AddProjectTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: '',
            acceptanceCriteria: '',
            status: '',
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onSubmitForm = (e) => {
        e.preventDefault()
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        }
        console.log(newProjectTask)
        this.props.addProjectTask(newProjectTask, this.props.history)
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { errors } = this.state
        return (
            <Row gutter={16} style={{ marginTop: '10px' }}>
                <Col span={10}></Col>
                <Col span={4}>
                    <Form className="login-form" onSubmit={this.onSubmitForm}>
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.onChange} 
                            name="summary" placeholder="Summary" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.onChange} 
                            name="acceptanceCriteria" type="text" placeholder="Acceptance Criteria" />
                        </FormItem>
                        <FormItem>
                            <select name="status" defaultValue="selected" onChange={this.onChange} 
                            style={{padding: '5px', 
                            outline: 'none',
                            border:'1px solid #DDD',
                            borderRadius: '3px',
                            width: '100%'}}>
                                <option value="select">Select status</option>
                                <option value="TO_DO">TO DO</option>
                                <option value="IN_PROGRESS">In Progress</option>
                                <option value="DONE">Done</option>
                            </select>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Create project
                        </Button>
                        </FormItem>
                        {
                            errors.summary ? 
                                <Alert message={errors.summary} type="error" showIcon />
                                
                            :
                                null
                        }
                    </Form>
                </Col>
                <Col span={10}></Col>
            </Row>
        )
    }
}

AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask)