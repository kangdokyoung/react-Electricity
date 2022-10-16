import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalscaler } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalScaler = styled.div`
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

const Sul = styled.ul`

`

const Sli = styled.li`
    list-style-type:none;
`
const ModalScaler = ()=>{
    const [scaler, setScaler] = useRecoilState(modalscaler);

    return(
        <>
            {scaler? (
                <Scontainor>
                    <SmodalScaler>
                    <Sh1>데이터 스케일러 설정</Sh1>
                    머신러닝, 딥러닝을 위한 데이터셋을 정제할 때 특성별로 데이터의 스케일이 다르면 서로 다른<br />
                    범위로 인해 연관이 있는 특성이 상관관계ㅒ가 없다고 판단되거나 학습이 제대로 되지 않을 수<br />
                    있기 때문에 데이터 스케일링을 통해 모든 특성의 범위를 같게 만들어 줘야합니다.<br />
                    <h3>
                        (Feature에서 젼력 값은 수 천 Watt 단위임에 비해서 기온은 0~40도 사이로 스케일 차이가<br />
                        나서 학습 모델에서 두 특성이 무관한 관계로 판단함.)
                    </h3>
                    스케일링의 종류에는 크게 표준화와 정규화가 있습니다.<br />
                    표준화 &gt;&gt;특성들의 평균을 0, 분산을 1로 스케일링. 특성들을 정규 분포로 만드는 작업<br />
                    <br />
                    정규화 &gt;&gt;특성들을 특정 범위로 스케일링. 모든 특성들은 [0,1]의 지정 범위를 가지게 됨<br />
                    <br />
                    대표적인 스케일러를 살펴보면
                    <Sul>
                        <Sli>-Standard Scaler</Sli>
                        <Sli>&gt;&gt;정규 분포로 스케일링</Sli>
                        <Sli>&gt;&gt;최솟값과 최댓값의 크기를 제한하지 않기 때문에 특정 알고리즘에는 맞지 않음.</Sli>
                        <Sli>&gt;&gt;이상치에 매우 민감함</Sli>
                        <Sli>&gt;&gt;회귀보다 분류에 유용</Sli>
                    </Sul>
                    <br />
                    <Sul>
                        <Sli>-MinMax Scaler</Sli>
                        <Sli>&gt;&gt;특성들을 특정 범위로 스케일링</Sli>
                        <Sli>&gt;&gt;이상치에 민감</Sli>
                        <Sli>&gt;&gt;분류보다 회귀에 유용</Sli>
                    </Sul>
                    <br />
                    <Sul>
                        <Sli>-MaxAbs Scaler</Sli>
                        <Sli>&gt;&gt;각 특성의 절대값이 0과 1사이가 되도록 스케일링</Sli>
                        <Sli>&gt;&gt;데이터가 양수일 경우 MinMax Scaler와 동일한 특성을 보임.</Sli>
                    </Sul>
                    <br />
                    <Sul>
                        <Sli>-Robust Scaler</Sli>
                        <Sli>&gt;&gt;평균과 분산 대신 중간 값과 사분위 값을 사용</Sli>
                        <Sli>&gt;&gt;이상치 영향을 최소화 할 수 있음.</Sli>
                    </Sul>
                    <SimgList>
                        <Simg src="../../image/deeplearning/MinMax.png" alt="img"/>
                        <SimgTitle>&#9650; 7차 MinMax Scaler=A</SimgTitle>
                        <Simg src="../../image/deeplearning/RobustScaler.png" alt="img"/>
                        <SimgTitle>&#9650; 7차 Robust Scaler=B</SimgTitle>
                        <Simg src="../../image/deeplearning/validation365.png" alt="img"/>
                        <SimgTitle>&#9650; 7차 이중 정규화(두 모델을 같이 적용한 모델)=C</SimgTitle>
                    </SimgList>
                    <ScloseBtn onClick={()=>{setScaler(false)}}>
                        닫기
                    </ScloseBtn>
                    </SmodalScaler>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalScaler;