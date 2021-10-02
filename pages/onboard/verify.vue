<template>
  <div class="form -mt-32">
    <h2 class="text-2xl mb-3">Verification Documents</h2>
    <div class="bg-white px-10 py-11">
      <div class="mb-10">
        <p class="font-semibold mb-1">Passport Photograph</p>
        <p class="text-light text-sm font-normal mb-3">jpg.png,bitmap</p>
        <div
          class="
            relative
            border-dashed
            h-32
            py-8
            rounded-md
            border-dashed border-2 border-btnBorder
            flex
            justify-center
            items-center
          "
        >
          <div class="absolute cursor-pointer">
            <div class="flex flex-col items-center">
              <i class="fa fa-file-image fa-2x text-gray-400 mb-2"></i>
              <span class="block text-sm text-gray-600 mb-1"
                >Drag & drop a file or choose from your device to upload
              </span>
              <span class="block text-primary cursor-pointer"
                >+Choose file</span
              >
            </div>
          </div>
          <input
            type="file"
            class="h-full w-full opacity-0 cursor-pointer"
            name=""
          />
        </div>
      </div>
      <div class="mb-10">
        <p class="font-semibold mb-1">Proof Of Identity</p>
        <p class="text-light text-sm font-normal mb-3">
          Driver’s license, National ID, Voter’s card (jpg, png, bitmap)
        </p>
        <div
          class="
            relative
            border-dashed
            h-32
            py-8
            rounded-md
            border-dashed border-2 border-btnBorder
            flex
            justify-center
            items-center
          "
        >
          <div class="absolute cursor-pointer">
            <div class="flex flex-col items-center">
              <i class="fa fa-file-image fa-2x text-gray-400 mb-2"></i>
              <span class="block text-sm text-gray-600 mb-1"
                >Drag & drop a file or choose from your device to upload
              </span>
              <span class="block text-primary cursor-pointer"
                >+Choose file</span
              >
            </div>
          </div>
          <input
            type="file"
            class="h-full w-full opacity-0 cursor-pointer"
            name=""
          />
        </div>
      </div>
      <div class="mb-10">
        <p class="font-semibold mb-1">Signature Sample</p>
        <p class="text-light text-sm font-normal mb-3">jpg.png,bitmap</p>
        <div
          class="
            relative
            border-dashed
            h-32
            py-8
            rounded-md
            border-dashed border-2 border-btnBorder
            flex
            justify-center
            items-center
          "
        >
          <div class="absolute cursor-pointer">
            <div class="flex flex-col items-center">
              <i class="fa fa-file-image fa-2x text-gray-400 mb-2"></i>
              <span class="block text-sm text-gray-600 mb-1"
                >Drag & drop a file or choose from your device to upload
              </span>
              <span class="block text-primary cursor-pointer"
                >+Choose file</span
              >
            </div>
          </div>
          <input
            type="file"
            class="h-full w-full opacity-0 cursor-pointer"
            name=""
          />
        </div>
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
  name: 'verify',
  layout: 'onboardTwo',
  data() {
    return {
      passport: '',
      license: '',
    }
  },
}
</script>

<style lang="scss" scoped></style>
