<template>
  <section id="10-parent">
    <p>Draw Something</p>
    <canvas ref="canvas"></canvas>
  </section>
</template>

<script>
export default {
  name: 'day-10',
  data() {
    return {
      isDrawing: false,
      ctx: null,
      lastX: 0,
      lastY: 0,
      hue: 0,
    };
  },
  methods: {
    draw(e) {
      if (!this.isDrawing) return;

      this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];

      this.hue = this.hue + 1;
    },
    setIsDrawing(e) {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    },
    setIsNotDrawing(e) {
      this.isDrawing = false;
    },
    setup() {
      const { canvas } = this.$refs;
      canvas.width = document.getElementById('10-parent').offsetWidth;
      canvas.height = window.innerHeight;

      this.ctx = canvas.getContext('2d');
      this.ctx.strokeStyle = '#BADA55';
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = 10;
    },
  },

  created() {
    window.addEventListener('mousemove', this.draw);
    window.addEventListener('mousedown', this.setIsDrawing);
    window.addEventListener('mouseup', this.setIsNotDrawing);
    window.addEventListener('mouseout', this.setIsNotDrawing);
    window.addEventListener('resize', this.setup);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.draw);
    window.removeEventListener('mousedown', this.setIsDrawing);
    window.removeEventListener('mouseup', this.setIsNotDrawing);
    window.removeEventListener('mouseout', this.setIsNotDrawing);
    window.removeEventListener('resize', this.setup);
  },

  mounted() {
    this.setup();
  },
};

</script>

<style lang="scss" scoped>
  section {
    @apply relative h-full w-full;

    p {
      @apply absolute flex justify-center items-center mt-8 mx-auto w-64 h-12 text-2xl text-center
      text-purple-darker font-bold font-roboto z-40 p-4 bg-purple-lightest uppercase;

      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -o-user-select: none;
    }

    canvas {
      @apply bg-teal-lightest z-10;
    }
  }
</style>
