<template>
  <section>
    <heading></heading>
    <day v-for="day in days" :key="day.day" :day="day.day" :date="day.date" :title="day.title"
         :post="day.post" :tags="day.tags" :github_url="day.github_url" :type="day.type"
         :codepen_url="day.codepen_url"></day>
  </section>
</template>

<script>
import Heading from '@/components/heading.vue';
import Day from '@/components/day.vue';

export default {
  name: 'home',
  components: {
    Heading, Day,
  },
  data() {
    return {
      days: [],
    };
  },

  mounted() {
    // load each day's info from @/days/info into this.days
    const files = require.context('../days/info', true, /\.js$/i);
    this.days = files.keys().map(key => require(`@/days/info/${key.split('/').pop().split('.')[0]}.js`).default);
  },
};
</script>

<style scoped>

</style>
