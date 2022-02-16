<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="app">
    <div class="header">
      <h1 class="app-title">Vue Notes</h1>
    </div>
    <div class="contextbox">
      <input type="text" placeholder="Title" />
      <textarea rows="8" placeholder="Description" class spellcheck="false"></textarea>
      <div class="controls">
        <div class="colors">
          <span class="c1" data-note-color="#D8E2DC"></span>
          <span class="c2" data-note-color="#FFE5D9"></span>
          <span class="c3" data-note-color="#FBFAF0"></span>
          <span class="c4" data-note-color="#FFE9EE"></span>
          <span class="c5" data-note-color="#FFDDE4"></span>
        </div>
        <button>Add</button>
      </div>
    </div>
    <div class="filter">
      <button>All (2)</button>
      <button style="background-color: rgb(216, 226, 220)">1</button>
      <button style="background-color: rgb(255, 229, 217)">0</button>
      <button style="background-color: rgb(251, 250, 240)">0</button>
      <button style="background-color: rgb(255, 233, 238)">0</button>
      <button style="background-color: rgb(255, 221, 228)">1</button>
      <button style="background-color: rgb(255, 255, 255)">0</button>
    </div>
    <div class="notes">
      <div class="note" style="background-color: rgb(216, 226, 220)">
        <div>
          <h3 class="title">very important note</h3>
          <p>heyyy</p>
        </div>
        <p class="time">a few seconds ago</p>
        <div class="buttons">
          <button class="delete">×</button>
        </div>
      </div>
      <div class="note" style="background-color: rgb(255, 221, 228)">
        <div>
          <h3 class="title">Learn Vue</h3>
          <p>Vue is a easy going library</p>
        </div>
        <p class="time">a few seconds ago</p>
        <div class="buttons">
          <button class="delete">×</button>
        </div>
      </div>
    </div>
  </div>
</template>

