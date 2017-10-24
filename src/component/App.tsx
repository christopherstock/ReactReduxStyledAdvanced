
    import * as React      from 'react';
    import * as tl         from '../tl';

    /*******************************************************************************************************************
    *   The entire application component.
    *   This is an example for a stateful component.
    *
    *   TODO Solve styled components.
    *   TODO Remove packages '@types/typescript' and '@types/redux' from package.json?
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class App extends React.Component<tl.AppProps, null>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "App.render() being invoked" );

            // TODO outsource -- will change if theme changes!
            // this method is only being passed once in the applications lifecycle!
            const AppTitle:any  = tl.Styles.getAppTitle();
            const TaskInput:any = tl.Connector.connectTaskInput();
            const TaskList:any  = tl.Connector.connectTaskList();

            return <div>

                { /* title */ }
                <AppTitle>{ this.props.title }</AppTitle>

                { /* task input form */ }
                <TaskInput />

                { /* task list */ }
                <TaskList />

            </div>;
        }
    }
