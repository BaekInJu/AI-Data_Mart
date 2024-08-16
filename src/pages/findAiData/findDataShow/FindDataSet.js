import React, { useEffect, useState } from "react";
import "../../../style/FindDataSet.css";
import AiData from "./AiData";
import axios from "axios";

//데이터셋 목록 관리 컴포넌트
const FindDataSet = (props) => {  //props.num : 데이터셋 개수
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 요청을 보내는 함수 정의
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "/dataset/search/all?pageingIndex=0&pageingSize=15&orderType=ASC"
                );
                setData(response.data);  // 서버에서 받은 데이터 저장
                console.log(data);
                console.log("바로 여기 이 데이터" + response.data.companyNameEng);
                setLoading(false);       // 로딩 상태를 false로 설정
            } catch (error) {
                console.log(error);
                // setError(error);        // 에러 상태 설정
                // setLoading(false);      // 로딩 상태를 false로 설정
            }
        };

        fetchData(); // 컴포넌트가 마운트될 때 데이터 요청
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    // useEffect(()=>{
    //     axios(
    //         {
    //             url:"/dataset/search/all?pageingIndex=0&pageingSize=15&orderType=ASC",
    //             method:"GET"
    //         }
    //     ).then(response => setData(response));
    // })

    return(
        <div className="find-data-set">
            <div className="number-data">
                <p className="number-data">데이터셋 - {data.length}건</p>
            </div>
            {console.log(data)}
            
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
        </div>
    )
}

// props: num(데이터 총 개수), (데이터 정보 json)

export default FindDataSet;