
    import styled, {css} from 'styled-components';

    /*******************************************************************************************************************
    *   Defines all stylings for all styled components.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Styles
    {
        /*******************************************************************************************************************
        *   Styles the application component.
        *
        *   @return The styling for the app title.
        *******************************************************************************************************************/
        public static getAppPanel()
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

        /*******************************************************************************************************************
        *   Styles the application title.
        *
        *   @return The styling for the app title.
        *******************************************************************************************************************/
        public static getAppTitle()
        {
            return styled.h1`
                font-size: 35px;
                color:     #3d3d3d;
            `;
        }

        /*******************************************************************************************************************
        *   Styles the application title.
        *
        *   @return The styling for the app title.
        *******************************************************************************************************************/
        public static getNewTaskButton()
        {
            return styled.input`
                background:         #8c8c8c;
                color:              #ffffff;
                padding:            0 10px 0 10px;
                height:             40px;
                margin-top:         15px;
                
                &:hover {
                    background:     #a8a8a8;
                }
            `;
        }

        /*******************************************************************************************************************
        *   Styles the application title.
        *
        *   @return The styling for the app title.
        *******************************************************************************************************************/
        public static getNewTaskInput()
        {
            return styled.input`
                width:      400px;
                height:     40px;
                margin-top: 15px;
                text-align: center;
                background: #e2e2e2;                
                
                &:hover {
                
                }
                
                &:focus {
                    background: #cacaca;
                }
            `;
        }

        /*******************************************************************************************************************
        *   Styles one task list item.
        *
        *   @return The styling for the app title.
        *******************************************************************************************************************/
        public static getTaskListItem()
        {
            return styled.li`
                background:  #a5e2bf;
                animation:   fadeIn 1.0s ease-in;
                height:      40px;
                line-height: 40px;
                margin-top:  15px;
            `;
        }


    }
