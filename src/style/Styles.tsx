
    import * as tl                             from '../tl';
    import styled, {StyledComponentClass, css} from 'styled-components';

    /*******************************************************************************************************************
    *   Defines all stylings for all styled components.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Styles
    {
        private     static  readonly    COLOR_FONT_DEFAULT      :string             = "#3d3d3d";

        public      static              BasicButton             :any                = null;

        public      static              AppPanel                :any                = null;
        public      static              AppTitle                :any                = null;
        public      static              NewTaskInput            :any                = null;
        public      static              NewTaskButton           :any                = null;
        public      static              TaskList                :any                = null;
        public      static              TaskListItem            :any                = null;
        public      static              TaskItemButton          :any                = null;

        /***************************************************************************************************************
        *   Styles the application component.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        public static init()
        {
            this.BasicButton    = Styles.createBasicButton();

            this.AppPanel       = Styles.createAppPanel();
            this.AppTitle       = Styles.createAppTitle();
            this.NewTaskInput   = Styles.createNewTaskInput();
            this.NewTaskButton  = Styles.createNewTaskButton();
            this.TaskList       = Styles.createTaskList();
            this.TaskListItem   = Styles.createTaskListItem();
            this.TaskItemButton = Styles.createTaskItemButton();
        }

        /***************************************************************************************************************
        *   Styles basic buttons.
        *
        *   @return The styling for a basic button.
        ***************************************************************************************************************/
        private static createBasicButton() : any
        {
            return styled.input`
                background: #8c8c8c;
                color:      #ffffff;
                padding:    0 10px 0 10px;

                &:hover
                {
                    background: #a8a8a8;
                }

                &:disabled
                {
                    background: #c5c5c5;
                }
            `;
        }

        /***************************************************************************************************************
        *   Styles the application component.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createAppPanel() : StyledComponentClass<any, any, any>
        {
            return styled.div`
                background: #ffffff;
                text-align: center;
                margin:     0 auto 0 auto;
                padding:    15px;
                width:      640px;
                height:     auto;                
            `;
        }

        /***************************************************************************************************************
        *   Styles the application title.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createAppTitle() : StyledComponentClass<any, any, any>
        {
            return styled.h1`
                font-size: 35px;
                color:     ${ Styles.COLOR_FONT_DEFAULT };
            `;
        }

        /***************************************************************************************************************
        *   Styles the application title.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createNewTaskButton() : StyledComponentClass<any, any, any>
        {
            return Styles.BasicButton.extend`
                height:             40px;
                margin-top:         15px;
            `;
        }

        /***************************************************************************************************************
        *   Styles the application title.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createNewTaskInput() : StyledComponentClass<any, any, any>
        {
            return styled.input`
                width:      400px;
                height:     40px;
                margin-top: 15px;
                text-align: center;
                background: ${ ( props:tl.TaskInputProps ) => props.inputError ? '#ff7086' : '#e2e2e2' };

                &:focus
                {
                    background: ${ ( props:tl.TaskInputProps ) => props.inputError ? '#ff7086' : '#cacaca' };
                }
            `;
        }

        /***************************************************************************************************************
        *   Styles the task list.
        *
        *   @return The styling for the task list.
        ***************************************************************************************************************/
        private static createTaskList() : StyledComponentClass<any, any, any>
        {
            return styled.ul`
                list-style-type: none;
            `;
        }

        /***************************************************************************************************************
        *   Styles one task list item.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createTaskListItem() : StyledComponentClass<any, any, any>
        {
            return styled.li`
                background:  #a5e2bf;
                animation:   fadeIn 1.0s ease-in;
                height:      40px;
                line-height: 40px;
                margin-top:  15px;
            `;
        }

        /***************************************************************************************************************
        *   Styles one button of one task list item.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createTaskItemButton() : StyledComponentClass<any, any, any>
        {
            return Styles.BasicButton.extend`
                float:          right;
                line-height:    30px;
                margin:         5px;
            `;
        }
    }
