<template>
  <section class="flex flex-col bg-blue-lighter p-8">
    <input class="bg-yellow-lightest text-yellow-darker p-2 text-2xl"
           placeholder="Search a car manufacturer"
           type="text" v-model="q" @keyup="throttledMethod"/>
    <div v-if="loading_models" class="bar"></div>
    <div class="mt-4">
      <ul v-if="!loading_models">
        <li v-for="m in models">{{m.Model_Name}}</li>
      </ul>
      <p class="m-2" v-if="!loading_models && message">{{message}}</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

const api = 'https://vpic.nhtsa.dot.gov/api/';

export default {
  name: 'day-19',
  data() {
    return {
      q: null,
      models: [],
      loading_models: null,
      message: null,
    };
  },
  methods: {
    throttledMethod: _.debounce(function () {
      this.loading_models = true;
      axios.get(`${api}vehicles/GetModelsForMakeYear/make/${this.q}/vehicletype/car?format=json`)
        .then(({ data }) => {
          this.models = _.sampleSize(data.Results, 30);

          this.message = this.models.length === 0 ? 'No cars have been found' : null;

          this.loading_models = false;
        }).catch((e) => {
          this.message = 'Encountered an error';
          this.loading_models = false;
        });
    }, 350, { leading: true, trailing: true }),
  },
};
</script>

<style lang="scss" scoped>
  ul {
    @apply list-reset px-2;

    li {
      @apply my-2 font-roboto text-blue-darkest;
    }
  }

  .bar {
    @apply w-full h-1 m-auto relative overflow-hidden;
  }

  .bar:before {
    content: " ";
    top: 0px;
    left: 0px;
    animation: load 2s infinite;

    @apply absolute w-full h-full bg-blue-dark;
  }

  @keyframes load {
    0% {
      transform: translateX(-10%)
    }
    100% {
      transform: translateX(100%)
    }
  }
</style>
