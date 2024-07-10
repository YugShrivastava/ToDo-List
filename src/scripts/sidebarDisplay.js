import '../styles/sidebar.css';
import userProfile from './userProfile.js';
import sidebarContent from './allSidebarContent.js';

const user = document.createElement("div");
user.classList.add("user");

const sidebarContentDiv = document.createElement("div");
sidebarContentDiv.classList.add("sidebarContent");

export default function sidebar(){
    userProfile();
    sidebarContent();
}