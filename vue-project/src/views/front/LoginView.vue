<template>
  <div>
    login1
  </div>
  <div>
    <form @submit.prevent='login'>
      <InputText type="text" v-model='form.account' :rules='rules.account' counter='20' maxlength="20" />
      <hr>
      <InputText type="text" v-model='form.password' :rules='rules.password' counter='20' maxlength="20" />
      <hr>
      <Button type="submit">登入</Button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)

const form = reactive({
  account: '',
  password: ''
})

const rules = reactive({
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ]
})

const login = () => {
  console.log('111')
  user.login(form)
}

</script>
