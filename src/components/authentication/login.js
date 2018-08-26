import axios from "axios";

export default function login(credentials, Vue){
  if (credentials) {
    signIn(credentials, Vue);
  }else{
    const token = localStorage.token;
    if (token) {
      //Vue.$router.push("/home");
    }else{
      console.log('LOGINN');
      Vue.$router.push("/login");
    }
  }
}

function signIn(credentials, Vue) {
  axios
        .post(`${Vue.baseURL}login`, {
          email: credentials.email,
          password: credentials.password
        })
        .then(res => {
          const userData = res.data.user; //aqui tem tudo do usuario, inclusive a role dele, token...
          if (userData) {
            console.log(userData);
            localStorage.clear();
            localStorage.setItem("email", userData.email);
            localStorage.setItem("name", userData.name);
            localStorage.setItem("role", userData.role);
            localStorage.setItem("token", userData.token);
            //.....
            //...
            Vue.$router.push("/home");
          } else {
            console.log("Login error.");
          }
        });
}
