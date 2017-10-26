
    import * as React      from 'react';
    import * as ReactDOM   from 'react-dom';
    import * as Redux      from 'redux';
    import * as ReactRedux from 'react-redux';
    import * as tl         from './tl';

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page are fully loaded.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // specify the application title
        let APPLICATION_TITLE:string = "React Redux Styled Components";

        // acclaim debug console and set page title
        console.log(     APPLICATION_TITLE );
        document.title = APPLICATION_TITLE;

        // create redux store
        let store:ReactRedux.Store<tl.State> = Redux.createStore( tl.Reducer.taskListReducer );

        // dispatch default task items
        store.dispatch( tl.ActionCreator.createTaskAction( "Müll rausbringen" ) );
        store.dispatch( tl.ActionCreator.createTaskAction( "Abwaschen"        ) );
        store.dispatch( tl.ActionCreator.createTaskAction( "Wäsche waschen"   ) );

        // init styled components
        tl.Styles.init();

        // render the App component into the main container

        let mainContainer:HTMLDivElement = document.createElement('div');
        mainContainer.id = "mainContainer";
        document.body.appendChild(mainContainer);

        ReactDOM.render(

            <ReactRedux.Provider store={ store }>

                <tl.App
                    title={ APPLICATION_TITLE }
                />

            </ReactRedux.Provider>,
            mainContainer
        );
    };

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page are fully unloaded.
    *******************************************************************************************************************/
    window.onunload = function()
    {
    };
