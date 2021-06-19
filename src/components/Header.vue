<template>
  <div id="header">
    <div class="appNameWrapper">
      <span>Todo App</span>
    </div>
    <div @click="showAddNewModal" class="addNew">
      <span>新規作成</span>
    </div>
    <AddNewModal v-if="shouldShowModal" @closeModal="hideAddNewModal" />
  </div>
</template>
<script>
import AddNewModal from "./AddNewModal";
import { mapGetters } from "vuex";
export default {
  components: {
    AddNewModal,
  },
  computed: {
    ...mapGetters({
      shouldShowModal: "Todo/showAddNewModal",
    }),
  },
  methods: {
    showAddNewModal() {
      this.$store.commit("Todo/toggleShowModal", true);
    },
    hideAddNewModal() {
      this.$store.commit("Todo/toggleShowModal", false);
    },
  },
};
</script>