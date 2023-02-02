<template>
  <div id="container">
    <iframe
      id="pdf"
      style="width: 70%; height: 1000px; padding: 10px; border: none"
    ></iframe>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async mounted() {
    const pdf = document.getElementById("pdf");
    const thesis_id = window.localStorage.getItem("thesis_id");
    const url = "http://localhost:3000/admin/searchThesis/" + thesis_id;
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        pdf.src = `data:${response.data[0].thesis.contentType};base64,${response.data[0].thesis.data}`;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
