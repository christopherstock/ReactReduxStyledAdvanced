
    /*******************************************************************************************************************
    *   All properties of the 'TaskList' component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface TaskListProps
    {
        taskList       :string[];

        onTaskDelete   :Function;

        onTaskMoveDown :Function;

        onTaskMoveUp   :Function;
    }
