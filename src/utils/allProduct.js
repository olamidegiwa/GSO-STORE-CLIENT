import p1_img from "../assets/hf1.jpg";
import p2_img from "../assets/hf2.jpeg";
import p3_img from "../assets/hf3.jpeg";
import p4_img from "../assets/hf4.jpeg";
import p5_img from "../assets/hf5.jpg";
import p6_img from "../assets/hf6.jpg";
import p7_img from "../assets/hf7.jpg";
import p8_img from "../assets/hf8.jpg";
import p9_img from "../assets/hf9.jpg";
import p10_img from "../assets/hf10.jpg";
import p11_img from "../assets/zttw1.webp";
import p12_img from "../assets/zttw2.webp";
import p13_img from "../assets/zttw3.webp";
import p14_img from "../assets/zttw4.webp";
import p15_img from "../assets/zttw5.webp";
import p16_img from "../assets/zttw6.webp";
import p17_img from "../assets/zttw7.webp";
import p18_img from "../assets/zttw8.webp";
import p19_img from "../assets/zttw9.webp";
import p20_img from "../assets/zttw8.webp";
import p21_img from "../assets/zara8.jpg";
import p22_img from "../assets/zara2.jpg";
import p23_img from "../assets/zara3.jpg";
import p24_img from "../assets/zara4.jpg";
import p25_img from "../assets/zara5.jpg";
import p26_img from "../assets/zara6.jpg";
import p27_img from "../assets/zara7.jpg";
import p28_img from "../assets/zara8.jpg";
import p29_img from "../assets/zara9.jpg";
import p30_img from "../assets/zara10.jpg";
import p31_img from "../assets/zttw8.webp";
import p32_img from "../assets/zttw3.webp";
import p33_img from "../assets/hf5.jpg";
import p34_img from "../assets/hf7.jpg";
import p35_img from "../assets/zara8.jpg";
import p36_img from "../assets/zara4.jpg";

let all_products = [
  {
    id: 1,
    name: "HF Football Jersey- Green",
    category: "HF",
    image: p1_img,
    new_price: 200,
    old_price: 220,
  },
  {
    id: 2,
    name: "HF Football Jersey- Red",
    category: "HF",
    image: p2_img,
    new_price: 200,
    old_price: 220,
  },
  {
    id: 3,
    name: "HF x 101 Avenue Hoodie Set – Black",
    category: "HF",
    image: p3_img,
    new_price: 250,
    old_price: 270,
  },
  {
    id: 4,
    name: "HF Football Jersey- Red",
    category: "HF",
    image: p4_img,
    new_price: 200,
    old_price: 220,
  },
  {
    id: 5,
    name: "HF LASGIDI SHORTS – RED",
    category: "HF",
    image: p5_img,
    new_price: 200,
    old_price: 220,
  },
  {
    id: 6,
    name: "HF LASGIDI SHORTS – ORANGE",
    category: "HF",
    image: p6_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 7,
    name: "HF POLO SHIRT – ORANGE",
    category: "HF",
    image: p7_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 8,
    name: "HF Football Jersey- Green",
    category: "HF",
    image: p8_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 9,
    name: "HF Football Jersey- Green",
    category: "HF",
    image: p9_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 10,
    name: "HF Football Jersey- Green",
    category: "HF",
    image: p10_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 11,
    name: "ZTTW Red Leather vest",
    category: "ZTTW",
    image: p11_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 12,
    name: "ZTTW Black Leather vest",
    category: "ZTTW",
    image: p12_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 13,
    name: "ZTTW cream camo puffer top",
    category: "ZTTW",
    image: p13_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 14,
    name: "ZTTW SweatShirt",
    category: "ZTTW",
    image: p14_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 15,
    name: "ZTTW SweatShirt",
    category: "ZTTW",
    image: p15_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 16,
    name: "ZTTW puffer top",
    category: "ZTTW",
    image: p16_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 17,
    name: "ZTTW CAP",
    category: "ZTTW",
    image: p17_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 18,
    name: "ZTTW CAP",
    category: "ZTTW",
    image: p18_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 19,
    name: "ZTTW CAP",
    category: "ZTTW",
    image: p19_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 20,
    name: "ZTTW CAP",
    category: "ZTTW",
    image: p20_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 21,
    name: "Zara Gown",
    category: "ZARA",
    image: p21_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 22,
    name: "Zara Gown",
    category: "ZARA",
    image: p22_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 23,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p23_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 24,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p24_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 25,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p25_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 26,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p26_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 27,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p27_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 28,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p28_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 29,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p29_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 30,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p30_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 31,
    name: "Boys CAP",
    category: "ZTTW",
    image: p31_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 32,
    name: "ZTTW cream camo puffer top ",
    category: "ZTTW",
    image: p32_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 33,
    name: "HF Boys RED SHORT",
    category: "HF",
    image: p33_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 34,
    name: " HF Boys POLO",
    category: "HF",
    image: p34_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 35,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p35_img,
    new_price: 85,
    old_price: 120,
  },
  {
    id: 36,
    name: "ZARA GOWN",
    category: "ZARA",
    image: p36_img,
    new_price: 85,
    old_price: 120,
  },
];

export default all_products;
