import React from "react";
import styled from 'styled-components';

const Snav = styled.div`
    height: 100px;
    width: 100vw;
    display: flex;
    background-color:#4FCBF2;
    opacity: 0.7;
    justify-content: space-between;
`

const Smain = styled.div`
    margin-left: 15px;
    text-align: center;
    vertical-align:middle;
    display:flex;
    align-items: center;
`

const Sul = styled.ul`
    list-style-type: none;
    display: flex;
`

const Sli = styled.li`
    display:flex;
    align-items: center;
    margin-right: 20px;
    }
`

const Stext = styled.div`
    color: white;
    font-size: xx-large;
        :hover{
            cursor: pointer;
            color: rgb(230, 230, 230);
        }
`

const Banner = () =>{
    return(
        <>
        <Snav>
        <Smain><Stext>Electricity</Stext></Smain>
        <Sul>
            <Sli><Stext>연구과정</Stext></Sli>
            <Sli><Stext>그래프 예측</Stext></Sli>
            <Sli><Stext>참고 자료</Stext></Sli>
        </Sul>
        </Snav>
        </>
    )

}

export default Banner;