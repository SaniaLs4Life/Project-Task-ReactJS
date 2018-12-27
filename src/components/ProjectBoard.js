import React, { Component, Fragment } from 'react'
import { Layout, Button, Card, Col, Row, Alert } from 'antd'
import { Link } from 'react-router-dom'
import ProjectTaskItem from './ProjectTask/ProjectTaskItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getBacklog } from '../actions/projectTaskActions'
import './ProjectBoard.css'
const {
    Content,
} = Layout;

class ProjectBoard extends Component {
    componentDidMount() {
        this.props.getBacklog()
    }
    render() {
        const { project_tasks } = this.props.project_tasks

        let BoardContent
        let todoItems = []
        let inProgressItems = []
        let doneItems = []

        const BoardAlgorithm = project_tasks => {
            if (project_tasks.length < 1) {
                return (
                    <Alert style={{width: '300px',  margin: 'auto', marginTop: '20px'}} message="No project tasks on this board" type="info" />
                )
            } else {
                const tasks = project_tasks.map(project_task => (
                    <ProjectTaskItem key={project_task.id} project_task={project_task} />
                ))
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].props.project_task.status === "TO_DO") {
                        todoItems.push(tasks[i])
                    }
                    if (tasks[i].props.project_task.status === "IN_PROGRESS") {
                        inProgressItems.push(tasks[i])
                    }
                    if (tasks[i].props.project_task.status === "DONE") {
                        doneItems.push(tasks[i])
                    }
                }
            }
            return (
                <Fragment>
                    <Row gutter={16} style={{ marginTop: '10px' }}>
                        <Col span={8} >
                            <Card>TO DO</Card>
                            {todoItems}
                        </Col>
                        <Col span={8}>
                            <Card>In Progress</Card>
                            {inProgressItems}
                        </Col>
                        <Col span={8}>
                            <Card>Done</Card>
                            {doneItems}
                        </Col>
                    </Row>
                </Fragment>
            )
        }

        BoardContent = BoardAlgorithm(project_tasks)

        return (
            <div>
                <div>
                    <Content style={{ textAlign: 'center', marginTop: '10px'}}>
                        <Link to='/create-project'>
                            <Button>Create a new project</Button>
                        </Link>
                        {
                            BoardContent
                        }
                    </Content>
                </div>
            </div>
        )
    }
}

ProjectBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    project_tasks: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    project_tasks: state.project_task
})


export default connect(mapStateToProps, { getBacklog })(ProjectBoard)
