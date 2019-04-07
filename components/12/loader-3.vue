<template lang="pug">
  .loader
    .table
      .card
      .card
      .card
</template>

<script>
export default {
  name: 'Loader3'
}
</script>

<style lang="scss" scoped>
.loader {
  @apply m-auto relative h-16 my-8;

  .table {
    @apply bg-12-brown rounded-full h-16 w-16 m-auto absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .card {
      @apply h-6 w-4 bg-white border border-grey-darker shadow absolute m-auto;

      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      &:nth-child(1) {
        top: 0px;
        left: -2px;
        z-index: 1;

        animation: pass-1 2s ease-in-out 0s infinite alternate forwards;
      }

      &:nth-child(2) {
        top: 6px;
        left: 2px;
        z-index: 2;

        animation: pass-2 2s ease-in-out 0s infinite alternate forwards;
      }

      &:nth-child(3) {
        top: 12px;
        left: 6px;
        z-index: 3;

        animation: pass-3 2s ease-in-out 0s infinite alternate forwards;
      }
    }
  }
}

@keyframes pass-1 {
  0%,
  30% {
    transform: rotate(0deg) translate(0, 0);
  }

  40%,
  100% {
    transform: rotate(-45deg) translate(10px, 60px);
  }
}

@keyframes pass-2 {
  0%,
  30% {
    transform: rotate(0deg) translate(0, 0);
  }

  40%,
  100% {
    transform: rotate(-180deg) translate(0px, 60px);
  }
}

@keyframes pass-3 {
  0%,
  30% {
    transform: rotate(0deg) translate(0, 0);
  }

  40%,
  100% {
    transform: rotate(-305deg) translate(-20px, 60px);
  }
}
</style>
