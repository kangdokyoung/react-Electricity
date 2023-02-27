import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalresult } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalResult = styled.div`
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
const ModalResult = ()=>{
    const [result, setResult] = useRecoilState(modalresult);

    return(
        <>
            {result? (
                <Scontainor>
                    <SmodalResult>
                    <h1>실험 종료</h1>
                    최종적으로는 아래와 같은 모델로 학습을 진행했고, 모델 계층은<br />
                    512-512(양방향)-256-256(양방향)128-128(양방향)-64-64(양방향)-32-1로 구성되어 있습니다. <br />
                    양방향 LSTM의 활성화 함수 지정은 맨 마지막만 하지 않았고, 전체 활성화 함수는<br />
                    'Relu'를 선택했습니다.
                    그 외 조건들은<br />
                    Validation Size = 0.365 <br />
                    Min-Max Scaler <br />
                    학습 주기 = 1일 단위<br />
                    Batch Size = 32 <br />
                    Epoch = 25(조기 종료로 최적값은 15회 부근에서 도출됨)
                    <SimgList>
                        <Simg src="../../image/deeplearning/10th_model_bi.png" alt="img"/>
                        <SimgTitle>&#9650; 10차 모델(양방향 코드 설명 포함)</SimgTitle>
                        <Simg src="../../image/deeplearning/10th_model.png" alt="img"/>
                        <SimgTitle>&#9650; 10차 모델</SimgTitle>
                    </SimgList>
                    현재는 그래프 유사도 90.971%, 예측값과 실제값의 차 절댓값 총 합은 38.282의<br />
                    수치로 유사도는 높은 수치이며 차 총합의 경우 365일의 최대 오차가 365이므로<br />
                    (1과 0으로 스케일링 했기 때문에 정반대 예측은 하루당 1이 나옴.)<br />
                    38.282/365=0.1049 이를 계산하면 약 90%의 수치적 일치도를 최종적으로<br />
                    확인할 수 있었습니다.
                    <ScloseBtn onClick={()=>{setResult(false)}}>
                        닫기
                    </ScloseBtn>
                    </SmodalResult>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalResult;