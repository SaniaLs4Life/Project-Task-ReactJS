import React, { Component } from 'react'
import { Button, Card, Col, Icon, Popconfirm, message } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProjectTask } from '../../actions/projectTaskActions'
const { Meta } = Card

class ProjectTaskItem extends Component {
    onDeleteClick = (pt_id) => {
        this.props.deleteProjectTask(pt_id)
        message.success('Project task deleted successfully');
    }
    render() {
        const task = this.props.project_task
        return (
            <div>
                <Col>
                    <Card style={{ marginTop: 16 }} >
                        <Meta
                            avatar={<Icon type="pushpin" theme="filled" />}
                            title={"ID: " + task.id}
                            description={task.acceptanceCriteria}
                        />
                        <h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Summary : {task.summary}</h3>
                        <Button type="primary"><Link to={`/update-project/${task.id}`}>View/ Update</Link></Button> {' '}
                        <Popconfirm title="Are you sure delete this task?" onConfirm={ () => this.onDeleteClick(task.id)} okText="Yes" cancelText="No">                            
                            <Button type="danger" icon="pushpin">Delete</Button>
                        </Popconfirm>
                    </Card>
                </Col>
            </div>
        )
    }
}


ProjectTaskItem.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired
}

export default connect(null, { deleteProjectTask })(ProjectTaskItem)