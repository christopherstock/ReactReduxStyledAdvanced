
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

                case tl.ActionCreator.ACTION_SWITCH_THEME:
                {
                    newState = Reducer.switchThemeReducer( state, action );
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
                taskList:    newTasks,
                globalTheme: state.globalTheme,
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
                taskList:    newTasks,
                globalTheme: state.globalTheme,
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
                taskList:    newTasks,
                globalTheme: state.globalTheme,
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
                taskList:    newTasks,
                globalTheme: state.globalTheme,
            };
        }

        /***************************************************************************************************************
        *   Reduces the state in order to switch the global theme.
        *
        *   @param state  The existing state object.
        *   @param action The action to perform on the state object.
        *
        *   @return The new and reduced state object.
        ***************************************************************************************************************/
        private static switchThemeReducer( state:tl.State, action:tl.Action ) : tl.State
        {
            return {
                taskList:    state.taskList,
                globalTheme: action.newTheme,
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
                taskList:    [],
                globalTheme: tl.Styles.ThemeDefault,
            };
        }
    }
