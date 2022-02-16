<template>
  <div class="app">
    <div class="header">
      <h1 class="app-title">
        <slot name="note-app-title">Vue3 Note App</slot>
      </h1>
    </div>
    <slot />
  </div>
</template>