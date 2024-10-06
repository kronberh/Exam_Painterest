import "./AddImageForm.css";
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Image } from "../model/Image";
import { addImage } from "../slices/imagesSlice";

function AddImageForm(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState<string>();
  const imageRef: any = useRef();
  const authorRef: any = useRef();
  const titleRef: any = useRef();
  const descriptionRef: any = useRef();
  const tagsRef: any = useRef();

  const handleImageChange = (e: any): void => {
    e.preventDefault();
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String: any= reader.result;
      setBase64Image(base64String);
    }
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const newImage: Image = {
      id: 0,
      author: authorRef.current.value,
      title: titleRef.current.value,
      data: base64Image!,
      tags: tagsRef.current.value.split(/\W+/).filter(Boolean),
      likes: []
    };
    dispatch(addImage(newImage));
    navigate("/"); // todo redirect to image page
  };

  return <>
    <form className="add-image-form" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div>
        <img src={base64Image} className="image-preview" />
        <br />
        <input type="file" accept="image/*" ref={imageRef} onChange={handleImageChange} required />
      </div>
      <div>
        <div className="input-container">
          <label>Author email*</label>
          <input type="email" ref={authorRef} required />
        </div>
        <div className="input-container">
          <label>Title*</label>
          <input type="text" ref={titleRef} required />
        </div>
        <div className="input-container">
          <label>Description</label>
          <textarea ref={descriptionRef}></textarea>
        </div>
        <div className="input-container">
          <label>Tags (separate by space/commas)</label>
          <input type="text" ref={tagsRef} />
        </div>
        <button type="submit">Add Image</button>
      </div>
    </form>
  </>;
}

export { AddImageForm };