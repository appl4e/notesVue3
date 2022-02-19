<template>
  <div class="filter">
    <button @click="$store.commit('notes/filterNotes', '')">All ({{ count }})</button>
    <button
      v-for="color in notesByColor"
      :key="color.color"
      :class="{ 'color-border': color.color == filterColor }"
      :style="{ 'background-color': color.color }"
      @click="$store.commit('notes/filterNotes', color.color)"
    >{{ color.noteCount }}</button>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState('notes', ["colors", "filterColor"]),
    ...mapGetters('notes', ["count", "notesByColor"])
  }
}
</script>