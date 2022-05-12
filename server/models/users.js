const users = [
    {
        userId: 12345,
        userName: "chinthas2",
        password: "brownrice"
    },
    {
        userId: 55555,
        userName: "sravs55@",
        password: "hurley"
       
    }
   ]
   let getUsers = () => users;
   function login(userName, password){
       const user = users.filter((u) => u.userName === userName);
       if(!user[0]) throw Error('user not found');
       if(user[0].password !== password) throw Error('password is incorrect');
       return user[0];
   }
   function register(user) {
       const u = userExists(user.username);
       if(u.length>0) throw Error('username already in use');
       const newUser = {
           userId: users[users.length-1].userId + 1,
           userName: user.username,
           password: user.password
       }
       users.push(newUser);

       return newUser;
   }

   function userExists(username) {
       return users.filter((u) =>u.userName === username);
   }

   //add register  function here


   module.exports = { getUsers, login, register };