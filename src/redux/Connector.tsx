
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
            const mapStateToProps:any = ( state:tl.State) : any => {
                return {
                    currentTheme: state.globalTheme,
                }
            };

            const mapDispatchToProps:any = {
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
            const mapStateToProps:any = ( state:tl.State) : any => {
                return {
                    inputError: state.inputError,
                    inputText:  state.inputText,
                }
            };

            const mapDispatchToProps:any = {
                onTaskCreate:      tl.ActionCreator.createTaskAction,
                onSetInputField:   tl.ActionCreator.setInputFieldAction,
                onClearInputField: tl.ActionCreator.clearInputFieldAction,
                onSetInputError:   tl.ActionCreator.setInputErrorAction,
                onClearInputError: tl.ActionCreator.clearInputErrorAction,
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
            const mapStateToProps:any = ( state:tl.State ) : any => {
                return {
                    taskList: state.taskList
                }
            };

            const mapDispatchToProps:any = {
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
