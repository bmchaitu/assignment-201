import axios from "axios";

export const getUser = (user) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("/signin", user);
      localStorage.setItem('auth-token',data.token);
      dispatch({
        type: "GET_USER",
        payload: {...data,username:user.username,loggedIn:true},
      });
    } catch (err) {
        alert('Error:',err.response.data.message);
    }
  };
};

export const loadUser = (token) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("/validate", null,
      {
        headers: {
          "x-auth-token": token
        }
      }
    );
      dispatch({
        type: "LOAD_USER",
        payload: { username:data.username, token, loggedIn:true },
      });
    } catch (err) {
      alert('Error:',err.response.data.message);
    }
  };
};

export const setUser = (user) => {
  console.log('setting user');
  return async function(dispatch){
   try{
    const {data} = await axios.post("/signup",user);
    dispatch({
      type:'SET_USER',
      payload:{token:data.token,username:data.username}
    })
   }
   catch(err)
   {
     alert('Signup Error',err.response.data.message);
   }
  }
}

export const removeUser = () => {
  return{
    type:'REMOVE_USER',
    payload:{user:'',loggedIn:false,token:null}
  }
}
