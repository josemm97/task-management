<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Layout from "./components/Layout.vue";
import TaskList from "./components/TaskList.vue";

components:{
  TaskList
  Layout
}
</script>

<template>
  <Layout>
    <TaskList />
  </Layout>
</template>

<style scoped>
</style>
