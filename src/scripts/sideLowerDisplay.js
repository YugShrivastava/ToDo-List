const sideLowerDiv = document.querySelector(".sideLower");

const text = document.createElement("span");
const projectDiv = document.createElement("div");
const addProjectButton = document.createElement("svg");
const dropDownButton = document.createElement("svg");

text.textContent = "My Project";

addProjectButton.classList.add("newProjectButton");
dropDownButton.classList.add("dropDownProject");

addProjectButton.innerHTML = `
<svg
                            class="mysvg"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6 12H18M12 6V18"
                                    stroke="#626060"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </g>
                        </svg>`;
dropDownButton.innerHTML = `
<svg
                            class="mysvg"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#4A4A4A"
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
                                    d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                                    fill="#4A4A4A"
                                ></path>
                            </g>
                        </svg>`;

export default function sideLowerDisplay() {
    projectDiv.appendChild(addProjectButton);
    projectDiv.appendChild(dropDownButton);

    sideLowerDiv.appendChild(text);
    sideLowerDiv.appendChild(projectDiv);
}
