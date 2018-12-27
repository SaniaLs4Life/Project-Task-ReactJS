import React, { Component } from 'react'
import {
  Form, Icon, Input, Button, Row, Col,
  Alert
} from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProjectTask, addProjectTask } from '../../actions/projectTaskActions'

const FormItem = Form.Item

class UpdateProjectTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      summary: '',
      acceptanceCriteria: '',
      status: '',
      errors: {}
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getProjectTask(id)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
    const { id, summary, acceptanceCriteria, status } = nextProps.project_task
    this.setState({
      id,
      summary,
      acceptanceCriteria,
      status
    })
  }
  onSubmitForm = (e) => {
    e.preventDefault()
    const updatedTask = {
      id: this.state.id,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status
    }
    this.props.addProjectTask(updatedTask, this.props.history)
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
                name="summary" value={this.state.summary} placeholder="Summary" />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.onChange}
                name="acceptanceCriteria" value={this.state.acceptanceCriteria} type="text" placeholder="Acceptance Criteria" />
            </FormItem>
            <FormItem>
              <select name="status" value={this.state.status} onChange={this.onChange}
                style={{
                  padding: '5px',
                  outline: 'none',
                  border: '1px solid #DDD',
                  borderRadius: '3px',
                  width: '100%'
                }}>
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

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  project_task: PropTypes.object.isRequired,
  addProjectTask: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  project_task: state.project_task.project_task,
  errors: state.errors
})

export default connect(mapStateToProps, { getProjectTask, addProjectTask })(UpdateProjectTask)