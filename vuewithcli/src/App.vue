<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <h1>{{ title }}</h1>

  <!-- Using v-bind directive = : -->

  <div v-if="showModal">
    <!-- <Moda
      :mainTitle="mainTitle"
      :subTitle="subTitle"
      :theme="theme"
      @close="shower"
    /> -->

    <Moda :theme="theme" @close="shower">
      <!-- using slot -->
      <h1>Slot</h1>

      <p>Using slot</p>

      <!-- using named slot -->
      <template v-slot:links>
        <a href="#">Home | </a>
        <a href="#">About Us |</a>
        <a href="#">Blog |</a>
        <a href="#">Contact Us</a>
      </template>


    </Moda>
    
  </div>

  <!-- Modifier can be added to the click event by using click.type of modifier -->
  <button @click="shower">Show Modal</button>
</template>


<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Moda from "./components/Modal.vue";

export default {
  name: "App",

  data() {
    return {
      title: "INTRODUCTION TO VUE JS",
      mainTitle: "My Modal Title",
      subTitle: "Modal Content",
      theme: "redom",
      showModal: false,
    };
  },
  components: {
    // always register component before using them//

    // HelloWorld,
    Moda,
  },
  methods: {
    shower() {
      console.log("Open Modal");
      this.showModal = !this.showModal;
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
