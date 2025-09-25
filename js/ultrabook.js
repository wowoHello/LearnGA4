// 儲存選擇的配置
let selectedConfig = {
  processor: "i7",
  ram: "16GB",
  storage: "512GB",
  quantity: 1,
};

// 頁面載入時追蹤頁面瀏覽事件
window.addEventListener("load", function () {
  trackPageView();
});

// GA4 頁面瀏覽事件
function trackPageView() {
  console.log("GA4 Page View Event:", {
    event_name: "page_view",
    page_title: "UltraBook Pro 15 筆記型電腦",
    page_location: window.location.href,
    page_path: "/product/laptop",
    content_group1: "Product Detail",
    content_group2: "Electronics",
    item_category: "Laptop",
    item_name: "UltraBook Pro 15",
    item_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });

  console.log("💡 提示：這是筆記型電腦產品頁面的 GA4 追蹤事件");
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
    source_page: "laptop_detail",
    timestamp: new Date().toISOString(),
  });

  window.history.back();
}

// 圖片檢視追蹤
function trackImageView(image_type) {
  console.log("GA4 Image View Event:", {
    event_name: "image_view",
    image_type: image_type,
    product_id: "laptop_001",
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
    product_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("engagement", "image_change", type);
}

// 選擇處理器
function selectProcessor(processor) {
  document.querySelectorAll(".processor-options .option-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.closest(".option-btn").classList.add("active");

  selectedConfig.processor = processor;

  console.log("GA4 Product Configuration Event:", {
    event_name: "product_config",
    config_type: "processor",
    config_value: processor,
    product_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("product_interaction", "select_processor", processor);
}

// 選擇記憶體
function selectRAM(ram) {
  document.querySelectorAll(".ram-options .option-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.closest(".option-btn").classList.add("active");

  selectedConfig.ram = ram;

  console.log("GA4 Product Configuration Event:", {
    event_name: "product_config",
    config_type: "ram",
    config_value: ram,
    product_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("product_interaction", "select_ram", ram);
}

// 選擇儲存容量
function selectStorage(storage) {
  document.querySelectorAll(".storage-options .option-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.closest(".option-btn").classList.add("active");

  selectedConfig.storage = storage;

  console.log("GA4 Product Configuration Event:", {
    event_name: "product_config",
    config_type: "storage",
    config_value: storage,
    product_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("product_interaction", "select_storage", storage);
}

// 調整數量
function changeQuantity(delta) {
  const input = document.getElementById("quantity");
  let value = parseInt(input.value) + delta;

  if (value < 1) value = 1;
  if (value > 5) value = 5;

  input.value = value;
  selectedConfig.quantity = value;

  console.log("GA4 Quantity Change Event:", {
    event_name: "quantity_change",
    quantity: value,
    product_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });
}

// 加入購物車
function addToCart() {
  console.log("GA4 Add to Cart Event:", {
    event_name: "add_to_cart",
    currency: "TWD",
    value: 29999,
    items: [
      {
        item_id: "laptop_001",
        item_name: "UltraBook Pro 15",
        item_category: "Laptop",
        item_variant: `${selectedConfig.processor}-${selectedConfig.ram}-${selectedConfig.storage}`,
        price: 29999,
        quantity: selectedConfig.quantity,
      },
    ],
    timestamp: new Date().toISOString(),
  });

  showModal(
    "已加入購物車",
    `UltraBook Pro 15 (${selectedConfig.processor}/${selectedConfig.ram}/${selectedConfig.storage}) x${selectedConfig.quantity}`
  );
}

// 立即購買
function buyNow() {
  console.log("GA4 Begin Checkout Event:", {
    event_name: "begin_checkout",
    currency: "TWD",
    value: 29999 * selectedConfig.quantity,
    items: [
      {
        item_id: "laptop_001",
        item_name: "UltraBook Pro 15",
        item_category: "Laptop",
        item_variant: `${selectedConfig.processor}-${selectedConfig.ram}-${selectedConfig.storage}`,
        price: 29999,
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
    value: 29999,
    items: [
      {
        item_id: "laptop_001",
        item_name: "UltraBook Pro 15",
        price: 29999,
      },
    ],
    timestamp: new Date().toISOString(),
  });

  showModal("已加入願望清單", "UltraBook Pro 15 已加入您的願望清單");
}

// 加入比較
function compareProduct() {
  console.log("GA4 Product Compare Event:", {
    event_name: "product_compare",
    product_id: "laptop_001",
    product_name: "UltraBook Pro 15",
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
    item_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });

  showModal("分享商品", "複製商品連結成功！");
}

// 切換分頁
function switchTab(tabName) {
  // 移除所有 active class
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  // 添加 active class
  event.target.classList.add("active");
  document.getElementById(tabName).classList.add("active");

  // 追蹤分頁切換事件
  console.log("GA4 Tab Switch Event:", {
    event_name: "tab_switch",
    tab_name: tabName,
    product_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });
  trackEvent("engagement", "tab_switch", tabName);
}

// 載入更多評價
function loadMoreReviews() {
  console.log("GA4 Load More Event:", {
    event_name: "load_more",
    content_type: "reviews",
    product_id: "laptop_001",
    timestamp: new Date().toISOString(),
  });

  showModal("載入評價", "正在載入更多用戶評價...");
}

// 查看相關產品
function viewRelatedProduct(productType) {
  console.log("GA4 Product Click Event:", {
    event_name: "select_item",
    item_list_name: "Related Products",
    items: [
      {
        item_id: `${productType}_001`,
        item_name: productType,
        item_category: "Electronics",
      },
    ],
    timestamp: new Date().toISOString(),
  });

  console.log("GA4 Page Navigation Event:", {
    event_name: "page_navigation",
    destination: `${productType}_detail`,
    source_page: "laptop_detail",
    timestamp: new Date().toISOString(),
  });

  showModal("頁面跳轉", `即將跳轉至${productType}產品頁面...`);
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
        page: "laptop_detail",
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
    page: "laptop_detail",
    timestamp: new Date().toISOString(),
  });
});

console.log("🎯 筆記型電腦產品頁面已載入");
console.log(
  "💡 提示：打開瀏覽器開發者工具的 Console 面板，可以看到所有 GA4 事件的模擬輸出"
);
console.log("📝 當前選擇配置:", selectedConfig);
