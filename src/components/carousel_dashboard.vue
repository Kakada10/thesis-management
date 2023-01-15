<template>
    <div>
      <v-carousel :show-arrows="true"
         cycle
      >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      style=" 
      max-width: 100%;
      height: auto;
      background-color: black;
      "
    >
    </v-carousel-item>

  </v-carousel>
    </div>
</template>
<script>
import GEE from "../assets/b1.jpg";
import GGG from "../assets/b2.jpg";
import GIC from "../assets/b3.jpg";
import GIM from "../assets/book2.jpg";
  export default {
    data () {
      return {
        items: [
          {
            src: GEE
          },
          {
            src: GIC
          },
          {
            src: GIM
          }, {
            src: GGG
          },
        ],
      }
    },
  }
</script>