<template>
  <!-- add self modifier to outer -->
  <div class="outer" @click.self="closeShower">
    <div class="modal" :class="{ sale: theme === 'redom' }">
      <!-- <h1>Modal Title</h1>
      <p>Modal Content</p> -->

      <!-- using props -->
      <!-- <h1>{{ mainTitle }}</h1>
      <p>{{ subTitle }}</p> -->

      <!-- using slot -->

      <slot>default contents </slot>

      <!-- using named slot -->
      <div class="nab">
        <slot name="links"> </slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "My Modal ",
  //   props: ["mainTitle", "subTitle", "theme"],
  props: ["theme"],

  methods: {
    closeShower() {
      console.log("Close Modal");

      //  Emitting an event
      this.$emit("close");
    },
  },
};
</script>


<style scoped>
/* Styles here only affect the Modal component since they're scopeds */

.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}

.outer {
  top: 0;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
}

h1 {
  color: blue;
  border: 0;
  padding: 0;
}

.modal.nab {
  text-align: center;
  margin: 20px auto;
}

.modal.nab a {
  margin: 6px;
  padding: 10px;
  border: 1px solid rgb(17, 197, 56);
  border-radius: 6px;
  /* color: rgb(71, 7, 219); */
  text-decoration: none;
}

.modal.sale {
  background: rgb(106, 124, 230);
  color: wheat;
}

.modal.sale h1 {
  color: #fff;
}

.modal.sale.nab {
  color: wheat;
  text-align: center;
  margin: 20px auto;
  /* color: rgb(250, 18, 18); */
}

.modal.sale.nab a {
  color: rgb(8, 8, 8);
}
</style>