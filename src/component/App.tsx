
    import * as React from 'react';
    import * as tl    from '../tl';
    import { ThemeProvider} from "styled-components";

    /*******************************************************************************************************************
    *   The entire application component.
    *   This is an example for a stateful component.
    *
    *   TODO Add theme switcher.
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

            return <ThemeProvider theme={ tl.Styles.ThemeDefault }>

                <tl.Styles.AppPanel>

                    { /* title */ }
                    <tl.Styles.AppTitle>{ this.props.title }</tl.Styles.AppTitle>

                    { /* task input form */ }
                    <tl.TaskInput />

                    { /* task list */ }
                    <tl.TaskList />

                </tl.Styles.AppPanel>

            </ThemeProvider>;
        }
    }
