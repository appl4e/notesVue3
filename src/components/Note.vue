<script>
export default {
  props: ["note"],
  methods: {
    remove() {
      this.$store.commit('deleteNote', this.note.id);
    }
  }
}
</script>
<template>
  <div class="note" :style="{ 'background-color': note.color }">
    <div>
      <h3 class="title">{{ note.title }}</h3>
      <p>{{ note.desc }}</p>
    </div>
    <p class="time">{{ note.time }}</p>
    <div class="buttons">
      <button class="delete" @click="remove">×</button>
    </div>
  </div>
</template>
