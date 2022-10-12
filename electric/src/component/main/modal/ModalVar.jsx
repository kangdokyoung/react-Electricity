import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalvariable } from "../../../Atoms/atom";

const Scontainor = styled.div` 
    display: flex;
    justify-content:center;
`

const SmodalVarible = styled.div`
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
const ModalVar = ()=>{
    const [variable, setVariable] = useRecoilState(modalvariable);

    return(
        <>
            {variable? (
                <Scontainor>
                    <SmodalVarible>
                        공휴일이나 주말, 연말 연휴에는 공장에서의 전력 수요가 줄어듭니다.<br />
                        휴일에는 공장에 출근하는 근로자가 줄면서 생산 활동이 줄어들게 되면,<br />
                        이는 전력 수요의 감소로 이어지게 됩니다.<br />
                        이는 주말에 영업하는 가게들도 있고 이용하는 손님 수가 크게 변하지 않기 때문입니다.
                    <ScloseBtn onClick={()=>{setVariable(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalVarible>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalVar;