<script setup>
import {ref} from "vue";
import SalaryTable from "./modules/SalaryTable.vue";
import UploadButton from "./components/UploadButton.vue";
import readXlsxFile from "read-excel-file";
import {createEmployeesArray} from "./helpers/create-employees-array.js";

const employees = ref()


async function createEmployeesArrayFromExcel(excelFile) {
  let excelArray = await readXlsxFile(excelFile)

  employees.value = createEmployeesArray(excelArray)
}
</script>

<template>
  <UploadButton @add-data="createEmployeesArrayFromExcel"/>

  <SalaryTable :employees="employees"/>
</template>

<style scoped>
.salary-table {
  margin-top: 100px;
}
</style>
