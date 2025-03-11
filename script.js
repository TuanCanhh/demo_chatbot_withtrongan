document.addEventListener("DOMContentLoaded", function() {
    const checkChatbase = setInterval(() => {
        const bubbleWindow = document.getElementById("chatbase-bubble-window");
        const bubbleButton = document.getElementById("chatbase-bubble-button");

        if (bubbleWindow && bubbleButton) {
            clearInterval(checkChatbase); // Dừng khi tìm thấy

            // Toggle hiển thị khi nhấp vào nút
            bubbleButton.addEventListener("click", function(event) {
                event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
                bubbleWindow.style.display = bubbleWindow.style.display === "block" ? "none" : "block";
            });

            // Đóng khi nhấp ra ngoài
            document.addEventListener("click", function(event) {
                if (!bubbleWindow.contains(event.target) && !bubbleButton.contains(event.target) && bubbleWindow.style.display === "block") {
                    bubbleWindow.style.display = "none";
                }
            });
        }
    }, 500); // Kiểm tra mỗi 500ms
});