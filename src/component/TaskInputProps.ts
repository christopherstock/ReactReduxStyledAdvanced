
    /*******************************************************************************************************************
    *   All properties of the 'TaskInput' component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface TaskInputProps
    {
        onTaskCreate      :Function;
        onSetInputField   :Function;
        onSetInputError   :Function;
        onClearInputField :Function;
        onClearInputError :Function;
    }
