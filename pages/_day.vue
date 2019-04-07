<template>
  <component :is="`day-${$nuxt._route.params.day}`" />
</template>

<script>
export default {
  name: 'Day'
}
</script>
