import React from 'react';
import { useEffect, useRef } from 'react';

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dbinuhocd',
      uploadPreset: 'xqfxb9ga'
    }, function(error, result) {
      console.log(result);
    });
  }, [])

  return (
    <button id='uploadImage' onClick={() => widgetRef.current.open()}>
      UPLOAD IMAGE
    </button>
  )
}

export default UploadWidget;