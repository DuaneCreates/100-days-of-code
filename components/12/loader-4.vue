<template lang="pug">
  section
    .loader
      .inner
        .tooth
        .tooth
        .tooth
        .tooth
</template>

<script>
export default {
  name: 'Loader4'
}
</script>

<style lang="scss" scoped>
section {
  @apply relative my-8;

  .loader {
    @apply bg-blue w-16 h-16 absolute m-auto;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .inner {
      @apply bg-white w-8 h-8 absolute m-auto;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      animation: pulse 1s ease-in-out 0s infinite alternate;

      .tooth {
        @apply h-4 w-4 bg-blue absolute m-auto;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        &:nth-child(1) {
          left: 3em;
        }

        &:nth-child(2) {
          left: -5em;
        }

        &:nth-child(3) {
          top: 5em;
        }

        &:nth-child(4) {
          top: -5em;
        }
      }
    }
  }
}

@keyframe pulse {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
</style>
