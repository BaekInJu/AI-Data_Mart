import React, { useEffect, useState } from "react";
import "../../../style/FindDataSet.css";
import AiData from "./AiData";
import axios from "axios";

//데이터셋 목록 관리 컴포넌트
const FindDataSet = (props) => {  //props.num : 데이터셋 개수
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);   //페이지
    const [initialRender, setInitialRender] = useState(true);

    const changePage1 =() => { //테스트 페이징 함수
        setPage(1)
    }
    const changePage0 = () => {  //테스트 페이징 함수0
        setPage(0)
    }
    FindDataSet.defaultProps = {
        site: []
    };
    useEffect(() => {
        if(!initialRender)
            return; 
        // 요청을 보내는 함수 정의
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/dataset/search/all?pageingIndex=${page}&pageingSize=16&orderType=DESC`
                );
                setData(response.data);  // 서버에서 받은 데이터 저장
                setLoading(false);       // 로딩 상태를 false로 설정
            } catch (error) {
                console.log(error);
                // setError(error);        // 에러 상태 설정
                // setLoading(false);      // 로딩 상태를 false로 설정
            }
        };

        fetchData(); // 컴포넌트가 마운트될 때 데이터 요청
    }, [page]);

    useEffect(()=>{
        if (initialRender) {
            setInitialRender(false);
            return; // 첫 번째 렌더링 시에는 이 useEffect가 실행되지 않도록 함
        }
        const fetchData = async ()=>{
            // console.log(props.categoryName);
            // console.log(props.companyName);
            // console.log(props.projectName);
            const response = await axios.get(
                `/dataset/search?pageingIndex=${page}&pageingSize=16&orderType=DESC&`+
                `${props.categoryName.length === 0 ? "" : "categoryName=" + props.categoryName+"&"}`+
                `${props.companyName.length === 0 ? "" : "companyName="+props.companyName+"&"}`+
                `${props.projectName.length === 0 ? "" : "projectName="+props.projectName+"&"}`+
                `${props.dateYear.length === 0 ? "" : "dateYear="+props.dateYear+"&"}`+
                `${props.dateMonth.length === 0 ? "" : "dateMonth="+props.dateMonth+"&"}`+
                `${props.objectType.length === 0 ? "" : "objectType="+props.objectType+"&"}`+
                `${props.luminosityType.length === 0 ? "" :"luminosityType="+ props.luminosityType+"&"}`+
                `${props.weatherType.length === 0 ? "" : "weatherType="+props.weatherType+"&"}`+
                `${props.seasonType.length === 0 ? "" : "seasonType="+props.seasonType+"&"}`+
                `${props.resolutionType.length === 0 ? "" : "resolutionType="+props.resolutionType+"&"}`+
                `${props.locationType.length === 0 ? "" : "locationType="+props.locationType}`
            )

            if(response.data.length === 0){
                return;
            }
            setData(response.data);
        }
        fetchData();
    }, [props.categoryName,
        props.companyName,
        props.projectName,
        props.dateYear,
        props.dateMonth,
        props.objectType,
        props.luminosityType,
        props.weatherType,
        props.seasonType,
        props.resolutionType,
        props.locationType,
        page])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return(
        <div className="find-data-set">
            <div className="number-data">
                <p className="number-data">데이터셋 - {data.length}건</p>
            </div>
            
            {/* <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div className="find-data-list">
                
            {data && data.map((item, index) => {
                return <AiData 
                    categoryName={item.categoryName}
                    companyNameEng={item.companyNameEng}
                    projectNameEng={item.projectNameEng}
                    detailProjectName={item.detailProjectName}
                    recordDate={item.recordDate}
                    fileCount={item.fileCount}
                    objectType={item.objectType}
                    weatherType={item.weatherType}
                    seasonType={item.seasonType}
                    luminosityType={item.luminosityType}
                    resolutionType={item.resolutionType}
                    locationType={item.locationType}
                />;
            })}
            </div> 
            {/* 원래는 api로부터 전체 데이터 갯수를 받아서 데이터/15를 해서 나온 페이지 만큼 페이지 수를 만들어야 함 */}
            <button onClick={changePage0}>0</button>
            <button onClick={changePage1}>1</button>
            <button onClick={changePage1}>2</button>
            <button onClick={changePage1}>3</button>
            <button onClick={changePage1}>4</button>
            <button onClick={changePage1}>5</button>
            <button onClick={changePage1}>6</button>
        </div>
    )
}

// props: num(데이터 총 개수), (데이터 정보 json)

export default FindDataSet;