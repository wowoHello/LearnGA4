// 儲存選擇的配置
let selectedConfig = {
  color: "black",
  package: "basic",
  quantity: 1,
};

// 價格配置
const packagePrices = {
  basic: 3499,
  premium: 4299,
};

// 頁面載入時追蹤頁面瀏覽事件
window.addEventListener("load", function () {
  trackPageView();
});

// GA4 頁面瀏覽事件
function trackPageView() {
  console.log("GA4 Page View Event:", {
    event_name: "page_view",
    page_title: "AirPods Ultra 無線耳機",
    page_location: window.location.href,
    page_path: "/product/headphones",
    content_group1: "Product Detail",
    content_group2: "Audio",
    item_category: "Headphones",
    item_name: "AirPods Ultra",
    item_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });

  console.log("💡 提示：這是無線耳機產品頁面的 GA4 追蹤事件");
}

// 通用事件追蹤函數
function trackEvent(action, event_category, event_label) {
  console.log("GA4 Event:", {
    event_name: "custom_event",
    event_category: event_category,
    event_label: event_label,
    action: action,
    timestamp: new Date().toISOString(),
  });
}

// 導航追蹤
function trackNavigation(section) {
  console.log("GA4 Navigation Event:", {
    event_name: "navigation_click",
    link_text: section,
    link_url: `#${section}`,
    outbound: false,
    timestamp: new Date().toISOString(),
  });
  trackEvent("navigation", "click", section);
}

// 面包屑追蹤
function trackBreadcrumb(section) {
  console.log("GA4 Breadcrumb Event:", {
    event_name: "breadcrumb_click",
    link_text: section,
    link_url: `#${section}`,
    timestamp: new Date().toISOString(),
  });
  trackEvent("breadcrumb", "click", section);
}

// 回首頁
function goToHomePage() {
  console.log("GA4 Navigation Event:", {
    event_name: "page_navigation",
    destination: "home",
    source_page: "headphones_detail",
    timestamp: new Date().toISOString(),
  });

  window.history.back();
}

// 圖片檢視追蹤
function trackImageView(image_type) {
  console.log("GA4 Image View Event:", {
    event_name: "image_view",
    image_type: image_type,
    product_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("engagement", "image_view", image_type);
}

// 更換圖片
function changeImage(type) {
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  event.target.classList.add("active");

  console.log("GA4 Image Change Event:", {
    event_name: "image_change",
    image_type: type,
    product_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("engagement", "image_change", type);
}

// 選擇顏色
function selectColor(color) {
  document.querySelectorAll(".color-option").forEach((opt) => {
    opt.classList.remove("active");
  });
  event.target.classList.add("active");

  selectedConfig.color = color;

  console.log("GA4 Product Configuration Event:", {
    event_name: "product_config",
    config_type: "color",
    config_value: color,
    product_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("product_interaction", "select_color", color);
}

// 選擇套餐
function selectPackage(packageType) {
  document.querySelectorAll(".package-option").forEach((opt) => {
    opt.classList.remove("active");
  });
  event.target.closest(".package-option").classList.add("active");

  selectedConfig.package = packageType;

  console.log("GA4 Product Configuration Event:", {
    event_name: "product_config",
    config_type: "package",
    config_value: packageType,
    price: packagePrices[packageType],
    product_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("product_interaction", "select_package", packageType);
}

// 調整數量
function changeQuantity(delta) {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value) + delta;

  if (value < 1) value = 1;
  if (value > 10) value = 10;

  input.value = value;
  selectedConfig.quantity = value;

  console.log("GA4 Quantity Change Event:", {
    event_name: "quantity_change",
    quantity: value,
    product_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });
}

// 加入購物車
function addToCart() {
  const price = packagePrices[selectedConfig.package];

  console.log("GA4 Add to Cart Event:", {
    event_name: "add_to_cart",
    currency: "TWD",
    value: price * selectedConfig.quantity,
    items: [
      {
        item_id: "headphones_001",
        item_name: "AirPods Ultra",
        item_category: "Headphones",
        item_variant: `${selectedConfig.color}-${selectedConfig.package}`,
        price: price,
        quantity: selectedConfig.quantity,
      },
    ],
    timestamp: new Date().toISOString(),
  });

  const packageName = selectedConfig.package === "basic" ? "基本款" : "豪華組";
  showModal(
    "已加入購物車",
    `AirPods Ultra ${packageName} (${selectedConfig.color}) x${selectedConfig.quantity}`
  );
}

// 立即購買
function buyNow() {
  const price = packagePrices[selectedConfig.package];

  console.log("GA4 Begin Checkout Event:", {
    event_name: "begin_checkout",
    currency: "TWD",
    value: price * selectedConfig.quantity,
    items: [
      {
        item_id: "headphones_001",
        item_name: "AirPods Ultra",
        item_category: "Headphones",
        item_variant: `${selectedConfig.color}-${selectedConfig.package}`,
        price: price,
        quantity: selectedConfig.quantity,
      },
    ],
    timestamp: new Date().toISOString(),
  });

  showModal("前往結帳", "即將跳轉至結帳頁面...");
}

// 加入願望清單
function addToWishlist() {
  console.log("GA4 Add to Wishlist Event:", {
    event_name: "add_to_wishlist",
    currency: "TWD",
    value: packagePrices[selectedConfig.package],
    items: [
      {
        item_id: "headphones_001",
        item_name: "AirPods Ultra",
        price: packagePrices[selectedConfig.package],
      },
    ],
    timestamp: new Date().toISOString(),
  });

  showModal("已加入願望清單", "AirPods Ultra 已加入您的願望清單");
}

// 加入比較
function compareProduct() {
  console.log("GA4 Product Compare Event:", {
    event_name: "product_compare",
    product_id: "headphones_001",
    product_name: "AirPods Ultra",
    timestamp: new Date().toISOString(),
  });

  showModal("加入比較", "已加入產品比較清單");
}

// 分享商品
function shareProduct() {
  console.log("GA4 Share Event:", {
    event_name: "share",
    method: "product_share",
    content_type: "product",
    item_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });

  showModal("分享商品", "複製商品連結成功！");
}

// 播放影片
function playVideo() {
  console.log("GA4 Video Event:", {
    event_name: "video_start",
    video_title: "AirPods Ultra 產品介紹",
    video_provider: "youtube",
    product_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });

  trackEvent("engagement", "video_play", "product_video");
  showModal("播放影片", "正在載入產品介紹影片...");
}

// 撰寫評價
function writeReview() {
  console.log("GA4 Review Event:", {
    event_name: "write_review",
    product_id: "headphones_001",
    product_name: "AirPods Ultra",
    timestamp: new Date().toISOString(),
  });

  trackEvent("engagement", "write_review", "headphones_001");
  showModal("撰寫評價", "即將開啟評價表單...");
}

// 載入更多評價
function loadMoreReviews() {
  console.log("GA4 Load More Event:", {
    event_name: "load_more",
    content_type: "reviews",
    product_id: "headphones_001",
    timestamp: new Date().toISOString(),
  });

  showModal("載入評價", "正在載入更多用戶評價...");
}

// 查看相關產品
function viewRelatedProduct(productType) {
  const productNames = {
    smartphone: "智慧型手機",
    laptop: "筆記型電腦",
    speaker: "藍牙喇叭",
  };

  console.log("GA4 Product Click Event:", {
    event_name: "select_item",
    item_list_name: "Related Products",
    items: [
      {
        item_id: `${productType}_001`,
        item_name: productNames[productType],
        item_category: "Electronics",
      },
    ],
    timestamp: new Date().toISOString(),
  });

  console.log("GA4 Page Navigation Event:", {
    event_name: "page_navigation",
    destination: `${productType}_detail`,
    source_page: "headphones_detail",
    timestamp: new Date().toISOString(),
  });

  showModal("頁面跳轉", `即將跳轉至${productNames[productType]}產品頁面...`);
}

// Modal 相關函數
function showModal(title, message) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// 點擊 modal 背景關閉
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// 追蹤頁面滾動事件
let scrollTracked = {
  25: false,
  50: false,
  75: false,
  100: false,
};

window.addEventListener("scroll", function () {
  const scrollPercent =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  Object.keys(scrollTracked).forEach((percent) => {
    if (scrollPercent >= percent && !scrollTracked[percent]) {
      console.log("GA4 Scroll Event:", {
        event_name: "scroll",
        percent_scrolled: percent,
        page: "headphones_detail",
        timestamp: new Date().toISOString(),
      });
      scrollTracked[percent] = true;
    }
  });
});

// 追蹤頁面停留時間
let startTime = Date.now();
window.addEventListener("beforeunload", function () {
  const timeSpent = Math.round((Date.now() - startTime) / 1000);
  console.log("GA4 Engagement Event:", {
    event_name: "page_engagement",
    engagement_time_msec: timeSpent * 1000,
    page: "headphones_detail",
    timestamp: new Date().toISOString(),
  });
});

// 追蹤特定區域曝光（Intersection Observer）
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.tracked) {
      const sectionName = entry.target.dataset.section;
      console.log("GA4 Section View Event:", {
        event_name: "section_view",
        section_name: sectionName,
        product_id: "headphones_001",
        timestamp: new Date().toISOString(),
      });
      entry.target.dataset.tracked = "true";
    }
  });
}, observerOptions);

// 觀察重要區域
document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    {
      element: document.querySelector(".video-section"),
      name: "video_section",
    },
    {
      element: document.querySelector(".specs-comparison"),
      name: "specs_section",
    },
    { element: document.querySelector(".reviews"), name: "reviews_section" },
    {
      element: document.querySelector(".related-products"),
      name: "related_products",
    },
  ];

  sections.forEach((section) => {
    if (section.element) {
      section.element.dataset.section = section.name;
      observer.observe(section.element);
    }
  });
});

console.log("🎯 無線耳機產品頁面已載入");
console.log(
  "💡 提示：打開瀏覽器開發者工具的 Console 面板，可以看到所有 GA4 事件的模擬輸出"
);
console.log("📝 當前選擇配置:", selectedConfig);
console.log("💰 套餐價格:", packagePrices);
