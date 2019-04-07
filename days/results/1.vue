<template>
  <section class="flex flex-row-reverse flex-wrap items-stretch">
    <div
      class="flex-1 flex flex-col justify-center w-full md:w-1/2 lg:w-3/5 bg-1-dark-2 py-8 px-6"
    >
      <img src="~/assets/days/1/ninja.svg" class="w-full" />
    </div>
    <div class="w-full md:w-1/2 lg:w-2/5 flex flex-col ">
      <h1
        class="bg-1-dark-1 text-1-light-3 font-bold font-raleway uppercase p-4 text-center text-xl"
      >
        Sign Up
      </h1>
      <div class="bg-1-light-1 p-3 pl-5 text-left">
        <p class="mb-2 text-1-light-3 text-lg">
          Sign up for Ninja's private party!
        </p>
        <p class="text-xs text-1-light-3">This is not true, ofcourse.</p>
      </div>
      <form class="flex-1 bg-1-light-3 p-4" :class="{ valid: all_good }">
        <div class="field">
          <div class="label-wrapper">
            <v-icon
              v-if="dirty_name && valid_name"
              class="validation text-1-green"
              name="check"
              scale="1.3"
            />
            <v-icon
              v-if="dirty_name && !valid_name"
              class="validation text-red-lighter"
              name="times"
              scale="1.3"
            />
            <label for="name">Name</label>
          </div>
          <input id="name" v-model.trim="name" placeholder="Name" type="text" />
        </div>

        <div class="field">
          <div class="label-wrapper">
            <v-icon
              v-if="dirty_phone && valid_phone"
              class="validation text-1-green"
              name="check"
              scale="1.3"
            />
            <v-icon
              v-if="dirty_phone && !valid_phone"
              class="validation text-red-lighter"
              name="times"
              scale="1.3"
            />
            <label for="phone">Phone</label>
          </div>
          <input
            id="phone"
            v-model.trim="phone"
            placeholder="Phone"
            type="text"
          />
        </div>

        <div class="field">
          <div class="label-wrapper">
            <v-icon
              v-if="dirty_email && valid_email"
              class="validation text-1-green"
              name="check"
              scale="1.3"
            />
            <v-icon
              v-if="dirty_email && !valid_email"
              class="validation text-red-lighter"
              name="times"
              scale="1.3"
            />
            <label for="email">Email</label>
          </div>
          <input
            id="email"
            v-model.trim="email"
            placeholder="Email"
            type="email"
          />
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
  name: 'Day1',
  data() {
    return {
      name: null,
      phone: null,
      email: null
    }
  },
  computed: {
    dirty_name() {
      return this.name !== null
    },
    dirty_phone() {
      return this.phone !== null
    },
    dirty_email() {
      return this.email !== null
    },
    valid_name() {
      return this.name && this.name.length > 4
    },
    valid_phone() {
      return this.phone && this.phone.length > 4
    },
    valid_email() {
      return this.email && this.email.length > 4
    },
    all_good() {
      return this.valid_name && this.valid_phone && this.valid_email
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  .field {
    @apply flex flex-col mt-3 mb-6;

    .label-wrapper {
      @apply w-full flex;

      label {
        @apply flex-1 ml-4 p-2 text-1-light-3 text-xl -mb-3 z-10 bg-1-light-1 rounded-bl-lg font-montserrat;
      }

      .validation {
        @apply ml-4;
      }
    }

    input {
      @apply p-4 pl-8 pt-7 text-1-dark-1 font-montserrat z-0 border-4 border-1-light-1 bg-1-light-3
        outline-none font-semibold;
    }
    button[type='submit'] {
      @apply bg-1-dark-1 text-1-light-3 font-bold font-raleway uppercase p-4 text-center
        text-2xl outline-none;
    }
  }

  &.valid {
    button[type='submit'] {
      @apply text-1-green;
    }
  }
}
</style>
