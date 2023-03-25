<template>
  <div>
    <label for="datepicker">Select Start date:</label>
    <input
      id="datepicker"
      type="date"
      class="form-control"
      v-model="selectedDate"
    >
  </div>
</template>

<script>
export default {
  name: "StartDate",
  data() {
    return {
      selectedDate: null
    };
  }
};
</script>

<style scoped>
/* Optional: add some styling to the input */
input {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
