<template>
  <h1 class="text-left text-2xl font-bold ml-6 mb-4">Examples</h1>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <BaseTable :examples="examples" :columns="columns" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTable from "@/components/ui/BaseTable.vue";
import useExamples from "@/composables/useExamples";

export default {
  name: "Examples",
  setup() {
    const examples = useExamples();
    const columns = ["Language", "Resources", "Difficulty"];
    return {
      examples,
      columns,
    };
  },
  components: {
    BaseTable,
  },
};
</script>
