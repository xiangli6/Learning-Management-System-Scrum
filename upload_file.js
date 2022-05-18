import { Upload } from "upload-js";

// Instantiate once per app.
const upload = new Upload({ apiKey: "free" });

// <input type="file" onchange="onFileSelected(event)" />
async function onFileSelected(event) {
  const [ file ]    = event.target.files;
  const { fileUrl } = await upload.uploadFile(file);
  console.log(`File uploaded: ${fileUrl}`);
}