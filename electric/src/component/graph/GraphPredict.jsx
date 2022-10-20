import React from "react";
import styled from "styled-components";

const Scontainor = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:30px;
`

const Smain = styled.div`
    width:80%;
`

const Stitle = styled.div`
    text-align:left;
    border-bottom: 2px solid grey;
    font-weight: bold;
    font-size:25px;
    margin-bottom: 20px;
`

const Sselect = styled.div`
    
`

const Ssel_month = styled.select`
    margin-top: 10px;
    width: 50px;
    height: 40px;
    text-align: center;
    background-color: #C4C4C4;
    border: none;
    border-radius: 15px;
    appearance: none;
    font-weight: bold;
    font-size: 20px;
    color: white;
    :hover{
        background-color:lightgrey;
        cursor:pointer;
    }
`
const GraphPredict = ()=>{

    return(
        <>
        <Scontainor>
            <Smain>
                <Stitle>
                    그래프 예측
                </Stitle>
                해당 그래프는 2016년 영국 런던의 가정용 전력의 예측값과 실제값을 비교한 그래프 입니다.
            </Smain>
                <Sselect>
                    <Ssel_month type="number">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </Ssel_month>
                </Sselect>
        </Scontainor>
        </>
    )
}

export default GraphPredict;