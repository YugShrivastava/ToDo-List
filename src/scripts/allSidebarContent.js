import "../styles/allSidebarContent.css";

const sidebarContentDiv = document.querySelector(".sidebarContent");
export const addTaskDiv = document.createElement("div");
addTaskDiv.classList.add("add-task");
addTaskDiv.innerHTML = `
                        <svg
                            id="add-task"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ff"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                                    fill="#1C7C54"
                                ></path>
                            </g>
                        </svg>
                        <span>Add Task</span>
`;

const sideContents = document.createElement("div");
sideContents.classList.add("sideContents");

const search = document.createElement("div");
search.classList.add("sideContent");
search.innerHTML = `<svg
                                class="svg"
                                viewBox="0 -0.5 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
                                        stroke="#626060"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M17.029 16.5295L19.5 19.0005"
                                        stroke="#626060"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </svg>
                            <span>Search</span>
`;

const inbox = document.createElement("div");
inbox.classList.add("sideContent");
inbox.innerHTML = `<svg class="svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M12 2L12 10M12 10L15 7M12 10L9 7" stroke="#626060" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.5" d="M2 13H5.16026C6.06543 13 6.51802 13 6.91584 13.183C7.31367 13.3659 7.60821 13.7096 8.19729 14.3968L8.80271 15.1032C9.39179 15.7904 9.68633 16.1341 10.0842 16.317C10.482 16.5 10.9346 16.5 11.8397 16.5H12.1603C13.0654 16.5 13.518 16.5 13.9158 16.317C14.3137 16.1341 14.6082 15.7904 15.1973 15.1032L15.8027 14.3968C16.3918 13.7096 16.6863 13.3659 17.0842 13.183C17.482 13 17.9346 13 18.8397 13H22" stroke="#626060" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 2.12695C18.6251 2.28681 19.7191 2.64808 20.5355 3.46455C22 4.92902 22 7.28604 22 12.0001C22 16.7141 22 19.0712 20.5355 20.5356C19.0711 22.0001 16.714 22.0001 12 22.0001C7.28595 22.0001 4.92893 22.0001 3.46447 20.5356C2 19.0712 2 16.7141 2 12.0001C2 7.28604 2 4.92902 3.46447 3.46455C4.28094 2.64808 5.37486 2.28681 7 2.12695" stroke="#626060" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
<span>Inbox</span>`;

const today = document.createElement("div");
today.classList.add("sideContent");
today.innerHTML = `
<svg class="svg" xmlns="http://www.w3.org/2000/svg" fill="#626060" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g></svg>
<span>Today</span>`;

const upcoming = document.createElement("div");
upcoming.classList.add("sideContent");
upcoming.innerHTML = `
<svg class="svg" fill="#626060" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M57.223,58.309l-5.969-6.244c1.746-1.919,2.82-4.458,2.82-7.25c0-5.953-4.843-10.796-10.796-10.796 s-10.796,4.843-10.796,10.796S37.324,55.61,43.277,55.61c2.441,0,4.688-0.824,6.499-2.196l6.001,6.277 C55.974,59.896,56.236,60,56.5,60c0.249,0,0.497-0.092,0.691-0.277C57.59,59.341,57.605,58.708,57.223,58.309z M43.277,53.61 c-4.85,0-8.796-3.946-8.796-8.796s3.946-8.796,8.796-8.796s8.796,3.946,8.796,8.796S48.127,53.61,43.277,53.61z"></path> <path d="M29.5,21h-2h-7h-2h-9v9v2v7v2v9h9h2h9v-9v-2v-7h7h2h9V21h-9h-2H29.5z M18.5,48h-7v-7h7V48z M18.5,39h-7v-7h7V39z M18.5,30 h-7v-7h7V30z M27.5,48h-7v-7h7V48z M27.5,39h-7v-7h7V39z M27.5,30h-7v-7h7V30z M36.5,30h-7v-7h7V30z M38.5,23h7v7h-7V23z"></path> <path d="M31.5,55h-27V16h48v14c0,0.553,0.447,1,1,1s1-0.447,1-1V15V5c0-0.553-0.447-1-1-1h-5V1c0-0.553-0.447-1-1-1h-7 c-0.553,0-1,0.447-1,1v3h-22V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3h-5c-0.553,0-1,0.447-1,1v10v41c0,0.553,0.447,1,1,1 h28c0.553,0,1-0.447,1-1S32.053,55,31.5,55z M41.5,5V2h5v3v3h-5V5z M10.5,5V2h5v3v3h-5V5z M4.5,6h4v3c0,0.553,0.447,1,1,1h7 c0.553,0,1-0.447,1-1V6h22v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h4v8h-48V6z"></path> </g> </g></svg>
<span>Upcoming</span>`;

const filters = document.createElement("div");
filters.classList.add("sideContent");
filters.innerHTML = `
<svg class="svg" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#626060" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>chart-labels</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="x-axis-settings" fill="#626060" transform="translate(64.000000, 64.000000)"> <path d="M384,213.333333 L384,384 L85.3333333,384 L1.42108547e-14,298.666667 L85.3333333,213.333333 L384,213.333333 Z M341.333333,256 L102.997333,256 L60.352,298.666667 L103.018667,341.333333 L341.333333,341.333333 L341.333333,256 Z M384,-4.26325641e-14 L384,170.666667 L85.3333333,170.666667 L1.42108547e-14,85.3333333 L85.3333333,-4.26325641e-14 L384,-4.26325641e-14 Z M341.333333,42.6666667 L102.997333,42.6666667 L60.352,85.3333333 L103.018667,128 L341.333333,128 L341.333333,42.6666667 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
<span>Filter & Labels</span>`;

sideContents.appendChild(search);
sideContents.appendChild(inbox);
sideContents.appendChild(today);
sideContents.appendChild(upcoming);
sideContents.appendChild(filters);

export default function sidebarContent() {
    sidebarContentDiv.appendChild(addTaskDiv);
    sidebarContentDiv.appendChild(sideContents);
}
