<template>
  <section>
    <p>Start mashing your keyboard</p>
    <div class="wrapper">
      <div
        v-for="(k, i) in keys"
        :key="k.index"
        class="box animated"
        :style="{
          zIndex: i,
          backgroundColor: k.color,
          top: k.scatter.top,
          left: k.scatter.left
        }"
        :class="{
          'zoomInLeft faster': k.visible,
          'zoomOutRight slower': !k.visible
        }"
      >
        <h1>{{ k.key }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Day9',
  data() {
    return {
      keys: []
    }
  },

  mounted() {
    window.addEventListener('keydown', this.keyed)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyed)
  },
  methods: {
    disable(index) {
      this.$set(this.keys[index], 'visible', false)
    },
    getRandomColor() {
      const c = [
        'grey',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'indigo',
        'purple',
        'pink'
      ]

      const tailwind = require('@/tailwind.js')

      return tailwind.colors[`${_.sample(c)}-dark`]
    },
    getRandomScatter(min, max) {
      return `${Math.random() * (min - max) + max}%`
    },
    keyed(e) {
      const index = this.keys.length
      this.keys.push({
        key: e.key.toUpperCase(),
        visible: true,
        scatter: {
          top: this.getRandomScatter(10, 30),
          left: this.getRandomScatter(10, 30)
        },
        color: this.getRandomColor()
      })

      const self = this
      setTimeout(() => self.disable(index), 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  p {
    @apply text-center p-4 text-4xl text-purple-dark font-raleway;
  }

  .wrapper {
    @apply bg-white overflow-hidden h-screen w-screen max-h-screen m-auto relative;

    .box {
      @apply shadow-lg h-64 w-64 max-h-full max-w-full m-2 p-4 text-5xl text-indigo-lightest font-raleway flex justify-center items-center absolute;
    }
  }
}
</style>
