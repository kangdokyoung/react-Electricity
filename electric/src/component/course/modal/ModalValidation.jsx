import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalvalidation } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalValidation = styled.div`
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
const ModalValidation = ()=>{
    const [validation, setValidation] = useRecoilState(modalvalidation);

    return(
        <>
            {validation? (
                <Scontainor>
                    <SmodalValidation>
                    <Sh1>Validation 설정</Sh1>
                    *Train Set과 *Validation Set을 나누는 비중을 조절해 봤습니다.(데이터는 13년 1월부터<br />
                    16년 12월까지의 값을 사용했습니다.) 처음에는 13년, 14년 데이터를 Train Set으로 15년<br />
                    데이터를 Validation Set, 마지막 16년을 *Test Set으로 사용하면 딱 맞겠다 생각했는데<br />
                    Test Set은 1년을 맞춘다 하더라도 검증 데이터를 꼭 1년으로 해야할지, 만약 비중을 변경<br />
                    하면 어떻게 되는지 테스트 해봤습니다.<br />
                    <h2>Train Set : 모델을 학습하기 위한 dataset</h2>
                    <h2>Validation Set은 학습이 이미 완료된 모델을 검증하기 위한 dataset</h2>
                    <h2>Test Set은 학습과 검증이 완료된 모델의 성능을 평가하기 위한 dataset</h2>
                    <SimgList>
                        <Simg src="../../image/deeplearning/validation_explain.png" alt="img"/>
                        <SimgTitle>&#9650; 신경망 모델에서 데이터를 학습, 평가하는 과정</SimgTitle>
                        <Simg src="../../image/deeplearning/8th_model.png" alt="img"/>
                        <SimgTitle>&#9650; 8차 모델</SimgTitle>
                        <Simg src="../../image/deeplearning/validation365.png" alt="img"/>
                        <SimgTitle>&#9650; 8차 validation size를 365로 설정한 결과</SimgTitle>
                        <Simg src="../../image/deeplearning/validation200.png" alt="img"/>
                        <SimgTitle>&#9650; 8차 validation size를 200으로 설정한 결과</SimgTitle>
                        <Simg src="../../image/deeplearning/validation_loss.png" alt="img"/>
                        <SimgTitle>&#9650; 손실 정도의 그래프</SimgTitle>
                    </SimgList>
                    <h3>Validation Size 365일(왼쪽)/ Validation Size 200일(오른쪽)</h3>
                    그래프 유사도는 365일 버전이 90.736%, 200일 버전이 90.892%로 전체적인<br />
                    수치는 큰 차이가 없었습니다. 손실 정도도 최종적으로는 거의 동일한 값이었으며,<br />
                    이 부분은 전체 학습에 사용된 데이터가 3년에 불과한 적은 양의 데이터이기 때문에<br />
                    큰 차이가 없었다고 생각합니다. 만약 데이터가 많아진다면 데이터 분할의 비중이<br />
                    학습 성능에 미치는 영향은 더 클 것입니다.
                    <ScloseBtn onClick={()=>{setValidation(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalValidation>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalValidation;