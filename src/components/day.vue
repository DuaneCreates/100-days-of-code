<template>
  <div class="day-wrapper" :class="{'day--even':day%2===0,'day--odd':day%2===1}">
    <section class="day">
      <div class="cover">
        <div class="day__info" :class="{'cursor-pointer':!expanded}" @click="expanded=true">
          <h2 class="day__info__number">Day #{{day}}</h2>
          <h3 class="day__info__date">{{formattedDate}}</h3>
        </div>

        <div class="action">
          <div class="external">
            <a v-if="github_url" :href="github_url" class="external__item">
              <v-icon name="brands/github" scale="1.5"/>
            </a>
            <a v-if="codepen_url" :href="codepen_url" class="external__item">
              <v-icon name="brands/codepen" scale="1.5"/>
            </a>
            <a v-if="expanded" class="external__item external__item--close" @click="expanded=false">
              <v-icon name="regular/minus-square" scale="1.5"/>
            </a>
            <a v-else class="external__item external__item--expand" @click="expanded=true">
              <v-icon name="regular/plus-square" scale="1.5"/>
            </a>
          </div>
          <div class="tags">
            <a v-for="tag in tags" :key="tag" href="#" class="tags__item">#{{tag}}</a>
          </div>
        </div>
      </div>
      <div v-if="expanded" class="body">
        <h1 class="body__title">{{title}}</h1>
        <vue-markdown class="body__post" :source="post"></vue-markdown>
        <component class="body__result" :is="`result-${day}`"/>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'day',
  props: {
    day: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    post: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    codepen_url: {
      type: String,
      required: false,
    },
    github_url: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    formattedDate() {
      return moment(this.date).format('dddd, Do MMMM YYYY');
    },
  },
};
</script>

<style lang="scss" scoped>
  .day-wrapper {
    @apply border-b-2 border-grey-lighter;

    &.day--odd {
      @apply bg-white;
    }

    &.day--even {
      @apply bg-grey-lightest;
    }

    .day {
      @apply max-w-4xl mx-auto;

      &__info {
        @apply flex-1 flex flex-col justify-between p-5;

        &__number {
          @apply text-3xl font-montserrat uppercase text-blue-darkest;
        }

        &__date {
          @apply text-xs font-normal font-montserrat mt-1 text-blue-darkest;
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
            @apply flex flex-row mx-auto mt-6;

            &__item {
              @apply mx-1 no-underline text-sm font-montserrat text-white bg-blue-light px-3 py-2;

              &:hover {
                @apply text-blue-lightest bg-blue-darker;
              }
            }
          }
        }
      }

      .body {
        @apply p-5 py-3;

        &__title {
          @apply text-3xl font-raleway text-center;
        }

        &__post {
          @apply mt-6 font-montserrat max-w-lg mx-auto;
        }

        &__result {
          @apply w-full mt-8 mb-3;
        }
      }
    }
  }
</style>
