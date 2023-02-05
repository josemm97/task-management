<template lang="">
  <form @submit.prevent ="getTask()" class="form-row mt-4">
    <!-- form desktop -->
    <div class="d-flex justify-content-around col-lg-12 col-md-12 container">
      <div class="form-group d-flex block col-md-6"  >
        <div>
          <input v-model="taskId" type="number" class="form-control mr-2 input" id="inputPassword2" placeholder="ID DE LA TAREA">
        </div>
          <button type="submit" class="button">BUSCAR</button>
      </div>
      <div  class="container-btn-add">
        <button type="button" @click="addTask" class="btn btn-secondary btn-add">AGREGAR</button>
      </div>
    </div>
  </form>
  
  <div v-if="!ajaxLoading" class="d-flex justify-content-center my-4 col-lg-12">
  <div class="card col-md-8" v-if="tasks.length >0">
      <ul class="list-group list-group-flush my-4" v-for="(task, index) in tasks" :key="index">
        <li class="list-group-item d-flex justify-content-between">
          <span>Titulo:{{ task.title}}</span>
        <span>#
          <router-link :to="{name:'taskDetails',params:{id: task.id}}">{{ task.id }}</router-link>
        </span>
        </li>
        <li class="list-group-item">
          <span>Completada:</span>
          {{task.is_completed == 1? "Si":"NO" }}
        </li>
        <li class="list-group-item">
          <span>Fecha:</span>
          {{task.due_date}}
        </li>
        <li class="list-group-item">
          <span>Comentarios:</span>
          {{task.comments}}
        </li>
        <li class="list-group-item">
          <span>Description:</span>
          {{task.description}}
        </li>
        <li class="list-group-item">
          <span>Tags:</span>
          {{task.tags}}
        </li>
        <li class="list-group-item">
          <button type="button" @click="deleteTask(task.id)" class="btn btn-danger ">ELIMINAR </button>
        </li>
      </ul>
    </div>
    <p v-else>LO SIENTO NO SE ENCONTRARON TAREAS </p>
</div>
<div v-else class="col-lg-12 d-flex justify-content-center my-3">
  <div class="spinner-border" role="status">
  </div>
</div>
</template>
<script>
import axios from "axios";
import SearchTask from "./SearchTask.vue";
export default {
  data() {
    return {
      tasks: [],
      taskId: null,
      ajaxLoading: true,
    };
  },
  component: {
    SearchTask: SearchTask,
  },

  created() {
    this.tasks = [];
    this.getTasks();
  },

  methods: {
    // function to get all tasks
    getTasks() {
      // this.tasks = []
      const token =
        "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      axios
        .get(
          `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=${token}`,
          config
        )
        .then((res) => {
          console.log(res);
          this.tasks = res.data;
          this.ajaxLoading = false
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // routing to form to add task
    addTask() {
      this.$router.push("/form");
      this.tasks = []
      // window.location.reload()
    },
    getTask() {
      if (!this.taskId) {
        // get all task for the user
        this.getTasks();
        // reset task id
        this.taskId = null;
        window.alert("INGRESAR UN NUMERO VALIDO :)");
        return false;
      }
      const token =
        "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };
      // reset the task for the push the task
      this.tasks = [];
      axios
        .get(
          `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${this.taskId}?token=${token}`,
          config
        )
        .then((res) => {
          this.tasks.push(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
      this.taskId = null;
      // console.log();
      // location.reload()
    },
    // function if
    deleteTask(taskId) {
      window.confirm("Deseas eliminar la TAREA No° " + taskId);
      const token =
        "e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd";

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      axios
        .delete(
          `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${taskId}?token=${token}`,
          config
        )
        .then((res) => {
          this.ajaxLoading =true
          this.getTasks();
        })
        .catch((err) => {
          console.log(err);
        });
      this.taskId = null;
    },
  },
};
</script>
<style >
span {
  font-weight: bold;
}

.button-looking{
  width: 200px;
  margin-left: 20px;
}
@media only screen and (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .container-btn-add{
    margin-top: 10px;
    display: flex;
    justify-content: end;
  } 
  .container-btn-add>button{
    width:143px;
  }
} 


</style>