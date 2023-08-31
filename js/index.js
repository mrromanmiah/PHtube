const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a class="tab bg-[#25252526] font-medium">${category.category}</a>`
        tabContainer.appendChild(div);
    });
    console.log(data.data);
}

handleCategory()