<template>
  <section>
    <div class="pad">
      <button v-for="a in audio" :key="a.file" class="pad__button"
              :class="{'active':a.keys.includes(keyed)}" @click="hit({key:a.keys[0]})">
        <div class="flex flex-row justify-center mt-2">
          <div class="key" v-for="key in a.keys" :key="key" @click="hit({key})"
               :class="{'keyed':keyed===key}">
    <span>
    {{key.toUpperCase()}}
    </span>
          </div>
        </div>
      </button>
    </div>
    <audio v-for="a in audio" :key="a.file" :ref="a.file"
           :src="require(`../../assets/days/2/${a.file}.wav`)"></audio>
  </section>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'day-2',
  data() {
    return {
      keyed: null,
      audio: [
        {
          keys: ['a', '7'],
          file: 'hat_closed',
        },
        {
          keys: ['s', '8'],
          file: 'hat_open',
        },
        {
          keys: ['d', '9'],
          file: 'crash',
        },
        {
          keys: ['f', '4'],
          file: 'snare',
        },
        {
          keys: ['g', '5'],
          file: 'kick',
        },
        {
          keys: ['h', '6'],
          file: 'clap',
        },
        {
          keys: ['j', '1'],
          file: 'tom_low',
        },
        {
          keys: ['k', '2'],
          file: 'tom_mid',
        },
        {
          keys: ['l', '3'],
          file: 'tom_high',
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
      this.keyed = e.key;
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

    .pad__button {
      @apply w-1/3 py-16 px-4 z-0 outline-none;
      transition: all .15s;

      &.active {
        transform: scale(1.2);
      }
    }

    .pad__button:nth-child(1) {
      @apply bg-blue-lightest;

      &.active {
        @apply bg-blue-light z-10;
      }
    }

    .pad__button:nth-child(2) {
      @apply bg-red-lightest;

      &.active {
        @apply bg-red-light z-10;
      }
    }

    .pad__button:nth-child(3) {
      @apply bg-green-lightest;

      &.active {
        @apply bg-green-light z-10;
      }
    }

    .pad__button:nth-child(4) {
      @apply bg-teal-lightest;

      &.active {
        @apply bg-teal-light z-10;
      }
    }

    .pad__button:nth-child(5) {
      @apply bg-orange-lightest;

      &.active {
        @apply bg-orange-light z-10;
      }
    }

    .pad__button:nth-child(6) {
      @apply bg-yellow-lightest;

      &.active {
        @apply bg-yellow-light z-10;
      }
    }

    .pad__button:nth-child(7) {
      @apply bg-pink-lightest;

      &.active {
        @apply bg-pink-light z-10;
      }
    }

    .pad__button:nth-child(8) {
      @apply bg-grey-lightest;

      &.active {
        @apply bg-grey-light z-10;
      }
    }

    .pad__button:nth-child(9) {
      @apply bg-purple-lightest;

      &.active {
        @apply bg-purple-light z-10;
      }
    }
  }

  // KEYBOARD KEYS FROM https://codepen.io/rizkykurniawanritonga/pen/wospJ

  div.key {
    @apply m-3 h-8 w-8;
    transition: all .15s;

    &.keyed {
      transform: scale(1.5);
    }
  }

  div.key > span {
    @apply bg-white;
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
    -webkit-box-shadow: 0px 3px 0px -2px rgba(255, 255, 255, 1),
    0px 2px 0px 0px rgba(169, 169, 169, 1);
    -moz-box-shadow: 0px 3px 0px -2px rgba(255, 255, 255, 1),
    0px 2px 0px 0px rgba(169, 169, 169, 1);
    box-shadow: 0px 3px 0px -2px rgba(255, 255, 255, 1),
    0px 2px 0px 0px rgba(169, 169, 169, 1);
    cursor: pointer;
  }

  div.key > span:hover {
    background-color: #75b4fb;
    border: 1px solid #5a88c5;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 3px 0px -2px rgba(117, 180, 251, 1),
    0px 2px 0px 0px rgba(90, 136, 197, 1);
    -moz-box-shadow: 0px 3px 0px -2px rgba(117, 180, 251, 1),
    0px 2px 0px 0px rgba(90, 136, 197, 1);
    box-shadow: 0px 3px 0px -2px rgba(117, 180, 251, 1),
    0px 2px 0px 0px rgba(90, 136, 197, 1);
    cursor: pointer;
  }

  div.key > span:active {
    margin-top: 2px;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
</style>
