window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const guest = urlParams.get('guest');
    if (guest) {
        document.getElementById('guest-name').innerText = guest.replace(/-/g, ' ');
    }
    // ២. ចាប់ភេទភ្ញៀវ (Gender)
    const gender = urlParams.get('gender'); // m សម្រាប់ប្រុស, f សម្រាប់ស្រី
    const prefixElement = document.getElementById('guest-prefix');

    if (gender === 'm') {
        prefixElement.innerText = "លោក";
    } else if (gender === 'f') {
        prefixElement.innerText = "លោកស្រី អ្នកនាងកញ្ញា";
    } else {
        prefixElement.innerText = "លោក លោកស្រី"; // បើអត់ដាក់ភេទ ឱ្យវាចេញទាំងពីរ
    }

    const targetDate = new Date("March 29, 2026 08:00:00").getTime();
    setInterval(function() {
        const now = new Date().getTime();
        const diff = targetDate - now;
        if (diff < 0) return;

        document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }, 1000);
};
