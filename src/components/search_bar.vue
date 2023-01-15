<template>
  <div class="search_bar_container">
    <input
      type="text"
      id="search_bar_box"
      class="search_bar_box"
      placeholder="search and hit enter ..."
    />
    <v-btn
      elevation="2"
      class="search_bar_box"
      style="
        position: absolute;
        width: 100px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        height: 40px;
        left: 1210px;
        top:10px;
        font-size:12px;
        background-color: #0e426a;
        color: orange;
        padding: auto
      "
    > Search</v-btn>
  </div>
</template>
<style>
.search_bar_container {
  width: 300px;
  font-size: 16px;
  color: grey;
  position: relative;
}
.search_bar_box {
  width: 97%;
  height: 40px;
  border: 1px solid #b0a8a8;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 1px 1px 1px gray;
  font-family: serif;
}
#search_bar_box {
  position: relative;
  padding-left: 10px;
  left: 1015px;
  top:10px;
}
.search_bar_box:hover {
  border: 1px solid #ece3e3;
}
.icons {
  width: 60px;
  height: 60px;
}
#search_icon {
  position: absolute;
  top: -6px;
  left: 1px;
  cursor: pointer;
}
.dropdown {
  width: 23%;
  height: 50px;
  left: 550px;
  border: 1px solid #b0a8a8;
  cursor: pointer;
  font-family: serif;
}
#dropdown_icon {
  position: absolute;
  top: 5px;
  right: 2.5%;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
#search_dropdown {
  right: 20%;
  top: 0px;
  position: absolute;
  text-align: center;
  font-size: 16px;
  color: gray;
  border-radius: 0px 50px 50px 0px;
}
input[type="text"]:focus {
  outline: 1px solid #0e426a; /* oranges! yey */
}
.dropdown:focus {
  outline: 1px solid #0e426a;
}
.dropdown:hover {
  border: 1px solid #ece3e3;
}
</style>
