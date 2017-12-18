<template>
  <div class="l-working-sessions">
    <c-page-header title="Working Sessions"></c-page-header>

    <div class="c-table-options">
      <c-datepicker
        btnText="Get Sessions"
        :loading="gettingSessions"
        @callback="getWorkingSessions">
      </c-datepicker>
    </div>

    <c-datatable :data="sessions"></c-datatable>
  </div>
</template>

<script>
import Vue from 'vue';
import { Message } from 'element-ui';

import api from '../api';
import PageHeader from '@/components/shared/Pageheader';
import DatePicker from '@/components/shared/DatePicker';
import DataTable from '@/components/DataTable';

Vue.prototype.$message = Message;

export default {
  name: 'HelloWorld',
  components: {
    'c-page-header': PageHeader,
    'c-datepicker': DatePicker,
    'c-datatable': DataTable
  },
  data() {
    return {
      sessions: [],
      gettingSessions: false
    };
  },
  methods: {
    getWorkingSessions(args) {
      this.gettingSessions = true;
      const start = args[0][0];
      const end = args[0][1];
      const data = {
        range_start: start,
        range_end: end,
        page: 1
      };

      api
        .getWorkingSessions(data)
        .then(response => {
          this.gettingSessions = false;
          this.sessions = response.data.working_sessions;
        })
        .catch(error => {
          this.gettingSessions = false;
          this.$message({
            message: error.response.data.response,
            type: 'error'
          });
        });
    }
  }
};
</script>

<style lang="scss">
.l-working-sessions {
  padding: 2rem;
}
.c-table-options {
  margin-bottom: 0.5rem;
}
</style>
