<template>
  <div class="form">
    <h2 class="text-2xl mb-3">Bank Details</h2>
    <div class="bg-white px-10 py-11">
      <div class="form-control">
        <label>Bank</label>
        <select id="bank" v-model="bank">
          <option value="uba">UBA</option>
          <option value="gtb">GTB</option>
          <option value="first">First Bank</option>
        </select>
      </div>

      <div class="form-control">
        <label for="accountNo">Account Number</label>
        <input
          type="text"
          id="accountNo"
          placeholder="0130434178"
          v-model="accountNo"
        />
      </div>

      <div class="form-control">
        <label for="accName">Account Name</label>
        <input type="text" id="accName" placeholder="" v-model="accName" />
      </div>

      <div class="form-control">
        <label for="bvn">BVN</label>
        <input type="text" id="bvn" placeholder="E.g 225516789" v-model="bvn" />
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="mt-10 flex justify-end">
        <nuxt-link
          to="/signup"
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
        <nuxt-link
          to="/signup"
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
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bank',
  layout: 'onboardTwo',
  data() {
    return {
      bank: '',
      accountNo: '',
      accName: '',
      bvn: '',
    }
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
    input,
    select {
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
