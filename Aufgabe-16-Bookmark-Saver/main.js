const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");
const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");

document.addEventListener("DOMContentLoaded", loadBookmarks);

addBookmarkBtn.addEventListener("click", () => {
  const name = bookmarkNameInput.value.trim();
  const url = bookmarkUrlInput.value.trim();

  if (!name || !url) {
    alert("pleas enter both name and url");
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("pleas enter a valid URL starting with http:// or https://");
      return;
    }
    
    addBookmarkButton(name, url);
    saveBookmark(name, url);
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
  }
});

function addBookmarkButton(name, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.textContent = name;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn")
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
  const bookmarks = getBookmarkFromStorage()
  bookmarks.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
function loadBookmarks() {
  const bookmarks = getBookmarkFromStorage()
  bookmarks.forEach((bookmark) => addBookmarkButton(bookmark.name, bookmark.url));
}
function removeBookmarkFromStorage(name, url) {
  const bookmarks = getBookmarkFromStorage();
  const updated = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url,
  );
  localStorage.setItem("bookmarks", JSON.stringify(updated));
}
