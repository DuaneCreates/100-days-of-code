<template>
  <div
    class="day-wrapper"
    :class="{
      'day--even': day % 2 === 0,
      'day--odd': day % 2 === 1,
      'day--no-result': !hasComponent && type !== 'log'
    }"
  >
    <section class="day">
      <div class="cover">
        <div
          class="day__info"
          :class="{ 'cursor-pointer': !expanded }"
          @click="expand"
        >
          <h2 class="day__info__number">Day #{{ day }}</h2>
          <h3 class="day__info__date">
            <span class="day">{{ formattedDay + ', ' }}</span>
            <span class="date">{{ formattedDate }}</span>
          </h3>
        </div>

        <div class="action">
          <div class="external">
            <a v-if="codepenUrl" :href="codepenUrl" class="external__item">
              <v-icon name="brands/codepen" scale="1.5" />
            </a>
            <a v-if="githubUrl" :href="githubUrl" class="external__item">
              <v-icon name="brands/github" scale="1.5" />
            </a>
            <a
              v-if="expanded"
              class="external__item external__item--close"
              @click="expanded = false"
            >
              <v-icon name="regular/minus-square" scale="1.5" />
            </a>
            <a
              v-else
              class="external__item external__item--expand"
              @click="expand"
            >
              <v-icon name="regular/plus-square" scale="1.5" />
            </a>
          </div>
          <div class="tags">
            <a v-for="tag in tags" :key="tag" class="tags__item">#{{ tag }}</a>
          </div>
        </div>
      </div>
      <div v-if="expanded || isServer" class="body">
        <h1 class="body__title">{{ title }}</h1>
        <vue-markdown class="markdown-body" :source="post"></vue-markdown>
        <div v-if="!hasComponent && type !== 'log'" class="text-center mt-6">
          <span class="text-lg text-red">
            There's no component for this day
          </span>
        </div>
        <div v-if="type === 'log'" class="text-center mt-6">
          <span class="text-lg text-grey">
            This day has no preview, just a log
          </span>
        </div>
        <no-ssr>
          <div v-if="isMobileOnDesktopOnly" class="text-center mt-6">
            <span class="text-lg text-red">
              This day is only usable on desktop
            </span>
          </div>
          <component
            :is="`day-${day}`"
            v-else-if="hasComponent && type === 'result'"
            class="body__result"
          />
          <devices
            v-else-if="hasComponent && type === 'ui'"
            :day="day"
            class="body__result"
          ></devices>
        </no-ssr>
      </div>
    </section>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import moment from 'moment'
import Devices from './devices.vue'

export default {
  name: 'Day',
  components: { Devices },
  props: {
    day: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      default: 'result'
    },
    desktopOnly: {
      type: Boolean,
      default: false
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    post: {
      type: String,
      required: false,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    },
    codepenUrl: {
      type: String,
      required: false,
      default: null
    },
    githubUrl: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      expanded: false,
      isServer: process.server
    }
  },
  computed: {
    formattedDate() {
      return moment(this.date).format('Do MMMM YYYY')
    },
    formattedDay() {
      return moment(this.date).format('dddd')
    },
    hasComponent() {
      return this.$options.components[`day-${this.day}`]
    },
    isMobileOnDesktopOnly() {
      return isMobile && this.desktopOnly
    }
  },
  methods: {
    expand() {
      this.expanded = true
      if (this.$ga) this.$ga.event('days', 'expanded', 'day', this.day)
    }
  }
}
</script>

<style lang="scss" scoped>
.day-wrapper {
  @apply border-b-2 border-grey-lighter;

  &.day--odd {
    @apply bg-white;

    &.day--no-result {
      @apply bg-red-lightest;
    }
  }

  &.day--even {
    @apply bg-grey-lightest;

    &.day--no-result {
      @apply bg-orange-lightest;
    }
  }

  .day {
    @apply max-w-3xl mx-auto;

    &__info {
      @apply w-64 flex flex-col justify-between p-5;

      &__number {
        @apply text-2xl font-montserrat uppercase text-blue-darkest;

        @screen sm {
          @apply text-3xl;
        }
      }

      &__date {
        @apply text-xs font-normal font-montserrat mt-1 text-blue-darkest;

        .day {
          @apply hidden;

          @screen sm {
            @apply inline;
          }
        }
      }
    }

    .cover {
      @apply flex flex-row justify-between items-start;

      .action {
        @apply flex flex-col p-5 pl-0;

        .external {
          @apply flex flex-row justify-end;

          &__item {
            @apply mx-2 text-blue-darkest cursor-pointer;

            &:hover {
              @apply text-blue;
            }

            &--expand {
              @apply text-green;

              &:hover {
                @apply text-green-darker;
              }
            }

            &--close {
              @apply text-red;

              &:hover {
                @apply text-red-darker;
              }
            }
          }
        }

        .tags {
          @apply flex flex-row flex-wrap justify-end mx-auto mt-6;

          &__item {
            @apply mx-1 mb-2 no-underline text-sm font-montserrat text-white bg-blue-light p-2;

            &:hover {
              @apply text-blue-lightest bg-blue-darker;
            }
          }
        }
      }
    }

    .body {
      @apply py-3;

      &__title {
        @apply px-5 text-3xl font-raleway text-center;
      }

      &__result {
        @apply w-full mt-8 mb-3;
      }
    }
  }
}
</style>
