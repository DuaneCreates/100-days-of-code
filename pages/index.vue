<template>
  <section>
    <heading></heading>
    <day
      v-for="day in days"
      :key="day.day"
      :day="day.day"
      :date="day.date"
      :title="day.title"
      :post="day.post"
      :tags="day.tags"
      :github-url="day.github_url"
      :type="day.type"
      :codepen-url="day.codepen_url"
      :desktop-only="day.desktop_only"
    ></day>
  </section>
</template>

<script>
import Heading from '@/components/heading.vue'
import Day from '@/components/day.vue'

export default {
  components: {
    Heading,
    Day
  },
  data() {
    return {
      days: []
    }
  },

  created() {
    // load each day's info from @/days/info into this.days
    const files = require
      .context('../days/info', true, /\.js$/i)
      .keys()
      .map(
        key =>
          key
            .split('/')
            .pop()
            .split('.')[0]
      )

    this.days = files
      .sort((a, b) => a - b)
      .map(f => require(`@/days/info/${f}.js`).default)
  }
}
</script>
