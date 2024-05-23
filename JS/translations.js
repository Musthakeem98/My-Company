// Function to change welcome messages based on selected language
function changeWelcomeMessages(language) {
  const welcomeText = document.getElementById("welcome-text");
  const welcomeText1 = document.getElementById("welcome-text1");
  const welcomeText2 = document.getElementById("welcome-text2");

  switch (language) {
    case "English":
      welcomeText.textContent = "Welcome to";
      welcomeText1.textContent = "our company...";
      welcomeText2.textContent =
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,";
      break;
    case "Tamil":
      welcomeText.textContent = "வரவேற்கின்றது";
      welcomeText1.textContent = "எங்கள் நிறுவனம்...";
      welcomeText2.textContent =
        "லோரம் இப்சும் டோலர் சித்திக்கும் இல்லிட்டர், செத் டியம் நோனும்ய் எர்மோட் தெம்ப்போர் இன்விடுன்ட் உட் லபோர் எட் டோலோர் மாக்னா அலிக்யாம் எரட்,";
      break;
    case "Sinhala":
      welcomeText.textContent = "සාදන්න";
      welcomeText1.textContent = "අපේ මෙම ව්‍යාපාරයට...";
      welcomeText2.textContent =
        "ලෝරම් ඉප්සම් ඩොලර් සිටුවීම පදය සඳහා උත් බුදු සැඩසෙන්නේ සදහා එන්න, මම හෝ අවම ටෙම්ප්රන් ඉඩමක් ලබා ගත හැක.";
      break;
    default:
      break;
  }
}

// Event listener to detect language change
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const selectedLanguage = event.target.textContent;
    console.log("selected :", selectedLanguage);
    changeWelcomeMessages(selectedLanguage);
  });
});
