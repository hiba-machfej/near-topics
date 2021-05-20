import { toRefs, ref, onMounted, watch } from "vue";
import { findExamples, findExampleById } from "../services/examples";

export const useExamples = (props) => {
  const { topic } = toRefs(props);
  const examples = ref([]);

  onMounted(async () => {
    examples.value = await findExamples({ topics: topic.value });
  });

  watch(topic, async () => {
    examples.value = await findExamples({ topics: topic.value });
  });

  return examples;
};

export const useExample = (id) => {
  const example = ref(null);

  onMounted(async () => {
    example.value = await findExampleById(id);
  });

  return example;
};
