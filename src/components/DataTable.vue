<template>
  <el-table
    :data="data"
    empty-text="Please select other date range"
    style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="employee_id"
        label="Employee ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="location_id"
        label="Location"
        width="180">
      </el-table-column>
      <el-table-column
        prop="break_time"
        label="Break time">
      </el-table-column>
      <el-table-column
        prop="starts_at"
        label="Start">
      </el-table-column>
      <el-table-column
        prop="ends_at"
        label="Ends">
      </el-table-column>
    </el-table>
</template>

<script>
import { Table, TableColumn } from 'element-ui';

export default {
  name: 'c-datatable',
  props: ['data'],
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
  }
}
</script>

