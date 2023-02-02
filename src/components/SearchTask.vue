<template lang="">
  <form class="form-row mt-4">
    <div class="d-flex justify-content-around col-lg-12 col-md-12 ">
      <div class="form-group d-flex block col-md-6"  >
        <div class="input">
          <input type="number" class="form-control mr-2 input" id="inputPassword2" placeholder="ID DE LA TAREA">

        </div>
        <!-- <div class="input"> -->
          <button type="submit" class="button">BUSCAR</button>

        <!-- </div> -->
      </div>
      <div>
        <button type="submit" class="btn btn-secondary ">AGREGAR</button>
      </div>
      
    </div>
  </form>
</template>
<script>
export default {};
</script>
<style >

.button{
  width: 40%;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  margin-left: 20px;
  border-radius: 10px;
}

</style>