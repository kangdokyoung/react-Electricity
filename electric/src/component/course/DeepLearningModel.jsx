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
    background-color: #8c00e2;
    border-radius: 60px;
    text-align:center;
    color: white;
`

const Sexplain = styled.div`
    list-style-type: none;
    width: 100%;
    background-color: rgba(140, 0, 226, 0.1);
    display:flex;
    align-content: center;
`

const SexpDetail = styled.div`
    margin: 0px;
    margin-top: 10px;
    padding-left: 70px;
    line-height: 30px;
    padding-bottom: 30px;
    padding-top: 20px;
`

const Sh1 = styled.h1`
`
const DeepLearningModel = ()=>{

    return(
        <>
        <Snav>
            <Sul>
                <Sli><Link to={'/data_collection'} style={{ textDecoration: 'none', color : 'black'}}><Stext>데이터 수집</Stext></Link></Sli>
                <Sli><Link to={'/data_preprocessing'} style={{ textDecoration: 'none', color : 'black'}}><Stext>데이터 전처리</Stext></Link></Sli>
                <Sli><Link to={'/deep_learning_model'} style={{ textDecoration: 'none', color : 'black'}}><SMainText>딥러닝 모델</SMainText></Link></Sli>
            </Sul>
        </Snav>
        <Scontainor>
            <Sexplain>
                <SexpDetail>
                    <Sh1>LSTM 모델로 최적의 파라미터 찾기</Sh1>
                    해당 페이지에서는 전력 예측에 필요한 파라미터를 조금씩 바꾸면서<br />
                    <br />
                    가장 예측 가능성이 좋은 모델을 찾는 과정에 대해 설명한 페이지 입니다.<br />
                    LSTM(Long Short Term memory)은 시간 흐름에 따라 변화하는 시계열 데이터를 처리하는 기법 중<br />
                    하나로, 여러개의 데이터가 순서대로 입력되었을 때, 앞서 받은 데이터를 기억하고 별도의 가중치를<br />
                    부여해 학습에 이용하는 RNN(Recurrent Neural Network) 순환 신경망 기법입니다.<br />
                    <br />
                    앞서 입력된 데이터의 결과가 뒤의 데이터의 입력에 영향을 주는 것은 공통된 원리이지만, LSTM은<br />
                    데이터가 전달되기 전에 가중치 판단을 통해 기억된 값을 넘길지 안넘길지 결정하는 단계가<br />
                    추가되었다는 차이가 있습니다.<br />
                    <br />
                    LSTM은 시간성 정보를 이용한 데이터의 특성을 다루는데 특화되어 있으며, 매우 긴 데이터를<br />
                    처리하는데 강점을 보입니다.
                </SexpDetail>
            </Sexplain>
        </Scontainor>
        </>
    )
}

export default DeepLearningModel;