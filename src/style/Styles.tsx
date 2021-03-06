
    import * as React from 'react';
    import styled, {keyframes, injectGlobal, SimpleInterpolation} from 'styled-components';

    /*******************************************************************************************************************
    *   Defines all stylings for all styled components.
    *
    *   More information on 'tagged template literals', a new feature in ES6, can be found here:
    *   @see https://www.styled-components.com/docs/advanced#tagged-template-literals
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Styles
    {
        private     static  readonly    COLOR_FONT_DEFAULT      :string                 = "#3d3d3d";

        public      static              ThemeDefault            :any                    = null;
        public      static              ThemeMayflower          :any                    = null;
        public      static              ThemeLemon              :any                    = null;

        public      static              BasicButton             :any                    = null;

        public      static              AnimationFadeIn         :SimpleInterpolation    = null;

        public      static              AppPanel                :any                    = null;
        public      static              AppTitle                :any                    = null;
        public      static              NewTaskInput            :any                    = null;
        public      static              NewTaskButton           :any                    = null;
        public      static              TaskList                :any                    = null;
        public      static              TaskListItem            :any                    = null;
        public      static              TaskItemButton          :any                    = null;
        public      static              SwitchThemeButton       :any                    = null;

        /***************************************************************************************************************
        *   Styles the application component.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        public static init()
        {
            this.setGlobalStyle();

            this.ThemeDefault      = Styles.createThemeDefault();
            this.ThemeMayflower    = Styles.createThemeMayflower();
            this.ThemeLemon        = Styles.createThemeLemon();

            this.BasicButton       = Styles.createBasicButton();

            this.AnimationFadeIn   = Styles.createAnimationFadeIn();

            this.AppTitle          = Styles.createAppTitle();
            this.AppPanel          = Styles.createAppPanel();

            this.NewTaskInput      = Styles.createNewTaskInput();
            this.NewTaskButton     = Styles.createNewTaskButton();
            this.SwitchThemeButton = Styles.createSwitchThemeButton();
            this.TaskList          = Styles.createTaskList();
            this.TaskListItem      = Styles.createTaskListItem();
            this.TaskItemButton    = Styles.createTaskItemButton();
        }

        /***************************************************************************************************************
        *   Creates a style for the application title.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createAppTitle() : any
        {
            return styled.h1`
                font-size: 35px;
                color:     ${ Styles.COLOR_FONT_DEFAULT };
            `;
        }

        /***************************************************************************************************************
        *   Injects global css attributes.
        ***************************************************************************************************************/
        private static setGlobalStyle() : void
        {
            injectGlobal`
                body
                {
                    background: #c0c0c0;
                    color:      #3d3d3d;
                    margin:     50px;
                }
                
                *
                {
                    font-family:   sans-serif;
                    font-size:     15px;
                    margin:        0;
                    padding:       0;
                    border:        0;
                    border-radius: 5px;
                    outline:       none;
                }                
            `;
        }

        /***************************************************************************************************************
        *   Creates a style for the application panel.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createAppPanel() : any
        {
            return styled.div.attrs(
                {
                    id: 'appPanel',
                }
            )`
                background: #ffffff;
                text-align: center;
                margin:     0 auto 0 auto;
                padding:    15px;
                width:      640px;
                height:     auto;
                transition: all 0.3s ease-in;
            `;
        }

        /***************************************************************************************************************
        *   Creates a style for the input field 'new task'.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createNewTaskInput() : any
        {
            return styled.input`
                width:      400px;
                height:     40px;
                margin-top: 15px;
                text-align: center;
                transition: all 0.3s ease-in;
                background: ${ ( props:any ) => props.inputError ? '#ff7086' : '#e2e2e2' };

                &:focus
                {
                    background: ${ ( props:any ) => props.inputError ? '#ff7086' : '#cacaca' };
                }
            `;
        }

        /***************************************************************************************************************
        *   Creates a style for the task list.
        *
        *   @return The styling for the task list.
        ***************************************************************************************************************/
        private static createTaskList() : any
        {
            return styled.ul`
                list-style-type: none;
            `;
        }

        /***************************************************************************************************************
        *   Creates a style for a basic button.
        *
        *   @return The styling for a basic button.
        ***************************************************************************************************************/
        private static createBasicButton()
        {
            return styled.input`
                background: #8c8c8c;
                color:      #ffffff;
                padding:    0 10px 0 10px;
                transition: all 0.3s ease-in;

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
        *   Creates a style for the button 'new task'.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createNewTaskButton() : any
        {
            return Styles.BasicButton.extend`
                height:     40px;
                margin-top: 15px;
            `;
        }

        /***************************************************************************************************************
        *   Creates a style for the button 'switch theme'.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createSwitchThemeButton() : any
        {
            const button = Styles.BasicButton.withComponent('button');

            return button.extend`
                height:     25px;
                margin:     0 10px 15px 15px;
                background: #cdcdcd;
                font-size:  12px;

                &:hover
                {
                    background: #e0e0e0; 
                }
            `;
        }

        /***************************************************************************************************************
        *   Creates a style for one button in the task item line.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createTaskItemButton() : any
        {
            return Styles.BasicButton.extend`
                float:       right;
                line-height: 30px;
                margin:      5px;
            `;
        }

        /***************************************************************************************************************
        *   Creates a 'fade in' animation.
        *
        *   @return The 'fade in' animation.
        ***************************************************************************************************************/
        private static createAnimationFadeIn() : SimpleInterpolation
        {
            return keyframes`
                from 
                {
                    opacity: 0.0; 
                } 
                
                to 
                { 
                    opacity: 1.0; 
                }
            `;
        }

        /***************************************************************************************************************
        *   Creates a style for one task list item.
        *
        *   @return The styling for the app title.
        ***************************************************************************************************************/
        private static createTaskListItem() : any
        {
            return styled.li`
                background:  ${ props => props.theme.mainColor };
                animation:   ${ Styles.AnimationFadeIn } 0.5s ease-in;
                height:      40px;
                line-height: 40px;
                margin-top:  15px;
            `;
        }

        /***************************************************************************************************************
        *   Creates the 'default' theme.
        *
        *   @return The theme data.
        ***************************************************************************************************************/
        private static createThemeDefault() : any
        {
            return {
                mainColor: '#a5e2bf',
            };
        }

        /***************************************************************************************************************
        *   Creates the 'mayflower' theme.
        *
        *   @return The theme data.
        ***************************************************************************************************************/
        private static createThemeMayflower() : any
        {
            return {
                mainColor: '#f2c5a4',
            };
        }

        /***************************************************************************************************************
        *   Creates the 'lemon' theme.
        *
        *   @return The theme data.
        ***************************************************************************************************************/
        private static createThemeLemon() : any
        {
            return {
                mainColor: '#f4f1ac',
            };
        }
    }
