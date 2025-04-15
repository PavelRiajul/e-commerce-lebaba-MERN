import React, { useState } from "react";

const UploadImage = ({ name, setImage, label, id, value }) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  const uploadSingleImage = async (base64) => {};

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log("Files:", files);
    if (files.length === 1) {
      const base64 = await convertBase64(files[0]); // result
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (let i = 0; i < files.length; i++) {
      const base = await convertBase64(files[i]);
      base64s.push(base);
    }
  };
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type="file"
        onChange={uploadImage}
        name={name}
        id={name}
        className="add-product-InputCSS"
      />
    </div>
  );
};

export default UploadImage;
