<template>
  <div class="heading-wrapper">
    <section class="heading">
      <h1 class="title">{{info.title}}</h1>
      <p class="subtitle"><a :href="info.instagram_url">{{info.name}}</a></p>
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
      <img class="avatar" :src="require(`../assets/avatar.png`)"/>
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
      @apply pt-10 text-center flex flex-col mb-2 max-w-3xl mx-auto;

      .title {
        @apply font-montserrat text-3xl text-blue-darkest z-10 px-2;

        @screen sm {
          @apply text-4xl;
        }
      }

      .subtitle {
        @apply mt-2 font-montserrat text-sm z-10;

        a {
          @apply no-underline text-blue-darkest;
        }
      }

      .avatar {
        @apply w-full h-32 -mt-20 z-0;
        object-fit: cover;
        filter: brightness(30%);

        @screen xs {
          @apply rounded-full w-32 h-32 mx-auto mt-7 border-grey-lightest shadow-md border-4 -mb-12;
          filter: brightness(100%);
        }
      }

      .external {
        @apply flex flex-row mx-auto mt-10 z-10;

        &__item {
          @apply mx-5 mt-4 no-underline text-white;

          &:hover {
            @apply text-blue;
          }

          @screen xs {
            @apply text-blue-darkest mt-0;
          }
        }
      }
    }
  }
</style>
