import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { useRecoilState } from "recoil";
import { forcerender, isload, selectedmonth } from "../../Atoms/atom";

const GraphLSTM = () =>{
    const [month, setMonth] = useRecoilState(selectedmonth);
    const [, setRerender]= useRecoilState(forcerender);
    const [lstm, setLstm] = useState([]);

    useEffect(()=>{
        axios({
            url: `http://localhost:2005/readChart`,
            method: 'post',
            withCredentials : true,
            data:{
                month: month,
                type: 'lstm',
            }
            }).then((res)=>{
                let sortedRes = res.data.data.map((data, i)=>{
                    return (
                        [new Date(Object.values(data)[0]), Object.values(data)[1], Object.values(data)[2]]
                    )
                })
                return sortedRes;
            }).then((data)=>{
                setLstm(data);
                setRerender(prev=> prev+1);
            })
    },[month])
    
    return(
        <Chart
            chartType="LineChart"
            data={[["날짜", "실제 전력 값", "예측 전력 값"], ...lstm]}
            height="400px"
            options={{
                title:`${month}월의 LSTM 모델로 1시간 단위로 예측한 그래프`,
                legend: {position: 'bottom'},
                chartArea: {width: "90%", height: "50%"},
                selectionMode: "multiple",
                tooltip: {trigger: 'both'},
                aggreationTarget: 'none',
                focusTarget: 'category',
                explorer:{
                axis: 'horizontal',
                actions: ['dragToZoom', 'rightClickToReset']
                },
                crosshair: {
                trigger: 'both',
                orientation: 'vertical',
                },
                width: '100%',
                height: '30vh',
                haxis:{
                gridlines: {
                    units: {
                    days: {format: ['dd일']},
                    hours: {format: ['HH', 'ha']},
                    }
                }
                },
                minorGridlines: {
                units: {
                    hours: {format: ['hh a', 'ha']},
                    minutes: {format: ['HH a Z', ':mm']},
                }
                },
                colors: ['#2D9FF1', '#E22A2A' ],
            }}
            legendToggle
        />
    )
}

export default GraphLSTM;