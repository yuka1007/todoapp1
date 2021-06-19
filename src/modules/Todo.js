const initialNewTodoState = {
  newTodo: {
    title: "",
    processType: 1,
    priority: 1,
  },
};

const state = {
  newTodo: {
    title: "",
    processType: 1,
    priority: 1,
  },
  todoList: [],
  showAddNewModal: false,
  editTargetIndex: 0,
};
const getters = {
  newTodo: (state) => state.newTodo,
  todoList: (state) => state.todoList,
  showAddNewModal: (state) => state.showAddNewModal,
};
const mutations = {
  initNewTodo(state) {
    state.newTodo = JSON.parse(JSON.stringify(initialNewTodoState.newTodo));
  },
  toggleShowModal(state, isShow) {
    state.showAddNewModal = isShow;
  },
  setNewTodoTitle(state, title) {
    state.newTodo.title = title;
  },
  setNewTodoPriority(state, priority) {
    state.newTodo.priority = priority;
  },
  addNewTodo(state) {
    state.todoList.push(state.newTodo);
  },
  updateStatus(state, { status, idx }) {
    const target = state.todoList[idx];
    target.processType = status;
  },
  todoSort(state, sortKey) {
    state.todoList.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
    });
  },
  editTodo(state, index) {
    const editTarget = state.todoList[index];
    state.newTodo = { ...editTarget };
    state.showAddNewModal = true;
    state.editTargetIndex = index;
  },
  updateTodo(state) {
    state.todoList.splice(state.editTargetIndex, 1, state.newTodo);
  },
  deleteTodo(state, index) {
    state.todoList = state.todoList.filter((todo, idx) => index !== idx);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};