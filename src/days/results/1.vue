<template>
  <section>
    <audio v-for="a in audio" :key="a.key" :ref="a.key"
           :src="require(`../../assets/days/1/${a.file}.wav`)"></audio>
  </section>
</template>

<script>
export default {
  name: 'result-1',
  data() {
    return {
      audio: [
        {
          key: 'a',
          file: 'clap',
        },
        {
          key: 's',
          file: 'hihat',
        },
        {
          key: 'd',
          file: 'kick',
        },
        {
          key: 'f',
          file: 'openhat',
        },
        {
          key: 'g',
          file: 'boom',
        },
        {
          key: 'h',
          file: 'ride',
        },
        {
          key: 'j',
          file: 'snare',
        },
        {
          key: 'k',
          file: 'tom',
        },
        {
          key: 'l',
          file: 'tink',
        },
      ],
    };
  },
  methods: {
    hit(e) {
      if (!this.$refs[e.key]) return;

      const audio = this.$refs[e.key][0];
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
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
