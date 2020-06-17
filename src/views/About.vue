<template>
  <div class="about">
    <h1>About</h1>
    <h2>Oh yes</h2>
    <ExampleReact/>
    <p>This is the TodoList app v1.0.0. It is part of the Vue crash course on Youtube</p>
  </div>
</template>

<script>
import { ReactInVue } from "vuera";
// import ExampleReact from "../components/reactComponent.react";

// console.log("ER...", ExampleReact);

export default {
  name: "myComponent",
  components: { ExampleReact },
};
</script>
