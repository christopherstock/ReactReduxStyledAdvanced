
    import * as React from 'react';
    import * as tl    from '../tl';
    import { ThemeProvider} from "styled-components";

    /*******************************************************************************************************************
    *   The entire application component.
    *   This is an example for a stateful component.
    *
    *   TODO Remove redux handling of inputError and inputText in TaskInput component according to ReactRedux!
    *   TODO State from interface to class!
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class AppUnconnected extends React.Component<tl.AppProps, null>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "App.render() being invoked" );

            return <ThemeProvider theme={ this.props.currentTheme }>

                <tl.Styles.AppPanel>

                    { /* theme switchers */ }
                    <tl.Styles.SwitchThemeButton
                        onClick={ () => { this.props.onSwitchTheme( tl.Styles.ThemeDefault ); } }
                    >
                        Apply Default Theme
                    </tl.Styles.SwitchThemeButton>
                    <tl.Styles.SwitchThemeButton
                        onClick={ () => { this.props.onSwitchTheme( tl.Styles.ThemeMayflower ); } }
                    >
                        Apply Mayflower Theme
                    </tl.Styles.SwitchThemeButton>
                    <tl.Styles.SwitchThemeButton
                        onClick={ () => { this.props.onSwitchTheme( tl.Styles.ThemeLemon ); } }
                    >
                        Apply Lemon Theme
                    </tl.Styles.SwitchThemeButton>

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

    export const App:any = tl.Connector.connectApp( AppUnconnected );
