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
    width: 110px;
    height: 30px;
    background-color: #00e2d5;
    border-radius: 60px;
    text-align:center;
    color: white;
`

const Sexplain = styled.div`
    list-style-type: none;
    width: 100%;
    height: 130px;
    background-color: rgba(0, 226, 213, 0.1);
    display:flex;
    align-content: center;
`

const SexpDetail = styled.div`
    margin: 0px;
    margin-top: 10px;
    padding-left: 70px;
    line-height: 50px;
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
const DataCollection = ()=>{

    return(
        <>
        <Snav>
            <Sul>
                <Sli><Link to={'/data_collection'} style={{ textDecoration: 'none', color : 'black'}}><SMainText>데이터 수집</SMainText></Link></Sli>
                <Sli><Link to={'/data_preprocessing'} style={{ textDecoration: 'none', color : 'black'}}><Stext>데이터 전처리</Stext></Link></Sli>
                <Sli><Link to={'/deep_learning_model'} style={{ textDecoration: 'none', color : 'black'}}><Stext>딥러닝 모델</Stext></Link></Sli>
            </Sul>
        </Snav>
        <Scontainor>
            <Sexplain>
                <SexpDetail>
                    데이터의 형식이 맞아야 데이터를 가공할 수 있습니다.<br />
                    데이터를 처리하기 전에 수집한 데이터의 형식을 알아봅시다.
                </SexpDetail>
            </Sexplain>
            <Sul>
                <SmainList>
                    조사한 지역은 영국 런던이고, 사용하는 값은 기온 데이터와 전력 데이터 입니다.<br />
                    기온 데이터는 1시간 간격으로 화씨단위로(실험에선 섭씨단위로 변환) 값을 가지고 있고, 전력 데이터는 Watt단위로 값을 가지고 있습니다.<br />
                    전력 데이터의 형식이 일반적인 날짜형식인 datetime형이 아니기 때문에 서로의 데이터를 같이 쓰려면 전력 데이터의 날짜 형식을 수정해줘야 합니다.
                </SmainList>
            </Sul>
            <SimageUl>
                <Simg src="../image/pre/london_.weather.png" alt="img" />
                <SimgTitle>&#9650; wunderground페이지에서 런던의 날씨 정보를 가지고온 모습</SimgTitle>
                <Simg src="../image/pre/weather_table.png" alt="img" />
                <SimgTitle>&#9650; 해당 사이트는 30분 단위로 기온 값을 가지고 있다.</SimgTitle>
                <Simg src="../image/pre/london usage.png" alt="img" />
                <SimgTitle>&#9650; 런던 가정의 전력 사용량(watt)과 날짜(Unix Timestamp)가 저장된 파일</SimgTitle>
            </SimageUl>
        </Scontainor>
        </>
    )
}

export default DataCollection;