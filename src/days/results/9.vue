<template>
  <section>
    <div v-for="(k,i) in keys" :key="k.index" class="box animated"
         :style="{zIndex: i, backgroundColor: k.color, top: k.scatter.top, left:k.scatter.left}"
         :class="{'zoomInLeft faster': k.visible, 'zoomOutRight slower': !k.visible}">
      <h1>{{k.key}}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'day-9',
  data() {
    return {
      keys: [],
    };
  },
  methods: {
    disable(index) {
      this.$set(this.keys[index], 'visible', false);
    },
    getRandomColor() {
      const c = ['grey', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

      const tailwind = require('../../../tailwind.js');

      return tailwind.colors[`${_.sample(c)}-dark`];
    },
    getRandomScatter(min, max) {
      return `${Math.random() * (min - max) + max}%`;
    },
    keyed(e) {
      const index = this.keys.length;
      this.keys.push({
        key: e.key.toUpperCase(),
        visible: true,
        scatter: {
          top: this.getRandomScatter(10, 30),
          left: this.getRandomScatter(10, 30),
        },
        color: this.getRandomColor(),
      });


      const self = this;
      setTimeout(() => self.disable(index), 2000);
    },
  },

  created() {
    window.addEventListener('keydown', this.keyed);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyed);
  },
};
</script>

<style lang="scss" scoped>
  section {
    @apply bg-white overflow-hidden h-screen w-screen max-h-screen;

    .box {
      @apply shadow-lg h-64 w-64 max-h-full max-w-full m-2 p-4 text-5xl text-indigo-lightest font-raleway absolute flex justify-center items-center;
    }
  }
</style>
