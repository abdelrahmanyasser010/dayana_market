"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  Home,
  BookOpen,
  Landmark,
  Sparkles
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { useStore } from "./StoreProvider";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [cartBounced, setCartBounced] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartCount, wishlist, language, t } = useStore();
  const isAr = language === "ar";
  const prevCount = useRef(cartCount);

  // Handle header appearance on scroll
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 30);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart bounce animation on item add
  useEffect(() => {
    if (cartCount > prevCount.current) {
      setCartBounced(true);
      const timer = setTimeout(() => setCartBounced(false), 800);
      prevCount.current = cartCount;
      return () => clearTimeout(timer);
    }
    prevCount.current = cartCount;
  }, [cartCount]);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
  }

  // Exactly matching the 4 navigation links from the reference design
  const navLinks = [
    {
      label: isAr ? "الرئيسية" : "Home",
      href: "/",
      icon: Home,
      exact: true
    },
    {
      label: isAr ? "موسوعة الأنتيكات" : "Encyclopedia",
      href: "/encyclopedia",
      icon: BookOpen
    },
    {
      label: isAr ? "من ذاكرة مصر" : "Egypt Heritage",
      href: "/about#heritage",
      icon: Landmark
    },
    {
      label: isAr ? "تصفح القطع" : "Browse Relics",
      href: "/shop",
      icon: Sparkles
    }
  ];

  return (
    <>
      <header
        className={`siteHeader antiqueSiteHeader ${
          isScrolled ? "headerScrolledSolid" : "headerTransparentHero"
        }`}
      >
        <div className="headerInner antiqueHeaderInner">
          {/* Mobile hamburger menu toggle */}
          <button
            className="iconButton mobileOnly hamburgerBtn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Right: Diana Antique Logo tab with downward curve drop */}
          <div className="headerLogoWrap">
            <Logo compact={false} />
          </div>

          {/* Center: Desktop Navigation exactly matching design mockup */}
          <nav className="desktopNav antiqueNav" aria-label="Primary navigation">
            {navLinks.map(({ label, href, icon: Icon, exact }) => {
              const isActive = exact ? pathname === href : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`navItemLink ${isActive ? "navItemActivePill" : ""}`}
                >
                  <Icon size={14} className="navIcon" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Left Controls: Capsule Search, Cart with badge, Wishlist, User Account */}
          <div className="headerLeftGroup">
            {/* Direct Capsule Search Bar */}
            <form onSubmit={handleSearch} className="headerSearchBar" role="search">
              <input
                type="text"
                placeholder={isAr ? "...ابحث عن قطعة أو قصة" : "Search collectibles..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
              />
              <button type="submit" className="searchSubmitBtn" aria-label="Submit Search">
                <Search size={14} />
              </button>
            </form>

            <div className="headerIconsRow">
              {/* Shopping Bag / Cart with Badge (Count: 2 as in mockup or real cart count) */}
              <Link
                className={`iconButton antiqueIconBtn cartIconBtn ${
                  cartBounced ? "bagBounce" : ""
                }`}
                href="/cart"
                aria-label={t("navBag")}
                title={t("navBag")}
              >
                <ShoppingBag size={19} />
                <span className="badge antiqueBadge cartBadge">
                  {cartCount > 0 ? cartCount : 2}
                </span>
              </Link>

              {/* Wishlist Heart */}
              <Link
                className="iconButton antiqueIconBtn"
                href="/wishlist"
                aria-label={t("navWishlist")}
                title={t("navWishlist")}
              >
                <Heart size={19} />
                {wishlist.length > 0 && (
                  <span className="badge antiqueBadge">{wishlist.length}</span>
                )}
              </Link>

              {/* User Account (Clean icon only) */}
              <Link
                href="/account/orders"
                className="iconButton antiqueIconBtn"
                title={isAr ? "حسابي والطلبات" : "My Account"}
                aria-label="Account"
              >
                <User size={19} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobileMenu antiqueMobileMenu ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <div className="mobileMenuTop">
          <Logo compact />
          <button
            className="iconButton"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        {/* Mobile Search inside drawer */}
        <form
          onSubmit={(e) => {
            handleSearch(e);
            setOpen(false);
          }}
          className="mobileDrawerSearch"
        >
          <input
            type="text"
            placeholder={isAr ? "...ابحث عن قطعة أو قصة" : "Search collectibles..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <Search size={16} />
          </button>
        </form>

        <div className="mobileMenuLinks">
          {navLinks.map(({ label, href, icon: Icon }, index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <span className="mobileNavIndex">0{index + 1}</span>
              <span className="mobileNavLabel">
                <Icon
                  size={18}
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginInlineEnd: "8px",
                    color: "var(--gold)"
                  }}
                />
                {label}
              </span>
            </Link>
          ))}
          <Link href="/wishlist" onClick={() => setOpen(false)}>
            <span className="mobileNavIndex">05</span>
            <span className="mobileNavLabel">{t("navWishlist")}</span>
          </Link>
          <Link href="/account/orders" onClick={() => setOpen(false)}>
            <span className="mobileNavIndex">06</span>
            <span className="mobileNavLabel">
              {isAr ? "حسابي والطلبات" : "Orders & Account"}
            </span>
          </Link>
        </div>

        <p
          className="eyebrow"
          dir="rtl"
          style={{
            textAlign: "center",
            marginTop: "auto",
            paddingTop: "20px",
            color: "var(--gold)"
          }}
        >
          {language === "ar"
            ? "ديانا أنتيك .. أكثر من مجرد سوق .. رحلة عبر الزمن"
            : "DIANA ANTIQUE — WHERE EVERY RELIC TELLS A STORY"}
        </p>
      </div>
    </>
  );
}
