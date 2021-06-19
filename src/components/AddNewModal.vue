<template>
  <div @click.self="closeModal" class="addNewArea">
    <div class="inputArea">
      <div>
        <label for="titleInput">タイトル</label>
        <input v-model="title" type="text" id="titleInput" />
      </div>
      <div>
        <label for="priorityType">優先度</label>
        <select v-model="priority" id="priorityType">
          <option
            v-for="(priority, idx) in priorityTypes"
            :key="idx"
            :value="priority.priorityType"
          >{{ priority.value }}</option>
        </select>
      </div>
      <div class="btnWrapper">
        <button v-if="!isEdit" @click="addTodo" :disabled="!isBtnAble">確定</button>
        <button v-else @click="updateTodo" :disabled="!isBtnAble">更新</button>
      </div>
    </div>
  </div>
</template>
<script>
import { priorityTypes } from "@/util";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      priorityTypes,
      isEdit: false,
    };
  },
  mounted() {
    this.isEdit = !!this.newTodo.title;
  },
  computed: {
    ...mapGetters({
      newTodo: "Todo/newTodo",
    }),
    isBtnAble() {
      return !!(this.title && this.priority);
    },
    title: {
      get() {
        return this.newTodo.title;
      },
      set(value) {
        this.$store.commit("Todo/setNewTodoTitle", value);
      },
    },
    priority: {
      get() {
        return this.newTodo.priority;
      },
      set(value) {
        this.$store.commit("Todo/setNewTodoPriority", value);
      },
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("Todo/initNewTodo");
      this.$emit("closeModal");
    },
    addTodo() {
      this.$store.commit("Todo/addNewTodo");
      this.closeModal();
    },
    updateTodo() {
      this.$store.commit("Todo/updateTodo");
      this.closeModal();
    },
  },
};
</script>