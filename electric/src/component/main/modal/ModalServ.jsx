import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalserv } from "../../../Atoms/atom";

const Scontainor = styled.div`
    display: flex;
    justify-content:center;
`

const SmodalServ = styled.div`
    width: 900px;
    height: 240px;
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
const ModalServ = ()=>{
    const [serv, setServ] = useRecoilState(modalserv);

    return(
        <>
            {serv? (
                <Scontainor>
                    <SmodalServ>
                    계절별로 사업 특성에 따라 전력 사용량은 달라집니다.<br />
                    예를 들어 여름철 아이스크림 공장에서는 아이스크림 판매량을 늘리기 위해 공장 가동률을 최대로 운영합니다.<br />
                    그러나 호빵 공장에서는 여름철 호빵 수요가 적기 때문에 공장 가동률을 줄일 것입니다.<br />
                    호빵 공장에서 전력 사용권을 아이스크림 공장한테 팔 수 있으면 아이스크림 공장은 안정적인 전력 공급을<br />
                    할 수 있어서 좋고, 호빵 공장에서는 비수기 매출을 매꿀 수 있어서 좋을 것입니다.<br />
                    전력 거래 중개 서비스는 전력 수요를 파악하고 거래를 원하는 업체끼리 연결 해주는 서비스입니다.
                    <ScloseBtn onClick={()=>{setServ(false);}}>
                        닫기
                    </ScloseBtn>
                    </SmodalServ>
                </Scontainor>
            ) : null}
        </>
    )
}


export default ModalServ;