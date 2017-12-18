<template>
  <div class="c-login-wrapper">
    <div class="c-login-wrapper__card">
      <el-card>
        <div slot="header" class="clearfix">
          <span>Insert auth token</span>
        </div>
        <el-form
          @submit.native.prevent="onSubmit('form')"
          ref="form"
          :model="form"
          :rules="formRules">
          <el-form-item prop="token">
            <el-input placeholder="Token" v-model="form.token"></el-input>
          </el-form-item>
        </el-form>

        <el-button class="c-login-wrapper__btn" @click="onSubmit('form')" type="primary" :loading="loading">Login</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Message, Form, FormItem, Input, Card, Button } from 'element-ui';
import api from '@/api';

Vue.prototype.$message = Message;

export default {
  name: 'c-login',
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-button': Button,
    'el-input': Input,
    'el-card': Card
  },
  data() {
    return {
      loading: false,
      form: {
        token: ''
      },
      formRules: {
        token: [
          { required: true, message: 'This field is required', trigger: 'blur' }
        ]
      }
    };
  },

  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          api.setToken(this.form.token);
          // Ping token
          api
            .validateToken()
            .then(response => {
              this.loading = false;
              this.$router.push('/');
            })
            .catch(error => {
              this.loading = false;
              this.$message({
                message: error.response.data.response,
                type: 'error'
              });
              api.removeToken();
            });
        } else {
          return false;
        }
      });
    },
  }
};
</script>

<style lang="scss">
.c-login-wrapper {
  margin-bottom: 2.5rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__card {
    width: 320px;
  }

  &__btn {
    width: 100%;
  }
}
h1 {
  font-size: 24px;
  color: #34495e;
}
</style>
