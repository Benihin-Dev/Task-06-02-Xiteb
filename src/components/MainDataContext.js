import React, { useEffect, useContext, createContext, useState } from "react";

const DataContext = createContext();

export default function MainDataContext({ children }) {
  //all product data
  const [products, setProducts] = useState({
    mobilePhones: [
      {
        id: "00f00",
        name: "Motorola Moto G84 5G",
        subNames:
          "Motorola Moto G84 5G (GSM Unlocked, International Version) 256GB + 12GB RAM Dual SIM Android 13 Smartphone (Marshmallow Blue)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque blanditiis nesciunt totam magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident atque blanditiis nesciunt totam magnam nisi.",
        price: 277,
        images: [
          "https://prmoto.vtexassets.com/arquivos/ids/160389-800-auto?v=638336735179400000&width=800&height=auto&aspect=true",
          "https://motorolauk.vtexassets.com/arquivos/ids/159545/motorola-g84-pdp-ecom-render-16-Color-2-.png?v=638301160799030000",
          "https://motorolain.vtexassets.com/arquivos/ids/158498/motorola-g84-pdp-ecom-render-17-Color-3-.png?v=638279706585230000",
        ],
        specification: {
          Brand: "Motorola",
          OperatingSystem: "Android 13",
          MemoryStorageCapacity: "12 GB",
          ScreenSize: "6.5 Inches",
          Resolution: "2400 x 1080",
          ModelName: "	Motorola Moto G84 5G",
          CellularTechnology: "5G",
          Color: "Marshmallow Blue",
        },
        rating: { totalReview: 234, rate: 4 },
        availableStockQty: 264,
      },
      {
        id: "00f01",
        name: "Samsung Galaxy S22 Ultra",
        subNames:
          " Samsung Galaxy S22 Ultra 512GB - 8K Camera, S Pen, Long Battery, Fast Processor, Phantom Black",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 1299,
        images: [
          "https://images.samsung.com/is/image/samsung/p6pim/pk/2202/gallery/pk-galaxy-s22-ultra-s908-413093-413093-sm-s908ezkgpkd-531032926?$650_519_PNG$",
          "https://static.doji.co/product/medias/smartphones/samsung/galaxy-s22-ultra-5g/1-front-back-burgundy.png",
          "https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-s22-ultra/carousel/green/256gb/6301D-9.png",
        ],
        specification: {
          Brand: "Samsung",
          OperatingSystem: "Android 13",
          MemoryStorageCapacity: "16 GB",
          ScreenSize: "6.8 Inches",
          Resolution: "1440 x 3200",
          ModelName: "Samsung Galaxy S22 Ultra",
          CellularTechnology: "5G",
          Color: "Phantom Black",
        },
        rating: {
          totalReview: 1023,
          rate: 4,
        },
        availableStockQty: 120,
      },
      {
        id: "00f02",
        name: "iPhone 14 Pro Max",
        subNames:
          "I14 Pro Max Unlocked Cell Phone,Long Battery Life 6.82' HD Screen Unlocked Phones,Android13 6+256GB Smartphone with 128G Memory Card,Dual SIM/Fingerprint Lock/Face ID/GPS (Blue)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 1499,
        images: [
          "https://www.aptronixindia.com/media/catalog/product/cache/79b1a6b8228d78f0ca54479e7acc9084/i/p/iphone_14_pro_max_deep_purple_pdp_image_position-1a_avail__en-in-removebg-preview.png",
          "https://applestore.ng/wp-content/uploads/2022/11/iPhone_14_pro_max_-.png",
          "https://tecmau.com/wp-content/uploads/2023/03/iphone-14-pro-max-128-gb.png",
        ],
        specification: {
          Brand: "Apple",
          OperatingSystem: "iOS 17",
          MemoryStorageCapacity: "8 GB",
          ScreenSize: "6.7 Inches",
          Resolution: "1284 x 2778",
          ModelName: "iPhone 14 Pro Max",
          CellularTechnology: "5G",
          Color: "Graphite",
        },
        rating: {
          totalReview: 1500,
          rate: 5,
        },
        availableStockQty: 85,
      },
      {
        id: "00f03",
        name: "Google Pixel 7",
        subNames:
          "Google Pixel 7-5G Android Phone - Unlocked Smartphone with Wide Angle Lens and 24-Hour Battery - 128GB - Snow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 799,
        images: [
          "https://lh3.googleusercontent.com/noqZBDURBMbQwYv0IF6e6OW30eBa8pKD-xTjeVeZzfZZDA44WPopxxoTsbaqEnD8oeRprTIcU-DN0g6oYsXPDMqOIeZ32HQr44um",
          "https://techxpressug.com/wp-content/uploads/2023/06/pixel-7-pro-obsidian.png",
          "https://www.three.co.uk/mobile-phones/Brands/google/pixel-7-series/_jcr_content/root/container/container/primarycontainer/secondarycontainer/item0/image.coreimg.png/1684751994406/google-pixel-7a-promo-card-image.png",
        ],
        specification: {
          Brand: "Google",
          OperatingSystem: "Android 13",
          MemoryStorageCapacity: "6 GB",
          ScreenSize: "6.1 Inches",
          Resolution: "1080 x 2340",
          ModelName: "Google Pixel 7",
          CellularTechnology: "5G",
          Color: "Clearly White",
        },
        rating: {
          totalReview: 900,
          rate: 5,
        },
        availableStockQty: 200,
      },
      {
        id: "00f04",
        name: "OnePlus 10 Pro",
        subNames:
          "OnePlus 10 Pro,16GB RAM+512GB,Dual-SIM,Unlocked Android Smartphone,Supports 50W Wireless Charging,Latest Mobile Processor,Advanced Hasselblad Camera,5400 mAh Battery,2024,Flowy Emerald",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 999,
        images: [
          "https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/mar/0317/NA_Black.png",
          "https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/mar/0317/NA_Green.png",
          "https://breyeangear.com/wp-content/uploads/2023/10/One-Plus-10-Pro-Panda-White-Special-Edition.webp",
        ],
        specification: {
          Brand: "OnePlus",
          OperatingSystem: "OxygenOS 13",
          MemoryStorageCapacity: "12 GB",
          ScreenSize: "6.7 Inches",
          Resolution: "1440 x 3216",
          ModelName: "OnePlus 10 Pro",
          CellularTechnology: "5G",
          Color: "Morning Mist",
        },
        rating: {
          totalReview: 750,
          rate: 5,
        },
        availableStockQty: 150,
      },
      {
        id: "00f05",
        name: "Xiaomi Mi 12",
        subNames:
          "Xiaomi 12 Lite 5G + 4G LTE (256GB + 8GB) Global Version Unlocked 6.55' 108MP Triple Camera (Tmobile Mint Tello & Global) + (w/Fast Car 51W Charger Bundle) (Lite Pink)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 899,
        images: [
          "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1647849448.31929017.png",
          "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666344446.10091683.png",
          "https://xiaomi-store.co.ke/wp-content/uploads/2023/04/n12.png",
        ],
        specification: {
          Brand: "Xiaomi",
          OperatingSystem: "MIUI 14",
          MemoryStorageCapacity: "8 GB",
          ScreenSize: "6.78 Inches",
          Resolution: "1440 x 3200",
          ModelName: "Xiaomi Mi 12",
          CellularTechnology: "5G",
          Color: "Celestial Blue",
        },
        rating: {
          totalReview: 600,
          rate: 4,
        },
        availableStockQty: 180,
      },
      {
        id: "00f06",
        name: "Sony Xperia 1 III",
        subNames:
          "Sony Xperia 1 III - 5G Smartphone with 120Hz 6.5' 21:9 4K HDR OLED display with triple camera and four focal lengths- XQBC62/B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 1199,
        images: [
          "https://www.sony.co.uk/image/5d5c8d0485d37c1b150022bd9819bb1d?fmt=png-alpha&wid=480",
          "https://s7d1.scene7.com/is/image/dmqualcommprod/sony-xperia-1-iii_0?$QC_Responsive$&fmt=png-alpha",
          "https://sony.scene7.com/is/image/sonyglobalsolutions/747_ProductPrimary_image_Khaki-Green?$mediaCarouselSmall$&fmt=png-alpha",
        ],
        specification: {
          Brand: "Sony",
          OperatingSystem: "Android 13",
          MemoryStorageCapacity: "12 GB",
          ScreenSize: "6.5 Inches",
          Resolution: "1644 x 3840",
          ModelName: "Sony Xperia 1 III",
          CellularTechnology: "5G",
          Color: "Frosted Purple",
        },
        rating: {
          totalReview: 450,
          rate: 4,
        },
        availableStockQty: 100,
      },
      {
        id: "00f07",
        name: "Realme GT 2 Pro",
        subNames:
          "Realme GT 2 Pro 5G + 4G LTE GSM 128GB + 8GB 6.6 64MP Triple Camera Unlocked Latin Europe Dual Sim (NOT Verizon/Boost/Cricket/Metro/AT&T/Tmobile) + Fast Car Charger Bundle (Midnight Black)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 699,
        images: [
          "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/e/realme_gt_2_pro_case-1_1.png",
          "https://www.dimprice.co.uk/image/cache/catalog/Realme/realme-gt2-pro-green-1-800x800.png",
          "https://ae01.alicdn.com/kf/H84a9fc47135d4ef6bd5ddfbe0eae1065b.png",
        ],
        specification: {
          Brand: "Realme",
          OperatingSystem: "Realme UI 4.0",
          MemoryStorageCapacity: "12 GB",
          ScreenSize: "6.7 Inches",
          Resolution: "1440 x 3216",
          ModelName: "Realme GT 2 Pro",
          CellularTechnology: "5G",
          Color: "Paper White",
        },
        rating: {
          totalReview: 400,
          rate: 4,
        },
        availableStockQty: 300,
      },
      {
        id: "00f08",
        name: "Xiaomi Redmi Note 11 Pro",
        subNames:
          "Xiaomi Redmi Note 11 Pro+ Plus 5G + 4G Global Version 256GB + 8GB Unlocked 6.67' 108MP Night Mode Only Tmobile/Metro/Mint USA Marke0t+ w/Fast Car Charger 51w Bundle Graphite Gray",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 349,
        images: [
          "https://i0.wp.com/www.xiaomi.ie/wp-content/uploads/2022/03/Redmi-Note-11-Pro-blue.png?fit=1600%2C1600&ssl=1",
          "https://www.sense.lk/images/uploads/product/2022/11/2022111014260120221001111430Note%2011%20Grey.png.png",
          "https://cdn.storech.com/uploads/products/000/000/000/000/017/512/300_1655988337-11-pro-blue-2-sides.png",
        ],
        specification: {
          Brand: "Xiaomi",
          OperatingSystem: "MIUI 14",
          MemoryStorageCapacity: "8 GB",
          ScreenSize: "6.67 Inches",
          Resolution: "1080 x 2400",
          ModelName: "Xiaomi Redmi Note 11 Pro",
          CellularTechnology: "4G",
          Color: "Glacier Blue",
        },
        rating: {
          totalReview: 1200,
          rate: 4,
        },
        availableStockQty: 200,
      },
      {
        id: "00f09",
        name: "Sony Xperia 5 III",
        subNames:
          "Sony Xperia 5 III 125GB 5G Factory Unlocked Smartphone, Black [U.S. Official w/Warranty]",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor gravida dolor nec imperdiet. Nullam at risus eget arcu congue fermentum.",
        price: 999,
        images: [
          "https://d1ncau8tqf99kp.cloudfront.net/converted/81899_original_local_1200x1050_v3_converted.webp",
          "https://xperiatech.lk/assets/uploads/2023/01/prod-removebg-preview-1.png",
          "https://www.sony.com.hk/image/9b8e42a3bd60c6b3b0fce17eb475af5a?fmt=png-alpha&wid=480",
        ],
        specification: {
          Brand: "Sony",
          OperatingSystem: "Android 12",
          MemoryStorageCapacity: "8 GB",
          ScreenSize: "6.1 Inches",
          Resolution: "1080 x 2520",
          ModelName: "Sony Xperia ",
          CellularTechnology: "4G",
          Color: "Glacier Blue",
        },
        rating: {
          totalReview: 1200,
          rate: 4,
        },
        availableStockQty: 200,
      },
      {
        id: "00f10",
        name: "iPhone 15",
        subNames:
          "I15 Pro MAX Smartphone Unlocked Cell Phone,Battery 6800mAh 6.8 HD Screen Unlocked Phone,6+256GB with 128GB Memory Card,Dual SIM/5G/Fingerprint Lock/Face ID (Purple, 6+256)",
        description:
          "The iPhone 15 brings cutting-edge technology with a sleek design. It features a powerful A16 Bionic chip, advanced camera system, and a stunning Super Retina XDRt features a powerful A16 Bionic chip, advanced camera system, and a stunning Super Retina XDR display.",
        price: 1399,
        images: [
          "https://appleasia.lk/wp-content/uploads/2023/09/15-plus-new-web-430x430.webp",
          "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-15/carousel/pink-1.png",
          "https://inventstore.in/wp-content/uploads/2023/09/pro-ac-3.png",
        ],
        specification: {
          Brand: "Apple",
          OperatingSystem: "iOS 17",
          MemoryStorageCapacity: "8 GB",
          ScreenSize: "6.7 Inches",
          Resolution: "1284 x 2778",
          ModelName: "iPhone 15",
          CellularTechnology: "5G",
          Color: "Midnight",
        },
        rating: {
          totalReview: 1200,
          rate: 5,
        },
        availableStockQty: 150,
      },
    ],
    mobileAccessories: [
      {
        id: "00s01",
        name: "FUNSNAP Kit Gimbal Stabilizer",
        subNames:
          "FUNSNAP C05 Kit Gimbal Stabilizer for Smartphone, iPhone Gimbal 3-Axis with Magnetic Fill Light/AI Tracking Sensor for iPhone 15 14 Pro Max Android Handheld Phone Gimbal for Video Recording",
        description:
          "AI Vision Sensor with Magnetic Fill Light FUNSNAP Capture 5 Kit phone gimbal stands out with its brilliant AI tracking capabilities, robust software and exceptional design. With the AI tracker, the gimbal performs face/body tracking smoothly without Bluetooth connection and App limitations. Our gimbal uses leading anti-shake technology to provide professional anti-shake performance, which can eliminate shaking during movement and ensure that the photos and videos you take remain stable. Gimbal is suitable for any scene and captures every wonderful moment.",
        price: 99,
        images: [
          "https://gw.alicdn.com/imgextra/i3/3954494624/O1CN01Afq4tP1k1qJaHUiNq_!!2-item_pic.png_.webp",
          "https://ae01.alicdn.com/kf/S9accf283042a42949e4ee587a9c164ccA.png",
          "https://gw.alicdn.com/imgextra/O1CN01ouuGKv1PMoKcure3x_!!6000000001827-2-yinhe.png_.webp",
        ],
        specification: {
          Brand: "Apple",
          Weight: "551 Grams",
          ModelName: "FUNSNAP",
          Color: "Midnight",
          CompatibleDevices: "All Mobile Phones",
        },
        rating: {
          totalReview: 1200,
          rate: 5,
        },
        availableStockQty: 150,
      },
      {
        id: "00s02",
        name: "Anker Wireless Charger",
        subNames:
          "Anker Wireless Charger, PowerWave Pad Qi-Certified 10W Max for iPhone 14/13/12, Samsung Galaxy S22/S21, AirPods (No AC Adapter)",
        description:
          "PowerWave Pad The Anker Advantage: Enjoyed by over 50 million happy users worldwide, our leading technology will change the way you charge. Advanced Safety Features: Exclusive Anker technology provides temperature control, surge protection, short-circuit prevention, and more.",
        price: 29,
        images: [
          "https://cdn.shopify.com/s/files/1/0493/9834/9974/products/Y1811JA1-Anker_3-in-1_Cube_with_MagSafe.png?v=1683879564",
          "https://cdn.shopify.com/s/files/1/0493/9834/9974/files/image_14_e4136911-40a3-4ba6-b99d-a2178980fcc4.png?v=1702880849",
          "https://cdn.shopify.com/s/files/1/0493/7636/2660/products/image_15_8702e450-b4bb-4a83-9913-763cd9f8242c.png?v=1708421245",
        ],
        specification: {
          Brand: "Anker",
          Weight: "95 Grams",
          ModelName: "PowerWave Pad",
          Color: "Black , Gray",
          CompatibleDevices: "All Qi-enabled Devices",
        },
        rating: {
          totalReview: 5000,
          rate: 4,
        },
        availableStockQty: 300,
      },
      {
        id: "00s03",
        name: "Apple MagSafe Battery Pack",
        subNames:
          "Apple MagSafe Battery Pack Safe Battery Pack is a snap. Its compact, intuitive design makes on-",
        description:
          "Attaching the MagSafe Battery Pack is a snap. Its compact, intuitive design makes on-the-go charging easy. Perfectly aligned magnets keep it attached to your iPhone 12 or iPhone 12 Pro, providing safe and reliable wireless charging.",
        price: 99,
        images: [
          "https://i0.wp.com/www.appletips.nl/wp-content/uploads/2022/07/MagSafe-BAttery-pack-batterij.png?fit=1053%2C1053&ssl=1",
          "https://www.momax.net/cdn/shop/files/IP125_03.png?v=1713509922&width=1500",
          "https://static0.pocketnowimages.com/wordpress/wp-content/uploads/2023/08/mophie-snap-juice-pack-wallet-5k-black-pbi.png",
        ],
        specification: {
          Brand: "Apple",
          Weight: "113 Grams",
          ModelName: "MagSafe Battery Pack",
          Color: "White",
          CompatibleDevices: "iPhone 12, iPhone 12 Pro",
        },
        rating: {
          totalReview: 2000,
          rate: 2,
        },
        availableStockQty: 200,
      },
      {
        id: "00s04",
        name: "Samsung Galaxy Buds Pro",
        subNames:
          "Samsung Galaxy Buds Pro, True Wireless Earbuds, ANC, Wireless Charging Case, Phantom Black",
        description:
          "Samsung Galaxy Buds Pro combine crystal-clear sound quality with advanced Active Noise Cancellation for immersive listening. Enjoy seamless connectivity and intuitive touch controls.",
        price: 199,
        images: [
          "https://i5.walmartimages.com/seo/SAMSUNG-Galaxy-Buds-Pro-Phantom-Black_783ff8f7-b725-4710-b52f-5e2fbe66fe3f.a30cccac57e4db72c4fcff2250dcf0de.png",
          "https://i5.walmartimages.com/seo/SAMSUNG-Galaxy-Buds-Pro-Phantom-Violet_b561f1a0-94dc-446c-b490-d4278e1255b8.53d49dbaaf35963f936317f4a3d8e265.png",
          "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/0/0/000_product_galaxy_buds2pro.png",
        ],
        specification: {
          Brand: "Samsung",
          Weight: "56 Grams",
          ModelName: "Galaxy Buds Pro",
          Color: "Phantom Black",
          CompatibleDevices: "All Bluetooth Devices",
        },
        rating: {
          totalReview: 3500,
          rate: 3,
        },
        availableStockQty: 250,
      },
      {
        id: "00s05",
        name: "Sony WH-1000XM4 Headphones",
        subNames:
          "Sony WH-1000XM4 Wireless Noise Cancelling Overhead Headphones, Black",
        description:
          "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback).",
        price: 349,
        images: [
          "https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dw72e2d384/images/WH1000XM4S/WH1000XM4S.png",
          "https://d1ncau8tqf99kp.cloudfront.net/converted/74739_original_local_1200x1050_v3_converted.webp",
          "https://m2.me-retail.com/cdn-cgi/image/w=1000,q=75,f=auto/pub/media/catalog/product/w/h/wh-1000xm4_s-2.png",
        ],
        specification: {
          Brand: "Sony",
          Weight: "254 Grams",
          ModelName: "WH-1000XM4",
          Color: "Black & White",
          CompatibleDevices: "All Bluetooth Devices",
        },
        rating: {
          totalReview: 8000,
          rate: 4,
        },
        availableStockQty: 100,
      },
      {
        id: "00s06",
        name: "JBL Charge 5 Portable Speaker",
        subNames:
          "JBL Charge 5 - Portable Bluetooth Speaker with IP67 Waterproof and USB Charge out - Black",
        description:
          "Take the party with you no matter what the weather. The JBL Charge 5 speaker delivers bold JBL Original Pro Sound, with its optimized long excursion driver, separate tweeter, and dual JBL bass radiators.",
        price: 179,
        images: [
          "https://geniusmobile.lk/wp-content/uploads/2021/11/JBL_CHARGE5_HERO_BLUE_0038_x3.webp",
          "https://i5.walmartimages.com/seo/JBL-Charge-5-Portable-Waterproof-Speaker-with-Powerbank-Teal_4fc6dbf6-f170-41f8-bd44-4b654d8c45d3.ec69332dc68a993a2d9f3967b15c0cd2.png",
          "https://www.jbl.com.my/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw367d1e0f/JBL_CHARGE5_HERO_GREEN_0025_x2.png?sw=537&sfrm=png",
        ],
        specification: {
          Brand: "JBL",
          Weight: "960 Grams",
          ModelName: "Charge 5",
          Color: "Black, Blue, Red",
          CompatibleDevices: "All Bluetooth Devices",
        },
        rating: {
          totalReview: 5000,
          rate: 5,
        },
        availableStockQty: 180,
      },
    ],
    keyBoardPhones: [
      {
        id: "00k01",
        name: "Nokia 105 4G",
        subNames:
          "Nokia 105 4G | Dual SIM | GSM Unlocked Mobile Phone | Volte | Charcoal | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.t features a powerful A16 Bionic chip, advanced camera system, and a stunning Super Retina XDR display.",
        price: 99,
        images: [
          "https://www.sense.lk/images/uploads/product/2023/03/20230320162557NOKIA%20105%204G%20BLACK.png",
          "https://www.sense.lk/images/uploads/product/2023/03/20230320162447NOKIA%20105%204G%20BLUE.png",
          "https://www.sense.lk/images/uploads/product/2023/03/20230320162306NOKIA%20105%204G%20RED.png",
        ],
        specification: {
          Brand: "Nokia",
          MemoryStorageCapacity: "8 GB",
          RamMemory: "512 MB",
          ScreenSize: "1.8 Inches",
          Resolution: "160 x 120",
          ModelName: "105 4G",
          CellularTechnology: "4G",
        },
        rating: {
          totalReview: 500,
          rate: 5,
        },
        availableStockQty: 650,
      },
      {
        id: "00k02",
        name: "Nokia 3310 3G",
        subNames:
          "Nokia 3310 3G | Single SIM | GSM Unlocked Mobile Phone | Yellow | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "The Nokia 3310 3G is designed for use in various countries. Please check compatibility before purchasing. It features a durable design, long battery life, and essential mobile functions.",
        price: 59,
        images: [
          "https://zoopworld.com/wp-content/uploads/2024/01/Main-Image-09.webp",
          "https://titaniummobile.net/cdn/shop/products/Nokia33103G_3.png?v=1628067635",
          "https://d61s2hjse0ytn.cloudfront.net/Color/403/nokia_3310_yellow.webp",
        ],
        specification: {
          Brand: "Nokia",
          MemoryStorageCapacity: "16 MB",
          RamMemory: "64 MB",
          ScreenSize: "2.4 Inches",
          Resolution: "240 x 320",
          ModelName: "3310 3G",
          CellularTechnology: "3G",
        },
        rating: {
          totalReview: 300,
          rate: 4,
        },
        availableStockQty: 500,
      },
      {
        id: "00k03",
        name: "Samsung Guru Music 2",
        subNames:
          "Samsung Guru Music 2 | Dual SIM | GSM Unlocked Mobile Phone | White | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "The Samsung Guru Music 2 is designed for use with GSM networks globally. It offers great sound quality, a long battery life, and a compact design.",
        price: 45,
        images: [
          "https://banana.lk/wp-content/uploads/2021/11/Samsung-Guru-Music-2-SM-B310E-black-3.png",
          "https://img-prd-pim.poorvika.com/product/Samsung-guru-music-2-sm-b315e-gold-Front-View.png",
          "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Samsung-guru-music-2-sm-b315e-black-Front-View.png",
        ],
        specification: {
          Brand: "Samsung",
          MemoryStorageCapacity: "32 MB",
          RamMemory: "128 MB",
          ScreenSize: "2.0 Inches",
          Resolution: "128 x 160",
          ModelName: "Guru Music 2",
          CellularTechnology: "2G",
        },
        rating: {
          totalReview: 250,
          rate: 5,
        },
        availableStockQty: 800,
      },
      {
        id: "00k04",
        name: "BlackBerry Classic",
        subNames:
          "BlackBerry Classic | QWERTY Keyboard | GSM Unlocked Mobile Phone | Black | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "The BlackBerry Classic offers a physical QWERTY keyboard, long battery life, and robust security features. Designed for professionals who prefer physical keys.",
        price: 199,
        images: [
          "https://cdn.vox-cdn.com/thumbor/BBmPizgq3kaURBLoh7xQSyprUVw=/0x0:988x675/1400x1400/filters:focal(494x337:495x338)/cdn.vox-cdn.com/uploads/chorus_asset/file/15106871/classic-preorder.png.original.0.0.1418828725.png",
          "https://gsmchina.com/wp-content/themes/xiaomiuiwp/phone_pics/b_blackberry-passport-silver-edition-4.png",
          "https://cellphoneguys.com/wp-content/uploads/2015/11/blackberry-classic-q20.png",
        ],
        specification: {
          Brand: "BlackBerry",
          MemoryStorageCapacity: "16 GB",
          RamMemory: "2 GB",
          ScreenSize: "3.5 Inches",
          Resolution: "720 x 720",
          ModelName: "Classic",
          CellularTechnology: "4G",
        },
        rating: {
          totalReview: 450,
          rate: 5,
        },
        availableStockQty: 300,
      },
      {
        id: "00k05",
        name: "Nokia 2720 Flip",
        subNames:
          "Nokia 2720 Flip | Dual SIM | GSM Unlocked Mobile Phone | Black | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "The Nokia 2720 Flip features a classic flip design with modern capabilities, including 4G connectivity and Google Assistant.",
        price: 89,
        images: [
          "https://www.mobiledokan.com/media/nokia-2720-flip-black-official.webp",
          "https://digitalcontent.api.tesco.com/v2/media/tescomobile/9473e228-4797-4a0e-9fbc-a7afe492181b/Nokia+2660+Flip+Black+Hero.png?hie=90&wid=90&h=960&w=960",
          "https://alladdinn.com/wp-content/uploads/2021/04/nokia_2720-CLASSIC_FLIP_.png",
        ],
        specification: {
          Brand: "Nokia",
          MemoryStorageCapacity: "4 GB",
          RamMemory: "512 MB",
          ScreenSize: "2.8 Inches",
          Resolution: "240 x 320",
          ModelName: "2720 Flip",
          CellularTechnology: "4G",
        },
        rating: {
          totalReview: 350,
          rate: 4,
        },
        availableStockQty: 600,
      },
      {
        id: "00k06",
        name: "Alcatel Go Flip 3",
        subNames:
          "Alcatel Go Flip 3 | Dual SIM | GSM Unlocked Mobile Phone | Silver | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "The Alcatel Go Flip 3 is a compact and practical flip phone with 4G connectivity, a user-friendly interface, and long battery life.",
        price: 75,
        images: [
          "https://images.alcatelonetouch.us/products/phones/goflip3/goflip-thumbnail.png",
          "https://i.ebayimg.com/images/g/sfwAAOSwBVZeidq~/s-l500.png",
          "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/08/alcatel-go-flip-3-phone-1.png",
        ],
        specification: {
          Brand: "Alcatel",
          MemoryStorageCapacity: "4 GB",
          RamMemory: "512 MB",
          ScreenSize: "2.8 Inches",
          Resolution: "240 x 320",
          ModelName: "Go Flip 3",
          CellularTechnology: "4G",
        },
        rating: {
          totalReview: 200,
          rate: 3,
        },
        availableStockQty: 400,
      },
      {
        id: "00k07",
        name: "JioPhone",
        subNames:
          "JioPhone | Dual SIM | GSM Unlocked Mobile Phone | Blue | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "The JioPhone is an affordable 4G feature phone with essential apps, long battery life, and a compact design, ideal for basic mobile needs.",
        price: 30,
        images: [
          "https://www.jio.com/jiophone2-dual_sim.png",
          "https://gadgets.beebom.com/wp-content/uploads/2024/01/Jio-Phone-Prima-4G.png",
          "https://jep-asset.akamaized.net/cms/assets/jioprima/03-11-2023/Prima-webpage-desktop-product-image-01-900x900.webp",
        ],
        specification: {
          Brand: "Jio",
          MemoryStorageCapacity: "4 GB",
          RamMemory: "512 MB",
          ScreenSize: "2.4 Inches",
          Resolution: "240 x 320",
          ModelName: "JioPhone",
          CellularTechnology: "4G",
        },
        rating: {
          totalReview: 1000,
          rate: 4,
        },
        availableStockQty: 1000,
      },
      {
        id: "00k08",
        name: "Sony Xperia L2",
        subNames:
          "Sony Xperia L2 | Single SIM | GSM Unlocked Mobile Phone | Gold | International Version | Not AT&T/Cricket/Verizon Compatible",
        description:
          "The Sony Xperia L2 offers a large display, good camera performance, and reliable connectivity, all in a stylish design.",
        price: 149,
        images: [
          "https://media.wired.com/photos/59346633d80dd005b42b42ae/master/pass/xperia-x10-mini-pro_pp40open_black_ts_latin.png",
          "https://www.cnet.com/a/img/resize/8fdad8159f247a8ab4a14e6ebdac46812ba0f832/hub/2008/11/11/c65284a2-f100-11e2-8c7c-d4ae52e62bcc/33351304-2-440-0.gif?frame=1&width=1200",
          "https://wiki.postmarketos.org/images/thumb/7/73/Sony-mango.png/200px-Sony-mango.png",
        ],
        specification: {
          Brand: "Sony",
          MemoryStorageCapacity: "32 GB",
          RamMemory: "3 GB",
          ScreenSize: "5.5 Inches",
          Resolution: "720 x 1280",
          ModelName: "Xperia L2",
          CellularTechnology: "4G",
        },
        rating: {
          totalReview: 100,
          rate: 5,
        },
        availableStockQty: 400,
      },
    ],
    productCollection: {
      RefreshItems: [
        {
          name: "Dining",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
        },
        {
          name: "Home",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
        },
        {
          name: "Kitchen",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
        },
        {
          name: "Health",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
        },
      ],
      GamingAccessories: [
        {
          name: "Headsets",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
        },
        {
          name: "Keyborads",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
        },
        {
          name: "Mouses",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
        },
        {
          name: "Chairs",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
        },
      ],
      ClothItems: [
        {
          name: "Jeans under $50",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg",
        },
        {
          name: "Tops under $20",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg",
        },
        {
          name: "Dress under $12",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg",
        },
        {
          name: "Shoes under $34",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg",
        },
      ],
      HomeItems: [
        {
          name: "Wreaths & Garlands",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Wreaths_Decor_QuadCard_D_01_186x116._SY116_CB596234042_.jpg",
        },
        {
          name: "Outdoor decor",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_03_186x116._SY116_CB596234042_.jpg",
        },
        {
          name: "Pillows & throws",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Pillows_Decor_QuadCard_D_02_186x116._SY116_CB596234042_.jpg",
        },
        {
          name: "Wall art & mirrors",
          image:
            "https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_04_186x116._SY116_CB596234042_.jpg",
        },
      ],
    },
  });
  const [frequentProductData, setFrequentProductData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        frequentProductData,
        setFrequentProductData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
