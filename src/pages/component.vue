<template>
  <component :is="`day-${$route.params.day}`"/>
</template>

<script>
export default {
  name: 'component',
};
</script>

<style scoped>

</style>
