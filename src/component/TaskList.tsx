
    import * as React    from 'react';
    import * as tl       from '../tl';

    /*******************************************************************************************************************
    *   Represents the TaskList component.
    *   This is an example for a stateless component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class TaskListUnconnected extends React.Component<tl.TaskListProps, null>
    {
        /***************************************************************************************************************
        *   Creates a new instance of this component.
        *
        *   @param props The properties being passed as tag attributes.
        ***************************************************************************************************************/
        public constructor( props:tl.TaskListProps )
        {
            super( props );
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return JSX.Element The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "TaskList.render() being invoked" );

            // animate main container height later
            document.getElementById( "mainContainer" ).style.height = ( 150 + ( this.props.taskList.length * 55 ) ) + "px";

            return <ul id="taskList">

                { this.createItems() }

            </ul>;
        }

        /***************************************************************************************************************
        *   Creates and returns all items for the task list.
        *
        *   @return An array with all rendered JSX elements.
        ***************************************************************************************************************/
        private createItems() : JSX.Element[]
        {
            let items = [];

            // browse all task list items
            for ( let index = 0; index < this.props.taskList.length; ++index )
            {
                items.push(
                    <li key={ index }>

                        { /* The item description */ }
                        { this.props.taskList[ index ] }

                        { /* Button 'Delete' */ }
                        <button
                            onClick={ () => { this.props.onTaskDelete( index ); } }
                            className="button"
                        >
                            &#10006;
                        </button>

                        { /* Button 'Move Down' */ }
                        <button
                            onClick={ () => { this.props.onTaskMoveDown( index ); } }
                            disabled={ index === this.props.taskList.length - 1 }
                            className="button"
                        >
                            &#9660;
                        </button>

                        { /* Button 'Move Up' */ }
                        <button
                            onClick={ () => { this.props.onTaskMoveUp( index ); } }
                            disabled={ index === 0 }
                            className="button"
                        >
                            &#9650;
                        </button>

                    </li>
                );
            }

            return items;
        }
    }
