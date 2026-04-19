function generateMessage() {
    let name = document.getElementById("username").value;
    let output = document.getElementById("output");

    if (name.trim() === "") {
        output.innerHTML = "⚠️ Please enter your name!";
        output.style.color = "red";
    } else {
        output.innerHTML = "Welcome, " + name + "! 🎉 Your app is running on Cloud!";
        output.style.color = "green";
    }
}
