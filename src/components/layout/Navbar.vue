<template>
  <nav class="nav">
    <ul class="nav-container">
      <li>
        <router-link exact-active-class="navbar-link-active" :to="{name:'index-home'}">
          <font-awesome-icon class="text-1.1 text-gray-700" icon="fa-solid fa-house" />
           <span  class="nav-tracer"></span>
        </router-link>
      </li>
      <li>
        <router-link exact-active-class="navbar-link-active" :to="{name:'index-search'}">
          <font-awesome-icon class="text-1.1 text-gray-700" icon="fa-solid fa-magnifying-glass" />
           <span  class="nav-tracer"></span>
        </router-link>
      </li>
      <li>
        <router-link exact-active-class="navbar-link-active" :to="{name:'index-user'}">
          <font-awesome-icon class="text-1.1 text-gray-700" icon="fa-solid fa-user" />
           <span  class="nav-tracer"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>

// import '../../style/components/Navigation.scss';
// import useNavigation from "../composables/useNavigation.js";
// import AppLink from "./AppLink.vue";


// export default {
//   name: "Navigation",
//   components: {AppLink},
//   setup(){
//     const {tab,navigate}=useNavigation()
//     return {navigate,tab}
//   }
// }
</script>

