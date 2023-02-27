import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalbatch } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalBatch = styled.div`
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
const ModalBatch = ()=>{
    const [batch, setBatch] = useRecoilState(modalbatch);

    return(
        <>
            {batch? (
                <Scontainor>
                    <SmodalBatch>
                    <Sh1>Batch Size 변경</Sh1>
                    5차, 6차 Batch Size를 조전해서 변화를 관찰 했습니다. 은닉층, 노드, 활성화 함수,<br />
                    학습 횟수는 동일하게 설정하고 5차는 Batch Size를 16, 6차는 32로 설정해서 결과를 보겠습니다.
                    <h2>Epoch는 학습의 반복 횟수, Batch는 데이터 샘플의 묶음의 단위입니다.</h2>
                    <SimgList>
                        <Simg src="../../image/deeplearning/batch_model.png" alt="img"/>
                        <SimgTitle>&#9650; Batch 와 Epoch의 구조</SimgTitle>
                        <Simg src="../../image/deeplearning/batch_size16.png" alt="img"/>
                        <SimgTitle>&#9650; 5차 batch size=16, 7일 단위</SimgTitle>
                        <Simg src="../../image/deeplearning/batch_size32.png" alt="img"/>
                        <SimgTitle>&#9650; 6차 batch size=32, 7일 단위</SimgTitle>
                    </SimgList>
                    빨간 박스 안을 보면 batch size가 16일 때 보다 32일 때 실제값에 더 비슷한 모습을<br />
                    한 것을 알 수 있습니다.
                    <ScloseBtn onClick={()=>{setBatch(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalBatch>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalBatch;