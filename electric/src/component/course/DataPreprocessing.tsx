import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Scontainor = styled.div`

`

const Snav = styled.div`
    margin-bottom: 20px;
`

const Sul = styled.ul`
    display:flex;
    list-style-type:none;
`

const Sli = styled.li`
    margin-left: 20px;
    margin-top: 15px;
`

const Stext = styled.div`

`

const SMainText = styled.div`
    width: 120px;
    height: 30px;
    background-color: #005ae2;
    border-radius: 60px;
    text-align:center;
    color: white;
`

const Sexplain = styled.div`
    list-style-type: none;
    width: 100%;
    height: 130px;
    background-color: rgba(0, 90, 226, 0.1);
    display:flex;
    align-content: center;
`

const SexpDetail = styled.div`
    margin: 0px;
    margin-top: 10px;
    padding-left: 70px;
    line-height: 50px;
`

const SmainUl = styled.ul`
    display: flex;
    justify-content: center
`

const SmainList = styled.div`
    margin: 0px;
    margin-top: 10px;
    padding-left: 70px;
    line-height: 50px;
`

const SimageUl = styled.ul`
    text-align:center;
`

const Simg = styled.img`
    width: 60%;
    margin-top: 20px;
    border: 1px solid black;
`

const SimgTitle = styled.div`
`

const Sh1 = styled.h1`

`
const DataPreprocessing = ()=>{

    return(
        <>
        <Snav>
            <Sul>
                <Sli><Link to={'/data_collection'} style={{ textDecoration: 'none', color : 'black'}}><Stext>데이터 수집</Stext></Link></Sli>
                <Sli><Link to={'/data_preprocessing'} style={{ textDecoration: 'none', color : 'black'}}><SMainText>데이터 전처리</SMainText></Link></Sli>
                <Sli><Link to={'/deep_learning_model'} style={{ textDecoration: 'none', color : 'black'}}><Stext>딥러닝 모델</Stext></Link></Sli>
            </Sul>
        </Snav>
        <Scontainor>
            <Sexplain>
                <SexpDetail>
                    데이터를 불러오다 보면 비어있는 값도 있고 엉뚱한 값이 들어가있는 경우도 많습니다.<br />
                    이 때 필요한 작업이 데이터 전처리입니다.
                </SexpDetail>
            </Sexplain>
            <SmainUl>
                <SmainList>
                    <Sh1>전력 데이터 전처리</Sh1>
                    전력 데이터에는 6초 간격으로 값들이 저장되어 있습니다.<br />
                    6초 간격으로 있는 데이터 값을 1시간 단위로 바꾸기 위해<br />
                    같은 시각(예를 들어 12시 00분 부터 12시 59분 까지 있는 값)에 있는 값들의<br />
                    최대 전력값을 그 시각의 전력값으로 가져옵니다.
                </SmainList>
            </SmainUl>
            <SimageUl>
                <Simg src="../image/pre/1hour.png" alt="img" />
                <SimgTitle>&#9650; 최대값을 쓰는 이유는 시간 당 전력 요금 산정을 최대값으로 하기 때문이다.</SimgTitle>
                <Simg src="../image/pre/close.png" alt="img" />
                <SimgTitle>&#9650; 딥러닝 학습에서 결손 데이터가 있으면 에러가 발생할 수 있기 때문에 결손값들을 예외 처리해줘야 한다.</SimgTitle>
            </SimageUl>
            <SmainUl>
                <SmainList>
                    <Sh1>기온 데이터 전처리</Sh1>
                    기상 데이터는 30분 간격으로 저장되어있습니다.<br />
                    기상 값 사이에 결손 데이터가 있을 경우, 이전 시간 대의 기온 값으로 보관합니다.<br />
                    그리고 같은 시간대의 두 기온의 평균으로 1시간 단위의 기상 값을 데이터로 나타냈습니다.
                </SmainList>
            </SmainUl>
            <SimageUl>
                <Simg src="../image/pre/temp.png" alt="img" />
                <SimgTitle>&#9650; 13시 50분에 비어있는 기온 값을 13시 20분 값을 가지고 와서 보관.</SimgTitle>
            </SimageUl>
        </Scontainor>
        </>
    )
}

export default DataPreprocessing;