
    import * as React      from 'react';
    import * as tl         from '../tl';

    /*******************************************************************************************************************
    *   The entire application component.
    *   This is an example for a stateful component.
    *
    *   TODO Add TypeScript typings to Styles.
    *   TODO Move all styled instances to class Styles.
    *   TODO Solve styled components.
    *   TODO Remove div#mainContainer ?
    *   TODO Add theme switcher.
    *   TODO Solve all basic and advanced technics of Styled components.
    *   TODO Remove packages '@types/typescript' and '@types/redux' from package.json?
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class App extends React.Component<tl.AppProps, null>
    {
        private AppPanel:any  = null;

        private AppTitle:any = null;

        /***************************************************************************************************************
        *   Creates a new instance of this component.
        *
        *   @param props The properties being passed as tag attributes.
        ***************************************************************************************************************/
        public constructor( props:tl.AppProps )
        {
            super( props );

            this.AppPanel = tl.Styles.getAppPanel();
            this.AppTitle = tl.Styles.getAppTitle();
        }

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
            const TaskInput:any = tl.Connector.connectTaskInput();
            const TaskList:any  = tl.Connector.connectTaskList();

            return <this.AppPanel>

                { /* title */ }
                <this.AppTitle>{ this.props.title }</this.AppTitle>

                { /* task input form */ }
                <TaskInput />

                { /* task list */ }
                <TaskList />

            </this.AppPanel>;
        }
    }
