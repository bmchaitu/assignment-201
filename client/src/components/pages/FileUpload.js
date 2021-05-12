import React from "react";
import StyledDropzone from "./StyledDropzone";

const style = {
  upload_container: {
    width: "500px",
    margin: "0px auto",
  },
};
const FileUpload = (props) => {
  return (
    <div className="upload_container" style={style.upload_container}>
      <StyledDropzone getAllFiles={props.getAllFiles} setState={props.setState}/>
    </div>
  );
};

export default FileUpload;
