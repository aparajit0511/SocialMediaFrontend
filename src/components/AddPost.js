import React from "react";

function AddPost() {
  return (
    <div>
      AddPost
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "10px",
        }}
      >
        <Input size="lg" variant="solid" />
      </div>{" "}
    </div>
  );
}

export default AddPost;
