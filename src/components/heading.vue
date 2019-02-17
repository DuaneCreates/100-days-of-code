<template>
  <section class="heading">
    <h1 class="title">100 Days of Code</h1>
    <img class="avatar" src="https://placeimg.com/150/150/tech"/>
    <div class="external">
      <a href="#" class="external__item">
        <v-icon name="brands/instagram" scale="2.5"/>
      </a>
      <a href="#" class="external__item">
        <v-icon name="brands/github" scale="2.5"/>
      </a>
      <a href="#" class="external__item">
        <v-icon name="brands/codepen" scale="2.5"/>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'heading',
};
</script>

<style lang="scss" scoped>
  .heading {
    @apply pt-10 pb-7 text-center flex flex-col bg-grey-lightest shadow mb-2;

    .title {
      @apply font-montserrat text-4xl text-blue-darkest;
    }

    .avatar {
      @apply rounded-full w-32 h-32 mx-auto mt-8 border-blue;
      object-fit: cover;

      &:hover {
        @apply border-4;
      }
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
</style>
