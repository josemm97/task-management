<template lang="">
  <div class="d-flex justify-content-center my-4 col-lg-12">
  <div class="card col-md-8" >
      <ul class="list-group list-group-flush my-4" v-for="(task, index) in tasks" :key="index">
        <li class="list-group-item">
          <span>Titulo:</span>
          {{task.title}}</li>
        <li class="list-group-item">
<span>Completada:</span>
{{task.is_completed == 1? "Si":"NO" }}
        </li>
        <li class="list-group-item">
          <span>Fecha:</span>
          {{task.due_date}}
        </li>
      </ul>
</div>
</div>
</template>
<script>
import Layout from "./Layout.vue";
import axios from "axios";
export default {
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      const token =
        "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const bodyParameters = {
        token:
          "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
      };
      console.log(config);

      axios
        .get(
          "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks",
          // bodyParameters,
          // {},
          config
        )
        .then((res) => {
          console.log(res);
          this.tasks = res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>
<style lang="">
</style>