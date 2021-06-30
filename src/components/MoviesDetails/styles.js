import styled from "styled-components";

const media = {
    breakpoints:'620px'
}
export const FullDesc = styled.div`

    min-height: ${({height})=>height?height:''};
    background-image: url(${({background})=>background?background:''});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;

    & .description_content{
        & .movie_title{
           font-size : 2rem ;

           & span{
               color: #C9C9C9;
           }
        }
        & ul li{
            color: #C9C9C9;
            font-size: 16px;
            font-style:normal;
        }
        & ul li:nth-child(even){
            margin: 0 .8rem;
        }
        @media (max-width:${media.breakpoints}){
            & .movie_title{
              font-size : 1.2rem ;
              margin-bottom:12px;
            }

            & ul li{
                font-size: 11px;
            }

            & ul li:nth-child(even){
                margin: 0 .4rem;
            }
        }

        & .overview{
            & h1{
                font-size: 18px;
                font-weight: 600; 
            }
            & p{
                color: #C9C9C9;
            }
        }

        & .participants_names_and_roles{
            color: #C9C9C9;
        }

    }

`