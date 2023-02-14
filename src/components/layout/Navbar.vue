<template>
  <nav class="nav">
    <ul class="nav-container">
      <li>
        <router-link active-class="navbar-link-active" :to="{name:'index-home'}">
          <font-awesome-icon class="text-1.1 text-gray-700" icon="fa-solid fa-house" />
           <span  class="nav-tracer"></span>
        </router-link>
      </li>
      <li>
        <router-link active-class="navbar-link-active" :to="{name:'index-search'}">
          <font-awesome-icon class="text-1.1 text-gray-700" icon="fa-solid fa-magnifying-glass" />
           <span  class="nav-tracer"></span>
        </router-link>
      </li>
      <li>
        <router-link active-class="navbar-link-active" :to="{name:'index-user'}">
          <font-awesome-icon class="text-1.1 text-gray-700" icon="fa-solid fa-user" />
           <span  class="nav-tracer"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

