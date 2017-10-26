
    import * as React      from 'react';
    import * as Redux      from 'redux';
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
        *   Connects the react component 'TaskInput' with redux and returns the connected instance.
        *
        *   @return The connected react component.
        ***************************************************************************************************************/
        public static connectTaskInput() : ReactRedux.ComponentClass<tl.TaskInputProps>
        {
            const mapStateToProps:any = ( state:tl.State) : any => {
                return {
                    inputError: state.inputError,
                    inputText:  state.inputText,
                }
            };

            const mapDispatchToProps:any = ( dispatch:Redux.Dispatch<Redux.Action> ) : any => {
                return {
                    onTaskCreate:      ( text:string ) => dispatch( tl.ActionCreator.createTaskAction(      text ) ),
                    onSetInputField:   ( text:string ) => dispatch( tl.ActionCreator.setInputFieldAction(   text ) ),
                    onClearInputField: ()              => dispatch( tl.ActionCreator.clearInputFieldAction()       ),
                    onSetInputError:   ()              => dispatch( tl.ActionCreator.setInputErrorAction()         ),
                    onClearInputError: ()              => dispatch( tl.ActionCreator.clearInputErrorAction()       ),
                }
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( tl.TaskInputUnconnected );
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskList' with redux and returns the connected instance.
        *
        *   @return The connected react component.
        ***************************************************************************************************************/
        public static connectTaskList() : ReactRedux.ComponentClass<tl.TaskListProps>
        {
            const mapStateToProps:any = ( state:tl.State ) : any => {
                return {
                    taskList: state.taskList
                }
            };

            const mapDispatchToProps:any = ( dispatch:Redux.Dispatch<Redux.Action> ) : any => {
                return {
                    onTaskDelete:   ( index:number ) => dispatch( tl.ActionCreator.deleteTaskAction(   index ) ),
                    onTaskMoveUp:   ( index:number ) => dispatch( tl.ActionCreator.moveTaskUpAction(   index ) ),
                    onTaskMoveDown: ( index:number ) => dispatch( tl.ActionCreator.moveTaskDownAction( index ) ),
                }
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( tl.TaskListUnconnected );
        }
    }
