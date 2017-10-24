
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
        private TaskList:any        = null;

        private TaskListItem:any    = null;

        private TaskItemButton:any  = null;

        /***************************************************************************************************************
        *   Creates a new instance of this component.
        *
        *   @param props The properties being passed as tag attributes.
        ***************************************************************************************************************/
        public constructor( props:tl.TaskListProps )
        {
            super( props );

            this.TaskList       = tl.Styles.getTaskList();
            this.TaskListItem   = tl.Styles.getTaskListItem();
            this.TaskItemButton = tl.Styles.getTaskItemButton();
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

            return <this.TaskList>

                { this.createItems() }

            </this.TaskList>;
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
                    <this.TaskListItem key={ index }>

                        { /* The item description */ }
                        { this.props.taskList[ index ] }

                        { /* Button 'Delete' */ }
                        <this.TaskItemButton
                            onClick={ () => { this.props.onTaskDelete( index ); } }
                        >
                            &#10006;
                        </this.TaskItemButton>

                        { /* Button 'Move Down' */ }
                        <this.TaskItemButton
                            onClick={ () => { this.props.onTaskMoveDown( index ); } }
                            disabled={ index === this.props.taskList.length - 1 }
                        >
                            &#9660;
                        </this.TaskItemButton>

                        { /* Button 'Move Up' */ }
                        <this.TaskItemButton
                            onClick={ () => { this.props.onTaskMoveUp( index ); } }
                            disabled={ index === 0 }
                        >
                            &#9650;
                        </this.TaskItemButton>

                    </this.TaskListItem>
                );
            }

            return items;
        }
    }
