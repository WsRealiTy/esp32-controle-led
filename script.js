import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    get
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRETDcCwjmS5P2Vea6bJO2rDC69IOrjjg",
  authDomain: "esp32-d36e2.firebaseapp.com",
  databaseURL: "https://esp32-d36e2-default-rtdb.firebaseio.com",
  projectId: "esp32-d36e2",
  storageBucket: "esp32-d36e2.firebasestorage.app",
  messagingSenderId: "1092999101483",
  appId: "1:1092999101483:web:bddc65630fe854ba913e6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const status = document.getElementById("status");

document.getElementById("ligar").onclick = () => {

    set(ref(db, "led"), 1);

};

document.getElementById("desligar").onclick = () => {

    set(ref(db, "led"), 0);

};

function atualizar(){

    get(ref(db,"led")).then((snapshot)=>{

        if(snapshot.exists()){

            if(snapshot.val()==1){

                status.innerHTML="Status: LED Ligado";

            }

            else{

                status.innerHTML="Status: LED Desligado";

            }

        }

    });

}

setInterval(atualizar,1000);

atualizar();