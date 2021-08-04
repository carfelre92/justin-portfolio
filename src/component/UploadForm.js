import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/PNG', 'image/JPEG', 'image/JPG', 'image/png', 'image/jpeg', 'image/jpg'];

    const uploadHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
            console.log(file);
        } else {
            setFile(null);
            setError('only png jpeg jpg');
        }

    }

    return (
        <div>
            <form>
                <input type="file" onChange={uploadHandler} />
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </form>
        </div>
    )
}

export default UploadForm;