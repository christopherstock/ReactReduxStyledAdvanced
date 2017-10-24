
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
        public  static  readonly    ACTION_SET_INPUT_FIELD      :string         = 'ACTION_SET_INPUT_FIELD';
        public  static  readonly    ACTION_CLEAR_INPUT_FIELD    :string         = 'ACTION_CLEAR_INPUT_FIELD';
        public  static  readonly    ACTION_SET_INPUT_ERROR      :string         = 'ACTION_SET_INPUT_ERROR';
        public  static  readonly    ACTION_CLEAR_INPUT_ERROR    :string         = 'ACTION_CLEAR_INPUT_ERROR';

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
        *   Specifies the redux action 'set input field'.
        *
        *   @param inputText The text to set into the input field.
        *
        *   @return The action object for setting the input field.
        ***************************************************************************************************************/
        public static setInputFieldAction( inputText:string ) : tl.Action
        {
            return {
                type:      ActionCreator.ACTION_SET_INPUT_FIELD,
                inputText: inputText,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'clear input field'.
        *
        *   @return The action object for clearing the input field.
        ***************************************************************************************************************/
        public static clearInputFieldAction() : tl.Action
        {
            return {
                type: ActionCreator.ACTION_CLEAR_INPUT_FIELD,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'set input error'.
        *
        *   @return The action object for setting the input error.
        ***************************************************************************************************************/
        public static setInputErrorAction() : tl.Action
        {
            return {
                type: ActionCreator.ACTION_SET_INPUT_ERROR,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'clear input error'.
        *
        *   @return The action object for clearing the input error.
        ***************************************************************************************************************/
        public static clearInputErrorAction() : tl.Action
        {
            return {
                type: ActionCreator.ACTION_CLEAR_INPUT_ERROR,
            }
        }
    }
