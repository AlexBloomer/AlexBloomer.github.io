function saveData() {
  // Get the input value
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const input = document.getElementById("name").value;

  // Create a Blob object to hold the data
  const blob = new Blob([data], { type: "text/plain" });

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "test.txt";

  // Trigger the download by clicking the link
  link.click();

  // Clean up by revoking the object URL
  URL.revokeObjectURL(link.href);
}
