import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

/*
AuthService.register({
  username:'username@email.it',
  password: '123456'
});
*/
