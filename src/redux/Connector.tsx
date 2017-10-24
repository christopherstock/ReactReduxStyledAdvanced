
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
        *   Connects the react component 'TaskList' with redux and returns the connected instance.
        *
        *   @return The connected react component.
        ***************************************************************************************************************/
        public static connectTaskList() : any
        {
            const mapStateToProps:any = ( state:any ) => {
                return {
                    taskList: state.taskList
                }
            };

            const mapDispatchToProps:any = ( dispatch:any ) => {
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

        /***************************************************************************************************************
        *   Connects the react component 'TaskInput' with redux and returns the connected instance.
        *
        *   @return The connected react component.
        ***************************************************************************************************************/
        public static connectTaskInput() : any
        {
            const mapStateToProps:any = ( state:any) : any => {
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
    }
