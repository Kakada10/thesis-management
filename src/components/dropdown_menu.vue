<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="6"
        sm="2"
        style="border:none;
        width:200px"
      >
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>