
    import * as React      from 'react';
    import * as ReactRedux from 'react-redux';
    import * as tl         from '../tl';

    /*******************************************************************************************************************
    *   Specifies all redux connector methods.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Connector
    {
        /***************************************************************************************************************
        *   Connects the react component 'App' with redux and returns the connected instance.
        *
        *   @return The connected react component.
        ***************************************************************************************************************/
        public static connectApp( component:ReactRedux.ComponentClass<tl.AppProps> ) : ReactRedux.ComponentClass<tl.AppProps>
        {
            const mapStateToProps:ReactRedux.MapStateToProps<tl.State, tl.AppProps> = ( state:tl.State) : any => {
                return {
                    currentTheme: state.globalTheme,
                }
            };

            const mapDispatchToProps:ReactRedux.MapDispatchToPropsParam<any, tl.AppProps> = {
                onSwitchTheme: tl.ActionCreator.createThemeSwitchAction,
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( component );
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskInput' with redux and returns the connected instance.
        *
        *   @return The connected react component.
        ***************************************************************************************************************/
        public static connectTaskInput( component:ReactRedux.ComponentClass<tl.TaskInputProps> ) : ReactRedux.ComponentClass<tl.TaskInputProps>
        {
            const mapStateToProps:ReactRedux.MapStateToProps<tl.State, tl.TaskInputProps> = null;

            const mapDispatchToProps:ReactRedux.MapDispatchToPropsParam<any, tl.TaskInputProps> = {
                onTaskCreate: tl.ActionCreator.createTaskAction,
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( component );
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskList' with redux and returns the connected instance.
        *
        *   @return The connected react component.
        ***************************************************************************************************************/
        public static connectTaskList( component:ReactRedux.ComponentClass<tl.TaskListProps> ) : ReactRedux.ComponentClass<tl.TaskListProps>
        {
            const mapStateToProps:ReactRedux.MapStateToProps<tl.State, tl.TaskListProps> = ( state:tl.State ) : any => {
                return {
                    taskList: state.taskList
                }
            };

            const mapDispatchToProps:ReactRedux.MapDispatchToPropsParam<any, tl.TaskListProps> = {
                onTaskDelete:   tl.ActionCreator.deleteTaskAction,
                onTaskMoveUp:   tl.ActionCreator.moveTaskUpAction,
                onTaskMoveDown: tl.ActionCreator.moveTaskDownAction,
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( component );
        }
    }
