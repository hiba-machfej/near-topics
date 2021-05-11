<template>
  <tr v-for="example in examples" :key="example._id">
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img
            class="h-10 w-10 rounded-full"
            :src="images[example.sdk.language]"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ example.sdk.version }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 text-left whitespace-nowrap">
      <div class="text-sm text-gray-900">
        {{ example.title }} ({{ example.repo }})
      </div>
      <div
        v-for="code in example.code"
        :key="code.link"
        class="text-sm text-gray-500"
      >
        {{ format(code.link) }}
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
      NEAR concepts: {{ example.difficulty.near }} out of
      {{ example.difficulty.max }}
      <hr />
      Language concepts: {{ example.difficulty.language }} out of
      {{ example.difficulty.max }}
    </td>
  </tr>
</template>

<script>
import rust from "@/assets/rust.png";
import assemblyscript from "@/assets/assemblyscript.png";

export default {
  props: ["examples"],
  data() {
    return {
      images: {
        rust,
        assemblyscript,
      },
    };
  },
  methods: {
    format(link) {
      const parts = link.split("/");
      return parts.slice(parts.length - 3);
    },
  },
};
</script>
