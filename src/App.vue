<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Layout from "./components/Layout.vue";
import TaskList from "./components/TaskList.vue";
import SearchTask from "./components/SearchTask.vue";
</script>

<template>
  <Layout>
    <SearchTask />
    <TaskList />
  </Layout>
</template>

<style scoped>
</style>
