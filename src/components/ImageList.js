import React from 'react';

const ImageList = (props) => {
  console.dir(props.images);
  return (
    <div className="choices">
      {props.images.map((image) => {
        return (
          <li key={image}>
            <img src={image.sndImg} alt={image.sndName} class="image" />
          </li>
        );
      })}
    </div>
  );
};

export default ImageList;
