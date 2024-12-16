const script = async () => {
  const tab = document.querySelector("div[role='tablist']");

  if (
    tab &&
    (tab.firstChild.textContent === "For you" ||
      tab.firstChild.textContent === "おすすめ")
  ) {
    tab.firstChild.remove();
  }

  setTimeout(script, 100);
};

script();
