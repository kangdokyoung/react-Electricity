import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';

const Scontainor = styled.div`
    text-align: center;
`
const Simg = styled.img`
    width: 70vw;
    height: 40vh;
    -webkit-user-drag: none;
`

const Sslidebar = styled.div`
    bottom: 10px;
    left: 15px;
    display:flex;
    justify-content: center;
`

const Scircle = styled. div<{nowpic:number}>`
    border: 1px solid grey;
    margin:5px;
    padding:4px;
    border-radius: 50%;
    background-color:${prop => prop.nowpic === 1 ? 'grey' : null};
    :hover{
        cursor: pointer;
    }
`

type prop = {
    nowpic: number
}

const ImageSlide = () =>{
    const [slideNum, setSlideNum] = useState(0);

    const pictureList = [
        "https://ifh.cc/g/72zBYr.png",
        "https://ifh.cc/g/fvgjlN.png",
        "https://ifh.cc/g/StzmQK.png",
    ]

    const useInterval = (callback:()=>any, delay:number)=>{
        const callbackRef = useRef(callback);

        useEffect(()=>{
            callbackRef.current = callback;
        },[callback]);

        useEffect(()=>{
            const tick =()=>{
                callbackRef.current();
            }
            if (delay !== null) {
                let id = setInterval(tick,delay);
                return ()=> clearInterval(id);
            }
        },[delay])
    }

    useInterval(()=>{
        setSlideNum(prev=> prev + 1);
        if(slideNum === 2) setSlideNum(0);
    }, 3000);

    return(
        <Scontainor>
        <Simg src={pictureList[slideNum]} alt="슬라이드 이미지" />
        <Sslidebar>
            {pictureList.map((data, i)=>{
                if(slideNum === i) return <Scircle key={i} nowpic={1}></Scircle>
                else return <Scircle key={i} nowpic={0}></Scircle>
            })}
        </Sslidebar>
        </Scontainor>
    )
}


export default ImageSlide;