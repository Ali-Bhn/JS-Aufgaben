const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");
const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");
const nameError = document.getElementById("name-error");
const urlError = document.getElementById("url-error");

document.addEventListener("DOMContentLoaded", loadBookmarks);

addBookmarkBtn.addEventListener("click", () => {
  const name = bookmarkNameInput.value.trim();
  const url = bookmarkUrlInput.value.trim();

  // Fehleranzeige bei jedem Klick zurücksetzen
  nameError.textContent = "";
  urlError.textContent = "";

  let hasError = false;

  if (!name) {
    nameError.textContent = "Bitte einen Namen eingeben";
    hasError = true;
  }

  if (!url) {
    urlError.textContent = "Bitte eine URL eingeben";
    hasError = true;
  } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
    urlError.textContent = "URL muss mit http:// oder https:// beginnen";
    hasError = true;
  }

  if (hasError) return;

  addBookmarkButton(name, url);
  saveBookmark(name, url);
  bookmarkNameInput.value = "";
  bookmarkUrlInput.value = "";
});

function addBookmarkButton(name, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.textContent = name;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url);
  });
  li.appendChild(link);
  li.appendChild(removeBtn);
  bookmarkList.appendChild(li);
}

function getBookmarkFromStorage() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmark(name, url) {
  const bookmarks = getBookmarkFromStorage();
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmarks() {
  const bookmarks = getBookmarkFromStorage();
  bookmarks.forEach((bookmark) => addBookmarkButton(bookmark.name, bookmark.url));
}

function removeBookmarkFromStorage(name, url) {
  const bookmarks = getBookmarkFromStorage();
  const updated = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url,
  );
  localStorage.setItem("bookmarks", JSON.stringify(updated));
}