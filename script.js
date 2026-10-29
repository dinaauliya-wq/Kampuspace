/* =========================================
   1. DATA KAMPUS
   (isi s: "-" jika info beasiswa belum ada)
========================================= */

const DATA = [
  {
    n: "Universitas Multimedia Nusantara (UMN)",
    s: "Beasiswa prestasi akademik & KIP-Kuliah",
    a: "Kabupaten Tangerang",
    l: "Jalan Scientia Boulevard Gading, Curug Sangereng, Serpong, Kabupaten Tangerang, Banten 15810",
    t: "Swasta",
    c: "Premium",
    f: ["Teknologi", "Desain & Media", "Bisnis"],
    d: "Fokus pada media, informatika, dan desain dengan lingkungan kampus modern dan dekat industri kreatif."
  },
  {
    n: "Universitas Pelita Harapan (UPH)",
    s: "Beasiswa prestasi & bantuan biaya studi",
    a: "Kota Tangerang",
    l: "Jl. Boulevard Diponegoro No.1100, Klp. Dua, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15811",
    t: "Swasta",
    c: "Premium",
    f: ["Kedokteran & Kesehatan", "Hukum", "Bisnis", "Teknik"],
    d: "Kampus swasta besar dengan pilihan program luas, termasuk kedokteran, hukum, dan teknik."
  },
  {
    n: "Universitas Pembangunan Jaya (UPJ)",
    s: "Beasiswa prestasi & KIP-Kuliah",
    a: "Tangerang Selatan",
    l: "Jl. Boulevard UPJ, Bintaro Jaya, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413",
    t: "Swasta",
    c: "Menengah",
    f: ["Teknik", "Bisnis", "Desain & Media"],
    d: "Kampus di kawasan Bintaro dengan program teknik, arsitektur, bisnis, dan komunikasi."
  },
  {
    n: "UIN Syarif Hidayatullah Jakarta",
    s: "KIP-Kuliah & beasiswa prestasi",
    a: "Tangerang Selatan",
    l: "Jl. Ir H. Juanda No.95, Ciputat, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412",
    t: "Negeri",
    c: "Terjangkau",
    f: ["Keagamaan & Humaniora", "Kedokteran & Kesehatan", "Sains", "Hukum"],
    d: "Perguruan tinggi Islam negeri dengan beragam fakultas, dari kedokteran hingga sains dan teknologi."
  },
  {
    n: "Universitas Terbuka (UT)",
    s: "KIP-Kuliah & beasiswa prestasi",
    a: "Tangerang Selatan",
    l: "Jl. Pd. Cabe Raya, Pd. Cabe Udik, Kec. Pamulang, Kota Tangerang Selatan, Banten 15437",
    t: "Negeri",
    c: "Terjangkau",
    f: ["Pendidikan", "Bisnis", "Sains"],
    d: "Kampus negeri dengan sistem belajar jarak jauh, cocok untuk yang sambil bekerja."
  },
  {
    n: "Universitas Pamulang (Unpam)",
    s: "Beasiswa prestasi & KIP-Kuliah",
    a: "Tangerang Selatan",
    l: "Jl. Suryakencana No.1, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Bisnis", "Hukum", "Teknik", "Pendidikan"],
    d: "Kampus swasta dengan biaya relatif ramah kantong dan banyak pilihan program studi."
  },
  {
    n: "Universitas Muhammadiyah Tangerang (UMT)",
    s: "-",
    a: "Kota Tangerang",
    l: "Jl. Perintis Kemerdekaan I No.33, RT.007/RW.003, Babakan, Cikokol, Kec. Tangerang, Kota Tangerang, Banten 15118",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Pendidikan", "Bisnis", "Teknik", "Keagamaan & Humaniora"],
    d: "Kampus Muhammadiyah di Tangerang dengan program keguruan, ekonomi, dan teknik."
  },
  {
    n: "Institut Teknologi Indonesia (ITI)",
    s: "-",
    a: "Tangerang Selatan",
    l: "Jl. Puspitek, Setu, Kec. Serpong, Kota Tangerang Selatan, Banten 15314",
    t: "Swasta",
    c: "Menengah",
    f: ["Teknik", "Teknologi"],
    d: "Kampus teknologi di Serpong yang dekat dengan kawasan industri dan riset."
  },
  {
    n: "Universitas Prasetiya Mulya",
    s: "Beasiswa prestasi & bantuan biaya studi",
    a: "Tangerang Selatan",
    l: "Edu Town Kavling Edu I No. 1, Jalan BSD Raya Barat 1, Serpong, Pagedangan, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339",
    t: "Swasta",
    c: "Premium",
    f: ["Bisnis", "Teknologi"],
    d: "Dikenal lewat program bisnis dan kewirausahaan dengan kelas kecil dan budaya praktik."
  },
  {
    n: "Swiss German University (SGU)",
    s: "Beasiswa prestasi",
    a: "Tangerang Selatan",
    l: "The Prominence Tower Alam Sutera, Jl. Jalur Sutera Bar. No.Kav 15, RT.003/RW.006, Panunggangan Tim., Kec. Pinang, Kota Tangerang, Banten 15143",
    t: "Swasta",
    c: "Premium",
    f: ["Teknik", "Bisnis", "Teknologi"],
    d: "Kampus bernuansa internasional dengan kurikulum teknik dan bisnis serta program kerja sama luar negeri."
  },
  {
    n: "Universitas Pradita",
    s: "Beasiswa prestasi",
    a: "Kabupaten Tangerang",
    l: "Scientia Business Park, Jl. Gading Serpong Boulevard No.1 Tower 1, Curug Sangereng, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
    t: "Swasta",
    c: "Premium",
    f: ["Teknologi", "Bisnis", "Desain & Media"],
    d: "Kampus berbasis teknologi dengan penekanan pada keterampilan praktis dan kolaborasi industri."
  },
  {
    n: "BINUS Alam Sutera",
    s: "Beasiswa prestasi & KIP-Kuliah",
    a: "Tangerang Selatan",
    l: "Jl. Jalur Sutera Bar. No.Kav. 21, RT.001/RW.004, Panunggangan, Kec. Pinang, Kota Tangerang, Banten 15143",
    t: "Swasta",
    c: "Premium",
    f: ["Teknologi", "Bisnis", "Desain & Media"],
    d: "Kampus cabang BINUS di Alam Sutera dengan jurusan IT, bisnis, dan desain."
  },
  {
    n: "Universitas Buddhi Dharma",
    s: "-",
    a: "Kota Tangerang",
    l: "Jl. Imam Bonjol, RT.002/RW.003, Karawaci, Kec. Karawaci, Kota Tangerang, Banten 15115",
    t: "Swasta",
    c: "Menengah",
    f: ["Bisnis", "Teknologi", "Pendidikan"],
    d: "Kampus swasta di Kota Tangerang dengan program bisnis, teknologi informasi, dan pendidikan."
  },
  {
    n: "Syekh Yusuf Tangerang Islamic University",
    s: "KIP-Kuliah, Beasiswa Tahfiz Al-Quran, dan Beasiswa Tangerang Gemilang",
    a: "Kota Tangerang",
    l: "Jl. Maulana Yusuf No.10, RT.001/RW.003, Babakan, Kec. Tangerang, Kota Tangerang, Banten 15118",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Agama Islam", "Hukum", "Ekonomi dan Bisnis", "Sosial Politik", "Pendidikan", "Teknik", "Pascasarjana"],
    d: "Fokus pada pendidikan tinggi yang memadukan ilmu pengetahuan dan nilai-nilai keislaman."
  },
  {
    n: "Universitas Raharja",
    s: "Beasiswa Prestasi, Beasiswa Olahraga, dan KIP-Kuliah",
    a: "Kota Tangerang",
    l: "Modern, Jl. Jenderal Sudirman No.40, RT.002/RW.006, Cikokol, Kec. Tangerang, Kota Tangerang, Banten 15117",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Sains dan Teknologi", "Ekonomi dan Bisnis", "Desain & Media"],
    d: "Fokus pada pengembangan teknologi informasi, sains data, dan bisnis digital."
  },
  {
    n: "Universitas Nusa Mandiri",
    s: "Beasiswa Jalur Undangan, HEBAT, Digital Bisnis, dan KIP-Kuliah",
    a: "Kota Tangerang",
    l: "Daan Mogot Rd No.31, RT.001/RW.005, Sukarasa, Tangerang, Tangerang City, Banten 15111",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Teknologi Informasi", "Ekonomi dan Bisnis"],
    d: "Fokus pada teknologi informasi, sains data, dan bisnis digital."
  },
  {
    n: "Universitas Yatsi Madani",
    s: "-",
    a: "Kota Tangerang",
    l: "Jl. Aria Santika No.40A, RT.005/RW.011, Margasari, Kec. Karawaci, Kota Tangerang, Banten 15114",
    t: "Swasta",
    c: "Menengah",
    f: ["Ilmu Kesehatan", "Teknologi", "Bisnis"],
    d: "Fokus pada program pendidikan di bidang kesehatan, teknologi, dan bisnis."
  },
  {
    n: "Universitas Tangerang Raya Kampus B",
    s: "Beasiswa Non-Akademik, KIP-Kuliah, Beasiswa Daerah, dan Beasiswa Tahfiz Al-Quran",
    a: "Kota Tangerang",
    l: "Mahkota Mas, Jl. MH. Thamrin Jl. Kb. Nanas No.28-30 Blok E, RT.003/RW.006, Cikokol, Kec. Pinang, Kota Tangerang, Banten 15117",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Teknik", "Ekonomi dan Bisnis", "Hukum", "Keguruan dan Ilmu Pendidikan"],
    d: "Fokus pada pendidikan profesional di bidang teknik, ekonomi dan bisnis, hukum, serta pendidikan."
  },
  {
    n: "Universitas Muhammadiyah Tangerang",
    s: "Beasiswa Akademik, KIP-Kuliah, dan Beasiswa Tangerang Gemilang",
    a: "Kota Tangerang",
    l: "Jl. Perintis Kemerdekaan I No.33, RT.007/RW.003, Babakan, Cikokol, Kec. Tangerang, Kota Tangerang, Banten 15118",
    t: "Swasta",
    c: "Menengah",
    f: ["Ekonomi dan Bisnis", "Teknik", "Ilmu Kesehatan", "Keguruan dan Ilmu Pendidikan", "Hukum", "Pariwisata", "Kreatif"],
    d: "Pendidikan multidisiplin berbasis nilai-nilai Islam dan Muhammadiyah."
  },
  {
    n: "ITB Ahmad Dahlan Kampus B",
    s: "Bantuan Biaya Studi",
    a: "Kota Tangerang",
    l: "Gedung Perguruan Tinggi Muhammadiyah Karawaci, Jl. Imam Bonjol, RT.001/RW.006, West Panunggangan, Cibodas, Tangerang City, Banten 15138",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Ekonomi dan Bisnis", "Teknik", "Ilmu Kesehatan", "Teknik", "Desain"],
    d: "Bisnis, teknologi, kewirausahaan, dan socio-technopreneurship."
  },
  {
    n: "Bina Sarana Informatika, Campus C1",
    s: "KIP-Kuliah, Beasiswa Prestasi, Prestasi Jalur Undangan, Talent Suad, dan Talenta Digital",
    a: "Kota Tangerang",
    l: "Jl. Gatot Subroto No.8, RT.005/RW.001, Cimone, Kec. Karawaci, Kota Tangerang, Banten 15114",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Teknik dan Informatika", "Ekonomi dan Bisnis", "Komunikasi dan Bahasa", "Hukum", "Ilmu Kesehatan"],
    d: "Teknologi informasi, bisnis, komunikasi, dan keterampilan profesional berbasis digital."
  },
  {
    n: "UBM - Universitas Bunda Mulia",
    s: "-",
    a: "Kota Tangerang",
    l: "Alam Sutera, Jl. Jalur Sutera Bar. Blok 7-9, RT.003/RW.006, Panunggangan Tim., Kec. Pinang, Kota Tangerang, Banten 15143",
    t: "Swasta",
    c: "Premium",
    f: ["Teknologi dan Desain", "Ilmu Sosial dan Humaniora", "Ilmu Komunikasi", "Bisnis dan Ilmu Sosial"],
    d: "Pendidikan berbasis kebutuhan industri, pengembangan profesional, teknologi, dan bisnis."
  },
  {
    n: "Universitas Prasetiya Mulya - BSD Campus",
    s: "Young Scholar Indonesia, Bakti Prestasi, dan Beasiswa Atlet",
    a: "Kabupaten Tangerang",
    l: "Edu Town Kavling Edu I No. 1, Jalan BSD Raya Barat 1, Serpong, Pagedangan, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339",
    t: "Swasta",
    c: "Premium",
    f: ["Business and Economics", "School of Applied STEM", "Law and International Studies"],
    d: "Bisnis, kewirausahaan, inovasi, dan teknologi."
  },
  {
    n: "Universitas Bhakti Asih Tangerang",
    s: "KIP-Kuliah, dan Program Beasiswa lainnya",
    a: "Kota Tangerang",
    l: "Jl. Raden Patah Jl. Lembang II Lama No.62, RT.003/RW.010, Sudimara Bar., Kec. Ciledug, Kota Tangerang, Banten 15151",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Pendidikan Kesehatan", "Teknologi Digital", "Ilmu Sosial", "Informatika"],
    d: "Pendidikan kesehatan, teknologi digital, bisnis, dan hukum."
  },
  {
    n: "Global Institute",
    s: "-",
    a: "Kota Tangerang",
    l: "Jl. Aria Santika No.43, RT.005/RW.011, Margasari, Kec. Karawaci, Kota Tangerang, Banten 15113",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Teknologi Informasi dan komunikasi", "Bisnis dan Manajemen"],
    d: "Teknologi informasi, bisnis digital, manajemen ritel, dan media kreatif."
  },
  {
    n: "Universitas Salakanagara",
    s: "Beasiswa Tangerang Gemilang",
    a: "Kota Tangerang",
    l: "Jl. Teuku Umar, RT.001/RW.008, Nusa Jaya, Kec. Karawaci, Kota Tangerang, Banten 15116",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Hukum dan Bisnis", "Sains dan Teknologi", "Kesehatan"],
    d: "Kesehatan, teknologi informasi, manajemen, dan hukum."
  },
  {
    n: "Universitas Esa Unggul",
    s: "Beasiswa Prestasi, dan KIP-Kuliah",
    a: "Kabupaten Tangerang",
    l: "Jl. Citra Raya Boulevard Blok S No.01 25, Panongan, Kec. Panongan, Kabupaten Tangerang, Banten 15711",
    t: "Swasta",
    c: "Menengah",
    f: ["Ekonomi dan Bisnis", "Ilmu Komunikasi", "Hukum", "Psikologi", "Ilmu Komputer", "Teknik", "Desain dan Industri Kreatif", "Kesehatan", "Fisioterapi", "Pendidikan"],
    d: "Bisnis, teknologi digital, komunikasi, industri kreatif, kesehatan, dan pengembangan profesional."
  },
  {
    n: "Universitas Pramita Indonesia",
    s: "-",
    a: "Kabupaten Tangerang",
    l: "Jl. Kampus Pramita, Binong, Kec. Curug, Kabupaten Tangerang, Banten 15810",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Ekonomi dan Bisnis", "Sains dan Teknologi", "Ilmu Sosial", "Ilmu Politik"],
    d: "Bisnis, teknologi dan teknik, komunikasi, serta ilmu pemerintahan."
  },
  {
    n: "Campus Immigration and Correctional Polytechnic Tangerang",
    s: "-",
    a: "Kota Tangerang",
    l: "RJHV+C4F, RT.001/RW.014, Tanah Tinggi, Tangerang, Tangerang City, Banten 15119",
    t: "Negeri",
    c: "Mengikuti ketentuan Resmi",
    f: ["Keimigrasian", "Pemasarakatan"],
    d: "Pendidikan kedinasan, pelayanan keimigrasian, pembinaan pemasyarakatan, kepemimpinan, dan integritas."
  },
  {
    n: "STIMIK Antar Bangsa",
    s: "-",
    a: "Kota Tangerang",
    l: "Kawasan Bisnis CBD Ciledug, Jl. HOS Cokroaminoto No.29-35 Blok A5, RT.001/RW.001, Karang Tengah, Kec. Karang Tengah, Kota Tangerang, Banten 15157",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Teknik Informatika", "Sistem Informasi"],
    d: "Teknologi informasi, pemrograman, kecerdasan buatan, keamanan siber, dan sistem informasi."
  },
  {
    n: "Universitas Surya",
    s: "-",
    a: "Kota Tangerang",
    l: "F8 & F9 Grand Serpong Mall Jalan MH. Thamrin Panunggangan Utara Pinang Tangerang Banten 15143 ID Jalan MH. Thamrin Banten ID, Jl. MH. Thamrin, RT.007/RW.001, Panunggangan Utara, Kec. Pinang, Kota Tangerang, Banten 15143",
    t: "Swasta",
    c: "Menengah",
    f: ["Sosial dan Ekonomi", "Teknik", "Ilmu Hayati"],
    d: "Sains, teknologi, penelitian, bisnis, dan inovasi."
  },
  {
    n: "Universitas Gunadarma Campus K",
    s: "KIP-Kuliah, Beasiswa Prestasi akademik, dan Bantuan Biaya",
    a: "Kabupaten Tangerang",
    l: "Jl. Kelapa Dua Raya No.93, Klp. Dua, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
    t: "Swasta",
    c: "Menengah",
    f: ["Ilmu Komputer dan Teknologi Informasi", "Teknologi Industri", "Ekonomi", "Teknik Sipil", "Psikologi", "Sastra dan Budaya", "Ilmu Komunikasi", "Kedokteran", "Farmasi"],
    d: "Teknologi informasi, bisnis, teknik, dan pengembangan keterampilan profesional."
  },
  {
    n: "STMIK PGRI Tangerang",
    s: "-",
    a: "Kota Tangerang",
    l: "Jl. Perintis Kemerdekaan II, RT.007/RW.003, Cikokol, Kec. Tangerang, Kota Tangerang, Banten 15118, Indonesia",
    t: "Swasta",
    c: "Terjangkau",
    f: ["Sistem Informasi", "Teknik Informatika"],
    d: "Teknologi informasi, pengelolaan sistem digital, pemrograman, dan pengembangan perangkat lunak."
  },
  {
    n: "Universitas Cendekia Abditama",
    s: "-",
    a: "Kabupaten Tangerang",
    l: "Jl. Islamic Raya, Kelapa Dua, Kabupaten Tangerang, Banten 15811.",
    t: "Swasta",
    c: "Menengah",
    f: ["Sistem Elektro", "Teknik Informatika"],
    d: "Teknologi informasi, pemrograman, elektronika, dan sistem kelistrikan."
  },
];

/* =========================================
   2. HELPER
========================================= */

const $ = (id) => document.getElementById(id);

// Kampus dianggap punya info beasiswa jika s tidak kosong dan bukan "-"
function hasScholarship(campus) {
  const info = (campus.s || "").trim();
  return info !== "" && info !== "-";
}


/* =========================================
   3. MENGISI FILTER OTOMATIS
========================================= */

function fillFilter(id, key) {
  const select = $(id);

  const values = [
    ...new Set(DATA.map((campus) => campus[key]))
  ].sort((a, b) => a.localeCompare(b, "id"));

  values.forEach((value) => {
    const option = document.createElement("option");

    option.value = value;
    option.textContent = value;

    select.appendChild(option);
  });
}

fillFilter("area", "a");
fillFilter("type", "t");


/* =========================================
   4. MEMBUAT BADGE
========================================= */

function createBadge(text, outlined = false) {
  const badge = document.createElement("span");

  badge.className = outlined ? "b o" : "b";
  badge.textContent = text;

  return badge;
}


/* =========================================
   5. MEMBUAT KARTU KAMPUS
========================================= */

function createCampusCard(campus) {
  const card = document.createElement("article");
  card.className = "card";

  // Nama kampus
  const title = document.createElement("h2");
  title.textContent = campus.n;

  // Lokasi kampus
  const location = document.createElement("p");
  location.className = "loc";
  location.textContent = `${campus.l}, ${campus.a}`;

  // Jenis kampus dan kategori biaya
  const badges = document.createElement("div");
  badges.className = "badges";
  
  const typeBadge = createBadge(campus.t);
  typeBadge.classList.add("badge-type");
  
  const costBadge = createBadge(`Biaya: ${campus.c}`);
  costBadge.classList.add("badge-cost");
  
  badges.append(typeBadge, costBadge);
  
  // Informasi beasiswa
  const scholarship = document.createElement("p");
  const hasInfo = hasScholarship(campus);

  scholarship.className = hasInfo ? "sch yes" : "sch no";

  scholarship.textContent = hasInfo
    ? `✦ Peluang Beasiswa: ${campus.s}`
    : "✦ Informasi beasiswa belum tersedia. Cek situs resmi kampus.";

  // Deskripsi kampus
  const description = document.createElement("p");
  description.className = "d";
  description.textContent = campus.d;

  // Bidang studi
  const fields = document.createElement("div");
  fields.className = "badges";

  campus.f.forEach((field) => {
  const fieldBadge = createBadge(field, true);
  fieldBadge.classList.add("badge-field");

  fields.appendChild(fieldBadge);
});

  // Tautan pencarian informasi
  const link = document.createElement("a");

  link.href =
    "https://www.google.com/search?q=" +
    encodeURIComponent(`${campus.n} pendaftaran`);

  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Cari info pendaftaran";

  // Gabungkan elemen kartu
  card.append(
    title,
    location,
    badges,
    scholarship,
    description,
    fields,
    link
  );

  return card;
}


/* =========================================
   6. PENCARIAN & FILTER KAMPUS
========================================= */

function render() {
  const query = $("q").value.trim().toLowerCase();
  const area = $("area").value;
  const type = $("type").value;
  const cost = $("cost").value;
  const scholarshipFilter = $("sch").value;

  const results = DATA.filter((campus) => {
    // Teks yang dapat dicari
    const searchableText = [
      campus.n,
      campus.a,
      campus.l,
      campus.t,
      campus.c,
      hasScholarship(campus) ? campus.s : "",
      campus.d,
      ...campus.f
    ]
      .join(" ")
      .toLowerCase();

    // Periksa setiap filter
    const matchesSearch =
      !query || searchableText.includes(query);

    const matchesArea =
      !area || campus.a === area;

    const matchesType =
      !type || campus.t === type;

    const matchesCost =
      !cost || campus.c === cost;

    const matchesScholarship =
      !scholarshipFilter ||
      (scholarshipFilter === "ada" && hasScholarship(campus));

    return (
      matchesSearch &&
      matchesArea &&
      matchesType &&
      matchesCost &&
      matchesScholarship
    );
  });

  // Perbarui jumlah hasil
  $("count").textContent =
    `${results.length} kampus ditemukan`;

  // Bersihkan hasil sebelumnya
  const list = $("list");
  list.replaceChildren();

  // Tampilkan pesan jika tidak ada hasil
  if (results.length === 0) {
    list.className = "";

    const emptyMessage = document.createElement("div");
    emptyMessage.className = "empty";
    emptyMessage.textContent =
      "Tidak ada kampus yang cocok. Coba kata kunci lain atau hapus beberapa filter.";

    list.appendChild(emptyMessage);
    return;
  }

  // Tampilkan kartu kampus
  list.className = "grid";

  results.forEach((campus) => {
    list.appendChild(createCampusCard(campus));
  });
}


/* =========================================
   7. EVENT LISTENERS
========================================= */

// Pencarian dan perubahan filter
["q", "area", "type", "cost", "sch"].forEach((id) => {
  const element = $(id);

  element.addEventListener(
    id === "q" ? "input" : "change",
    render
  );
});


/* =========================================
   8. TOMBOL HAPUS FILTER
========================================= */

$("reset").addEventListener("click", () => {
  $("q").value = "";
  $("area").value = "";
  $("type").value = "";
  $("cost").value = "";
  $("sch").value = "";

  render();
});


/* =========================================
   9. TAMPILKAN DATA AWAL
========================================= */

render();