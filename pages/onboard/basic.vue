<template>
  <div class="form">
    <h2 class="text-2xl mb-3">Basic Info</h2>
    <form @submit.prevent="basicOnboard">
      <div class="bg-white px-10 py-11">
        <div class="form-control">
          <label for="middle_name">Middle Name</label>
          <input
            type="text"
            id="middle_name"
            placeholder="e.g mikeola"
            v-model="middleName"
          />
        </div>
        <div class="form-control">
          <label for="date">Date Of Birth</label>
          <input
            type="date"
            id="date"
            placeholder="July 23 1987"
            v-model="date"
          />
        </div>

        <div class="form-control">
          <label for="phone">Primary Phone Number</label>
          <div class="flex">
            <div
              class="
                border border-btnBorder border-r-0
                placeholder-[#999999]
                font-light
                px-4
                py-3
                text-sm
                outline-none
              "
            >
              +234
            </div>
            <input
              type="text"
              id="phone"
              placeholder="70563296578"
              v-model="phone"
            />
          </div>
        </div>
        <div class="form-control">
          <label>Gender</label>
          <div class="flex justify-between items-center">
            <div
              class="
                radio
                border border-btnBorder
                w-full
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-1 focus:ring-font
                w-[45%]
                flex
                justify-between
                items-center
                relative
              "
            >
              <div class="flex items-center justify-between">
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  class="
                    bg-gray-700
                    border border-btnBorder
                    w-full
                    absolute
                    left-0
                    top:0
                    bottom-0
                    h-full
                    opacity-0
                  "
                  value="male"
                  v-model="gender"
                />
                <div class="new-checked">
                  <div class="checker"></div>
                </div>
                <label for="male" class="mb-0">Male</label>
              </div>
              <img src="~/assets/images/male.svg" alt="" />
            </div>
            <div
              class="
                radio
                border border-btnBorder
                w-full
                px-4
                py-3
                text-sm
                outline-none
                focus:ring-1 focus:ring-font
                w-[45%]
                flex
                justify-between
                items-center
                relative
              "
            >
              <div class="flex items-center justify-between">
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  class="
                    bg-gray-700
                    border border-btnBorder
                    w-full
                    absolute
                    left-0
                    top:0
                    bottom-0
                    h-full
                    opacity-0
                  "
                  value="female"
                  v-model="gender"
                />
                <div class="new-checked">
                  <div class="checker"></div>
                </div>
                <label for="female" class="mb-0">Female</label>
              </div>
              <img src="~/assets/images/female.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="form-control">
          <label for="maiden">Mother’s Maiden Name</label>
          <input
            type="text"
            id="maiden"
            placeholder="Balogun"
            v-model="maidenName"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="mt-10 flex justify-end">
          <nuxt-link
            to="/onboard"
            class="
              cursor-pointer
              py-[12px]
              text-primary
              border border-btnBorder
              hover:bg-primary hover:text-white hover:border-primary
              transition
              duration-300
              ease-in-out
              flex
              items-center
              justify-between
              px-10
              w-max
              space-x-10
              rounded-sm
            "
          >
            <span class="material-icons material-icons-sharp justify-self-end">
              west
            </span>
            <span class="w-[70%] text-right">Previous</span>
          </nuxt-link>
        </div>
        <div class="mt-10 flex justify-end">
          <button
            type="submit"
            class="
              cursor-pointer
              py-[12px]
              text-white
              bg-primary
              hover:bg-[rgba(37,140,96,0.7)]
              transition
              duration-300
              ease-in-out
              flex
              items-center
              justify-between
              px-10
              w-max
              space-x-10
              rounded-sm
            "
          >
            <span class="w-[70%] text-right">Save & Continue</span>
            <span class="material-icons material-icons-sharp justify-self-end">
              east
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'basic',
  layout: 'onboardTwo',
  data() {
    return {
      middleName: '',
      date: new Date().getUTCDate(),
      phone: '',
      gender: 'male',
      maidenName: '',
    }
  },
  methods: {
    basicOnboard() {
      const formData = {
        middlename: this.middleName,
        date_of_birth: this.date,
        phone_number: `0${this.phone}`,
        gender: this.gender,
        mother_maiden_name: this.maidenName,
      }
      this.$store
        .dispatch('onboard/sendBasicInfo', formData)
        .then(() => {
          this.$router.replace('/onboard/address')
        })
        .catch()
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  .form-control {
    @apply w-full my-4;
    label {
      @apply block mb-2;
    }
    input {
      @apply border border-btnBorder w-full placeholder-[#999999] font-light px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-font;
    }
  }
  .radio {
    label {
      @apply mb-0;
    }
    input[type='radio'] + .new-checked {
      @apply w-6 h-6 border border-btnBorder mr-3 p-[5px];
    }
    input[type='radio']:checked + .new-checked {
      .checker {
        @apply w-3 h-3 bg-black;
      }
    }
  }
}
</style>
