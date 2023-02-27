import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalTemp from "./modal/ModalTemp";
import ModalVar from "./modal/ModalVar";
import ModalWeek from "./modal/ModalWeek";
import { useRecoilState } from "recoil";
import { modalgrid, modalserv, modalTemperature, modalvariable, modalweekend } from "../../Atoms/atom";
import ModalGrid from "./modal/ModalGrid";
import ModalServ from "./modal/ModalServ";
import { Link } from "react-router-dom";

const Sul = styled.ul`
    display:flex;
    list-style-type: none;
    justify-content: space-around;
`

const Sli = styled.li`
    list-style-type: none;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
`

const Scontainor = styled.div`
    background-color: rgba(138, 248, 255, 0.2);
    padding-bottom: 20px;
`

const SsubTitle = styled. h2`
    color: black;
    text-align:center;
    padding-top: 20px
`

const Scircle = styled.div`
    text-align: center;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: rgba(67, 63, 255, 0.79);
    font-size: 15px;
    color:white;
    transition: all 0.2s linear;
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
`

const SinnerC = styled.div`
    transform: translateY(111px);
`

const Scontainorb = styled.div`

`

const SsubTitleb = styled.h2`
    text-align:center;
    padding-top: 20px;
`

const Ssquare = styled.div`
    text-align: center;
    margin-left: 90px;
    width: 250px;
    height: 250px;
    border-radius: 50px;
    background-color: rgba(5, 255, 0, 0.7);
    font-size: 15px;
    color:black;
    transition: all 0.2s linear;
    cursor: pointer;
    :hover{
        transform:scale(1.1);
    }
`

const SinnerS = styled.div`
    transform: translateY(111px);
`

const Slink = styled.div`
    margin-top: 30px;
    margin-bottom: 80px;
    text-align: center;
    margin-left: 90px;
    width: 250px;
    height: 50px;
    border-radius: 50px;
    background-color: #595959;
    font-size: 15px;
    color:white;
    transition: all 0.2s linear;
    cursor:pointer;
    :hover{
        transform:scale(1.1);
    }
`

const SinnerShortC = styled.div`
    transform: translateY(5px);
`
const Main = ()=>{
    const [, setTemp] = useRecoilState(modalTemperature);
    const [, setWeek] = useRecoilState(modalweekend);
    const [, setVar] = useRecoilState(modalvariable);
    const [, setGrid] = useRecoilState(modalgrid);
    const [, setServ] = useRecoilState(modalserv);
    useEffect(()=>{
        AOS.init();
    },[])


    return(
        <>
        <Sli>
            전력은 산업에서 가장 필요한 에너지원 입니다.<br />
            전력 수요와 공급이 알맞게 배정되어야 낭비되는 전기를 줄일 수 있습니다.<br />
            전기 공급을 원활히 하기 위해서는 전기 수요에 맞는 규모의 전력 설비 시설을 확보하는 것이 필요합니다.<br />
            전력 수요에 비해 공급이 초과될 결우에는 에너지 낭비가 발생하고 수요에 비해 발전시설이 부족한 경우 전력 공급난을 일으킬 수 있습니다.<br />
            그래서 정확한 전력 수요 예측은 에너지 사용 계획, 전력 수립, 에너지 정책 결정의 판단 자료로써<br />
            중요한 역할을 합니다.
        </Sli>
        <Scontainor>
            <SsubTitle>
                전력 수요에 영향을 끼치는 변수들
            </SsubTitle>
            <Sli>
                전력 수요는 시간과 장소에 따라 계속해서 변합니다.<br />
                어떤 요소들이 전력 사용량에 영향을 끼치는지 알아봅시다.
            </Sli>
            <ModalTemp />
            <ModalVar />
            <ModalWeek />
            <Sul>
                <Sli data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" >
                    <Scircle onClick={()=>{setTemp(true)}}>
                        <SinnerC>
                            기온
                        </SinnerC>
                    </Scircle>
                </Sli>
                <Sli data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" >
                    <Scircle onClick={()=>{setWeek(true)}}>
                        <SinnerC>
                            휴일
                        </SinnerC>
                    </Scircle>
                </Sli>
                <Sli data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200" >
                    <Scircle onClick={()=>{setVar(true)}}>
                        <SinnerC>
                            한국에서의 전력변수
                        </SinnerC>
                    </Scircle>
                </Sli>
            </Sul>
            </Scontainor>
            <Scontainorb>
                <SsubTitleb>
                    전력 수요 예측으로 개발 될 사업
                </SsubTitleb>
                <Sli>
                    필요한 만큼 공급하고 필요한 만큼 사용하는 것이 좋습니다.<br />
                    전력 수요와 공급 을 원활히 하기위한 사업들은 뭐가 있을까요?
                </Sli>
                <ModalGrid />
                <ModalServ />
                <Sul>
                    <Sli data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" >
                        <Ssquare onClick={()=>{setGrid(true)}}>
                            <SinnerS>
                                스마트 그리드
                            </SinnerS>
                        </Ssquare>
                    </Sli>
                    <Sli data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" >
                        <Ssquare onClick={()=>{setServ(true)}}>
                            <SinnerS>
                                전력 거래 중개 서비스
                            </SinnerS>
                        </Ssquare>
                    </Sli>
                </Sul>
                <Sul>
                    <Sli data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" >
                        <Slink><Link to={'/data_collection'} style={{ textDecoration: 'none', color : 'white'}}><SinnerShortC>연구과정 바로가기</SinnerShortC></Link></Slink>
                    </Sli>
                    <Sli data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" >
                        <Slink><Link to={'/graph_predict'} style={{ textDecoration: 'none', color : 'white'}}><SinnerShortC>그래프 에측 바로가기</SinnerShortC></Link></Slink>
                    </Sli>
                </Sul>
            </Scontainorb>
        </>
    )
}


export default Main;