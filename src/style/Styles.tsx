
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
        *   Styles the application title.
        *******************************************************************************************************************/
        public static getAppTitle()
        {
            return styled.h1`
                font-size: 35px;
                color:     #3d3d3d;
            `;
        }
    }
