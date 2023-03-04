import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modallayer } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalFeature = styled.div`
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
const ModalLayer = ()=>{
    const [layer, setLayer] = useRecoilState(modallayer);

    return(
        <>
            {layer? (
                <Scontainor>
                    <SmodalFeature>
                        <Sh1>Dense Layer구조 변경</Sh1>
                        Dense Layer는 데이터를 학습 시키는 층을 나타낸 것 입니다. 이 실험에서는 층을 4층으로 설정하고,<br />
                        안에 노드의 개수에 따라 예측 결과 값이 어떻게 달라지는 지 확인해보겠습니다.
                        <SimgList>
                            <Simg src="../../image/deeplearning/dense_layer.png" alt="img"/>
                            <SimgTitle>&#9650; Dense Layer 구조</SimgTitle>
                            <Simg src="../../image/deeplearning/node1.png" alt="img"/>
                            <SimgTitle>&#9650; 3차 노드1: 64-64-64-1</SimgTitle>
                            <Simg src="../../image/deeplearning/node2.png" alt="img"/>
                            <SimgTitle>&#9650; 4차 노드2: 64-64-64-2</SimgTitle>
                        </SimgList>
                        전체적으로 큰 차이가 없어 보이지만 4분기 지점에서 노드2로 실험한 결과가 실제값에 좀 더 정확한<br />
                        굴곡으로 나왔습니다. 똑같이 상승, 하강의 방향성을 가지더라도 가은 노드를 반복하여 학습을 반복<br />
                        해 주는 것이 조금 더 효과적임을 알 수 있습니다.
                    <ScloseBtn onClick={()=>{setLayer(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalFeature>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalLayer;