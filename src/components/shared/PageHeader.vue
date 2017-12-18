<template>
  <div class="c-page-header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'c-page-header',
  props: ['title']
};
</script>

<style lang="scss">
.c-page-header {
  margin-bottom: 2.5rem;
}
h1 {
  font-size: 24px;
  color: #34495e;
}
</style>
