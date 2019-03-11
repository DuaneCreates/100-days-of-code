<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'loader-2',
};
</script>

<style lang="scss" scoped>
  .loader {
    @apply p-6 rounded-full border-4 m-auto;

    height: 0;
    width: 0;
    border-top-color: config('colors.grey-lighter');
    border-right-color: config('colors.grey-light');
    border-bottom-color: config('colors.grey');
    border-left-color: config('colors.grey-dark');
    -webkit-animation: animation 1s infinite linear;
  }

  @keyframes animation {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
