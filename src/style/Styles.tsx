
    import * as tl       from '../tl';
    import styled, {css} from 'styled-components';

    /*******************************************************************************************************************
    *   Defines all stylings for all styled components.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Styles
    {
        private     static  readonly    COLOR_FONT_DEFAULT      :string             = "#3d3d3d";

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
            this.AppPanel       = Styles.getAppPanel();
            this.AppTitle       = Styles.getAppTitle();

            this.NewTaskInput   = Styles.getNewTaskInput();
            this.NewTaskButton  = Styles.getNewTaskButton();

            this.TaskList       = Styles.getTaskList();
            this.TaskListItem   = Styles.getTaskListItem();
            this.TaskItemButton = Styles.getTaskItemButton();
        }

        /***************************************************************************************************************
        *   Styles the application component.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static getAppPanel()
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
        private static getAppTitle()
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
        private static getNewTaskButton()
        {
            return styled.input`
                background:         #8c8c8c;
                color:              #ffffff;
                padding:            0 10px 0 10px;
                height:             40px;
                margin-top:         15px;

                &:hover
                {
                    background:     #a8a8a8;
                }
            `;
        }

        /***************************************************************************************************************
        *   Styles the application title.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static getNewTaskInput()
        {
            return styled.input`
                width:      400px;
                height:     40px;
                margin-top: 15px;
                text-align: center;
                background: ${ ( props:tl.TaskInputProps ) => props.inputError ? '#ff7086' : '#cacaca' };

                &:focus
                {
                    background: ${ ( props:tl.TaskInputProps ) => props.inputError ? '#ff8e95' : '#e2e2e2' };
                }
            `;
        }

        /***************************************************************************************************************
        *   Styles the task list.
        *
        *   @return The styling for the task list.
        ***************************************************************************************************************/
        private static getTaskList()
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
        private static getTaskListItem()
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
        private static getTaskItemButton()
        {
            return styled.button`
                background:     #8c8c8c;
                color:          #ffffff;
                padding:        0 10px 0 10px;
                float:          right;
                line-height:    30px;
                margin:         5px;

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
    }
