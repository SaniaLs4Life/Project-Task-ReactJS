import { combineReducers } from 'redux'
import errorsReducers from './errorsReducer'
import projectTaskReducer from './projectTaskReducer'

export default combineReducers({
    errors: errorsReducers,
    project_task: projectTaskReducer
})