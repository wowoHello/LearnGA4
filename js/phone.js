// 頁面載入時追蹤頁面瀏覽事件
        window.addEventListener('load', function() {
            trackPageView();
        });

        // GA4 頁面瀏覽事件
        function trackPageView() {
            console.log('GA4 Page View Event:', {
                event_name: 'page_view',
                page_title: 'XPhone Pro 智慧型手機',
                page_location: window.location.href,
                page_path: '/product/smartphone',
                content_group1: 'Product Detail',
                content_group2: 'Electronics',
                item_category: 'Smartphone',
                item_name: 'XPhone Pro',
                item_id: 'smartphone_001',
                timestamp: new Date().toISOString()
            });

            // 實際 GA4 代碼：
            // gtag('event', 'page_view', {
            //     page_title: 'XPhone Pro 智慧型手機',
            //     page_location: window.location.href
            // });
        }

        // 導航追蹤
        function trackNavigation(section) {
            console.log('GA4 Navigation Event:', {
                event_name: 'navigation_click',
                link_text: section,
                link_url: `#${section}`,
                outbound: false,
                timestamp: new Date().toISOString()
            });
            trackEvent('navigation', 'click', section);
        }

        // 面包屑追蹤
        function trackBreadcrumb(section) {
            console.log('GA4 Breadcrumb Event:', {
                event_name: 'breadcrumb_click',
                link_text: section,
                link_url: `#${section}`,
                timestamp: new Date().toISOString()
            });
            trackEvent('breadcrumb', 'click', section);
        }

        // 回首頁
        function goToHomePage() {
            console.log('GA4 Navigation Event:', {
                event_name: 'page_navigation',
                destination: 'home',
                source_page: 'product_detail',
                timestamp: new Date().toISOString()
            });
            
            // 模擬頁面跳轉（實際情況下這裡會是真的跳轉）
            showModal('頁面跳轉', '即將返回首頁...');
            
            // 實際應用中可以是：
            // window.location.href = '/';
        }

        // 圖片檢視追蹤
        function trackImageView(image_type) {
            console.log('GA4 Image View Event:', {
                event_name: 'image_view',
                image_type: image_type,
                product_id: 'smartphone_001',
                timestamp: new Date().toISOString()
            });
            trackEvent('engagement', 'image_view', image_type);
        }

        // 更換圖片
function changeImage(type, event) {
    // 移除所有 active class
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    // 添加 active class 到點擊的縮圖
    event.target.classList.add('active');

    // 推送事件到 GTM/GA4
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'image_change',         // GA4 事件名稱
        image_type: type,              // 自訂參數
        product_id: 'smartphone_001',  // 自訂參數
        timestamp: new Date().toISOString()
    });

    console.log('GA4 Image Change Event pushed:', {
        event: 'image_change',
        image_type: type,
        product_id: 'smartphone_001'
    });
}
