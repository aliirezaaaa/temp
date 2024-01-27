<script setup>
import AddFilmForm from './components/AddFilmForm.vue';
import HeaderDrawer from './components/HeaderDrawer.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <HeaderDrawer></HeaderDrawer>
    <q-page-container>
      <div style="display: flex;justify-content: center;">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
