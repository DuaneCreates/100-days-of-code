<template>
  <div id="app">
    <heading></heading>
    <day v-for="day in days" :key="day.day" :day="day.day" :date="day.date" :tags="day.tags"></day>
  </div>
</template>

<script>
import Heading from '@/components/heading.vue';
import Day from '@/components/day.vue';

export default {
  name: 'app',
  components: {
    Heading, Day,
  },
  data() {
    return {
      days: [
        { day: 1, date: '2019-02-17', tags: ['Vue', 'JS', 'Logic'] },
        { day: 2, date: '2019-02-18', tags: ['UI', 'Adobe XD', 'Layout'] },
      ],
    };
  },
};
</script>
