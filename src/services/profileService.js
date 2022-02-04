import axios from "axios";

const UPLOAD_FILE_URL = "http://localhost:8000/api/v1/profile/avatar"

export function uploadAvatar(image) {
  const form = new FormData();
  form.append('image', image);

  return axios.post(UPLOAD_FILE_URL, form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
