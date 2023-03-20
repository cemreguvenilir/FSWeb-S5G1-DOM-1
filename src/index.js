const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const links = document.querySelectorAll("nav a");
const navItems = Object.values(siteContent.nav);
for (let i = 0; i < navItems.length; i++) {
  links[i].textContent = [navItems[i]];
  links[i].classList.add("italic");
}

const resim = document.querySelectorAll("img");
const photoKeys = Object.values(siteContent.images);
for (let i = 0; i < photoKeys.length; i++) {
  resim[i].src = [photoKeys[i]];
}
const yeniCta = document.querySelectorAll(".cta-text h1, .cta-text button");
const ctaKeys = Object.values(siteContent.cta);
for (let i = 0; i < ctaKeys.length; i++) {
  yeniCta[i].textContent = [ctaKeys[i]];
}
const icerik = document.querySelectorAll(".main-content h4, .main-content p");
const icerikKeys = Object.values(siteContent["ana-içerik"]);
for (let i = 0; i < icerikKeys.length; i++) {
  icerik[i].textContent = [icerikKeys[i]];
}
const newIletisim = document.querySelectorAll(".contact h4, .contact p");
const ileKeys = Object.values(siteContent.iletisim);
for (let i = 0; i < ileKeys.length; i++) {
  newIletisim[i].textContent = [ileKeys[i]];
}

const altKisim = document.querySelectorAll("footer a");
const altKeys = Object.values(siteContent.footer);
for (let i = 0; i < altKeys.length; i++) {
  altKisim[i].textContent = [altKeys[i]];
  altKisim[i].classList.add("bold");
}
