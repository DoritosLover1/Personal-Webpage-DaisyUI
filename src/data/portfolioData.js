// Proje ekran görüntüleri
import neredeyiyelim_favoritespage from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_favoritespage.jpeg";
import neredeyiyelim_loading from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_loading.jpeg";
import neredeyiyelim_mainpage from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_mainpage.jpeg";
import neredeyiyelim_restaurantdetail from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_restoranpage.jpeg";
import neredeyiyelim_settingspage from "../assets/project_images/neredeyiyelim-mobileapp/neredeyiyelim_settingspage.jpeg";

import java_password_holder1 from "../assets/project_images/java-password-holder/java_password_holder.png";
import java_password_holder2 from "../assets/project_images/java-password-holder/java_password_holder2.png";
import java_password_holder3 from "../assets/project_images/java-password-holder/java_password_holder3.png";
import java_password_holder4 from "../assets/project_images/java-password-holder/java_password_holder4.png";
import java_password_holder5 from "../assets/project_images/java-password-holder/java_password_holder5.png";

import cerrah_vinly_contactus from "../assets/project_images/web-development-project/cerrah_vinly_contactus.png";
import cerrah_vinly_homepage from "../assets/project_images/web-development-project/cerrah_vinly_mainpage.png";
import cerrah_vinly_productpage from "../assets/project_images/web-development-project/cerrah_vinly_diskpage.png";
import cerrah_vinly_sepet from "../assets/project_images/web-development-project/cerrah_vinly_sepet.png";
import cerrah_vinly_hero from "../assets/project_images/web-development-project/cerrah_vinly_herosection.png";

import chat_application1 from "../assets/project_images/chat-application-java/chatt_application_image_1.png";
import chat_application2 from "../assets/project_images/chat-application-java/chatt_application_image_2.png";
import chat_application3 from "../assets/project_images/chat-application-java/chatt_application_image_3.png";
import chat_application4 from "../assets/project_images/chat-application-java/chatt_application_image_4.png";
import chat_application5 from "../assets/project_images/chat-application-java/chatt_application_image_5.png";

import ihsan_avatar from "../assets/ihsan.webp";

export const personalData = {
  name: "İhsan DEMİRCİ",
  shortName: "İhsan",
  title: "Bilgisayar Mühendisi",
  university: "İstanbul Üniversitesi - Cerrahpaşa",
  department: "Bilgisayar Mühendisliği (Mezun)",
  avatar: ihsan_avatar,
  status: "Yazılım, Veri Tabanı, Ağ Mimarisi & BT Müfettişliği Fırsatlarına Açık",
  targetRoles: [
    "Yazılım Geliştirme & Mühendisliği",
    "Veri Tabanı Mimarisi & Yönetimi",
    "Ağ & Sistem Mimarisi",
    "Bilgi Teknolojileri Müfettişliği & Denetimi",
  ],
  location: "İstanbul, Türkiye",
  tagline: "Yazılım mimarileri, kurumsal veri tabanları, ağ mimarisi ve siber güvenlik alanlarında kendimi geliştirmeye odaklanıyorum.",
  bio: "İstanbul Üniversitesi-Cerrahpaşa Bilgisayar Mühendisliği bölümünden başarıyla mezun oldum. Kurumsal bankacılık stajı (Halkbank) ve akademik eğitimim boyunca; yazılım mimarileri, arakatman teknolojileri ,ilişkisel veri tabanları ve ağ mimarileri üzerine çeşitli projeler geliştirerek kendimi geliştirmeye odaklandım. Bununla beraberinde hâlâ da öğrenmeye devam ediyorum.",
  stats: [
    { label: "Kurumsal Deneyim", value: "Halkbank Stajı" },
    { label: "Eğitim", value: "İÜ Cerrahpaşa Mezunu" },
    { label: "Sertifika", value: "Cisco CyberOps Associate and Networking (CCNA-1)" },
  ],
};

export const navigationLinks = [
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Deneyim", href: "#deneyim" },
  { label: "Projeler", href: "#projeler" },
  { label: "Yetenekler", href: "#yetenekler" },
  { label: "İletişim", href: "#iletisim" },
];

export const projectCategories = [
  "Tümü",
  "Web & Full-Stack",
  "Mobil",
  "Sistem & Güvenlik",
  "Finans & Backend",
  "Mobil & Sistem",
  "Konuşma Uygulaması"
];

export const projectsData = [
  {
    id: "nerede-yiyelim",
    title: "Neredeyiyelim Mobil Uygulaması",
    shortDescription: "Kullanıcıların konumuna en yakın restoranları listeleyen, rota planlama ve favori mekan takibi sunan mobil rehber.",
    fullDescription: "Flutter ve Firebase teknolojileri kullanılarak geliştirilen konum tabanlı restoran arama uygulaması. Google Maps entegrasyonu ile kullanıcının anlık konumuna en yakın restoranlar dinamik olarak hesaplanır, rota çizilir ve kullanıcılar mekanları favorilere ekleyebilir.",
    category: "Mobil",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Geolocation"],
    githubUrl: "https://github.com/feagy/nerede-yiyelim.git",
    featured: true,
    images: [
      neredeyiyelim_mainpage,
      neredeyiyelim_loading,
      neredeyiyelim_favoritespage,
      neredeyiyelim_restaurantdetail,
      neredeyiyelim_settingspage,
    ],
    highlights: [
      "Gerçek zamanlı konum ve mesafe matrisi hesaplama",
      "Firebase Firestore ile kullanıcı favorileri ve restoran veri tabanı senkronizasyonu",
      "Kullanıcı odaklı modern mobil arayüz",
    ],
  },
  {
    id: "soap-bank",
    title: "SOAP_BANK Bankacılık Sistemi",
    shortDescription: "SOAP protokolü ile çalışan, kurumsal bankacılık hesap ve transfer işlemlerini simüle eden web servisi mimarisi.",
    fullDescription: "Finansal sistemlerde veri bütünlüğünü ve güvenliği ön planda tutan SOAP tabanlı bankacılık web servisi. Hesap açma, bakiye sorgulama, para transferi ve işlem geçmişi uç noktalarını XML tabanlı güçlü kontrat yapısıyla yönetir.",
    category: "Finans & Backend",
    technologies: ["Java", "SOAP Web Services", "XML / WSDL", "Backend Architecture", "Security"],
    githubUrl: "https://github.com/DoritosLover1/SOAP_BANK",
    featured: true,
    images: [],
    highlights: [
      "WSDL kontratları ile tip güvenli kurumsal finansal servis entegrasyonu",
      "ACID prensiplerine uygun güvenli bakiye ve para transferi mantığı",
      "Kurumsal bankacılık mimarisine uygun servis yapısı",
    ],
  },
  {
    id: "ispark-project",
    title: "İSPARK Otopark & Harita Sistemi",
    shortDescription: "İstanbul otopark doluluk oranlarını ve konum verilerini harita üzerinde interaktif olarak işleyen veri yönetim projesi.",
    fullDescription: "İBB Açık Veri Portalı İSPARK API verilerini kullanarak İstanbul genelindeki otoparkların anlık kapasite, doluluk oranı ve konum bilgilerini görselleştiren ve filtreleyen harita tabanlı sistem.",
    category: "Mobil & Sistem",
    technologies: ["Supabase", "Flutter", "İBB Open Data API", "Map Integration", "Data Processing"],
    githubUrl: "https://github.com/DoritosLover1/ispark-kmt-project",
    featured: true,
    images: [],
    highlights: [
      "Gerçek zamanlı açık veri akışının parse edilip haritada görselleştirilmesi",
      "Otopark doluluk ve kapasite analitiği",
      "Kullanıcı dostu coğrafi bilgi arayüzü",
    ],
  },
  {
    id: "password-vault",
    title: "Java Password Vault (Kasa)",
    shortDescription: "Kullanıcı hesap kimliklerini ve parolalarını güvenli yerel şifreleme ile saklayan masaüstü güvenlik aracı.",
    fullDescription: "Java Swing arayüzü ve yerel kriptografik algoritmalar ile inşa edilen güvenli parola saklama yöneticisi. Kullanıcıların hassas giriş bilgilerini yerel diskte şifreli olarak tutar ve yetkisiz erişimleri engeller.",
    category: "Sistem & Güvenlik",
    technologies: ["Java", "Java Swing", "Kriptografi", "Masaüstü UI", "Local Security"],
    githubUrl: "https://github.com/DoritosLover1/PasswordHolder.git",
    featured: false,
    images: [
      java_password_holder1,
      java_password_holder2,
      java_password_holder3,
      java_password_holder4,
      java_password_holder5,
    ],
    highlights: [
      "Master parola korumalı yerel veri şifreleme",
      "Kayıt ekleme, düzenleme ve güvenli kopyalama özellikleri",
      "Hafif ve bağımsız çalışan Java masaüstü mimarisi",
    ],
  },
  {
    id: "cerrah-vinyl",
    title: "Cerrah Vinyl E-Ticaret Platformu",
    shortDescription: "Vinyl plak tutkunları için katalog filtreleme, sepet mimarisi ve sipariş süreci sunan modern full-stack web sitesi.",
    fullDescription: "Plak meraklıları için özel olarak tasarlanmış full-stack e-ticaret çözümü. Plak kataloğunun kategorilere göre listelenmesi, sepet yönetimi, kullanıcı iletişimi ve arka uç REST API entegrasyonu içerir.",
    category: "Web & Full-Stack",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/DoritosLover1/Web-Project/tree/main-w-backend",
    featured: false,
    images: [
      cerrah_vinly_homepage,
      cerrah_vinly_hero,
      cerrah_vinly_productpage,
      cerrah_vinly_sepet,
      cerrah_vinly_contactus,
    ],
    highlights: [
      "Dinamik ürün filtreleme ve sepet hesaplama mantığı",
      "Bileşen tabanlı responsive frontend mimarisi",
      "Node.js & Express REST API servisleri",
    ],
  },
  {
    id: "realtime-chat",
    title: "Gerçek Zamanlı Şifreli Chat",
    shortDescription: "Uçtan uca mesaj şifreleme ve soket programlama ile çoklu istemci desteği sağlayan Java sohbet sistemi.",
    fullDescription: "Ağ programlama ilkeleri kullanılarak geliştirilmiş, çok kanallı (multi-threaded) istemci-sunucu sohbet platformu. Mesaj paketleri ağ üzerinde şifrelenerek taşınır ve anlık olarak istemcilere iletilir.",
    category: "Konuşma Uygulaması",
    technologies: ["Java", "Socket Programming", "Multi-Threading", "Network Security", "Encryption"],
    githubUrl: "https://github.com/DoritosLover1/MyOwnChatApplication/tree/encryption-imp",
    featured: false,
    images: [
      chat_application1,
      chat_application2,
      chat_application3,
      chat_application4,
      chat_application5,
    ],
    highlights: [
      "Çoklu istemcili (multi-thread) eşzamanlı soket bağlantı yönetimi",
      "Ağ üzerinden aktarılan mesaj paketlerinin güvenli şifrelenmesi",
      "Hata toleranslı bağlantı ve istemci durumu yönetimi",
    ],
  },
];

export const skillCategories = [
  {
    title: "Diller & Temel Algoritmalar",
    description: "Sistem seviyesi ve nesne yönelimli programlama temelleri",
    skills: [
      { name: "Java", level: "Orta Düzey", note: "OOP, Concurrency, Socket, Swing" },
      { name: "C++", level: "Orta Düzey", note: "Veri Yapıları, Bellek Yönetimi" },
      { name: "JavaScript", level: "Temel-Orta", note: "Asenkron Programlama, DOM" },
      { name: "Dart", level: "Orta Düzey", note: "Mobil Mimari" },
      { name: "Python", level: "Temel-Orta", note: "Betik & Veri İşleme" },
    ],
  },
  {
    title: "Web & Mobil Teknolojileri",
    description: "Kullanıcı odaklı reaktif arayüzler ve full-stack mimariler",
    skills: [
      { name: "React.js", level: "Temel-Orta", note: "Hooks, Bileşen Mimarisi, State" },
      { name: "Flutter", level: "Orta Düzey", note: "Cross-Platform Mobil Geliştirme" },
      { name: "Tailwind CSS", level: "Temel-Orta", note: "Modern Tasarım Sistemleri, Responsive" },
      { name: "Node.js & Express", level: "Temel-Orta", note: "REST API, Middleware" },
      { name: "HTML5 / CSS3", level: "Temel-Orta", note: "Semantik Web, Erişilebilirlik" },
    ],
  },
  {
    title: "Veritabanı & Veri Yönetimi",
    description: "İlişkisel veritabanı modelleme ve optimizasyon",
    skills: [
      { name: "MySQL", level: "Orta Düzey", note: "İlişkisel Şema, İndeksleme" },
      { name: "MSSQL", level: "Orta Düzey", note: "İlişkisel Şema, İndeksleme"},
      { name: "T-SQL", level: "Orta Düzey", note: "Stored Procedures, Triggers" },
      { name: "Firebase Firestore", level: "Orta Düzey", note: "Gerçek Zamanlı NoSQL" },
      { name: "Supabase", level: "Orta Düzey", note: "Gerçek Zamanlı NoSQL" }
    ],
  },
  {
    title: "DevOps, Ağ & Güvenlik",
    description: "Konteynerleştirme, web servisleri ve siber güvenlik",
    skills: [
      { name: "Docker", level: "Orta Düzey", note: "Konteyner Mimarisi & Compose" },
      { name: "SOAP & REST", level: "Orta Düzey", note: "Web Servisleri & Entegrasyon" },
      { name: "AWS", level: "Temel-Orta", note: "Bulut Bilişim Temelleri" },
      { name: "Cisco CyberOps", level: "Sertifikalı", note: "Ağ Güvenliği Temelleri" },
      { name: "Git & GitHub", level: "Orta-İleri", note: "Sürüm Kontrolü & CI/CD Akışları" },
    ],
  },
];

export const experienceTimeline = [
  {
    role: "Veri Tabanı Sistemleri Stajyer (Bilgi Teknolojileri)",
    company: "Halkbank",
    period: "2024-2025",
    type: "Kurumsal Staj",
    description: "T-SQL sorguların yazımı ile sorgunun nasıl çalıştığını buna bağlı olarak neden ve neyden kaynaklı ötürü yavaş olduğunu deneyimledim. Ayrıca bana verilmiş olan veri tabanı üzerinde tablolar yaptım ve bunlar arasında ilişkiler kurarak buralarda meydana gelebilecek hataları deneyimledim.",
    badges: ["Bankacılık IT", "Veri Tabanı & Backend", "BT Denetimi & Güvenlik", "Kurumsal Süreçler"],
  },
  {
    role: "Ara Katman Yönetimi Stajyer (Bilgi Teknolojileri)",
    company: "Halkbank",
    period: "2025-2026",
    type: "Kurumsal Staj",
    description: "IIS, RabbitMQ ve Redis gibi yazılımların entegrasyonu ile konfigürasyonu adına gözlem ve deneyimler.",
    badges: ["Bankacılık IT", "Ara Katman", "BT Denetimi & Güvenlik", "Kurumsal Süreçler"],
  },
  {
    role: "Bilgisayar Mühendisliği (Lisans Mezuniyeti)",
    company: "İstanbul Üniversitesi - Cerrahpaşa",
    period: "2021 — 2026 (Mezun)",
    type: "Lisans Eğitimi",
    description: "İstanbul Üniversitesi-Cerrahpaşa Bilgisayar Mühendisliği lisans programından başarıyla mezuniyet. Veri yapıları, algoritmalar, ilişkisel veri tabanları, ağ mimarisi, işletim sistemleri ve bilgi güvenliği üzerine kapsamlı teorik ve uygulamalı yetkinlik.",
    badges: ["Bilgisayar Mühendisliği", "Veri Tabanı Mimarisi", "Ağ Protokolleri", "Yazılım Mühendisliği"],
  },
  {
    role: "Cisco Cybersecurity & Network Associate",
    company: "Cisco Networking Academy",
    period: "Sertifikasyon",
    type: "Mesleki Sertifika",
    description: "Ağ mimarisi, TCP/IP ve yönlendirme protokolleri, güvenlik duvarları, zafiyet tarama, tehdit analizi ve kurumsal siber güvenlik denetim protokolleri üzerine sertifikalı eğitim.",
    badges: ["Ağ Mimarisi", "Siber Güvenlik", "BT Denetimi & Güvenlik", "Tehdit Analizi"],
  },
];

export const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ihsan-demirci-408846335/",
    username: "ihsan-demirci-408846335",
  },
  {
    platform: "GitHub",
    url: "https://github.com/DoritosLover1",
    username: "DoritosLover1",
  },
  {
    platform: "HackerRank",
    url: "https://hackerrank.com/profile/ihsan_demirci_10/",
    username: "ihsan_demirci_10",
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/DoritosLover1/",
    username: "DoritosLover1",
  },
];

