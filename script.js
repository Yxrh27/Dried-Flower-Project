
// ID of the latest chapter. Update this whenever a new chapter is added.
const latestChapterId = 'chapter15';

// Check if the user has seen the latest chapter notification
function notifyNewChapter() {
    const lastSeenChapter = localStorage.getItem('lastSeenChapter');
    
    // If the user hasn't seen the latest chapter notification, show the banner
    if (lastSeenChapter !== latestChapterId) {
        document.getElementById('notification-banner').classList.remove('hidden');
    }
}

// Dismiss the notification and store the latest chapter ID as seen
function dismissNotification() {
    document.getElementById('notification-banner').classList.add('hidden');
    localStorage.setItem('lastSeenChapter', latestChapterId);
}

// Run the notification check when the page loads
document.addEventListener('DOMContentLoaded', notifyNewChapter);