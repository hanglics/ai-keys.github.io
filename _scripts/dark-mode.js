/*
  manages light/dark mode.
*/

{
  // check if user has set a preference for dark mode
  function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }

  // immediately load saved (or default) mode before page renders
  const localStorageTheme = localStorage.getItem("dark-mode");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

  document.documentElement.dataset.dark = 
    currentThemeSetting === "dark" ? "true" : "false"
  
  // document.documentElement.dataset.dark =
  // window.localStorage.getItem("dark-mode") ?? "false";

  const onLoad = () => {
    // update toggle button to match loaded mode
    document.querySelector(".dark-toggle").checked = 
      document.documentElement.dataset.dark === "true";

    // document.querySelector(".dark-toggle").checked =
    //   document.documentElement.dataset.dark === "true";

  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem("dark-mode", value);
  };
}
