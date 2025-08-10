document.addEventListener('DOMContentLoaded', function() {
    const bookmarkForm = document.getElementById('bookmarkForm');
    const siteNameInput = document.getElementById('siteNameInput');
    const siteUrlInput = document.getElementById('siteUrlInput');
    const siteNameErrMsg = document.getElementById('siteNameErrMsg');
    const siteUrlErrMsg = document.getElementById('siteUrlErrMsg');
    const bookmarksList = document.getElementById('bookmarksList');
    const noBookmarksMsg = document.getElementById('noBookmarksMsg');

    bookmarkForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const siteName = siteNameInput.value.trim();
        const siteUrl = siteUrlInput.value.trim();

        let hasError = false;

        if (siteName === '') {
            siteNameErrMsg.textContent = 'Please enter site name';
            hasError = true;
        } else {
            siteNameErrMsg.textContent = '';
        }

        if (siteUrl === '') {
            siteUrlErrMsg.textContent = 'Please enter site URL';
            hasError = true;
        } else {
            siteUrlErrMsg.textContent = '';
        }

        if (!hasError) {
            addBookmark(siteName, siteUrl);
            bookmarkForm.reset();
            siteNameErrMsg.textContent = '';
            siteUrlErrMsg.textContent = '';
        }
    });

    siteNameInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            siteNameErrMsg.textContent = 'Please enter site name';
        } else {
            siteNameErrMsg.textContent = '';
        }
    });

    siteUrlInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            siteUrlErrMsg.textContent = 'Please enter site URL';
        } else {
            siteUrlErrMsg.textContent = '';
        }
    });

    function addBookmark(name, url) {
        const listItem = document.createElement('li');
        listItem.className = 'bookmark-item';

        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.className = 'bookmark-link';

        const nameElement = document.createElement('div');
        nameElement.className = 'bookmark-name';
        nameElement.textContent = name;

        const urlElement = document.createElement('div');
        urlElement.className = 'bookmark-url';
        urlElement.textContent = url;

        link.appendChild(nameElement);
        link.appendChild(urlElement);
        listItem.appendChild(link);

        bookmarksList.appendChild(listItem);

        noBookmarksMsg.style.display = 'none';
    }
});
