<template>
  <div id="app">
    <Header />
    <div class="sortConditions">
      <label for="sort">ソート条件</label>
      <select @change="changeOrder" id="sort" v-model="sortKey">
        <option value></option>
        <option value="priority">優先度でソート</option>
        <option value="processType">ステータスでソート</option>
      </select>
    </div>
    <div class="mainContent">
      <Todo />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Todo from "@/components/Todo";

export default {
  name: "App",
  components: {
    Header,
    Todo,
  },
  
  data() {
    return {
      sortKey: "",
    };
  },
  methods: {
    changeOrder() {
      if (this.sortKey) {
        this.$store.commit("Todo/todoSort", this.sortKey);
      }
    },
  },
};
</script>

<style>
@import "assets/style.css";
</style>