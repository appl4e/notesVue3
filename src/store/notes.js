const notes = {
  namespaced: true,
  state(){
    return{
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      colors: ["#D8E2DC", "#FFE5D9","#FBFAF0","#FFE9EE","#FFDDE4"],
      filterColor: ''
    }
  },
  getters: {
    count(state){
      localStorage.setItem('notes', JSON.stringify(state.notes));
      return state.notes.length;
    },
    notesByColor(state){
      return state.colors.map((color) => {
        return {
          color,
          noteCount: state.notes.filter((obj) => obj.color == color).length
        }
      });
    }, 
    filteredNotes(state){
      if(state.filterColor == ''){
        return state.notes;
      }
      else{
        return state.notes.filter((note)=> note.color == state.filterColor);
      }
    }
  },
  mutations: {
    addNote(state, note){
      state.notes.unshift(note);
    },
    filterNotes(state, color){
      state.filterColor = color;
    },
    deleteNote(state, id){
      state.notes = state.notes.filter((note) => note.id != id);
    }
  }
}
export default notes;