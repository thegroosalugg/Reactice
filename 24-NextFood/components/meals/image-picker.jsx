'use client';

import { useRef, useState } from 'react';
import css from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name, message }) {
  const imageInput = useRef();
  const [uploadedImage, setUplodedImage] = useState();

  function handleClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0]; // as input type is file, the event target will have an array of files, in this case only 1 file

    if (!file) {
      setUplodedImage(null);
      return;
    }

    const fileReader = new FileReader(); // built in JS function to read file contents

    fileReader.onload = () => { // executes after readAsDataUrl has finished
      setUplodedImage(fileReader.result); // result is stored as a key in the fileReader object
    };

    fileReader.readAsDataURL(file); // reads the file
  }

  return (
    <div className={css.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={css.controls}>
        <div className={css.preview}>
          {!uploadedImage && <p>Nothing Here...</p>}
          {uploadedImage && <Image src={uploadedImage} alt='user image' fill />}
        </div>
        <input
          className={css.input} // hides this element
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          type='button' // default type is submit as its the input ref
          onClick={handleClick}
          className={css.button}
        >
          Upload Picture
        </button>
      </div>
      {message && <span className={css.error}>{message}</span>}
    </div>
  );
}
