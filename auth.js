function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email,password)
  .then(()=>{ window.location="dashboard.html"; })
  .catch(err=>alert(err.message));
}

function signup(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email,password)
  .then(user=>{
    db.collection("users").add({email: email, date:new Date()});
    window.location="dashboard.html";
  })
  .catch(err=>alert(err.message));
}

function logout(){
  auth.signOut().then(()=>window.location="index.html");
}
