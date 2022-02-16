import {createStore} from 'vuex'

// Create a new store instance.
const store = createStore({
  state(){
    return{
      notes: [
        {
          id: 1,
          title: "Just a note",
          desc: "What are you doing?",
          color: "#ff00ff",
          time: "now"
        },
        {
          id: 2,
          title: "Another note",
          desc: "What are you doing?",
          color: "#ff00ff",
          time: "now"
        }
      ]
    }
  },
  mutations: {
    deleteNote(state, id){
      state.notes = state.notes.filter((note) => note.id != id);
    }
  }
});

export default store;