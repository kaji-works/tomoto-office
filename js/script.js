// jQuery(function() {
// 	setTimeout(function(){
// 		jQuery('.start-text').fadeIn(1500);
// 	},100); //0.5秒後にロゴをフェードイン!
// 	setTimeout(function(){
// 		jQuery('.start').fadeOut(2500);
// 	},3000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
// });

// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
  //定義
  const drawerIcon = document.querySelector(".drawer__icon");
  const drawer = document.querySelector(".drawer");
  const drawerNavItem = document.querySelectorAll(
    '.drawer__inner a[href^="#"]'
  );
  const headerHeight = document.querySelector("header").offsetHeight;
  const breakpoint = 768;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  //メニューを開くアニメーション
  const openMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      drawer.classList.add("js-show");
      drawerIcon.classList.add("js-show");
    }
  };
  //メニューを閉じるアニメーション
  const closeMenu = () => {
    if (drawer.classList.contains("js-show")) {
      drawer.classList.remove("js-show");
      drawerIcon.classList.remove("js-show");
      isMenuOpen = false;
    }
  };
  //メニューの開閉動作
  const toggleMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      openMenu();
    } else {
      closeMenu();
    }
  };
  //リサイズ処理
  const handleResize = () => {
    const bp = breakpoint;
    const windowWidth = window.innerWidth;
    if (windowWidth > bp && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= bp && drawer.classList.contains("js-show")) {
      isMenuOpenAtBreakpoint = true;
    }
  };
  //メニュー外クリック処理
  const clickOuter = (event) => {
    if (
      drawer.classList.contains("js-show") &&
      !drawer.contains(event.target) &&
      isMenuOpen
    ) {
      closeMenu();
    } else if (
      drawer.classList.contains("js-show") &&
      !drawer.contains(event.target)
    ) {
      isMenuOpen = true;
    }
  };
  //該当箇所までスクロール
  const linkScroll = (target) => {
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  //アイコン クリック時
  drawerIcon.addEventListener("click", toggleMenu);
  //画面幅リサイズ時
  window.addEventListener("resize", handleResize);
  //メニュー外クリック時
  document.addEventListener("click", clickOuter);
  //ページ内リンクメニュー クリック時
  drawerNavItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
      const targetItem = document.querySelector(item.getAttribute("href"));
      linkScroll(targetItem);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slideUpText = document.querySelectorAll(".animation__text");
  new SplitType(slideUpText);
  slideUpText.forEach((element) => {
    const chars = element.querySelectorAll(".char");
    gsap.to(chars, {
      opacity: 1, //最終の状態
      stagger: 0.1, //次のアニメーションまでの時間
      delay: 1, //遅延
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY < lastScrollY) {
      // 上方向へスクロール
      header.classList.remove("js-slide-up");
    } else {
      // 下方向へスクロール
      header.classList.add("js-slide-up");
    }
    lastScrollY = window.scrollY;
  });
});

gsap.registerPlugin(ScrollTrigger);

const slideInLeftItems = document.querySelectorAll(".animated__slideIn--left");

slideInLeftItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 70%", // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add("js-show");
    },
  });
});

const slideInRightItems = document.querySelectorAll(
  ".animated__slideIn--right"
);

slideInRightItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 70%", // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add("js-show");
    },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      const targetId = item.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = document.querySelector('.header').offsetHeight; // headerの高さを取得
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});