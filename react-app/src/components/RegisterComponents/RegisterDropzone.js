import React, { useState, useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import Thumbnail from './Thumbnail.js';
// import { useLinkClickHandler } from 'react-router-dom';

const RegisterDropzone = ({ formdata, setFormdata }) => {
    // config file?
    const maxsize = 1000000;

    const [file, setFile] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader();

        reader.readAsDataURL(acceptedFiles[0]);

        reader.onload = function () {
            setFile(reader.result);
          };
        reader.onerror = function (error) {
            console.log('Error: ', error);
          };

        setFormdata({
            ...formdata,
            image: acceptedFiles[0]
        });
      }, [formdata, setFormdata])
    
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
    <div className='form-group form-picture'>
        <label className='mb-3'>Profilbild hochladen</label>
        <p className='dropzone-explain-p'>Drag 'n Drop oder Klick</p>
        <div className="profile-pic-container" {...getRootProps()}>
            <input {...getInputProps({
                maxsize,
                multiple: false,
                type: 'file',
                className: 'form-control',
                name: 'image',
                placeholder: 'Dein Profilbild'
            })}/>
            {
                isDragActive ? 
                <p className='far fa-caret-square-down dropzone-fa'></p> :
                <p className='fas fa-plus-square dropzone-fa'></p>
            }
         </div>
        <div className="profile-pic-preview">
            <Thumbnail file={file}/>
        </div>
    </div>
    );
}

export default RegisterDropzone;