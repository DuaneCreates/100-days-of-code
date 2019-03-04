<template>
  <section>
    <div class="block lg:hidden text-center mt-6">
        <span class="text-lg text-grey">
          This component is not mobile-responsive
        </span>
    </div>

    <div class="hidden lg:block clock">
      <div class="clock-face">
        <div class="hand hour-hand" :style="{transform:'rotate('+hoursDegrees+'deg)'}"></div>
        <div class="hand min-hand" :style="{transform:'rotate('+minutesDegrees+'deg)'}"></div>
        <div class="hand second-hand" :style="{transform:'rotate('+secondsDegrees+'deg)'}"></div>
        <div class="center">&nbsp;</div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'day-5',
  data() {
    return {
      date: moment(),
    };
  },
  methods: {
    updateTime() {
      this.date = moment();
    },
  },
  computed: {
    seconds() {
      return this.date.format('ss');
    },
    minutes() {
      return this.date.format('mm');
    },
    hours() {
      return this.date.format('HH');
    },
    secondsDegrees() {
      return ((this.seconds / 60) * 360) + 90;
    },
    minutesDegrees() {
      return ((this.minutes / 60) * 360) + ((this.seconds / 60) * 6) + 90;
    },
    hoursDegrees() {
      return ((this.hours / 12) * 360) + ((this.minutes / 60) * 30) + 90;
    },
  },

  mounted() {
    this.updateTime();

    setInterval(this.updateTime, 1000);
  },
};
</script>

<style lang="scss" scoped>
  section {
    @apply bg-blue-darkest py-32;

    .clock {
      @apply rounded-full p-8 relative mx-auto my-16 w-128 h-128 border-8 border-blue;

      box-shadow: 0 0 60px 2px #fff, /* inner white */
      0 0 75px 4px #f0f, /* middle magenta */
      0 0 140px 9px #0ff; /* outer cyan */

      .clock-face {
        @apply relative w-full h-full;
        transform: translateY(-3px);

        .hand {
          @apply absolute h-4 rounded-full;

          top: 50%;
          transform-origin: 100%;
          transform: rotate(90deg);
          transition: all 0.05s;
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);

          &.second-hand {
            @apply z-30 bg-blue-light;
            width: 50%;
          }

          &.min-hand {
            @apply z-20 bg-blue-lighter;
            width: 45%;
            left: 5%;
          }

          &.hour-hand {
            @apply z-10 bg-blue-lightest;
            width: 40%;
            left: 10%;
          }
        }

        .center {
          @apply w-8 h-8 p-1 bg-blue absolute rounded-full z-40;

          top: 48%;
          left: 46.5%;
        }
      }
    }
  }
</style>
