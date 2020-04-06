import React from 'react';

const ImageList = (props) => {
  console.dir(props.images);
  return (
    <div className="choices">
      {props.images.map((image) => {
        return (
          <li key={image} class="images">
            <img src={image.img} alt={image.name} class="image" />
          </li>
        );
      })}
    </div>
  );
};

export default ImageList;
