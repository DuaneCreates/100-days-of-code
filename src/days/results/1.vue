<template>
  <section>
    <div class="pad">
      <button v-for="a in audio" :key="a.file" class="pad__button">
        <div v-if="a.keys.length > 0">
          <div class="flex flex-row justify-center mt-2">
            <div class="key" v-for="key in a.keys" :key="key" @click="play(a.file)">
              <span>
                {{key.toUpperCase()}}
              </span>
            </div>
          </div>
        </div>
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
          keys: ['a', '7'],
          file: 'clap',
        },
        {
          keys: ['s', '8'],
          file: 'hihat',
        },
        {
          keys: ['d', '9'],
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
          keys: ['j', '1'],
          file: 'snare',
        },
        {
          keys: ['k', '2'],
          file: 'tom',
        },
        {
          keys: ['l', '3'],
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
  // KEYBOARD KEYS FROM https://codepen.io/rizkykurniawanritonga/pen/wospJ

  div.key {
    width:35px;
    height: 37px;
    padding: 1px;
    margin: 10px;
  }

  div.key > span {

    display: block;
    width: 35px;
    height: 35px;
    border: 1px solid #a9a9a9;
    border-radius: 2px 2px 2px 2px;
    -moz-border-radius: 2px 2px 2px 2px;
    -webkit-border-radius: 2px 2px 2px 2px;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
    box-sizing: border-box !important;
    text-align: center;
    padding-top: 15px;
    font-size: 11px;
    color: #7c7c7c;
    -webkit-box-shadow: 0px 3px 0px -2px rgba(255, 255, 255, 1), 0px 2px 0px 0px rgba(169, 169, 169, 1);
    -moz-box-shadow: 0px 3px 0px -2px rgba(255, 255, 255, 1), 0px 2px 0px 0px rgba(169, 169, 169, 1);
    box-shadow: 0px 3px 0px -2px rgba(255, 255, 255, 1), 0px 2px 0px 0px rgba(169, 169, 169, 1);
    cursor: pointer;
  }

  div.key > span:hover {
    background-color: #75b4fb;
    border: 1px solid #5a88c5;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 3px 0px -2px rgba(117, 180, 251, 1), 0px 2px 0px 0px rgba(90, 136, 197, 1);
    -moz-box-shadow: 0px 3px 0px -2px rgba(117, 180, 251, 1), 0px 2px 0px 0px rgba(90, 136, 197, 1);
    box-shadow: 0px 3px 0px -2px rgba(117, 180, 251, 1), 0px 2px 0px 0px rgba(90, 136, 197, 1);
    cursor: pointer;
  }

  div.key > span:active {
    margin-top: 2px;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
</style>
