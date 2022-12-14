import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isload, selectedmonth } from "../../Atoms/atom";
import GraphCnn from "./GraphCnn";
import GraphLSTM from "./GraphLSTM";
const Scontainor = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:30px;
`

const Smain = styled.div`
    width:80%;
`

const Stitle = styled.div`
    text-align:left;
    border-bottom: 2px solid grey;
    font-weight: bold;
    font-size:25px;
    margin-bottom: 20px;
`

const Sselect = styled.div`
    
`

const Ssel_month = styled.select`
    margin-top: 10px;
    width: 50px;
    height: 40px;
    text-align: center;
    background-color: #C4C4C4;
    border: none;
    border-radius: 15px;
    appearance: none;
    font-weight: bold;
    font-size: 20px;
    color: white;
    :hover{
        background-color:lightgrey;
        cursor:pointer;
    }
`

const GraphContainor = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 85%;
`

const Simgdiv = styled.div`
    display:flex;
    margin-bottom: 30px;
`

const Straining = styled.div`
    width: 280px;
    height: 190px;
    font-weight: bold;
    background-color: #faff00;
    border-radius: 41px;
    text-align:center;
    line-height: 50px;
`

const Svalidation = styled.div`
    width: 280px;
    height: 190px;
    font-weight: bold;
    background-color: #00ff47;
    border-radius: 41px;
    text-align:center;
    line-height: 50px;
`

const Stest = styled.div`
    width: 280px;
    height: 190px;
    font-weight: bold;
    background-color: #0ff0ff;
    border-radius: 41px;
    text-align:center;
    line-height: 50px;
`

const Sexplain = styled.div`
    text-align: left;
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: bold;
    margin-bottom: 30px;
`
const GraphPredict = ()=>{
    const [month, setMonth] = useRecoilState(selectedmonth);

    const changeMonth = (e) => {
        setMonth(e.target.value);
    }
    
    return(
        <>
        <Scontainor>
            <Smain>
                <Stitle>
                    ????????? ??????
                </Stitle>
                ?????? ???????????? 2016??? ?????? ????????? ????????? ????????? ???????????? ???????????? ????????? ????????? ?????????.
            </Smain>
                <Sselect>
                    <Ssel_month type="number" onChange={(e)=>{changeMonth(e)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </Ssel_month>
                </Sselect>
                <GraphContainor>
                    <GraphLSTM month={month} />
                    <GraphCnn month={month} />
                </GraphContainor>
                <Simgdiv>
                <Straining>
                    <br />Training <br /> (2013 ~ 2014)
                </Straining>
                <Svalidation>
                    <br /> Validation <br /> (2015)
                </Svalidation>
                <Stest>
                    <br /> Test <br /> (2016)
                </Stest>
            </Simgdiv>
            <Sexplain>
                -Training&Validation<br />
                2013??? 1??? ?????? 2014??? 12???????????? ???????????? ??????(Training)??? ???????????? ????????? ????????? ???????????? <br />
                2015?????? ???????????? ?????? ????????? ??????(Validation) ???????????? ??????????????????. <br /><br />

                -Test<br />
                2016?????? ???????????? ??????????????? ???????????? ????????????<br />
                ????????? ????????? ????????? ?????? ????????? ????????? ????????? ??? ????????? ??? ?????? ??? ?????????. <br />
            </Sexplain>
        </Scontainor>
        </>
    )
}

export default GraphPredict;