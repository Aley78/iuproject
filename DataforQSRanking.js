document.getElementById("slim-toggler").addEventListener("click", () => {
  const instance = te.Sidenav.getInstance(document.getElementById("sidenav-4"));
  instance.toggleSlim();
});
