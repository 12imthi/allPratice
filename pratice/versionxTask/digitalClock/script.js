const demo = document.getElementById('demo');

function updateTime() {
    const d = new Date();
    const hour = d.getHours();
    // console.log(typeof hour);
    const mint = d.getMinutes();
    // console.log(typeof mint);
    const sec = d.getSeconds();

    let ampm = 'AM';
    if (hour >= 12) {
        ampm = 'PM';
    }
    // if (hour > 12) {
    //     hour -= 12;
    // }
    // if (hour === 0) {
    //     hour = 12;
    // }

    demo.innerHTML = `${String(hour).padStart(2,'0')} : ${String(mint).padStart(2,'0')} : ${String(sec).padStart(2,'0')} : ${ampm}`;
}

// Initial display
updateTime();

// Update every second
setInterval(updateTime, 1000);
