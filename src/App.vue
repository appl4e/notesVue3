<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NoteEditor from './components/NoteEditor.vue'
import Note from './components/Note.vue'
import Filter from './components/Filter.vue'
import Layout from './components/Layout.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    NoteEditor,
    Note,
    Filter,
    Layout
  },
  computed: {
    ...mapGetters('notes', ['filteredNotes']),
  },
};
</script>

<template>
  <Layout>
    <template #note-app-title>My Note App</template>

    <NoteEditor />
    <Filter />
    <div class="notes">
      <Note v-for="note in filteredNotes" :key="note.id" :note="note" />
    </div>
  </Layout>
</template>

