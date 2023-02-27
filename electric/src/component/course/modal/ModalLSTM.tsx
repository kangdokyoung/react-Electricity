import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalLSTM } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalLSTM = styled.div`
    width: 800px;
    background-color: rgb(142, 214, 255);
    border-radius: 60px;
    text-align:center;
    line-height: 30px;
    position: absolute;
    z-index: 1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
`

const Sh1 = styled.h1`
    margin-top: 20px;
`
const ScloseBtn = styled.div`
    background-color: grey;
    color: white;
    width: 50px;
    margin:0px;
    :hover{
        cursor:pointer;
    };   
`

const SimgList = styled.li`
    list-style-type:none;
`

const Simg = styled.img`
    width: 80%;
`
const SimgTitle = styled.div`

`
const ModalLSTM = ()=>{
    const [LSTM, setLSTM] = useRecoilState(modalLSTM);

    return(
        <>
            {LSTM? (
                <Scontainor>
                    <SmodalLSTM>
                    <Sh1>양방향 LSTM 활성화 함수 지정 여부</Sh1>
                    양방향 LSTM이 설정된 Bidirection 층에서 활성화 함수 'Relu'로 지정해 줄지 아니면<br />
                    기본 Default 설정으로 쓸지 변경했을 때의 차이를 보겠습니다. 활성화 함수 지정 여부를<br />
                    제외하고는 모델 조건은 위 사진과 동일합니다.
                    <SimgList>
                        <Simg src="../../image/deeplearning/9th_model.png" alt="img"/>
                        <SimgTitle>&#9650; 9차 모델</SimgTitle>
                        <Simg src="../../image/deeplearning/LSTM_X.png" alt="img"/>
                        <SimgTitle>&#9650; 9차 양방향 LSTM 활성화 함수 미지정</SimgTitle>
                        <Simg src="../../image/deeplearning/LSTM_O.png" alt="img"/>
                        <SimgTitle>&#9650; 9차 양방향 LSTM 활성화 함수 지정</SimgTitle>
                    </SimgList>
                    양방향 LSTM에 활성화 함수를 지정해 줬을때 수치적인 결과로는 유사도<br />
                    90.994% &gt;&gt; 90.971%, 차의 종합은 36.661 &gt;&gt; 38.282로 큰 변화는<br />
                    없었으나, 시각적으로 높은 값들에 대한 예측은 활성화 함수 지정 버전이<br />
                    좀 더 예측이 정확했습니다.
                    <ScloseBtn onClick={()=>{setLSTM(false)}}>
                        닫기
                    </ScloseBtn>
                    </SmodalLSTM>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalLSTM;