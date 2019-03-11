<template>
  <section>
    <div class="loader"></div>
  </section>
</template>

<script>
export default {
  name: 'loader-1',
};
</script>

<style lang="scss" scoped>
  .loader {
    @apply h-16 w-16 bg-blue m-auto;

    animation: animation 2s infinite 0s;
  }

  @keyframes animation {
    0%, 100% {
      @apply w-12 h-12;
    }

    50% {
      @apply w-48 h-12;
    }
  }
</style>
