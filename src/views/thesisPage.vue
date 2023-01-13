<template>
  <header_navbar></header_navbar>
  <listThesis></listThesis>
</template>
<script>
import header_navbar from "@/components/header_navbar.vue";
import listThesis from "@/components/listThesis.vue"
export default {
  name: "detailPage",
  components: {
    header_navbar,
    listThesis
  },
};
</script>
