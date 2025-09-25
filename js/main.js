// 模擬 GA4 事件追蹤函數
// 在實際使用時，您需要替換為真正的 gtag 函數

function trackPhone(product_name, price) {
  console.log("GA4 Phone Event:", {
    event_name: "add_to_cart",
    currency: "TWD",
    value: price,
    item_name: product_name,
    price: price,
    quantity: 1,
  });

  // 丟到 dataLayer，給 GTM / GA4 捕捉
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "add_to_cart",
    currency: "TWD",
    value: price,
    item_name: product_name,
    price: price,
    quantity: 1,
  });

  // 等 0.5 秒再跳轉，避免事件還沒送出就中斷
  setTimeout(() => {
    window.location.href = "phone.html";
  }, 500);
}

function trackUltrabook(product_name, price) {
  console.log("GA4 Ultrabook Event:", {
    event_name: "add_to_cart",
    currency: "TWD",
    value: price,
    item_name: product_name,
    price: price,
    quantity: 1,
  });

  // 丟到 dataLayer，給 GTM / GA4 捕捉
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "add_to_cart",
    currency: "TWD",
    value: price,
    item_name: product_name,
    price: price,
    quantity: 1,
  });

  // 等 0.5 秒再跳轉，避免事件還沒送出就中斷
  setTimeout(() => {
    window.location.href = "ultrabook.html";
  }, 500);
}

function trackHeadphones(product_name, price) {
  console.log("GA4 Headphones Event:", {
    event_name: "add_to_cart",
    currency: "TWD",
    value: price,
    item_name: product_name,
    price: price,
    quantity: 1,
  });

  // 丟到 dataLayer，給 GTM / GA4 捕捉
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "add_to_cart",
    currency: "TWD",
    value: price,
    item_name: product_name,
    price: price,
    quantity: 1,
  });

  // 等 0.5 秒再跳轉，避免事件還沒送出就中斷
  setTimeout(() => {
    window.location.href = "headphones.html";
  }, 500);
}

function trackNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;

  console.log("GA4 Newsletter Event:", {
    event_name: "newsletter_signup",
    method: "email_form",
    timestamp: new Date().toISOString(),
  });

  // 實際 GA4 代碼應該是：
  // gtag('event', 'newsletter_signup', {
  //     method: 'email_form'
  // });

  showModal("訂閱成功", `感謝您的訂閱！確認信已發送至 ${email}`);
  event.target.reset();
}

function trackSocial(platform) {
  console.log("GA4 Social Event:", {
    event_name: "share",
    method: platform,
    content_type: "website",
    timestamp: new Date().toISOString(),
  });

  // 實際 GA4 代碼應該是：
  // gtag('event', 'share', {
  //     method: platform,
  //     content_type: 'website'
  // });

  showModal("分享功能", `準備分享到 ${platform}`);
}

function trackDownload(file_name) {
  console.log("GA4 Download Event:", {
    event_name: "file_download",
    file_name: file_name,
    file_extension: "pdf",
    timestamp: new Date().toISOString(),
  });

  // 實際 GA4 代碼應該是：
  // gtag('event', 'file_download', {
  //     file_name: file_name,
  //     file_extension: 'pdf'
  // });

  showModal("下載開始", `正在下載 ${file_name}`);
}

function showModal(title, message) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// 追蹤頁面滾動事件
let scrollTracked = false;
window.addEventListener("scroll", function () {
  if (!scrollTracked && window.scrollY > 100) {
    console.log("GA4 Scroll Event:", {
      event_name: "scroll",
      percent_scrolled: 25,
      timestamp: new Date().toISOString(),
    });
    scrollTracked = true;
  }
});

// 追蹤頁面停留時間
let startTime = Date.now();
window.addEventListener("beforeunload", function () {
  const timeSpent = Math.round((Date.now() - startTime) / 1000);
  console.log("GA4 Engagement Event:", {
    event_name: "engagement_time",
    engagement_time_msec: timeSpent * 1000,
    timestamp: new Date().toISOString(),
  });
});

// 點擊 modal 背景關閉
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

console.log("🎯 GA4 測試頁面已載入");
console.log(
  "💡 提示：打開瀏覽器開發者工具的 Console 面板，可以看到所有 GA4 事件的模擬輸出"
);
console.log("📝 在實際使用時，請將 console.log 替換為真正的 gtag 函數");
