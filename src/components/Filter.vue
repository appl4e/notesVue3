<template>
  <div class="filter">
    <button>All ({{ count }})</button>
    <button v-for="color in colors" :key="color" :style="{ 'background-color': color }">1</button>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState('notes', ["colors"]),
    ...mapGetters('notes', ["count"])
  }
}
</script>