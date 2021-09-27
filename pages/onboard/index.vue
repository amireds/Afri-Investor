<template>
  <div>
    <h1 class="text-2xl mb-6">Select Account Type</h1>
    <ul class="w-full space-y-8">
      <li class="bg-white px-5 py-9 w-full">
        <div class="flex items-start justify-start space-x-3 relative">
          <input
            id="checkOne"
            type="radio"
            name="accountType"
            class="w-6 h-6 opacity-0 absolute"
          />
          <div
            class="
              bg-white
              border border-btnBorder
              rounded-none
              w-6
              h-6
              flex flex-shrink-0
              justify-center
              items-center
            "
          >
            <span class="w-3 h-3 small"></span>
          </div>
          <div class="space-y-4 w-[95%]">
            <label for="checkOne" class="cursor-pointer text-lg -mt-30"
              >Pop Account</label
            >
            <p class="text-light text-sm">
              You are less than 25 and looking to get a head start in the
              journey to financial freedom. Pop over and start small to earn
              more
            </p>
            <div class="flex items-start space-x-4">
              <p>Features:</p>
              <ul class="text-light text-sm space-y-2">
                <li>Maximum deposit: N20,000.00 at a time</li>
                <li>Maximum withdrawal: N30,000.00 daily</li>
                <li>Maximum balance: N200,000.00</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="bg-white px-5 py-9 w-full">
        <div class="flex items-start justify-start space-x-3 relative">
          <input
            id="checkTwo"
            type="radio"
            name="accountType"
            class="w-6 h-6 opacity-0 absolute"
          />
          <div
            class="
              bg-white
              border border-btnBorder
              rounded-none
              w-6
              h-6
              flex flex-shrink-0
              justify-center
              items-center
            "
          >
            <span class="w-3 h-3 small"></span>
          </div>
          <div class="space-y-4 w-[95%]">
            <label for="checkTwo" class="cursor-pointer text-lg -mt-30"
              >Groove Account</label
            >
            <p class="text-light text-sm">
              As a young professional starting out your career, now is the time
              to save more, earn more and find your groove in the financial
              market
            </p>
            <div class="flex items-start space-x-4">
              <p>Features:</p>
              <ul class="text-light text-sm space-y-2">
                <li>Maximum deposit: N30,000.00 at a time</li>
                <li>Maximum withdrawal: N50,000.00 daily</li>
                <li>Maximum balance: N400,000.00</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="bg-white px-5 py-9 w-full">
        <div class="flex items-start justify-start space-x-3 relative">
          <input
            id="checkThree"
            type="radio"
            name="accountType"
            class="w-6 h-6 opacity-0 absolute"
          />
          <div
            class="
              bg-white
              border border-btnBorder
              rounded-none
              w-6
              h-6
              flex flex-shrink-0
              justify-center
              items-center
            "
          >
            <span class="w-3 h-3 small"></span>
          </div>
          <div class="space-y-4 w-[95%]">
            <label for="checkThree" class="cursor-pointer text-lg -mt-30"
              >Groove Account</label
            >
            <p class="text-light text-sm">
              As a young professional starting out your career, now is the time
              to save more, earn more and find your groove in the financial
              market
            </p>
            <div class="flex items-start space-x-4">
              <p>Features:</p>
              <ul class="text-light text-sm space-y-2">
                <li>Maximum deposit: N30,000.00 at a time</li>
                <li>Maximum withdrawal: N50,000.00 daily</li>
                <li>Maximum balance: N400,000.00</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'onboard',
}
</script>

<style lang="scss" scoped>
input:checked + div {
  @apply bg-white border border-btnBorder cursor-pointer;
  .small {
    @apply bg-font;
  }
}
</style>
