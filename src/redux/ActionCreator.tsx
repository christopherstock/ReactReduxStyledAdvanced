
    import * as tl from '../tl';

    /*******************************************************************************************************************
    *   Specifies all redux action creators.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ActionCreator
    {
        public  static  readonly    ACTION_CREATE_TASK          :string         = 'ACTION_CREATE_TASK';
        public  static  readonly    ACTION_DELETE_TASK          :string         = 'ACTION_DELETE_TASK';
        public  static  readonly    ACTION_MOVE_TASK_UP         :string         = 'ACTION_MOVE_TASK_UP';
        public  static  readonly    ACTION_MOVE_TASK_DOWN       :string         = 'ACTION_MOVE_TASK_DOWN';
        public  static  readonly    ACTION_SWITCH_THEME         :string         = 'ACTION_SWITCH_THEME';

        /***************************************************************************************************************
        *   Specifies the redux action 'create task'.
        *
        *   @param taskName The name of the task to create.
        *
        *   @return The action object for creating a task.
        ***************************************************************************************************************/
        public static createTaskAction( taskName:string ) : tl.Action
        {
            return {
                type:     ActionCreator.ACTION_CREATE_TASK,
                taskName: taskName,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'delete task'.
        *
        *   @param taskIndex The index of the task to delete.
        *
        *   @return The action object for deleting a task.
        ***************************************************************************************************************/
        public static deleteTaskAction( taskIndex:number ) : tl.Action
        {
            return {
                type:      ActionCreator.ACTION_DELETE_TASK,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task up'.
        *
        *   @param taskIndex The index of the task to move up.
        *
        *   @return The action object for moving a task up.
        ***************************************************************************************************************/
        public static moveTaskUpAction( taskIndex:number ) : tl.Action
        {
            return {
                type:      ActionCreator.ACTION_MOVE_TASK_UP,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task down'.
        *
        *   @param taskIndex The index of the task to move down.
        *
        *   @return The action object for moving a task down.
        ***************************************************************************************************************/
        public static moveTaskDownAction( taskIndex:number ) : tl.Action
        {
            return {
                type:      ActionCreator.ACTION_MOVE_TASK_DOWN,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'switch theme'.
        *
        *   @param newTheme The new theme to apply.
        *
        *   @return The action object for switching the theme.
        ***************************************************************************************************************/
        public static createThemeSwitchAction( newTheme:any ) : tl.Action
        {
            return {
                type:     ActionCreator.ACTION_SWITCH_THEME,
                newTheme: newTheme,
            }
        }
    }
