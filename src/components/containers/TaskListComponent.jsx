import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import { TaskComponent } from '../pure/TaskComponent'

const TaskListComponent = () => {
    const defaultTask = new Task(
        'Example',
        'Default Description',
        false,
        LEVELS.NORMAL
    )

    const changeState = (id) => {
        console.log()
    }
    return (
        <div>
            <div>Your Tasks:</div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}
export { TaskListComponent }
