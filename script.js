function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function loadChapter(chapterId) {
    const chapterContent = {
        chapter1: "<h3>A Flower's Reflection</h3><p>This is the content of Chapter 1...</p>",
        chapter2: "<h3>Old Stem, New Flowers</h3><p>This is the content of Chapter 2...</p>",
        chapter3: "<h3>A Group of 4</h3><p>This is the content of Chapter 3...</p>",
        // Add more chapters here as needed
    };

    document.getElementById('chapter-content').innerHTML = chapterContent[chapterId] || "<p>Chapter content is coming soon.</p>";
    showSection('chapters');
}