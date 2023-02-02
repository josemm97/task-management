<template>
  <header class="header">
    <!-- HEADER -->
    <b-navbar >
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>
        <img src="../assets/logo.svg" class="logo" alt="Kitten" />
      </b-navbar-brand>
      <b-collapse  id="nav-text-collapse" is-nav>
        <b-navbar-nav >
          <b-nav-text>Sistema de Gestión de Tareas</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
  <main>
    
    <router-view></router-view>

    
    <!-- <slot></slot> -->
  </main>
</template>
<script>
export default {}
</script>
<style>
.header {
  background: #000000;
  color: #ffffff;
  padding: 20px;
}
.logo {
  height: 25px;
  width: 125px;
}
</style>