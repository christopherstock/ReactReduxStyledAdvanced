
    import * as React from 'react';
    import * as tl    from '../tl';

    /*******************************************************************************************************************
    *   Represents the input component that lets the user create new tasks.
    *   This is an example for a stateful and controlled component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskInputUnconnected extends React.Component<tl.TaskInputProps, null>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "TaskInput.render() being invoked" );

            return <form onSubmit={ ( event:React.FormEvent<any> ) => { this.onFormSubmit( event ); } }>

                { /* new task input */ }
                <tl.Styles.NewTaskInput
                    type="text"
                    placeholder={ "New task description" }
                    maxLength={   50 }
                    value={       this.props.inputText }
                    onChange={  ( event:React.ChangeEvent<any> ) => { this.onInputChange( event ); } }
                    inputError={ this.props.inputError }
                />

                <br />

                { /* new task button */ }
                <tl.Styles.NewTaskButton
                    type="submit"
                    value="Create Task"
                />

            </form>;
        }

        /***************************************************************************************************************
        *   Being invoked when the input field value changes.
        *
        *   @param event The event when the input field value changes.
        ***************************************************************************************************************/
        private onInputChange( event:React.ChangeEvent<any> ) : void
        {
            console.log( "TaskInput.onInputChange being invoked" );

            // assign text to input field
            this.props.onClearInputError();
            this.props.onSetInputField( event.target.value );
        }

        /***************************************************************************************************************
        *   Being invoked when the form is submitted.
        *
        *   @param event The form submission event.
        ***************************************************************************************************************/
        private onFormSubmit( event:React.FormEvent<any> ) : void
        {
            console.log( "TaskInput.onFormSubmit being invoked" );

            // suppress page reload
            event.preventDefault();

            // trim entered text
            let enteredText = this.props.inputText.trim();

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                console.log( "Empty text input detected." );

                // set error state
                this.props.onSetInputError();
                this.props.onClearInputField();
            }
            else
            {
                // clear error state
                this.props.onClearInputError();
                this.props.onClearInputField();

                // invoke parent listener
                this.props.onTaskCreate( enteredText );
            }
        };
    }

    export const TaskInput:any = tl.Connector.connectTaskInput( TaskInputUnconnected );
