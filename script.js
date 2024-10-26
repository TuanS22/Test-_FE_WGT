/* HEADER TIME */
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


/* MAIN 6 SLIDER */
const list = document.querySelector(".six__list");
const item = document.querySelector(".six__item");
const itemWidth = item.offsetWidth * 2.5;

// Đo lường tổng chiều rộng của tất cả các mục trong danh sách
const totalWidth = list.scrollWidth;
const visibleWidth = list.offsetWidth;

function handleClick(direction) {
    const currentScrollPosition = list.scrollLeft;

    if (direction === "previous") {
        // Kiểm tra nếu scroll đến vị trí đầu tiên, cuộn đến cuối danh sách
        if (currentScrollPosition === 0) {
            list.scrollTo({ left: totalWidth, behavior: "smooth" });
        } else {
            list.scrollBy({ left: -itemWidth, behavior: "smooth" });
        }
    } else {
        // Kiểm tra nếu scroll đến vị trí cuối cùng, cuộn về đầu danh sách
        if (currentScrollPosition + visibleWidth >= totalWidth) {
            list.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            list.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
    }
}