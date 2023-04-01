<template>
    <div>
        <a class="dropdown-item" href="#" @click="setLoadNumber(10)">Load More +</a>
    </div>
</template>

<script>
export default {
  name: "LoadNumber",

  data() {
    return {
      selectedLoadNumber: 10,
    };
  },

  methods: {
    setLoadNumber(num) {
      this.selectedLoadNumber = num;
      this.$emit("updateLoadNumber", num);
    },
  },
};
</script>