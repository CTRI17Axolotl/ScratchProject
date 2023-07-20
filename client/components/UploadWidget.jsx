import React from 'react';
import { useState, useEffect, useRef } from 'react';

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
        // setImgURL(result.info.secure_url);
        setURL(result.info.secure_url);
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
