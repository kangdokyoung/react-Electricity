import React from "react";
import styled from "styled-components";

const Scontainor = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const Sul = styled.ul`
    list-style-type: none;
    text-align: left;
    padding: 20px;
    background-color: rgba(74, 73, 73, 0.05);
    border: 2px solid black;
`

const Sli = styled.li`
    line-height: 20px;
`

const Sh1 = styled.h1`
    padding-bottom:20px;
`
const Reference = ()=>{

    return(
        <>
        <Scontainor>
            <Sul>
                <Sli>
                <Sh1>웹 페이지 제작하면서 참고한 자료들</Sh1>
                동아일보: <a  rel="noopener noreferrer" target="_blank" href="https://www.donga.com/news/Society/article/all/20211009/109624997/1">재생에너지 비율30%로 확대... "매년 2%씩 전기료 인상 우려"</a><br /><br />
                한국 문화원: <a  rel="noopener noreferrer" target="_blank" href="https://kccuk.org.uk/ko/about-korea/economy/the-korean-economy-the-miracle-on-the-hangang-river/">세계 속의 한국 경제-한강의 기적</a><br /><br />
                고려대학 논문: <a  rel="noopener noreferrer" target="_blank" href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10571240">DNN과 LSTM 활용한 일일 전력수요모델 개발 및 예측</a><br /><br />
                에너지 설비관리: <a  rel="noopener noreferrer" target="_blank" href="http://www.energycenter.co.kr/news/articleView.html?idxno=1378">차세대 똑똑한 전력망, 스마트 그리드!</a><br /><br />
                세계일보: <a  rel="noopener noreferrer" target="_blank" href="http://m.segye.com/view/20210722515499">'블랙아웃'위기 벗어나려면</a><br /><br />
                데이터 전처리 과정(딥러닝 연구원 블로그): <a href="https://m.blog.naver.com/PostView.naver?blogId=chromatic_365&logNo=222630300598&navType=by">전력 데이터 전처리 코드</a><br /><br />
                Dense layer 설명: <a  rel="noopener noreferrer" target="_blank" href="https://sevillabk.github.io/Dense/">Dense 클래스</a><br /><br />
                Validation date설명: <a  rel="noopener noreferrer" target="_blank" href="https://modern-manual.tistory.com/19">Training, Validationand Test sets 차이</a><br /><br />
                Batch,Epoch 설명: <a  rel="noopener noreferrer" target="_blank" href="https://bskyvision.com/803">배치(Batch)와 에포크(Epoch)란?</a><br /><br />
                Whether Underground: <a  rel="noopener noreferrer" target="_blank" href="https://www.wunderground.com/history/daily/gb/london/EGLC">런던 기상 정보</a>
                </Sli>
            </Sul>
        </Scontainor>
        </>
    )
}

export default Reference;