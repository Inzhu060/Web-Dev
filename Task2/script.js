const InputText = document.getElementById("InputText");
const Button = document.getElementById("Button");
const taskList = document.getElementById("taskList");

Button.addEventListener("click", () => {
    const text = InputText.value.trim();

    if(text === "") {
        alert("Write a task first!");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.classList.add("text");
    span.textContent = InputText.value;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.textContent = "symbol";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    InputText.value = "";

    checkbox.addEventListener("change", () => {
        li.classList.toggle("done");
    });

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

});

    InputText.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            Button.click();
    }
});