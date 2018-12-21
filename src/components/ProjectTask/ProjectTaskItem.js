import React, { Component } from 'react'
import { Button, Card, Col, Icon } from 'antd'
const { Meta } = Card

class ProjectTaskItem extends Component {
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
                        <h3 style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>Summary : {task.summary}</h3>
                        <Button type="primary">View/ Update</Button> {' '}
                        <Button type="danger" icon="pushpin">Delete</Button>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default ProjectTaskItem