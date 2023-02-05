<template lang="">
  <div v-if="!ajaxLoading">
  <div class="col-md-12 d-flex justify-content-center" >
    <form @submit.prevent="sendData()" class="col-md-7 d-flex  flex-column justify-content-center">
      <h1  class="text-center my-2">{{task.token?"EDITAR TAREA " + task.id:"AGREGAR TAREA"}}</h1>
  <div class="form-group my-2">
    <label for="titleInput">Titulo*</label>
    <input name="title" type="text"  v-model="task.title" required class="form-control" id="titleInput" placeholder="Ejemplo Hacer la despensa... ">
  </div>
  <div class="form-group my-2">
    <label for="completInpue">Completada*</label>
    <select  v-model="task.is_completed" class="form-control" id="completInpue">
      <option  :value="1" :key="1">SI</option>
      <option :value="0" :key="0">NO</option>
    </select>
  </div>

  <!-- fecha -->
  <div class="form-group my-2">
    <label for="start">Fecha:</label>

    <input v-model="task.due_date" type="date" id="start" name="trip-start" >
    
  </div>
  <div class="form-group my-2">
    <label for="commentInput">Comentarios</label>
    <textarea v-model="task.comments" class="form-control" id="commentInput" rows="3"></textarea>
  </div>
  <!-- DESCRIPCION -->
  <div class="form-group my-2">
    <label for="descriptionInput">Descripción</label>
    <textarea v-model="task.description" class="form-control" id="descriptionInput" rows="3"></textarea>
  </div>
  <!--  -->
  <div class="form-group my-2">
    <label for="tagInput">Etiquetas</label>
    <input v-model="task.tags" type="text" class="form-control" id="tagInput" placeholder="Ejemplo Hacer la despensa... ">
  </div>
      <button :v-if="task.token ==''"  type="submit" class="btn btn-secondary my-2">{{task.token?"EDITAR":"AGREGAR"}}</button>
</form>
</div>
</div>
<div v-else class="col-lg-12 d-flex justify-content-center">
  <div class="spinner-border" role="status">
  </div>
</div>
</template>
<script>
import TaskList from "./TaskList.vue";
import axios from "axios";
export default {
  data() {
    return {
      task: {
        title: null,
      },
      title: "AGREGAR TAREA",
      ajaxLoading: true,
    };
  },

  components: {
    TaskList,
  },
  mounted() {
    this.getTask();
  },

  methods: {
    sendData() {
      if (!this.task.token) {
        this.addTask();
      } else {
        console.log("editar");
        this.updateTask();
      }
      // window.location.href= "/"; 
      this.$router.push("/");
    },
    // addTask function
    addTask() {
      const token =
        "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const bodyParameters = {
        due_date: this.task.due_date,
        is_completed: this.task.is_completed,
        title: this.task.title,
        comments: this.task.comments,
        description: this.task.description,
        token: token,
        tags: this.task.tags,
      };
      // ajax loading

      axios
        .post(
          "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks",
          bodyParameters,
          config
        )
        .then((res) => {
          console.log(res);
          // this.ajaxLoading = false;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    // get task function
    getTask() {
      const token =
        "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };
      // get task id from url
      axios
        .get(
          `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${this.$route.params.id}?token=${token}`,
          config
        )
        .then((res) => {
          this.task = res.data[0];
          this.ajaxLoading = false;
        })
        .catch((err) => {
          this.ajaxLoading = false;

        });
    },
    updateTask() {
      const token =
        "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const bodyParameters = {
        due_date: this.task.due_date,
        is_completed: this.task.is_completed,
        title: this.task.title,
        comments: this.task.comments,
        description: this.task.description,
        tags: this.task.tags,
      };

      axios
        .put(
          `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${this.$route.params.id}?token=${token}`,
          bodyParameters,
          config
        )
        .then((res) => {
          console.log(res);
          this.ajaxLoading = false
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