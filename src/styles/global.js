import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    *{
        margin : 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    html, body, #root {
        height:100%;
    }
    body{
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }
    #but{
        background: #DEE3EA; 
        margin : 5px;
        padding: 5px;  
        border-radius : 5px;
        font: 14px 'Roboto', sans-serif;
       color: #000000;
       
    }
ul{
    margin-left : 10px;
    list-style:none;
}
input{
    margin-left : 10px;
}

    `;