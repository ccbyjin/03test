<script setup>
import UserForm from "@/components/UserForm.vue";
import InputForm from "@/components/InputForm.vue";
</script>

<template>
  <div class="flex p-10 h-screen">
    <div class="flex flex-col pr-5 w-1/3 items-center justify-center">
      <InputForm />
    </div>
    <UserForm />
  </div>
</template>

<style scoped></style>
