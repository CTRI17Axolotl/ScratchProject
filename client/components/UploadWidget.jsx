import React from 'react';
import { useEffect, useRef } from 'react';

const UploadWidget = ({ setURL }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dbinuhocd',
        uploadPreset: 'xqfxb9ga',
        sources: ['local', 'url'],
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          setURL(result.info.secure_url);
          console.log('result.info.secure_url: ', result.info.secure_url);
        }
        
      }
    );
  }, []);

  return (
    <button id="uploadImage" onClick={() => widgetRef.current.open()}>
      UPLOAD IMAGE
    </button>
  );
};

export default UploadWidget;
