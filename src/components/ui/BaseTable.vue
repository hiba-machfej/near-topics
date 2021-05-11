<template>
  <table class="min-w-full divide-y divide-gray-200 ml-6">
    <thead class="bg-gray-50">
      <BaseColumn :columns="columns" />
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <BaseRow :examples="examples" />
    </tbody>
  </table>
</template>

<script>
import BaseColumn from "./BaseColumn.vue";
import BaseRow from "./BaseRow.vue";

export default {
  props: ["examples", "columns"],
  components: {
    BaseColumn,
    BaseRow,
  },
};
</script>
