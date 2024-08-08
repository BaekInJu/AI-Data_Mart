import React, { useCallback, useEffect, useRef, useState } from "react";
import Delete from "../../assets/image/delete.png";

//파일 업로드 로직 컴포넌트
const UploadAiFile = () => {
  const [fileName, setFileName] = useState("");   //들어온 파일 이름 저장 변수
  const [dragActive, setDragActive] = useState(false);    //드래그 액션 상태 관리 변수
  const inputRef = useRef(null);    
  const dropRef = useRef(null);

  //파일을 웹에 올리는 로직 함수
  const inputHandler = useCallback((event) => {
    const files = event.target && event.target.files;
    if (files && files[0]) {
      setFileName(files[0].name);
    }
  }, []);

  //x아이콘 클릭시 파일이 삭제되는 로직 함수
  const deleteFile = () => {
    setFileName("");
  };
  
  useEffect(() => {   
    if (inputRef.current !== null) {
      inputRef.current.addEventListener("input", inputHandler);
    }

    return () => {
      if (inputRef.current !== null) {
        inputRef.current.removeEventListener("input", inputHandler);
      }
    };
  }, [inputRef]);

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    const files = event.dataTransfer && event.dataTransfer.files;
    if (files && files[0]) {
      setFileName(files[0].name);
      // inputRef.current.files = files; // 필드 업데이트
    }
  };

  return (
    <>
      {fileName ? (
        <div className="file-name">
          <p>{fileName}</p>
          <button onClick={deleteFile}>
            <img src={Delete} alt="파일 삭제" />
          </button>
        </div>
      ) : null}
      <div
        ref={dropRef}
        className={`drag-and-drop-area ${dragActive ? "active" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!fileName && (
          <p style={{
            margin:0,
            color: "rgba(0, 0, 0, 0.4",
            marginRight:"10px",
            marginTop:"4px"
          }}className="drag-and-drop">여기에 파일을 가져오세요.</p>
        )}
      </div>
      <label htmlFor="upload-ai-file">
        <p>파일찾기</p>
      </label>
      <input
        id="upload-ai-file"
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
      />
    </>
  );
};

export default UploadAiFile;
