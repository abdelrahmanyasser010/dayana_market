"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Globe,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  Home,
  BookOpen,
  Landmark,
  Sparkles,
  History,
  Moon,
  Sun
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

  const { cartCount, wishlist, language, toggleLanguage, theme, toggleTheme, t } = useStore();
  const isAr = language === "ar";
  const prevCount = useRef(cartCount);
  const isHome = pathname === "/";

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

  const navLinks = [
    {
      label: isAr ? "الرئيسية" : "Home",
      href: "/",
      icon: Home,
      exact: true
    },
    {
      label: isAr ? "متجر المقتنيات" : "Collectibles",
      href: "/shop",
      icon: Sparkles
    },
    {
      label: isAr ? "من ذاكرة مصر" : "Egypt Heritage",
      href: "/about#heritage",
      icon: Landmark
    },
    {
      label: isAr ? "موسوعة الأنتيكات" : "Encyclopedia",
      href: "/encyclopedia",
      icon: BookOpen
    },
    {
      label: isAr ? "قصة ديانا أنتيك" : "Our Story",
      href: "/about",
      icon: History
    }
  ];

  return (
    <>
      <header
        className={`siteHeader antiqueSiteHeader ${
          isHome && !isScrolled ? "headerTransparentHero" : "headerScrolledSolid"
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

          {/* Diana Antique Brand Logo Plaque on Far Right (RTL) */}
          <div className="headerLogoWrap">
            <Logo compact={false} showTagline={true} />
          </div>

          {/* Desktop Navigation in Center */}
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

          {/* Direct Embedded Search Bar */}
          <form onSubmit={handleSearch} className="headerSearchBar" role="search">
            <input
              type="text"
              placeholder={isAr ? "ابحث عن قطعة أو قصة..." : "Search collectibles..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
            <button type="submit" className="searchSubmitBtn" aria-label="Submit Search">
              <Search size={14} />
            </button>
          </form>

          {/* Header Actions on Left in RTL: All in one single flex line */}
          <div className="headerActions antiqueActions">
            {/* Theme Switcher: Dark Museum vs Light Parchment */}
            <button
              type="button"
              onClick={toggleTheme}
              className="themeSwitchBtn"
              title={
                theme === "dark"
                  ? isAr
                    ? "التحويل للوضع الورقي الكلاسيكي"
                    : "Switch to Light Parchment"
                  : isAr
                  ? "التحويل للوضع الأثري الفخم"
                  : "Switch to Dark Museum"
              }
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={15} className="themeIconGold" />
              ) : (
                <Moon size={15} className="themeIconGold" />
              )}
              <span className="themeText mobileHide">
                {theme === "dark" ? (isAr ? "نهاري" : "Light") : isAr ? "ليلي" : "Dark"}
              </span>
            </button>

            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="langSwitchBtn"
              title="Switch language / تغيير اللغة"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </button>

            {/* Shopping Bag / Cart */}
            <Link
              className={`iconButton antiqueIconBtn cartIconBtn ${
                cartBounced ? "bagBounce" : ""
              }`}
              href="/cart"
              aria-label={t("navBag")}
              title={t("navBag")}
            >
              <ShoppingBag size={18} />
              <span className="badge antiqueBadge cartBadge">
                {cartCount > 0 ? cartCount : 1}
              </span>
            </Link>

            {/* Wishlist */}
            <Link
              className="iconButton antiqueIconBtn"
              href="/wishlist"
              aria-label={t("navWishlist")}
              title={t("navWishlist")}
            >
              <Heart size={18} />
              {wishlist.length > 0 && (
                <span className="badge antiqueBadge">{wishlist.length}</span>
              )}
            </Link>

            {/* Account / Orders */}
            <Link
              href="/account/orders"
              className="headerAccountLink"
              title={isAr ? "حسابي والطلبات" : "My Account"}
              aria-label="Account"
            >
              <User size={18} />
              <span className="accountText mobileHide">{isAr ? "حسابي" : "Account"}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobileMenu antiqueMobileMenu ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <div className="mobileMenuTop">
          <Logo compact showTagline={false} />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              type="button"
              onClick={toggleTheme}
              className="langSwitchBtn"
              style={{
                padding: "6px 10px",
                border: "1px solid var(--line)",
                borderRadius: "999px"
              }}
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun size={15} className="themeIconGold" />
              ) : (
                <Moon size={15} className="themeIconGold" />
              )}
              <span>{theme === "dark" ? (isAr ? "نهاري" : "Light") : isAr ? "ليلي" : "Dark"}</span>
            </button>
            <button
              type="button"
              onClick={toggleLanguage}
              className="langSwitchBtn"
              style={{
                padding: "6px 10px",
                border: "1px solid var(--line)",
                borderRadius: "999px"
              }}
            >
              <Globe size={15} />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </button>
            <button
              className="iconButton"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>
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
            placeholder={isAr ? "ابحث عن قطعة أو قصة..." : "Search collectibles or stories..."}
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
            <span className="mobileNavIndex">06</span>
            <span className="mobileNavLabel">{t("navWishlist")}</span>
          </Link>
          <Link href="/account/orders" onClick={() => setOpen(false)}>
            <span className="mobileNavIndex">07</span>
            <span className="mobileNavLabel">
              {isAr ? "متابعة الطلبات وحسابي" : "Orders & Account"}
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
