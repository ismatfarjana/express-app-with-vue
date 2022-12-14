<template>
  <div class="col-4 offset-4 mt-3">
    <div class="mb-3">
      <label for="email" class="form-label">Email Address</label>
      <input type="email" class="form-control" id="email" v-model="email" placeholder="name@email.com" required/>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" v-model="password" required/>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary" @click.prevent="onSubmit">Register</button>
    </div>
    <div class="text-center">
      Have an Account? <router-link to="/login">Login Now</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from "vue"
import { useStore } from "vuex";

export default {
  name: 'Register',
  setup() {
    let email = ref('');
    let password = ref('');
    let store = useStore();

    function onSubmit() {
      store.dispatch('registerUser', {
        email: email.value,
        password: password.value
      }).then(res => {
        if(res.err) {
          alert(res.err);
          return;
        }
        router.push('/feeds')
      });;
    }

    return {
      email,
      password,
      onSubmit
    }
  },
}
</script>
