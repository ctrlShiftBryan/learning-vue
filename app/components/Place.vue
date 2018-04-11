<template>
  <div class="place">
    <img :src="img" width="235" height="300"/>
    <!-- this gets filled out by slot -->
    <slot></slot>
    <p>{{ desc }}</p>
  </div>
</template>



<script>
export default {
  props: ['img', 'desc'],
};
</script>

<style scoped>

</style>
