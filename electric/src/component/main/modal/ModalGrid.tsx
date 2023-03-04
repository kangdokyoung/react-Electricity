import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalgrid } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalGrid = styled.div`
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
const ModalGrid = ()=>{
    const [grid, setGrid] = useRecoilState(modalgrid);

    return(
        <>
            {grid? (
                <Scontainor>
                    <SmodalGrid>
                    매 해 한국의 전력 수급량은 많아지고 있습니다. 2021년 여름의 전력수요는 94.4GW로 역대 최고치를<br />
                    기록 했으며, 예비 전력치는 4GW 수준으로 최저치를 기록했습니다. 매년 전력 공급을 위해<br />
                    설비를 계속 늘리기에는 분명 한계가 있습니다. 스마트 그리드는 전력 수요처와 공급처 사이에 실시간으로<br />
                    전력 사용량을 공유하고 소통하는 기술입니다.
                    <ScloseBtn onClick={()=>{setGrid(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalGrid>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalGrid;