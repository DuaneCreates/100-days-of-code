<template>
  <section class="wrapper">
    <p class="text-xs text-yellow-darker">Move the mouse around, or tap on mobile</p>
    <section ref="section" class="section">
      <span ref="man">👨</span>
      <span ref="woman">👩</span>
    </section>
  </section>
</template>

<script>
const walk = 80;

export default {
  name: 'day-18',
  methods: {
    handleMove(e) {
      const { offsetWidth: width, offsetHeight: height } = this.$refs.section;
      const { offsetX: x, offsetY: y } = e;

      const xWalk = Math.round((x / width * walk) - (walk / 2)) * -1;
      const yWalk = Math.round((y / height * walk) - (walk / 2)) * -1;

      this.$refs.man.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(150,0,0,0.1)`;
      this.$refs.woman.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(150,0,0,0.1)`;
    },
  },

  created() {
    this.$nextTick(() => {
      this.$refs.section.addEventListener('mousemove', this.handleMove);
    });
  },
  beforeDestroy() {
    this.$refs.section.removeEventListener('mousemove', this.handleMove);
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    @apply py-4 bg-yellow-lightest text-center;
  }

  .section {
    @apply p-32 flex flex-wrap justify-center;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='60' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>❤️</text></svg>") 16 0, auto;
  }

  span {
    @apply mx-6 text-5xl;
  }
</style>
