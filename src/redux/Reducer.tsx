
    import * as tl from '../tl';

    /*******************************************************************************************************************
    *   Specifies all redux reducers.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Reducer
    {
        /***************************************************************************************************************
        *   Specifies the global reducer method for the entire TaskList application.
        *
        *   @param state  The existing state object.
        *   @param action The action to perform on the state object.
        *
        *   @return The new state object.
        ***************************************************************************************************************/
        public static taskListReducer( state:tl.State = Reducer.createDefaultState() , action:tl.Action ) : tl.State
        {
            console.log( "taskListReducer reduces action [", action, "] State BEFORE is [", state, "]" );

            let newState = null;

            switch ( action.type )
            {
                case tl.ActionCreator.ACTION_CREATE_TASK:
                {
                    newState = Reducer.createTaskReducer( state, action );
                    break;
                }

                case tl.ActionCreator.ACTION_DELETE_TASK:
                {
                    newState = Reducer.deleteTaskReducer( state, action );
                    break;
                }

                case tl.ActionCreator.ACTION_MOVE_TASK_UP:
                {
                    newState = Reducer.moveTaskUpReducer( state, action );
                    break;
                }

                case tl.ActionCreator.ACTION_MOVE_TASK_DOWN:
                {
                    newState = Reducer.moveTaskDownReducer( state, action );
                    break;
                }

                case tl.ActionCreator.ACTION_SET_INPUT_FIELD:
                {
                    newState = Reducer.setInputFieldReducer( state, action );
                    break;
                }

                case tl.ActionCreator.ACTION_CLEAR_INPUT_FIELD:
                {
                    newState = Reducer.clearInputFieldReducer( state );
                    break;
                }

                case tl.ActionCreator.ACTION_SET_INPUT_ERROR:
                {
                    newState = Reducer.setInputErrorReducer( state );
                    break;
                }

                case tl.ActionCreator.ACTION_CLEAR_INPUT_ERROR:
                {
                    newState = Reducer.clearInputErrorReducer( state );
                    break;
                }

                default:
                {
                    newState = state;
                    break;
                }
            }

            console.log( " State AFTER is [", newState, "]" );

            return newState;
        }

        /***************************************************************************************************************
        *   Reduces the state in order to create a new task.
        *
        *   @param state  The existing state object.
        *   @param action The action to perform on the state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static createTaskReducer( state:tl.State, action:tl.Action ) : tl.State
        {
            let newTasks = state.taskList.slice();
            newTasks.push( action.taskName );

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to delete a new task.
        *
        *   @param state  The existing state object.
        *   @param action The action to perform on the state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static deleteTaskReducer( state:tl.State, action:tl.Action ) : tl.State
        {
            let newTasks = state.taskList.slice();
            newTasks.splice( action.taskIndex, 1 );

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to move a task up.
        *
        *   @param state  The existing state object.
        *   @param action The action to perform on the state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static moveTaskUpReducer( state:tl.State, action:tl.Action ) : tl.State
        {
            let newTasks       = state.taskList.slice();
            let taskToMoveUp   = newTasks[ action.taskIndex     ];
            let taskToMoveDown = newTasks[ action.taskIndex - 1 ];

            newTasks[ action.taskIndex - 1 ] = taskToMoveUp;
            newTasks[ action.taskIndex     ] = taskToMoveDown;

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to move a task down.
        *
        *   @param state  The existing state object.
        *   @param action The action to perform on the state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static moveTaskDownReducer( state:tl.State, action:tl.Action ) : tl.State
        {
            let newTasks       = state.taskList.slice();
            let taskToMoveUp   = newTasks[ action.taskIndex + 1 ];
            let taskToMoveDown = newTasks[ action.taskIndex     ];

            newTasks[ action.taskIndex     ] = taskToMoveUp;
            newTasks[ action.taskIndex + 1 ] = taskToMoveDown;

            return {
                taskList:   newTasks,
                inputError: state.inputError,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to set a text for the input field.
        *
        *   @param state  The existing state object.
        *   @param action The action to perform on the state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static setInputFieldReducer( state:tl.State, action:tl.Action ) : tl.State
        {
            return {
                taskList:   state.taskList,
                inputError: state.inputError,
                inputText:  action.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to clear the text in the input field.
        *
        *   @param state The existing state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static clearInputFieldReducer( state:tl.State ) : tl.State
        {
            return {
                taskList:   state.taskList,
                inputError: state.inputError,
                inputText:  "",
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to set the input error for the input field.
        *
        *   @param state The existing state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static setInputErrorReducer( state:tl.State ) : tl.State
        {
            return {
                taskList:   state.taskList,
                inputError: true,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to clear the input error for the input field.
        *
        *   @param state The existing state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static clearInputErrorReducer( state:tl.State ) : tl.State
        {
            return {
                taskList:   state.taskList,
                inputError: false,
                inputText:  state.inputText,
            };
        }

        /***************************************************************************************************************
        *   Creates and returns the default state.
        *
        *   @return The initially constructed state object.
        ***************************************************************************************************************/
        private static createDefaultState() : tl.State
        {
            return {
                taskList:   [],
                inputError: false,
                inputText:  "",
            };
        }
    }
