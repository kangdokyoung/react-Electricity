import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalTemperature } from "../../../Atoms/atom";

const SmodalTempdiv = styled.div`
`

const ModalTemp = ()=>{
    const [temp, setTemp] = useRecoilState(modalTemperature);

    return(
        <>
            {temp? (
                <SmodalTempdiv>
                    d
                </SmodalTempdiv>
            ) : null}
        </>
    )
}


export default ModalTemp;