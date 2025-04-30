import { useState } from "react";

function ProfilePhoto() {
  const [preview, setPreview] = useState(null);

  // Function to handle image upload and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the image file as a Data URL
    }
  };

  console.log(preview);

  return (
    <div className="form-group">
      <div>
        {preview && (
          <img
            src={preview}
            alt="Profile Preview"
            style={{
              display: "block",
              maxWidth: "100px",
              maxHeight: "100px",
              marginTop: "10px",
            }}
          />
        )}
      </div>
      <article>
        <label htmlFor="profilePhoto">Upload Pupil Profile Photo:</label>
        <input
          type="file"
          id="profilePhoto"
          name="profilePhoto"
          onChange={handleImageChange}
          accept=".jpeg, .jpg, .png"
          required
        />
      </article>
    </div>
  );
}

export default ProfilePhoto;
