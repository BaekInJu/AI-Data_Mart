import React, { useCallback, useEffect, useRef, useState } from "react";
import Delete from "../../assets/image/delete.png";

const UploadAiFile = () => {
    const [fileName, setFileName] = useState("");
    const inputRef = useRef(null);

    const inputHandler = useCallback((event) => {
        const files = event.target && event.target.files;
        if (files && files[0]) {
            setFileName(files[0].name);
        }
    }, []);

    const deleteFile = () => {
        // 파일 삭제부분
        setFileName();
    }

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
    
    const deleteFiled = () => {
        setFileName();
    }
    
    useEffect(()=>{
        if (inputRef.current !== null){
                
        }
    })
    return (
        <>
            {fileName ? <div  className="file-name">
                <p>{fileName}</p>
                <button onClick={deleteFile}><img src={Delete} /></button>
                </div> : null}
            <label htmlFor="upload-ai-file">
                <p>파일찾기</p>
            </label>
            <input id="upload-ai-file" type="file" ref={inputRef} />
        </>
    );
};

export default UploadAiFile;