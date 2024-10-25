function digitalClock() {
    // Lấy ngày giờ hiện tại theo múi giờ Việt Nam (UTC+7)
    const now = new Date();
    now.setTime(now.getTime() + 24 * 3600 * 1000); // Chỉnh múi giờ

    // Lấy các thành phần ngày giờ
    const day = now.getDate() - 1;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Cập nhật nội dung các span trong HTML
    document.querySelector('.day').textContent = day.toString().padStart(2, '0');
    document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
}

// Cập nhật đồng hồ mỗi giây
setInterval(digitalClock, 1000);