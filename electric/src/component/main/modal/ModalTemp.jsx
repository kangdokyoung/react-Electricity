import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalTemperature } from "../../../Atoms/atom";

const Scontainor = styled.div` 
    display: flex;
    justify-content:center;
`

const SmodalTempdiv = styled.div`
    width: 800px;
    height: 200px;
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

const ScloseBtn = styled.div`
    background-color: grey;
    color: white;
    width: 50px;
    margin:0px;
    :hover{
        cursor:pointer;
    };
    
`
const ModalTemp = ()=>{
    const [temp, setTemp] = useRecoilState(modalTemperature);

    return(
        <>
            {temp? (
                <Scontainor>
                    <SmodalTempdiv>
                        기온은 전력 사용량에 크게 영향을 끼칩니다.<br />
                        무더운 여름 날에는 가정과 공장에 에어컨을 가동하고 겨울에는 난방기를 가동합니다.<br />
                        기온 변화가 큰 여름과 겨울에 전력 사용량이 상승합니다.<br />
                    <ScloseBtn onClick={()=>{setTemp(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalTempdiv>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalTemp;