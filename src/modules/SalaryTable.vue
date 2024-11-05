<script setup>

const props = defineProps({
  employees: {
    type: Array,
  }
})
</script>

<template>
  <table class="salary-table">
    <caption>
      ЗП и отпускные сотрудников
    </caption>
    <thead>
    <tr>
      <th>ФИО сотрудника</th>
      <th>Общий заработок, руб</th>
      <th>Отпускные, руб</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="employee in props.employees">
      <td>{{ employee.name }}</td>
      <td>{{ employee.totalSalary }}</td>
      <td>{{ employee.vacationPayments }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.salary-table {
  width: 50vw;

}

.salary-table tr, .salary-table th, .salary-table td {
  outline: 1px solid wheat;
}

.salary-table td {
  width: 33.3%;

  padding: 10px 0;
}

.salary-table caption {
  margin-bottom: 20px;

  font-weight: bold;
}
</style>