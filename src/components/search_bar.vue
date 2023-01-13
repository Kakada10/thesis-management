<template>
  <div class="search_bar_container">
    <input
      type="text"
      id="search_bar_box"
      class="search_bar_box"
      placeholder="search and hit enter ..."
    />
    <div class="icons" id="search_icon">
      <v-img src="@/assets/search.png"></v-img>
    </div>
    <v-btn
      elevation="2"
      class="search_bar_box"
      style="
        position: absolute;
        width: 100px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        height: 51px;
        right: 8px;
        background-color: #0e426a;
        color: orange;
        padding: auto
      "
    > Search</v-btn>
    <!-- <form>
      <div class="icons" id="dropdown_icon">
        <v-img src="@/assets/down-arrow.png"></v-img>
      </div>
      <select class="dropdown" id="search_dropdown">
        <option class="dropdown" style="border-radius: 20%" value="all">
          All Categoriess
        </option>
        <option class="dropdown" style="border-radius: 20%" value="GIC">GIC</option>
        <option class="dropdown" style="border-radius: 20%" value="GEE">GEE</option>
        <option class="dropdown" style="border-radius: 20%" value="GIM">GIM</option>
      </select>
    </form> -->
  </div>
</template>
<style>
.search_bar_container {
  width: 45%;
  font-size: 16px;
  color: grey;
  position: relative;
}
.search_bar_box {
  width: 97%;
  height: 50px;
  border: 1px solid #b0a8a8;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 1px 1px 1px gray;
  font-family: serif;
}
#search_bar_box {
  position: relative;
  padding-left: 50px;
  left: 0px;
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
