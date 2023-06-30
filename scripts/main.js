window.addEventListener("popstate", (e) => {
  const checkbox = document.querySelector("#navigation-toggle");

  if (checkbox.checked) {
    checkbox.checked = false;
  }

  const elementToScroll = document.querySelector(location.hash);

  elementToScroll.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
