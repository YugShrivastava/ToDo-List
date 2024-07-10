import '../styles/sidebar.css';
import userProfile from './userProfile.js';

const user = document.createElement("div");
user.classList.add("user");

export default function sidebar(){
    userProfile();
}