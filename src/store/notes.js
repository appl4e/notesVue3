const notes = {
  namespaced: true,
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
      ],
      colors: ["#D8E2DC", "#FFE5D9","#FBFAF0","#FFE9EE","#FFDDE4"]
    }
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