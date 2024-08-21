import React, { useEffect, useState } from "react";
import AllSelectButton from "../../../components/AllSelectButton";
import Option from "../../../components/Option";
import axios from "axios";
import SiteSelectionModal from "./SiteSelectionModal";

//데이터 찾기 사이트 카테고리 컴포넌트
const SiteSelection = (props) => { //props.func : 옵션을 부모 컴포넌트에 있는 배열에 추가해 주는 함수
    const [category, setCategory] = useState([]);   //카테고리 저장
    const [cateCompa, setCateCompa] = useState([]);    //존제하는 카테고리 - 업체 조합 저장
    const [site, setSite] = useState([]);    //카테고리, 업체, 프로젝트의 조합
    const [company, setCompany] = useState([]);
    const [project, setProject] = useState([]);
    const [attached, setAttached] = useState([]);
    const [modalState, setModalState] = useState(false);

    const [userCategory, setUserCategory] = useState();
    const [userCompany, setUserCompany] = useState();
    const [userProject, setUserProject] = useState();

    //알고리즘 1 (작동안됨)
    //api 호출
    //카테, 업체, 프로를 모두 호출하여 조합 가능한 모든 사이트로 묶어 객체 배열로 저장한다.   ({category: HDS, company: AJIN, project: NE})
    //조합 가능한 모든 사이트를 만드는 것이 중요할듯
    // useEffect(() => { 
    //     // 요청을 보내는 함수 정의
    //     const getCategory = async () => {
    //         try {
    //             const response = await axios.get(
    //                 "content/category/all"
    //             );
    //             console.log(response.data);
    //             setCategory(response.data);  // 서버에서 받은 데이터 저장
    //         } catch (error) {
    //             console.log(error);
    //             // setError(error);        // 에러 상태 설정
    //             // setLoading(false);      // 로딩 상태를 false로 설정
    //         }
    //     };

    //     getCategory(); // 컴포넌트가 마운트될 때 데이터 요청
    // }, []);

    // useEffect(() => {
    //     category.forEach(async (item) => {
    //         try {
    //             const response = await axios.get(
    //                 `content/company?categoryName=${item.name}`
    //             );
    //             console.log(response.data);

    //             setCompany((prev) => {
    //                 // 새로운 회사명들을 추출
    //                 const newCompanies = response.data
    //                     .map(compa => compa.companyNameEng)
    //                     .filter(compaName => !prev.includes(compaName)); // 기존 배열에 없는 것만 필터링

    //                 // 이전 배열에 새로운 회사명들을 추가
    //                 return [...prev, ...newCompanies];
    //             });
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     });
    //     console.log("캄파니");
    //     console.log(company);
    //     console.log("끝");
    // }, [category]);

    // useEffect(() => {
    //     category.forEach(async (item) => {
    //         company.forEach(async (comp) => {
    //             try {
    //                 console.log("item : " + item.name);
    //                 console.log("comp : " + comp);
    //                 const response = await axios.get(
    //                     `content/project?categoryName=${item.name}&companyName=${comp}`
    //                 );
    //                 console.log(response.data);
    
    //                 setCompany((prev) => {
    //                     // 새로운 회사명들을 추출
    //                     const newCompanies = response.data
    //                         .map(compa => compa.companyNameEng)
    //                         .filter(compaName => !prev.includes(compaName)); // 기존 배열에 없는 것만 필터링
    
    //                     // 이전 배열에 새로운 회사명들을 추가
    //                     return [...prev, ...newCompanies];
    //                 });
    //             }
    //             catch (error) {
    //                 console.log(error);
    //             }
    //         });
    //     });
    //     console.log("캄파니");
    //     console.log(company);
    //     console.log("끝");
    // }, []);

    //알고리즘 2
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // 1. 카테고리 요청
    //             const categoryResponse = await axios.get("content/category/all");
    //             setCategory(categoryResponse.data);

    //             // 2. 회사 요청 (카테고리 데이터를 기반으로)
    //             let companies = [];
    //             for (const cat of categoryResponse.data) {
    //                 const companyResponse = await axios.get(`content/company?categoryName=${cat.name}`);
    //                 const companyNames = companyResponse.data.map(compa => compa.companyNameEng);
    //                 companies = [...companies, ...companyNames];
    //             }
    //             setCompany(companies);

    //             // 3. 프로젝트 요청 (카테고리 및 회사 데이터를 기반으로)
    //             let projects = [];
    //             let attached = [];
    //             for (const cat of categoryResponse.data) {
    //                 for (const comp of companies) {
    //                     const projectResponse = await axios.get(`content/project?categoryName=${cat.name}&companyName=${comp}`);
    //                     const projectNames = projectResponse.data.map(proj => proj.projectNameEng);
    //                     const attachedNames = projectResponse.data.map(att => att.attachProject);
    //                     projects = [...projects, ...projectNames];
    //                     attached = [...attached, ...attachedNames];
    //                 }
    //             }
    //             setProject(projects);
    //             setAttached(attached);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData(); // 컴포넌트가 마운트될 때 데이터 요청
    // }, []);


    //알고리즘 3
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const categoryResponse = await axios.get("content/category/all");
    //             const categories = categoryResponse.data.map(cate => cate.name);
    //             setCategory(categories);
        
    //             const companyResponses = await Promise.all(
    //                 categories.map(cat => axios.get(`content/company?categoryName=${cat}`))
    //             );
        
    //             const combinedData = companyResponses.flatMap((companyResponse, index) =>
    //                 companyResponse.data.map(compa => [categories[index], compa.companyNameEng])
    //             );

    //             setCateCompa(combinedData);
    
    //             const attachResponse = await Promise.all(
    //                 combinedData.map(att => axios.get(`content/project?categoryName=${att[0]}&companyName=${att[1]}`))
    //             );
                
    //             const tempp = [];
    //             const siteTemp = [];
    //             for(const att of attachResponse){
    //                 for(const attEle of att.data){
    //                     tempp.push(attEle.attachProject);
    //                     siteTemp.push([att.data[0].categoryName, att.data[0].companyNameEng, attEle.projectNameEng]);
    //                 }
    //             }
    //             setAttached(tempp);
    //             setSite(siteTemp);

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
        
    //     fetchData();
    // }, []); // 모든 데이터를 한 번에 가져옵니다.

    //모달로 사이트 정의하기 알고리즘
    //카테고리 업뎅이트
    useEffect(()=>{
        const fetchData = async () => {
            const categoryResponse = await axios.get("content/category/all");
            const tempCate = categoryResponse.data.map(cate =>cate.name);
            setCategory(tempCate);
        }

        fetchData();
    },[]);

    //업체 업데이트
    useEffect(()=>{
        const fetchData = async () => {
            const companyResponse = await axios.get(`content/company?categoryName=${userCategory}`);
            const tempComp = companyResponse.data.map(comp =>comp.companyNameEng);
            setCompany(tempComp);
        }
        fetchData();
    },[userCategory]);   //사용자가 카테고리를 선택하면 업체 리스트 출력

    //프로젝트 업데이트
    useEffect(()=> {
        const fetchData = async () => {
            const projectResponse = await axios.get(`content/project?categoryName=${userCategory}&companyName=${userCompany}`);
            const tempPro = projectResponse.data.map(pro =>pro.projectNameEng);
            setProject(tempPro);
        }
        fetchData();
    }, [userCompany])
    

    const siteList = [  //사이트 카테고리 옵션 배열
        "HDS / AJIN / 지게차",
        "HDS / AJIN / NE",
        "HDS / AJIN / AD",
        "HDS / HOWON / NE",
        "HDS / HOWON / AD",
        "HDS / HOWON / HI",
        "MOD / BRIGADE / #001",
        "MOD / VRIGADE / #002"
      ];

      const handler = () => {    //All버튼 핸들러 함수
        let test = document.getElementById("site : HDS / AJIN / 지게차");
        let test1 = document.getElementById("site");
        if(test1.checked === true){
            test.checked = true;
            props.func(test);
        }else{
            test.checked = false;
        }
    }
    
    const onChange = (event) => {
        props.handler(JSON.parse(`{${event.target.value}}`));    //json형식으로 넘어감
    }

    const show = () => {
        console.log(category);
        console.log(cateCompa);
        console.log(attached);
    }

    const openModal = () => {
        setModalState(true);
    }

    const submit = () => {
        setCategory();
        setCompany();
        setProject();
        setAttached((prev)=>{
            return [...prev, [userCategory, userCompany, userProject]];
        })
        setModalState(false);
    }

     
    console.log(attached);
    return(
        <div className="selection-form">
            <div className="selection-title">
                <p>사이트별 보기</p>
                {/* <AllSelectButton for="site" id="site" list={siteList} handler={handler}/> */}
            </div>
            <div className="selection-wrapper" id="site-wrapper">
                {/* <Option list={attached} site={site} handler={props.func} for="site"/> */}
                찾기 : <input value={`${userCategory || ' '} / ${userCompany || ' '} / ${userProject || ' '}`}/> 
                <button onClick={openModal}>검색</button>
                {attached && attached.map((item, index)=>(
                    <div key={index}>
                        <p>{item[0]} / {item[1]} / {item[2]}</p>
                    </div>
                ))}
                <SiteSelectionModal 
                isModalOpened={modalState} 
                setIsModalOpened={setModalState} 
                category={category}
                company={company}
                project={project}
                setUserCategory={setUserCategory}
                setUserCompany={setUserCompany}
                setUserProject={setUserProject}
                setAttached={setAttached}
                submit={submit}
                catecoty/>
            </div>
        </div>
    )
}

export default SiteSelection;