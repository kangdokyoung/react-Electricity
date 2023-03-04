import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalweekend } from "../../../Atoms/atom";

const Scontainor = styled.div` 
    display: flex;
    justify-content:center;
`

const SmodalWeekend = styled.div`
    width: 1000px;
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
const ModalWeek = ()=>{
    const [week, setWeek] = useRecoilState(modalweekend);

    return(
        <>
            {week? (
                <Scontainor>
                    <SmodalWeekend>
                        대한민국은 수출 주도형 경제이면서 생산 공장 시설이 많은 국가입니다.<br />
                        한국의 수출 실적이 증가함에 따라 공장 시설 확충도 많아지고, 그에 따라 전력 소비도 급증했습니다.
                        한국은 저렴한 전력 요금을 유지하기 위해 원자력 발전과 석탄 비율이 높습니다.<br />
                        하지만 탄소 중립 정책으로 인해 친환경 에너지 비율을 늘려가고 있으며,<br />
                        이는 전력 생산 단가가 기존보다 비싸기 때문에 산업용 전력 요금이 빠르게 증가하고 있습니다.
                    <ScloseBtn onClick={()=>{setWeek(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalWeekend>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalWeek;