
const productsData = [
    {
        "id": 1,
        "name": "PC Gaming Apex Pro (Intel i5-13400F / RTX 4060 8GB / 16GB DDR5 / 512GB SSD)",
        "specs": "Case kính cường lực RGB / Tản nhiệt khí / Bảo hành 36 tháng",
        "price": 18290000,
        "oldPrice": 22900000,
        "img": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Custom"
    },
    {
        "id": 2,
        "name": "PC Gaming Phantom X (i7-14700K / RTX 4070 Ti Super 16GB / 32GB RAM / 1TB SSD)",
        "specs": "Tản nhiệt nước AIO RGB / Nguồn 850W Gold / Case Bể cá",
        "price": 36990000,
        "oldPrice": 41500000,
        "img": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Custom"
    },
    {
        "id": 3,
        "name": "PC Gaming Cyber Beast (Ryzen 7 7800X3D / RX 7900 XTX 24GB / 32GB RAM)",
        "specs": "Cấu hình chuyên game Esport & Render 4K / Tản AIO 360",
        "price": 45990000,
        "oldPrice": 50900000,
        "img": "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Custom"
    },
    {
        "id": 4,
        "name": "PC Văn Phòng Office Pro (Intel Core i5-13400 / 16GB RAM / 512GB NVMe)",
        "specs": "Case văn phòng gọn đẹp / Đã cài sẵn Windows 11 bản quyền",
        "price": 10990000,
        "oldPrice": 12500000,
        "img": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Intel"
    },
    {
        "id": 5,
        "name": "PC Mini Creator Station (Intel i7-14700 / 32GB DDR5 / 1TB SSD Gen4)",
        "specs": "Kích thước ITX siêu nhỏ gọn / Tối ưu đồ họa Photoshop, Premiere",
        "price": 28990000,
        "oldPrice": 32500000,
        "img": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Intel"
    },
    {
        "id": 6,
        "name": "PC Gaming Dragon Force (i9-14900KF / RTX 4080 Super 16GB / 64GB DDR5)",
        "specs": "Tản nước Custom đầy đủ / Đèn LED ARGB / Main Z790 Premium",
        "price": 64990000,
        "oldPrice": 72000000,
        "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "Custom"
    },
    {
        "id": 7,
        "name": "PC Gaming Esport Master (Ryzen 5 7500F / RTX 4060 Ti 8GB / 16GB RAM)",
        "specs": "Tối ưu cho CS2, Valorant, LMHT 300+ FPS",
        "price": 20990000,
        "oldPrice": 24500000,
        "img": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "AMD"
    },
    {
        "id": 8,
        "name": "PC Gaming Titan Extreme (Ryzen 9 7950X3D / RTX 4090 24GB / 64GB RAM)",
        "specs": "Siêu máy tính đỉnh cao / Nguồn 1200W Platinum / SSD 2TB",
        "price": 89990000,
        "oldPrice": 99000000,
        "img": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
        "category": "PC Gaming",
        "brand": "AMD"
    },
    {
        "id": 9,
        "name": "RAM Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz Black",
        "specs": "Bus 6000MHz / Tản nhiệt nhôm / Đèn LED RGB đổi màu",
        "price": 3190000,
        "oldPrice": 3750000,
        "img": "https://images.unsplash.com/photo-1562976540-1e02c510c4f8?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Corsair"
    },
    {
        "id": 10,
        "name": "RAM G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 6400MHz Silver",
        "specs": "Bus 6400MHz / Tản nhôm phay xước / Chuẩn Intel XMP 3.0",
        "price": 3690000,
        "oldPrice": 4250000,
        "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "G.Skill"
    },
    {
        "id": 11,
        "name": "RAM Kingston Fury Beast RGB 64GB (2x32GB) DDR5 5600MHz",
        "specs": "Dung lượng khủng 64GB / Tản nhiệt thép đen / RGB",
        "price": 5290000,
        "oldPrice": 6100000,
        "img": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Kingston"
    },
    {
        "id": 12,
        "name": "RAM Kingston Fury Beast 16GB (1x16GB) DDR5 5600MHz",
        "specs": "Bus 5600MHz / Độ ổn định cao / Bảo hành 36 tháng",
        "price": 1590000,
        "oldPrice": 1890000,
        "img": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Kingston"
    },
    {
        "id": 13,
        "name": "RAM TeamGroup T-Force Delta RGB 32GB (2x16GB) DDR5 6000MHz White",
        "specs": "Thiết kế góc cạnh màu trắng / Dải LED góc rộng 120 độ",
        "price": 2990000,
        "oldPrice": 3490000,
        "img": "https://images.unsplash.com/photo-1562976540-1e02c510c4f8?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "TeamGroup"
    },
    {
        "id": 14,
        "name": "RAM Crucial 16GB (1x16GB) DDR4 3200MHz SODIMM Laptop",
        "specs": "RAM dành riêng cho Laptop / Bus 3200MHz / Điện áp 1.2V",
        "price": 990000,
        "oldPrice": 1250000,
        "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Crucial"
    },
    {
        "id": 15,
        "name": "RAM Corsair Dominator Titanium RGB 64GB (2x32GB) DDR5 6000MHz",
        "specs": "Dòng RAM cao cấp nhất Corsair / Tự do thay thế nắp tản nhiệt",
        "price": 6890000,
        "oldPrice": 7900000,
        "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Corsair"
    },
    {
        "id": 16,
        "name": "RAM Kingston Fury Renegade RGB 32GB (2x16GB) DDR5 7200MHz",
        "specs": "Bus siêu tốc 7200MHz / Chuyên dành cho Ép xung (OC)",
        "price": 4190000,
        "oldPrice": 4890000,
        "img": "https://images.unsplash.com/photo-1562976540-1e02c510c4f8?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Kingston"
    },
    {
        "id": 17,
        "name": "Chuột Gaming Logitech G Pro X Superlight 2 Wireless White",
        "specs": "Siêu nhẹ 60g / Mắt đọc HERO 2 32.000 DPI / Switch Hybrid",
        "price": 2990000,
        "oldPrice": 3590000,
        "img": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Logitech"
    },
    {
        "id": 18,
        "name": "Chuột Gaming Razer DeathAdder V3 Pro Wireless Black",
        "specs": "Cảm biến Focus Pro 30K Optical / Trọng lượng 63g / Form công thái học",
        "price": 3290000,
        "oldPrice": 3890000,
        "img": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Razer"
    },
    {
        "id": 19,
        "name": "Chuột Gaming Logitech G502 X Plus Wireless RGB Black",
        "specs": "Cảm biến HERO 25K / Switch LIGHTFORCE / Con lăn cuộn cuộn siêu tốc",
        "price": 2990000,
        "oldPrice": 3590000,
        "img": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Logitech"
    },
    {
        "id": 20,
        "name": "Chuột Không Dây Razer Basilisk V3 Pro Wireless RGB",
        "specs": "Cảm biến Focus Pro 30K / Con lăn Razer HyperScroll / Đèn Chroma 13 vùng",
        "price": 3790000,
        "oldPrice": 4390000,
        "img": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Razer"
    },
    {
        "id": 21,
        "name": "Chuột Gaming Lamzu Atlantis V2 Pro Wireless 4K White",
        "specs": "Trọng lượng 54g siêu nhẹ / Mắt đọc PAW3395 / Kèm Dongle 4000Hz",
        "price": 2690000,
        "oldPrice": 3150000,
        "img": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Lamzu"
    },
    {
        "id": 22,
        "name": "Chuột Gaming Pulsar X2V2 Wireless Medium Black",
        "specs": "Cảm biến PAW 3395 / Optical Switches chống double click / 51g",
        "price": 2490000,
        "oldPrice": 2890000,
        "img": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Pulsar"
    },
    {
        "id": 23,
        "name": "Chuột Zowie EC2-CW Wireless Gaming Mouse for Esports",
        "specs": "Thiết kế chuẩn thi đấu FPS / Kết nối Wireless ổn định cao",
        "price": 3890000,
        "oldPrice": 4390000,
        "img": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Zowie"
    },
    {
        "id": 24,
        "name": "Chuột Văn Phòng Logitech MX Master 3S Advanced Wireless",
        "specs": "Mắt đọc 8000 DPI lướt trên kính / Con lăn MagSpeed yên tĩnh 90%",
        "price": 2490000,
        "oldPrice": 2990000,
        "img": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Logitech"
    },
    {
        "id": 25,
        "name": "Chuột Gaming Pulsar Xlite V3 Esports Wireless (Red)",
        "specs": "Thiết kế Ergonomic ôm tay / Tần số phản hồi 4K Polling Rate",
        "price": 2790000,
        "oldPrice": 3290000,
        "img": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Pulsar"
    },
    {
        "id": 26,
        "name": "Chuột Gaming VXE Dragonfly R1 Pro Max Wireless",
        "specs": "Chip Nordic 52840 / Cảm biến PAW3395 / Siêu nhẹ 55g",
        "price": 1290000,
        "oldPrice": 1590000,
        "img": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "VXE"
    },
    {
        "id": 27,
        "name": "Màn Hình Gaming LG UltraGear 27GR75Q-B 27 inch 240Hz",
        "specs": "QHD 2K / 1ms / Tấm nền IPS / Hỗ trợ G-Sync & FreeSync",
        "price": 6990000,
        "oldPrice": 8500000,
        "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "LG"
    },
    {
        "id": 28,
        "name": "Màn Hình Dell UltraSharp U2724D 27 inch IPS Black 2K 120Hz",
        "specs": "Độ phân giải 2K QHD / IPS Black độ tương phản 2000:1 / 120Hz",
        "price": 9890000,
        "oldPrice": 11600000,
        "img": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "Dell"
    },
    {
        "id": 29,
        "name": "Màn Hình ASUS ROG Swift OLED PG32UCDM 32 inch 4K 240Hz",
        "specs": "Tấm nền QD-OLED 4K / Tốc độ phản hồi 0.03ms / 240Hz HDR",
        "price": 34990000,
        "oldPrice": 39900000,
        "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "ASUS"
    },
    {
        "id": 30,
        "name": "Màn Hình Dell UltraSharp U2424H 24 inch IPS 120Hz",
        "specs": "FHD 1080p / Viền siêu mỏng / Chuẩn màu 100% sRGB / Cổng Type-C",
        "price": 5490000,
        "oldPrice": 6300000,
        "img": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "Dell"
    },
    {
        "id": 31,
        "name": "Màn Hình Samsung Odyssey G5 27 inch 165Hz 1ms QHD Curved",
        "specs": "Màn hình cong 1000R / QHD 2K / 165Hz / HDR10",
        "price": 5990000,
        "oldPrice": 7200000,
        "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "Samsung"
    },
    {
        "id": 32,
        "name": "Màn Hình ASUS TUF Gaming VG27AQ3A 27 inch QHD 180Hz",
        "specs": "Fast IPS 2K / 180Hz / 1ms / Công nghệ ELMB Sync",
        "price": 6290000,
        "oldPrice": 7500000,
        "img": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "ASUS"
    },
    {
        "id": 33,
        "name": "Màn Hình ViewSonic Omni VX2718-2KPC-MHD 27 inch 165Hz",
        "specs": "Cong 1500R / QHD 2K / Tần số 165Hz / Loa tích hợp",
        "price": 4590000,
        "oldPrice": 5600000,
        "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "ViewSonic"
    },
    {
        "id": 34,
        "name": "Màn Hình AOC 24G2SP 24 inch IPS 165Hz 1ms Chuyên Game",
        "specs": "Full HD / Tấm nền IPS / 165Hz / Chân đế xoay linh hoạt",
        "price": 3690000,
        "oldPrice": 4400000,
        "img": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "AOC"
    },
    {
        "id": 35,
        "name": "Màn Hình LG UltraWide 34WQ75P-B 34 inch IPS Curved 21:9",
        "specs": "WQHD 3440x1440 / Màn cong tỉ lệ 21:9 / Cổng USB-C sạc 90W",
        "price": 9990000,
        "oldPrice": 11900000,
        "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "LG"
    },
    {
        "id": 36,
        "name": "Màn Hình Gigabyte M27Q 27 inch IPS QHD 170Hz KVM",
        "specs": "QHD 2K / 170Hz / 0.5ms / Tích hợp bộ chuyển đổi KVM Switch",
        "price": 7290000,
        "oldPrice": 8600000,
        "img": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "Gigabyte"
    },
    {
        "id": 37,
        "name": "Màn Hình MSI Optix MAG321QR-QD 32 inch IPS 2K 170Hz",
        "specs": "Công nghệ Chấm lượng tử Quantum Dot / WQHD / 170Hz",
        "price": 9490000,
        "oldPrice": 11200000,
        "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "MSI"
    },
    {
        "id": 38,
        "name": "Màn Hình Acer Nitro XV275K P3 27 inch 4K Mini LED 160Hz",
        "specs": "Độ phân giải 4K / Công nghệ Mini LED 576 Local Dimming / 160Hz",
        "price": 14990000,
        "oldPrice": 17500000,
        "img": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80",
        "category": "Màn hình",
        "brand": "Acer"
    },
    {
        "id": 39,
        "name": "Card Màn Hình ASUS ROG Strix GeForce RTX 4070 OC 12GB",
        "specs": "RTX 4070 / 12GB GDDR6X / Tản nhiệt 3 quạt Axial-tech",
        "price": 16990000,
        "oldPrice": 20500000,
        "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "ASUS"
    },
    {
        "id": 40,
        "name": "CPU Intel Core i7-14700K (3.4GHz Boost up to 5.6GHz, 20 Nhân 28 Luồng)",
        "specs": "Socket LGA 1700 / Bộ nhớ đệm 33MB Cache / Hàng chính hãng",
        "price": 10490000,
        "oldPrice": 12350000,
        "img": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Intel"
    },
    {
        "id": 41,
        "name": "Mainboard MSI MAG Z790 TOMAHAWK WIFI (DDR5)",
        "specs": "Socket LGA 1700 / 4 x DDR5 / Wi-Fi 6E / PCIe 5.0",
        "price": 7490000,
        "oldPrice": 8500000,
        "img": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "MSI"
    },
    {
        "id": 42,
        "name": "Ổ Cứng SSD Samsung 990 PRO 2TB M.2 NVMe PCIe 4.0",
        "specs": "Tốc độ đọc 7450 MB/s / Tốc độ ghi 6900 MB/s / DRAM Cache 2GB",
        "price": 4290000,
        "oldPrice": 5700000,
        "img": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Samsung"
    },
    {
        "id": 43,
        "name": "Laptop Gaming Acer Nitro 5 Tiger (i5-12500H / RTX 3050 4GB)",
        "specs": "Màn hình 15.6 inch FHD 144Hz / 16GB RAM / 512GB SSD",
        "price": 17490000,
        "oldPrice": 20500000,
        "img": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Acer"
    },
    {
        "id": 44,
        "name": "Laptop Lenovo Legion Pro 5 16IRX9 (i7-14700HX / RTX 4060 8GB)",
        "specs": "Màn 16 inch WQXGA 240Hz 500 nits / 16GB RAM / 1TB SSD",
        "price": 37990000,
        "oldPrice": 42200000,
        "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Lenovo"
    },
    {
        "id": 45,
        "name": "MacBook Air 13 inch M3 2024 (8CPU / 8GPU / 8GB RAM / 256GB SSD)",
        "specs": "Chip Apple M3 / Màn Liquid Retina siêu nét / Pin 18 tiếng",
        "price": 26990000,
        "oldPrice": 31490000,
        "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "Apple"
    },
    {
        "id": 46,
        "name": "CPU AMD Ryzen 7 7800X3D (8 Nhân 16 Luồng, Box Chính Hãng)",
        "specs": "Socket AM5 / 96MB L3 V-Cache / CPU Gaming tốt nhất",
        "price": 11290000,
        "oldPrice": 13500000,
        "img": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "AMD"
    },
    {
        "id": 47,
        "name": "Card Màn Hình GIGABYTE GeForce RTX 4060 Eagle OC 8G",
        "specs": "RTX 4060 / 8GB GDDR6 / 3 Quạt tản nhiệt WINDFORCE",
        "price": 8290000,
        "oldPrice": 10600000,
        "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Gigabyte"
    },
    {
        "id": 48,
        "name": "Bàn Phím Cơ Không Dây Akko 3098B Multi-mode Dracula Castle",
        "specs": "Hỗ trợ Hot-swap / Đèn LED RGB / Switch Akko CS",
        "price": 1890000,
        "oldPrice": 2350000,
        "img": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Akko"
    },
    {
        "id": 49,
        "name": "Tai Nghe Gaming HyperX Cloud III Wireless Chính Hãng",
        "specs": "Thời lượng pin lên đến 120 giờ / Âm thanh DTS Spatial Audio",
        "price": 2490000,
        "oldPrice": 2950000,
        "img": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "HyperX"
    },
    {
        "id": 50,
        "name": "Ghế Công Thái Học Ergonomic Sihoo M57 Chính Hãng",
        "specs": "Chất liệu lưới thoáng khí cao cấp / Ngả lưng 126 độ / Tay 3D",
        "price": 3290000,
        "oldPrice": 3990000,
        "img": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Sihoo"
    },
    {
        "id": 51,
        "name": "Nguồn máy tính ASUS ROG Thor 850P II 850W Platinum",
        "specs": "Công suất 850W / Chuẩn 80 Plus Platinum / Màn hình OLED hiển thị W",
        "price": 5490000,
        "oldPrice": 6490000,
        "img": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "ASUS"
    },
    {
        "id": 52,
        "name": "Card Màn Hình NVIDIA GeForce RTX 4080 Super 16GB FE",
        "specs": "RTX 4080 Super / 16GB GDDR6X / Đồ họa 4K & Ray Tracing đỉnh cao",
        "price": 28990000,
        "oldPrice": 32500000,
        "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "NVIDIA"
    },
    {
        "id": 53,
        "name": "CPU Intel Core i9-14900KS (6.2GHz, 24 Nhân 32 Luồng)",
        "specs": "Socket LGA 1700 / Xử lý đồ họa nặng & Game đỉnh cao",
        "price": 15990000,
        "oldPrice": 18200000,
        "img": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Intel"
    },
    {
        "id": 54,
        "name": "Ổ Cứng SSD Kingston KC3000 2TB M.2 NVMe PCIe 4.0",
        "specs": "Đọc 7000 MB/s / Ghi 7000 MB/s / Tản nhiệt lá nhôm mỏng",
        "price": 3690000,
        "oldPrice": 4400000,
        "img": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Kingston"
    },
    {
        "id": 55,
        "name": "Mainboard ASUS ROG Maximus Z790 Hero (DDR5)",
        "specs": "Socket E-ATX / 20+1 Power Stages / Tích hợp Wi-Fi 7",
        "price": 14990000,
        "oldPrice": 16900000,
        "img": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "ASUS"
    },
    {
        "id": 56,
        "name": "Laptop ASUS ROG Strix Scar 17 X3D (Ryzen 9 7945HX3D / RTX 4090)",
        "specs": "17.3 inch QHD 240Hz / 32GB RAM / 2TB SSD / Bàn phím cơ",
        "price": 79990000,
        "oldPrice": 88000000,
        "img": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
        "category": "Laptop",
        "brand": "ASUS"
    },
    {
        "id": 57,
        "name": "Bàn Phím Cơ Keychron Q1 Max Wireless QMK/VIA (RGB / Gateron)",
        "specs": "Vỏ nhôm nguyên khối CNC / Kết nối 3 chế độ / Hỗ trợ Hot-swap",
        "price": 3890000,
        "oldPrice": 4500000,
        "img": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Keychron"
    },
    {
        "id": 58,
        "name": "Tai Nghe Razer BlackShark V2 Pro Wireless Esports",
        "specs": "Màng loa TriForce Titanium 50mm / Micro HyperClear Super Wideband",
        "price": 3990000,
        "oldPrice": 4690000,
        "img": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
        "category": "Gear",
        "brand": "Razer"
    },
    {
        "id": 59,
        "name": "Tản Nhiệt Nước AIO NZXT Kraken Elite 360 RGB Black",
        "specs": "Màn hình LCD 2.36 inch tùy chỉnh hình GIF / Két nước 360mm",
        "price": 6890000,
        "oldPrice": 7800000,
        "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "NZXT"
    },
    {
        "id": 60,
        "name": "Nguồn Corsair HX1200i 1200W 80 Plus Platinum Fully Modular",
        "specs": "Công suất 1200W / Chuẩn Platinum / Quạt FDB Zero RPM 140mm",
        "price": 6490000,
        "oldPrice": 7500000,
        "img": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
        "category": "Linh kiện PC",
        "brand": "Corsair"
    }
];

function getCart() {
    let cart = localStorage.getItem('celltech_cart');
    return cart ? JSON.parse(cart) : [];
}
function saveCart(cart) {
    localStorage.setItem('celltech_cart', JSON.stringify(cart));
    updateCartCount();
}
function updateCartCount() {
    let cart = getCart();
    let totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    let badge = document.getElementById('cartCount');
    if (badge) badge.innerText = totalCount;
}
function addToCart(name, price, img) {
    let cart = getCart();
    let found = cart.find(item => item.name === name);
    let image = img || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80';
    if (found) { found.qty++; } else {
        cart.push({ name: name, price: price, qty: 1, img: image });
    }
    saveCart(cart);
    showToast(`Đã thêm "${name}" vào giỏ hàng!`);
}
function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2500);
}

function getCurrentUser() {
    let userStr = localStorage.getItem('celltech_current_user');
    return userStr ? JSON.parse(userStr) : null;
}

function checkAdminAccess() {
    let user = getCurrentUser();
    if (!user || user.role !== 'admin') {
        alert('Bạn không có quyền truy cập trang quản trị! Vui lòng đăng nhập tài khoản Admin.');
        window.location.href = 'login.html';
    }
}

function handleLogin(e) {
    e.preventDefault();
    let username = document.getElementById('loginUser').value.trim();
    let pass = document.getElementById('loginPass').value;

    if ((username === 'admin' || username.toLowerCase() === 'đỗ phạm trung tính') && pass === '123456') {
        let adminUser = { name: 'Đỗ Phạm Trung Tính', username: 'admin', role: 'admin' };
        localStorage.setItem('celltech_current_user', JSON.stringify(adminUser));
        alert('Đăng nhập thành công với quyền Quản trị viên!');
        window.location.href = 'admin.html';
        return;
    }

    if (username === 'yeukimtruc' && pass === '09022007') {
        let yktUser = { name: 'Yêu Kim Trúc', username: 'yeukimtruc', role: 'user' };
        localStorage.setItem('celltech_current_user', JSON.stringify(yktUser));
        alert('Đăng nhập thành công với tài khoản yeukimtruc!');
        window.location.href = 'index.html';
        return;
    }

    let users = JSON.parse(localStorage.getItem('celltech_users') || '[]');
    let foundUser = users.find(u => u.username === username && u.pass === pass);
    if (foundUser) {
        localStorage.setItem('celltech_current_user', JSON.stringify(foundUser));
        alert('Đăng nhập thành công!');
        window.location.href = 'index.html';
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
}

function handleRegister(e) {
    e.preventDefault();
    let name = document.getElementById('regName').value.trim();
    let username = document.getElementById('regUser').value.trim();
    let pass = document.getElementById('regPass').value;

    let users = JSON.parse(localStorage.getItem('celltech_users') || '[]');
    if (users.some(u => u.username === username)) {
        alert('Tên đăng nhập này đã tồn tại!');
        return;
    }

    let newUser = { name: name, username: username, pass: pass, role: 'user' };
    users.push(newUser);
    localStorage.setItem('celltech_users', JSON.stringify(users));
    alert('Đăng ký tài khoản thành công! Vui lòng đăng nhập.');
    window.location.href = 'login.html';
}

function logoutUser() {
    localStorage.removeItem('celltech_current_user');
    alert('Đã đăng xuất tài khoản!');
    window.location.href = 'index.html';
}

function updateHeaderAuth() {
    let user = getCurrentUser();
    let authContainer = document.getElementById('authHeaderContainer');
    if (!authContainer) return;

    if (user) {
        let roleBadge = user.role === 'admin' ? '<span style="color:#ffeb3b; font-weight:bold;">(Admin)</span>' : '';
        authContainer.innerHTML = `
            <span style="color:white; font-size:12px;">Xin chào, <b>${user.name}</b> ${roleBadge}</span>
            ${user.role === 'admin' ? '<a href="admin.html" class="admin-link"><i class="fa-solid fa-user-shield"></i> Admin</a>' : ''}
            <button onclick="logoutUser()" style="background:rgba(255,255,255,0.2); border:none; color:white; padding:4px 8px; border-radius:4px; cursor:pointer; font-size:11px;">Đăng xuất</button>
        `;
    } else {
        authContainer.innerHTML = `
            <a href="login.html" class="admin-link" style="color:white;"><i class="fa-solid fa-right-to-bracket"></i> Đăng nhập / Đăng ký</a>
        `;
    }
}

function initPredefinedUsers() {
    let users = JSON.parse(localStorage.getItem('celltech_users') || '[]');
    let targetUser = users.find(u => u.username === 'yeukimtruc');
    if (!targetUser) {
        users.push({ name: 'Yêu Kim Trúc', username: 'yeukimtruc', pass: '09022007', role: 'user' });
        localStorage.setItem('celltech_users', JSON.stringify(users));
    }
}

let currentQty = 1;
let activeProduct = null;

function initProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    activeProduct = productsData.find(p => p.id === productId) || productsData[0];

    document.getElementById('pTitle').innerText = activeProduct.name;
    document.getElementById('pPrice').innerText = activeProduct.price.toLocaleString('vi-VN') + '₫';
    document.querySelector('.price-old').innerText = activeProduct.oldPrice.toLocaleString('vi-VN') + '₫';
    document.getElementById('pMainImg').src = activeProduct.img;
    document.getElementById('breadcrumbName').innerText = activeProduct.name;
    document.querySelector('.badge-saving').innerText = 'Tiết kiệm ' + (activeProduct.oldPrice - activeProduct.price).toLocaleString('vi-VN') + '₫';
}

function adjustQty(val) {
    currentQty += val;
    if (currentQty < 1) currentQty = 1;
    let input = document.getElementById('qtyInput');
    if (input) input.value = currentQty;
}

function changeImg(el) {
    let mainImg = document.getElementById('pMainImg');
    if (mainImg) mainImg.src = el.src;
}

function addCurrentProductToCart() {
    if (activeProduct) {
        for(let i=0; i<currentQty; i++) {
            addToCart(activeProduct.name, activeProduct.price, activeProduct.img);
        }
    }
}

function buyNow() {
    addCurrentProductToCart();
    window.location.href = 'cart.html';
}

function renderCart() {
    let cart = getCart();
    let container = document.getElementById('cartItemsContainer');
    let countEl = document.getElementById('cartItemCount');
    let subtotalEl = document.getElementById('subtotalPrice');
    let totalEl = document.getElementById('totalPrice');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 40px; color:#707070;">Giỏ hàng trống!</p>';
        if (countEl) countEl.innerText = 0;
        if (subtotalEl) subtotalEl.innerText = '0₫';
        if (totalEl) totalEl.innerText = '0₫';
        return;
    }
    let html = '';
    let subtotal = 0;
    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;
        html += `
            <div class="cart-item-row">
                <img src="${item.img || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80'}" alt="Item">
                <div class="cart-item-info"><h4>${item.name}</h4><p style="color:var(--primary-red); font-weight:bold;">${item.price.toLocaleString('vi-VN')}₫</p></div>
                <div class="quantity-selector"><button onclick="changeCartQty(${index}, -1)">-</button><input type="text" value="${item.qty}" readonly><button onclick="changeCartQty(${index}, 1)">+</button></div>
                <button onclick="removeCartItem(${index})" style="background:none; border:none; color:#dc2626; cursor:pointer; margin-left:15px;"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });
    container.innerHTML = html;
    if (countEl) countEl.innerText = cart.reduce((s, i) => s + i.qty, 0);
    if (subtotalEl) subtotalEl.innerText = subtotal.toLocaleString('vi-VN') + '₫';
    if (totalEl) totalEl.innerText = subtotal.toLocaleString('vi-VN') + '₫';
}

function changeCartQty(index, change) {
    let cart = getCart();
    cart[index].qty += change;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

function removeCartItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

function renderCheckout() {
    let cart = getCart();
    let container = document.getElementById('checkoutItemsList');
    let totalEl = document.getElementById('checkoutTotal');
    if (!container) return;
    let html = '';
    let total = 0;
    cart.forEach(item => {
        let sum = item.price * item.qty;
        total += sum;
        html += `<div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:13px;"><span>${item.name} (x${item.qty})</span><strong>${sum.toLocaleString('vi-VN')}₫</strong></div>`;
    });
    container.innerHTML = html;
    if (totalEl) totalEl.innerText = total.toLocaleString('vi-VN') + '₫';
    
    updateVietQr(total);
}

function updateVietQr(totalAmount) {
    let phoneInput = document.getElementById('cusPhone');
    let phone = phoneInput ? phoneInput.value.trim() : 'KH';
    let transferNote = 'CELLTECH ' + (phone ? phone : 'DH');
    let noteEl = document.getElementById('transferNote');
    if (noteEl) noteEl.innerText = transferNote;

    let qrImg = document.getElementById('vietQrImg');
    if (qrImg) {
        let encodedNote = encodeURIComponent(transferNote);
        qrImg.src = `https://img.vietqr.io/image/Viettinbank-002603939-compact2.png?amount=${totalAmount}&addInfo=${encodedNote}&accountName=DO%20PHAM%20TRUNG%20TINH`;
    }
}

function submitOrder(e) {
    e.preventDefault();
    let name = document.getElementById('cusName').value;
    let phone = document.getElementById('cusPhone').value;
    let address = document.getElementById('cusAddress').value;
    let cart = getCart();
    let total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    let orderCode = '#CT' + Math.floor(100000 + Math.random() * 900000);
    let newOrder = { code: orderCode, name: name, phone: phone, address: address, total: total, status: 'Chờ xử lý' };
    let allOrders = JSON.parse(localStorage.getItem('celltech_orders') || '[]');
    allOrders.unshift(newOrder);
    localStorage.setItem('celltech_orders', JSON.stringify(allOrders));
    localStorage.removeItem('celltech_cart');
    updateCartCount();
    document.getElementById('orderCode').innerText = orderCode;
    document.getElementById('successModal').style.display = 'flex';
}

let selectedCategory = 'all';
let selectedBrand = 'all';
let selectedPriceRange = 'all';
let selectedSort = 'default';

function filterByCategory(cat) {
    selectedCategory = cat;
    document.querySelectorAll('.cat-item, .filter-chip').forEach(el => el.classList.remove('active'));
    renderFilteredProducts();
}

function applyFilters() {
    let brandSelect = document.getElementById('brandFilter');
    let priceSelect = document.getElementById('priceFilter');
    let sortSelect = document.getElementById('sortFilter');

    if (brandSelect) selectedBrand = brandSelect.value;
    if (priceSelect) selectedPriceRange = priceSelect.value;
    if (sortSelect) selectedSort = sortSelect.value;

    renderFilteredProducts();
}

function renderFilteredProducts() {
    let container = document.getElementById('dynamicProductsGrid');
    if (!container) return;

    let filtered = productsData.filter(p => {
        let matchCat = (selectedCategory === 'all' || p.category === selectedCategory);
        let matchBrand = (selectedBrand === 'all' || p.brand === selectedBrand);
        
        let matchPrice = true;
        if (selectedPriceRange === 'under3') {
            matchPrice = (p.price < 3000000);
        } else if (selectedPriceRange === '3to10') {
            matchPrice = (p.price >= 3000000 && p.price <= 10000000);
        } else if (selectedPriceRange === '10to20') {
            matchPrice = (p.price > 10000000 && p.price <= 20000000);
        } else if (selectedPriceRange === 'over20') {
            matchPrice = (p.price > 20000000);
        }

        return matchCat && matchBrand && matchPrice;
    });

    if (selectedSort === 'priceAsc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'priceDesc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'discount') {
        filtered.sort((a, b) => ((b.oldPrice - b.price)/b.oldPrice) - ((a.oldPrice - a.price)/a.oldPrice));
    }

    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:#707070;">Không tìm thấy sản phẩm phù hợp với bộ lọc!</p>';
        return;
    }

    let html = '';
    filtered.forEach(p => {
        let discountPercent = Math.round((1 - p.price / p.oldPrice) * 100);
        html += `
            <div class="product-card">
                <span class="badge-discount">-${discountPercent}%</span>
                <div class="product-img-wrap"><img src="${p.img}" alt="${p.name}"></div>
                <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
                <div class="product-specs">${p.specs}</div>
                <div class="price-box">
                    <span class="price-current">${p.price.toLocaleString('vi-VN')}₫</span>
                    <span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}₫</span>
                </div>
                <div class="rating-star">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    <span>(50+)</span>
                </div>
                <div class="card-btn-group">
                    <a href="product.html?id=${p.id}" class="btn-detail">Chi tiết</a>
                    <button class="btn-buy" onclick="addToCart('${p.name.replace(/'/g, "\'")}', ${p.price}, '${p.img}')">Thêm giỏ</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function switchTab(tabName) {
    let tabs = document.querySelectorAll('.admin-tab-content');
    tabs.forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
}

function initAdmin() {
    checkAdminAccess();
    loadOrdersToAdmin();
}

function loadOrdersToAdmin() {
    let table = document.getElementById('adminOrdersTable');
    let tableFull = document.getElementById('adminOrdersTableFull');
    let orders = JSON.parse(localStorage.getItem('celltech_orders') || '[]');
    if (orders.length === 0) {
        if (table) table.innerHTML = '<tr><td colspan="5" style="text-align:center;">Chưa có đơn hàng.</td></tr>';
        if (tableFull) tableFull.innerHTML = '<tr><td colspan="6" style="text-align:center;">Chưa có đơn hàng.</td></tr>';
        return;
    }
    let html = '';
    orders.forEach(o => {
        html += `<tr><td><b>${o.code}</b></td><td>${o.name}</td><td>${o.phone || ''}</td><td>${o.address || ''}</td><td>${o.total.toLocaleString('vi-VN')}₫</td><td><span class="badge-status pending">${o.status}</span></td></tr>`;
    });
    if (table) table.innerHTML = html;
    if (tableFull) tableFull.innerHTML = html;
}

function handleSearch() { 
    let keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    if(keyword) {
        let filtered = productsData.filter(p => p.name.toLowerCase().includes(keyword) || p.specs.toLowerCase().includes(keyword));
        let container = document.getElementById('dynamicProductsGrid');
        if (!container) return;
        if (filtered.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 40px; color:#707070;">Không tìm thấy kết quả cho "' + keyword + '"</p>';
            return;
        }
        let html = '';
        filtered.forEach(p => {
            let discountPercent = Math.round((1 - p.price / p.oldPrice) * 100);
            html += `
                <div class="product-card">
                    <span class="badge-discount">-${discountPercent}%</span>
                    <div class="product-img-wrap"><img src="${p.img}" alt="${p.name}"></div>
                    <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
                    <div class="product-specs">${p.specs}</div>
                    <div class="price-box">
                        <span class="price-current">${p.price.toLocaleString('vi-VN')}₫</span>
                        <span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}₫</span>
                    </div>
                    <div class="rating-star">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        <span>(50+)</span>
                    </div>
                    <div class="card-btn-group">
                        <a href="product.html?id=${p.id}" class="btn-detail">Chi tiết</a>
                        <button class="btn-buy" onclick="addToCart('${p.name.replace(/'/g, "\'")}', ${p.price}, '${p.img}')">Thêm giỏ</button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    } else {
        renderFilteredProducts();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initPredefinedUsers();
    updateCartCount();
    updateHeaderAuth();
    renderFilteredProducts();
});
