<template>
  <div>
    <div class="todoRowWrapper">
      <TodoRow v-for="(todo, idx) in todoList" :key="idx" :todoInfo="todo" :index="idx" />
    </div>
  </div>
</template>

<script>
import TodoRow from "./TodoRow.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TodoRow,
  },
  computed: {
    ...mapGetters({
      todoList: "Todo/todoList",
    }),
  },
};
</script>