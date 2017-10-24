
    /*******************************************************************************************************************
    *   Defines the global state being handles by the Redux state handling system.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface State
    {
        taskList   :Array<string>,
        inputError :boolean,
        inputText  :string,
    }
