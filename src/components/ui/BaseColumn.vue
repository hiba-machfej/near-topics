<template>
  <tr>
    <th
      v-for="column in columns"
      :key="column"
      scope="col"
      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {{ column }}
    </th>
  </tr>
</template>

<script>
export default {
  props: ["columns"],
};
</script>
