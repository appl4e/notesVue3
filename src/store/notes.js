const notes = {
  namespaced: true,
  state(){
    return{
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      colors: ["#D8E2DC", "#FFE5D9","#FBFAF0","#FFE9EE","#FFDDE4"]
    }
  },
  getters: {
    count(state){
      localStorage.setItem('notes', JSON.stringify(state.notes));
      return state.notes.length;
    },
   
  },
  mutations: {
    addNote(state, note){
      state.notes.unshift(note);
    },
    deleteNote(state, id){
      state.notes = state.notes.filter((note) => note.id != id);
    }
  }
}
export default notes;