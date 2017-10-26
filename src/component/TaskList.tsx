
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
        *   Being invoked every time this component renders.
        *
        *   @return JSX.Element The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "TaskList.render() being invoked" );

            // animate main container height later
            document.getElementById( "mainContainer" ).style.height = ( 150 + ( this.props.taskList.length * 55 ) ) + "px";

            return <tl.Styles.TaskList>

                { this.createItems() }

            </tl.Styles.TaskList>;
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
                    <tl.Styles.TaskListItem key={ index }>

                        { /* The item description */ }
                        { this.props.taskList[ index ] }

                        { /* Button 'Delete' */ }
                        <tl.Styles.TaskItemButton
                            type="button"
                            onClick={ () => { this.props.onTaskDelete( index ); } }
                            value="&#10006;"
                        />

                        { /* Button 'Move Down' */ }
                        <tl.Styles.TaskItemButton
                            type="button"
                            onClick={ () => { this.props.onTaskMoveDown( index ); } }
                            disabled={ index === this.props.taskList.length - 1 }
                            value="&#9660;"
                        />

                        { /* Button 'Move Up' */ }
                        <tl.Styles.TaskItemButton
                            type="button"
                            onClick={ () => { this.props.onTaskMoveUp( index ); } }
                            disabled={ index === 0 }
                            value="&#9650;"
                        />

                    </tl.Styles.TaskListItem>
                );
            }

            return items;
        }
    }
