import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isload, selectedmonth } from "../../Atoms/atom";
import GraphCnn from "./GraphCnn";
import GraphLSTM from "./GraphLSTM";
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

const GraphContainor = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 85%;
`

const Simgdiv = styled.div`
    display:flex;
    margin-bottom: 30px;
`

const Straining = styled.div`
    width: 280px;
    height: 190px;
    font-weight: bold;
    background-color: #faff00;
    border-radius: 41px;
    text-align:center;
    line-height: 50px;
`

const Svalidation = styled.div`
    width: 280px;
    height: 190px;
    font-weight: bold;
    background-color: #00ff47;
    border-radius: 41px;
    text-align:center;
    line-height: 50px;
`

const Stest = styled.div`
    width: 280px;
    height: 190px;
    font-weight: bold;
    background-color: #0ff0ff;
    border-radius: 41px;
    text-align:center;
    line-height: 50px;
`

const Sexplain = styled.div`
    text-align: left;
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: bold;
    margin-bottom: 30px;
`
const GraphPredict = ()=>{
    const [month, setMonth] = useRecoilState(selectedmonth);

    const changeMonth = (e) => {
        setMonth(e.target.value);
    }
    
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
                    <Ssel_month type="number" onChange={(e)=>{changeMonth(e)}}>
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
                <GraphContainor>
                    <GraphLSTM month={month} />
                    <GraphCnn month={month} />
                </GraphContainor>
                <Simgdiv>
                <Straining>
                    <br />Training <br /> (2013 ~ 2014)
                </Straining>
                <Svalidation>
                    <br /> Validation <br /> (2015)
                </Svalidation>
                <Stest>
                    <br /> Test <br /> (2016)
                </Stest>
            </Simgdiv>
            <Sexplain>
                -Training&Validation<br />
                2013년 1월 부터 2014년 12월까지의 데이터는 학습(Training)용 데이터로 딥러닝 모델에 적용했고 <br />
                2015년의 데이터는 모델 성능의 평가(Validation) 데이터로 사용했습니다. <br /><br />

                -Test<br />
                2016년의 데이터는 그래프에서 실제값을 나타내며<br />
                딥러닝 모델이 예측한 값과 얼만큼 차이를 보이는 지 비교할 수 있는 값 입니다. <br />
            </Sexplain>
        </Scontainor>
        </>
    )
}

export default GraphPredict;