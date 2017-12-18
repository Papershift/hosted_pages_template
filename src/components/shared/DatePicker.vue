<template>
  <div class="c-datepicker">
    <el-form
      ref="form"
      :inline="true"
      :model="form"
      :rules="formRules">
        <el-form-item prop="dateRange">
          <el-date-picker
            v-model="form.dateRange"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            value-format="yyyy-MM-dd"
            :clearable="false"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-button type="primary" @click="onSubmit('form')" :loading="loading">{{btnText}}</el-button>
    </el-form>
  </div>
</template>

<script>
import { Form, FormItem, DatePicker, Button } from 'element-ui';

export default {
  name: 'c-datepicker',
  props: ['callback', 'loading', 'btnText'],
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-date-picker': DatePicker,
    'el-button': Button
  },
  data() {
    return {
      form: {
        dateRange: []
      },
      formRules: {
        dateRange: [
          {
            type: 'array',
            required: true,
            message: 'Please pick a date',
            trigger: 'change'
          }
        ]
      },
      pickerOptions: {
        shortcuts: [
          {
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('callback', [this.form.dateRange]);
        }
      });
    }
  }
};
</script>

<style lang="scss">
.c-datepicker {
  .el-form-item {
    margin-right: 2px;
  }
  .el-range-editor.el-input__inner {
    width: 272px;
  }
  .el-date-editor .el-range-separator {
    width: 8%;
  }
  .el-range__close-icon {
    display: none;
  }
}
</style>


