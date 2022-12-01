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
    <div className="addphotos">
      <h2>{data.name}</h2>
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
          <div>
            <p className="addphoto_text"
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
            <button class="minibutton" onClick={onImageRemoveAll}> Remove all</button>
          </div>
        )}
      </ImageUploading>
      <button class="popupbutton" onClick={onDone}> Done</button>
    </div>
  );
};
export default UploadPhoto;
