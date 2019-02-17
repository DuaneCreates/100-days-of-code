<template>
  <div class="heading-wrapper">
    <section class="heading">
      <h1 class="title">{{info.title}}</h1>
      <p class="subtitle"><a :href="info.instagram_url">{{info.name}}</a></p>
      <img class="avatar" src="https://placeimg.com/150/150/tech"/>
      <div class="external">
        <a v-if="info.instagram_url" :href="info.instagram_url" class="external__item">
          <v-icon name="brands/instagram" scale="2.5"/>
        </a>
        <a v-if="info.github_url" :href="info.github_url" class="external__item">
          <v-icon name="brands/github" scale="2.5"/>
        </a>
        <a v-if="info.codepen_url" :href="info.codepen_url" class="external__item">
          <v-icon name="brands/codepen" scale="2.5"/>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'heading',
  data() {
    return {
      info: {},
    };
  },

  mounted() {
    this.info = require('@/info.js').default;
  },
};
</script>

<style lang="scss" scoped>
  .heading-wrapper {
    @apply bg-grey-lightest shadow;

    .heading {
      @apply pt-10 pb-7 text-center flex flex-col mb-2 max-w-4xl mx-auto;

      .title {
        @apply font-montserrat text-4xl text-blue-darkest;
      }

      .subtitle {
        @apply mt-2 font-montserrat text-sm;

        a {
          @apply no-underline text-blue-darkest;
        }
      }

      .avatar {
        @apply rounded-full w-32 h-32 mx-auto mt-8 border-blue;
        object-fit: cover;
      }

      .external {
        @apply flex flex-row mx-auto mt-10;

        &__item {
          @apply mx-5 no-underline text-blue-darkest;

          &:hover {
            @apply text-blue;
          }
        }
      }
    }
  }
</style>
