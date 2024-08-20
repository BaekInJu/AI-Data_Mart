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

    const changePage1 =() => { //테스트 페이징 함수
        setPage(1)
    }
    const changePage0 = () => {  //테스트 페이징 함수0
        setPage(0)
    }
    useEffect(() => { 
        // 요청을 보내는 함수 정의
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/dataset/search/all?pageingIndex=${page}&pageingSize=16&orderType=ASC`
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
                    weatherType={item.weatherType}
                    seasonType={item.seasonType}
                    luminosityType={item.luminosityType}
                    resolutionType={item.resolutionType}
                />;
            })}
            </div>
            <button onClick={changePage0}>0</button>
            <button onClick={changePage1}>1</button>
        </div>
    )
}

// props: num(데이터 총 개수), (데이터 정보 json)

export default FindDataSet;