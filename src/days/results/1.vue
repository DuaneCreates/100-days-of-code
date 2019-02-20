<template>
  <section class="flex flex-row-reverse flex-wrap items-stretch">
    <div class="flex-1 flex flex-col justify-center w-full md:w-1/2 lg:w-3/5 bg-1-dark-2 py-8 px-6">
      <img src="../../assets/days/1/ninja.svg" class="w-full"/>
    </div>
    <div class="w-full md:w-1/2 lg:w-2/5 flex flex-col ">
      <h1
        class="bg-1-dark-1 text-1-light-3 font-bold font-raleway uppercase p-4 text-center text-2xl">
        Sign Up
      </h1>
      <div class="bg-1-light-1 p-3 pl-5 text-left">
        <p class="mb-2 text-1-light-3">Sign up for Ninja's private party!</p>
        <p class="text-xs text-1-light-3">This is not true, ofcourse.</p>
      </div>
      <form class="flex-1 bg-1-light-3 p-4" :class="{'valid': all_good}">
        <div class="field" :class="{'valid': name && name.length > 0}">
          <label for="name">Name</label>
          <input v-model.trim="name" id="name" placeholder="Name" type="text"/>
        </div>

        <div class="field" :class="{'valid': phone && phone.length > 0}">
          <label for="phone">Phone</label>
          <input v-model.trim="phone" id="phone" placeholder="Phone" type="text"/>
        </div>

        <div class="field" :class="{'valid': email && email.length > 0}">
          <label for="email">Email</label>
          <input v-model.trim="email" id="email" placeholder="Email" type="email"/>
        </div>

        <div class="field">
          <button type="submit">Reserve Your Spot!</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'result-1',
  data() {
    return {
      name: null,
      phone: null,
      email: null,
    };
  },
  computed: {
    all_good() {
      return this.name && this.phone && this.email;
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    .field {
      @apply flex flex-col mt-3 mb-6;

      label {
        @apply ml-8 p-2 text-1-light-3 text-xl -mb-3 z-10 bg-1-light-1 rounded-bl-lg font-montserrat;
      }

      input {
        @apply p-4 pl-8 pt-7 bg-1-light-2 text-1-dark-1 font-montserrat z-0 border-4 border-1-light-2
        outline-none font-semibold;

        &:focus {
          @apply border-1-light-1 bg-1-light-3;
        }
      }

      &.valid {
        label {
          @apply bg-1-green text-1-dark-2;
        }

        input {
          @apply bg-1-light-3 border-1-green;
        }
      }

      button[type=submit] {
        @apply bg-1-dark-1 text-1-light-3 font-bold font-raleway uppercase p-4 text-center
        text-2xl outline-none;
      }
    }

    &.valid {
      button[type=submit] {
        @apply text-1-green;
      }
    }
  }
</style>
