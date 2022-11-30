import React from "react";
import "../App.css";
import { useState } from "react";
import ImageUploading from "react-images-uploading";

const UploadPhoto = ({ data, onDone }) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <p>
      {data.name} {Math.floor(data.day)}
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <p
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              +
            </p>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <p onClick={() => onImageRemove(index)}>x</p>
                </div>
              </div>
            ))}
            <p onClick={onImageRemoveAll}>Remove all</p>
          </div>
        )}
      </ImageUploading>
      <button onClick={onDone}> DONE</button>
    </p>
  );
};
export default UploadPhoto;
