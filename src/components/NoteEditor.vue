<template>
  <form class="contextbox" @submit.prevent="addNote">
    <input v-model="note.title" type="text" placeholder="Title" />
    <textarea v-model="note.desc" rows="8" placeholder="Description" spellcheck="false"></textarea>
    <div class="controls">
      <div class="colors">
        <span
          v-for="( color, index ) in colors"
          :key="color"
          class="cursor-pointer"
          :class="['c' + (index + 1), { 'color-border': color == note.color }]"
          :data-note-color="color"
          @click="note.color = color"
        ></span>
      </div>
      <button>Add</button>
    </div>
  </form>
</template>
<script>
import { mapState } from "vuex"
import { v4 } from "uuid"

export default {
  data() {
    return {
      note: {
        title: "",
        desc: "",
        color: null
      }
    }
  },
  computed: {
    ...mapState("notes", ["colors"])
  },
  methods: {
    addNote() {
      this.note.id = v4();
      this.note.time = new Date();
      this.$store.commit('notes/addNote', this.note);

      this.note = {
        title: "",
        desc: "",
        color: null
      }

    }
  }

}
</script>