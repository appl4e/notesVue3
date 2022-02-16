<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NoteEditor from './components/NoteEditor.vue'
import Notes from './components/Notes.vue'
import Filter from './components/Filter.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <Layout>
    <template #note-app-title>My Note App</template>

    <NoteEditor />
    <Filter />
    <Notes />
  </Layout>
</template>

