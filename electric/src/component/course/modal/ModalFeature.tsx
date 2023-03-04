import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalfeature } from "../../../Atoms/atom";

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
const ModalFeature = ()=>{
    const [feature, setFeature] = useRecoilState(modalfeature);

    return(
        <>
            {feature? (
                <Scontainor>
                    <SmodalFeature>
                        <Sh1>Feature값에서 Watt포함여부</Sh1> 
                        1,2차 모델에서는 다른 요소들을 최소화하고 데이터셋 분할에서 Feature에 Watt(전력량)의 여부에<br />
                        따라 주기별로 어떤 결고를 보여주는 지 실험했습니다. 1차는 Feature값에 Watt가 포합되어있지 않고<br />
                        Label에만 Y값으로 포함되어 있습니다.<br />
                        학습 결과를 보면 1일 단위에서 거의 학습이 이뤄지지 않았고, 7일 변화폭이 조금 생겼지만 일치 정도는<br />
                        다소 떨어지는 것을 볼 수 있습니다.<br />
                        30일 단위에서는 학습과 예측 주기가 너무 길어서 큰 주기로만 증감이 이뤄지는 문제가 있었습니다.<br />
                        <br />
                        <h2>Feature에 Watt를 포함하지 않은 모델</h2>
                        <SimgList>
                            <Simg src="../../image/deeplearning/first_day.png" alt="img"/>
                            <SimgTitle>&#9650; 1일 단위에서전력 예측값이 거의 직선 형태로 나타나는 모습</SimgTitle>
                            <Simg src="../../image/deeplearning/first_week.png" alt="img"/>
                            <SimgTitle>&#9650; 일주일 단위에서는 전력 예측값에 굴곡이 보임</SimgTitle>
                            <Simg src="../../image/deeplearning/first_month.png" alt="img"/>
                            <SimgTitle>&#9650; 한 달 단위에서는 큰 줄기로만 굴곡이 보이고 봉우리에서는 거의 변화가 없는 모습</SimgTitle>
                            <h2>Feature에 Watt를 포함한 모델</h2>
                            <Simg src="../../image/deeplearning/second_day.png" alt="img"/>
                            <SimgTitle>&#9650; Watt 포함 1일 단위 그래프</SimgTitle>
                            <Simg src="../../image/deeplearning/second_week.png" alt="img"/>
                            <SimgTitle>&#9650; Watt 포함 일주일 단위 그래프</SimgTitle>
                            <Simg src="../../image/deeplearning/second_month.png" alt="img"/>
                            <SimgTitle>&#9650; Watt 포함 한 달 단위 그래프</SimgTitle>
                        </SimgList>
                    <ScloseBtn onClick={()=>{setFeature(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalFeature>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalFeature;