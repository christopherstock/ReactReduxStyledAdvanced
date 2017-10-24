
    import * as React  from 'react';
    import * as tl     from '../tl';
    import      styled from 'styled-components';

    /*******************************************************************************************************************
    *   The entire application component.
    *   This is an example for a stateful component.
    *
    *   TODO Solve styled components.
    *   TODO Remove packaqges '@types/typescript' and '@types/redux' from package.json?
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



            // Create a Title component that'll render an <h1> tag with some styles
            const Title = styled.h1`
                font-size: 1.5em;
                text-align: center;
                color: palevioletred;
            `;

            // Create a Wrapper component that'll render a <section> tag with some styles
            const Wrapper = styled.section`
                padding: 4em;
                background: papayawhip;
            `;



            console.log( "App.render() being invoked" );

            // this method is only being passed once in the applications lifecycle!
            const TaskInput:any = tl.Connector.connectTaskInput();
            const TaskList:any  = tl.Connector.connectTaskList();

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <TaskInput />

                { /* task list */ }
                <TaskList />



                { /* styled component example */ }
                <Wrapper>
                    <Title>
                        Hello World, this is my first styled component!
                    </Title>
                </Wrapper>



            </div>;
        }
    }
