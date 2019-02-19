<template>
  <section>
    <div class="pad">
      <button v-for="a in audio" :key="a.file" @click="play(a.file)" class="pad__button">
        <h1>{{a.keys[0].toUpperCase()}}</h1>
      </button>
    </div>
    <audio v-for="a in audio" :key="a.file" :ref="a.file"
           :src="require(`../../assets/days/1/${a.file}.wav`)"></audio>
  </section>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'result-1',
  data() {
    return {
      audio: [
        {
          keys: ['a', '1'],
          file: 'clap',
        },
        {
          keys: ['s', '2'],
          file: 'hihat',
        },
        {
          keys: ['d', '3'],
          file: 'kick',
        },
        {
          keys: ['f', '4'],
          file: 'openhat',
        },
        {
          keys: ['g', '5'],
          file: 'boom',
        },
        {
          keys: ['h', '6'],
          file: 'ride',
        },
        {
          keys: ['j', '7'],
          file: 'snare',
        },
        {
          keys: ['k', '8'],
          file: 'tom',
        },
        {
          keys: ['l', '9'],
          file: 'tink',
        },
      ],
    };
  },
  methods: {
    play(file) {
      const audio = this.$refs[file][0];
      if (!audio) return;

      audio.currentTime = 0;
      audio.play();
    },
    hit(e) {
      const a = _.find(this.audio, aud => aud.keys.includes(e.key));

      if (!a || !this.$refs[a.file]) return;

      this.play(a.file);
    },
  },

  created() {
    window.addEventListener('keydown', this.hit);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.hit);
  },
};
</script>

<style lang="scss" scoped>
  .pad {
    @apply w-full flex flex-row flex-wrap;
  }
</style>
