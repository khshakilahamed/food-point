const restaurants = [
    {
      res_id: "res_1",
      restaurant_name: "Sadeeq Agro Sweets",
      restaurant_img: "https://i.ibb.co/SVcZvVw/res-1-Sadeeq-Agro-Sweets.jpg",
      address: "Sadeeq Agro - Wari, 1, 1203 Rankin St, Dhaka 1203",
      phone: "01980-008886",
      time: "10:00 am - 8:00 pm",
      foods: [
        {
          res_id: "res_1",
          food_id: "res_1_food_1",
          food_name: "Beef Tehari / Family Pack Tk 1000 ( Everyday) Lunch / Dinner",
          img: "https://i.ibb.co/Bf0RfR3/beef-Tehari1.jpg",
          persons: "family",
          price: 1000,
          des: "Beef Tehari / Family Pack Tk 1000 ( Will be delivered on Friday) Lunch / Dinner"
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_2",
          food_name: "Jali Kabab per ps 70 tk",
          img: "https://i.ibb.co/WFNNZ9n/jali-kabab1.jpg",
          persons: "1 person",
          price: 70,
          des: "Beef Jali kabab 70 tk per ps <br> Mutton Jali kabab 90 tk per ps"
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_3",
          food_name: "Elish Polao / Single Plate Tk 350 ( Every Tuesday & Thursday )",
          img: "https://i.ibb.co/F8GBm2c/elish-polao1.jpg",
          persons: "1 person",
          price: 350,
          des: "this packet contains a single plate food for 1 person <br> 1 ps Elish <br> 1 ps Elish <br> Plane Polao <br> Alu bokhra Chatni"
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_4",
          food_name: "Kabuli Polao Single box 350 tk",
          img: "https://i.ibb.co/B4wmFTf/kabuli-polao1.jpg",
          persons: "1 person",
          price: 350,
          des: "Kabuli polao Single Box 1 ps meat and 1 person quantity rice <br> price 350"
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_5",
          food_name: "Special Bhutti Kacchi Single Packet Tk 250",
          img: "https://i.ibb.co/54qF31F/special-bhutti-kacchi1.jpg",
          persons: "1 person",
          price: 250,
          des: "Taste the special taste of Bhutti kacchi for just 250 for in a Single plate."
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_6",
          food_name: "Borhani 150tk half Liter",
          img: "https://i.ibb.co/CmdGBJY/borhani-150tk1.jpg",
          persons: "1 person",
          price: 150,
          des: "Borhani half liter just for 150tk"
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_7",
          food_name: "Pesta Badam Milk Shake / 500 ml",
          img: "https://i.ibb.co/vqhnsSt/pesta-badam-milk1.jpg",
          persons: "1 person",
          price: 165,
          des: "Farmented milk, Jafran, Pesta badam, Kaju badam, Kath badam"
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_8",
          food_name: "Black Berry Sweets 400tk/per kg",
          img: "https://i.ibb.co/jk4z7Lb/black-berray-sweets1.jpg",
          persons: "1 person",
          price: 400,
          des: "There are no description yet."
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_9",
          food_name: "Black Berry Sweets 400tk/per kg",
          persons: "1 person",
          img: "https://i.ibb.co/jk4z7Lb/black-berray-sweets1.jpg",
          price: 499,
          des: "There are no description yet."
        },
        {
          res_id: "res_1",
          food_id: "res_1_food_10",
          food_name: "Gulab Jamun / Per kg 400 tk",
          img: "https://i.ibb.co/4Zyst0R/gulab-jamum1.jpg",
          persons: "1 person",
          price: 400,
          des: "Soft, tasty and delicious"
        }
      ]
    },
    {
      res_id: "res_2",
      restaurant_name: "Tradition BD",
      restaurant_img: "https://i.ibb.co/3k8zRbB/res-2-tradition-bd.jpg",
      address: "924-566 Shahid Baki Rd, Dhaka 1219",
      phone: "01723-684068",
      time: "11:00 am - 9:00 pm",
      foods: [
        {
          res_id: "res_2",
          food_id: "res_2_food_1",
          food_name: "Shahi Khashir Kacchi Biryani",
          img: "https://i.ibb.co/GkKcVqX/1.jpg",
          persons: "1 Person",
          price: 399,
          des: "Shahi Khashir Kacchi Biryani"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_2",
          food_name: "Shahi Khashir Kacchi Biryani",
          img: "https://i.ibb.co/GkKcVqX/1.jpg",
          persons: "2 Person",
          price: 1150,
          des: "Shahi Khashir Kacchi Biryani"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_3",
          food_name: "Beef Tehari",
          img: "https://i.ibb.co/h9fd5KQ/2.jpg",
          persons: "1 Person",
          price: 315,
          des: "Beef Tehari"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_4",
          food_name: "Beef Tehari",
          img: "https://i.ibb.co/h9fd5KQ/2.jpg",
          persons: "3 Person",
          price: 920,
          des: "Beef Tehari"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_5",
          food_name: "Shahi Morog Pulao(Chicken Biryani)",
          img: "https://i.ibb.co/Wcmf08w/3.jpg",
          persons: "1 Person",
          price: 340,
          des: "Beef Tehari"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_6",
          food_name: "Shahi Morog Pulao(Chicken Biryani)",
          img: "https://i.ibb.co/Wcmf08w/3.jpg",
          persons: "3 Person",
          price: 950,
          des: "Beef Tehari"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_7",
          food_name: "Beef Bhuna Khichuri",
          img: "https://i.ibb.co/Th3YY41/4.jpg",
          persons: "1 Person",
          price: 310,
          des: "Beef Bhuna Khichuri"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_8",
          food_name: "Beef Bhuna Khichuri",
          img: "https://i.ibb.co/Th3YY41/4.jpg",
          persons: "3 Person",
          price: 900,
          des: "Beef Bhuna Khichuri"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_9",
          food_name: "Plain Pulao Chicken Roast",
          img: "https://i.ibb.co/68Q2JNX/5.jpg",
          persons: "1 Person",
          price: 210,
          des: "Plain Pulao Chicken Roast"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_10",
          food_name: "Plain Pulao Chicken Roast",
          img: "https://i.ibb.co/68Q2JNX/5.jpg",
          persons: "3 Person",
          price: 580,
          des: "Plain Pulao Chicken Roast"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_11",
          food_name: "Plain Pulao Beef Rezala Chicken Roast",
          img: "https://i.ibb.co/twfCrQg/6.jpg",
          persons: "1 Person",
          price: 430,
          des: "Plain Pulao Beef Rezala Chicken Roast"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_12",
          food_name: "Plain Pulao Beef Rezala Chicken Roast",
          img: "https://i.ibb.co/twfCrQg/6.jpg",
          persons: "3 Person",
          price: 1250,
          des: "Plain Pulao Beef Rezala Chicken Roast"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_13",
          food_name: "Shahi Khashir Kacchi Biryani ",
          img: "https://i.ibb.co/ZgP7fS1/7.jpg",
          persons: "1 Person",
          price: 530,
          des: "Shahi Khashir Kacchi Biryani Chicken Roast Water"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_14",
          food_name: "Shahi Khashir Kacchi Biryani ",
          img: "https://i.ibb.co/ZgP7fS1/7.jpg",
          persons: "3 Person",
          price: 1550,
          des: "Shahi Khashir Kacchi Biryani Chicken Roast Water"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_15",
          food_name: "Plain Pulao, Chicken Roast",
          img: "https://i.ibb.co/RHYvhGj/8.jpg",
          persons: "1 Person",
          price: 570,
          des: "Plain Pulao, Chicken Roast, Chicken Jali Kabab, Beef Rezala, Jorda, Borhani, Chatni, Salad, Water"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_16",
          food_name: "Plain Pulao, Chicken Roast, ",
          img: "https://i.ibb.co/RHYvhGj/8.jpg",
          persons: "3 Person",
          price: 1650,
          des: "Plain Pulao, Chicken Roast, Chicken Jali Kabab, Beef Rezala, Jorda, Borhani, Chatni, Salad, Water"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_17",
          food_name: "Shahi Khashir, Kacchi Biryani",
          img: "https://i.ibb.co/hFrLcfP/9.jpg",
          persons: "1 Person",
          price: 599,
          des: "Shahi Khashir, Kacchi Biryani, Chicken Roast, Chicken Jali Kabab, Jorda, Borhani, Chatni"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_18",
          food_name: "Shahi Khashir, Kacchi Biryani",
          img: "https://i.ibb.co/hFrLcfP/9.jpg",
          persons: "3 Person",
          price: 1740,
          des: "Shahi Khashir, Kacchi Biryani, Chicken Roast, Chicken Jali Kabab, Jorda, Borhani, Chatni"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_19",
          food_name: "Shahi Khashir, Kacchi Biryani, Jali Kabab",
          img: "https://i.ibb.co/vX8yV3j/10.jpg",
          persons: "1 Person",
          price: 299,
          des: "Shahi Khashir, Kacchi Biryani, Jali Kabab"
        },
        {
          res_id: "res_2",
          food_id: "res_2_food_20",
          food_name: "Beef Tehari, Jali Kabab",
          img: "https://i.ibb.co/TgzqYXG/11.jpg",
          persons: "1 Person",
          price: 245,
          des: "Beef Tehari, Jali Kabab"
        }
      ]
    },
    {
      res_id: "res_3",
      restaurant_name: "La Fiesta Fast Food",
      restaurant_img: "https://i.ibb.co/r0LpVvR/res-3-La-Fiesta-Fast-Food.jpg",
      address: "583-587 Shahid Baki Rd, Dhaka 1219",
      phone: "01717-384999",
      time: "10:30 am - 8:30 pm",
      foods: [
        {
          res_id: "res_3",
          food_id: "res_3_food_1",
          food_name: "Fried rice with chicken fry set",
          img: "https://i.ibb.co/5chL2vP/1.jpg",
          persons: "1 person",
          price: 150,
          des: "Fried rice with chicken fry set"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_2",
          food_name: "Chicken Curry Rice Set",
          img: "https://i.ibb.co/pRLWzhH/2.jpg",
          persons: "1 person",
          price: 150,
          des: "Chicken Curry Rice Set"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_3",
          food_name: "Tandoori chicken rice set",
          img: "https://i.ibb.co/hsLJC3R/3.jpg",
          persons: "1 Person",
          price: 200,
          des: "Tandoori chicken rice set"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_4",
          food_name: "Vegetable Chowmein",
          img: "https://i.ibb.co/CzsrcNn/4.jpg",
          persons: "1 Person",
          price: 120,
          des: "Vegetable Chowmein"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_5",
          food_name: "Chowmein with chicken fry",
          img: "https://i.ibb.co/s6tZF8Z/5.jpg",
          persons: "1 Person",
          price: 175,
          des: "Chowmein with chicken fry "
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_6",
          food_name: "Chowmein with chicken curry",
          img: "https://i.ibb.co/WBz3Xpx/6.jpg",
          persons: "1 Person",
          price: 1000,
          des: "Chowmein with chicken curry"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_7",
          food_name: "Chowmein with beef curry",
          img: "https://i.ibb.co/3FC3GVd/7.jpg",
          persons: "1 Person",
          price: 220,
          des: "Chowmein with beef curry"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_8",
          food_name: "Arabian chicken shawarma",
          img: "https://i.ibb.co/hDJKYML/8.jpg",
          persons: "1 Person",
          price: 140,
          des: "Arabian chicken shawarma"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_9",
          food_name: "Chicken wrap",
          img: "https://i.ibb.co/Vtq3kNM/9.jpg",
          persons: "1 Person",
          price: 150,
          des: "Chicken wrap"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_10",
          food_name: "Chicken wrap With Cheese",
          img: "https://i.ibb.co/Vtq3kNM/9.jpg",
          persons: "1 Person",
          price: 170,
          des: "Chicken wrap With Cheese"
        },
        {
          res_id: "res_3",
          food_id: "res_3_food_11",
          food_name: "Beef Naan platter, Naan",
          img: "https://i.ibb.co/b7WdBSB/11.jpg",
          persons: "1 Person",
          price: 220,
          des: "Beef Naan platter, Naan, Spice Beef Curry, Alo Motor, Green Chatni"
        }
      ]
    },
    {
      res_id: "res_4",
      restaurant_name: "Meraki Restaurant",
      restaurant_img: "https://i.ibb.co/ZJzRcwP/res-4-Meraki-Restaurant.jpg",
      address: " 188 Gulshan North Ave, Dhaka 1212",
      phone: "01974-268268",
      time: "10:00 am - 8:00 pm",
      foods: [
        {
          res_id: "res_4",
          food_id: "res_4_food_1",
          food_name: "MEDITERRANEAN BBQ LAMB CHOPS",
          img: "https://i.ibb.co/7GzDJn4/1.jpg",
          persons: "1 Person",
          price: 770,
          des: "MEDITERRANEAN BBQ LAMB CHOPS(Nan/Paratha ,Salad)"
        },
        {
          res_id: "res_4",
          food_id: "res_4_food_2",
          food_name: "MOROCCAN PRAWNS WITH COUSCOUS",
          img: "https://i.ibb.co/jGsThvB/2.jpg",
          persons: "1 Person",
          price: 440,
          des: "MOROCCAN PRAWNS WITH COUSCOUS"
        },
        {
          res_id: "res_4",
          food_id: "res_4_food_3",
          food_name: "LAMB KEBAB SANDWICH",
          img: "https://i.ibb.co/KD71bsK/3.jpg",
          persons: "1 Person",
          price: 260,
          des: "LAMB KEBAB SANDWICH"
        },
        {
          res_id: "res_4",
          food_id: "res_4_food_4",
          food_name: "GOLDEN CHICKEN WITH MINTY VEGETABLES",
          img: "https://i.ibb.co/Sdq01rG/4.jpg",
          persons: "1 Person",
          price: 335,
          des: "GOLDEN CHICKEN WITH MINTY VEGETABLES"
        },
        {
          res_id: "res_4",
          food_id: "res_4_food_5",
          food_name: "Ramadan Karim Set Menu-01",
          img: "https://i.ibb.co/wWHSZJ2/5.jpg",
          persons: "2 Person",
          price: 490,
          des: "Ramadan Karim Set Menu-01"
        },
        {
          res_id: "res_4",
          food_id: "res_4_food_6",
          food_name: "Ramadan Karim Set Menu-02",
          img: "https://i.ibb.co/WGR6Ffs/6.jpg",
          persons: "2 Person",
          price: 950,
          des: "Ramadan Karim Set Menu-02"
        },
        {
          res_id: "res_4",
          food_id: "res_4_food_7",
          food_name: "Ramadan Karim Set Menu-03",
          img: "https://i.ibb.co/Pmv5q0g/7.jpg",
          persons: "2 Person",
          price: 1450,
          des: "Ramadan Karim Set Menu-03"
        }
      ]
    },
    {
      res_id: "res_5",
      restaurant_name: "Santoor",
      restaurant_img: "https://i.ibb.co/02LhzLr/res-5-Santoor.jpg",
      address: "House No. 02, Road No.32, Mirpur Road,Dhanmondi, Dhaka-1209,Bangladesh.",
      phone: "01916061927",
      time: "12:00 am - 10:00 pm",
      foods: [
        {
          res_id: "res_5",
          food_id: "res_5_food_1",
          food_name: "Chicken Wings",
          img: "https://i.ibb.co/ZJGXWzz/1.jpg",
          persons: "1 Person",
          price: 450,
          des: "Chicken Wings marinated spices touch with sesame seed & deep fried with black pepper"
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_2",
          food_name: "Home made cottage cheese",
          img: "https://i.ibb.co/TgJPbg1/2.jpg",
          persons: "1 Person",
          price: 575,
          des: "Home made cottage cheese dipped in mixture of gram flour flavor, with azawan seed & deep-fried served with dates sauce"
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_3",
          food_name: "SANTOOR SPECIAL SOUP",
          img: "https://i.ibb.co/ZNSZTTN/3.jpg",
          persons: "1 Person",
          price: 650,
          des: "Chef's special ingredients & mushroom, baby corn, scampi & slice of chicken & tomato."
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_4",
          food_name: "CASHEWNUT SALAD",
          img: "https://i.ibb.co/kmYDfr0/4.jpg",
          persons: "1 Person",
          price: 450,
          des: "Fresh tomato, carrot onion, cucumber, cashewnut mixed with tomato & mayonnaise sauce served with chat masala."
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_5",
          food_name: "PAPER MASALA DOSA",
          img: "https://i.ibb.co/BNq8CJ9/5.jpg",
          persons: "1 Person",
          price: 325,
          des: "Maskali & rice paste wrapped with vegetable masala served with samver & chatney"
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_6",
          food_name: "SANTOOR SPECIAL UTTAPAM",
          img: "https://i.ibb.co/TkN4nfR/6.jpg",
          persons: "1 Person",
          price: 395,
          des: "Thick dal & rice bread on top cashewnut, raisin, morobba & poneer served with samver & chatney."
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_7",
          food_name: "PLAIN IDLY",
          img: "https://i.ibb.co/52cTSzX/7.jpg",
          persons: "1 Person",
          price: 275,
          des: "Semolina & yogurt cake cooked in the steam served with samver & chatney."
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_8",
          food_name: "MASALA IDLY",
          img: "https://i.ibb.co/br0CZRR/8.jpg",
          persons: "1 Person",
          price: 325,
          des: "Semolina & yogurt cake cooked in the steam. Stuffed with vegetable masala served with samver & chatney."
        },
        {
          res_id: "res_5",
          food_id: "res_5_food_9",
          food_name: "CHICKEN TANGRI KABAB",
          img: "https://i.ibb.co/pWccYbt/9.jpg",
          persons: "1 Person",
          price: 545,
          des: "Chicken leg, marinated with chef special spices and cooked on Charcoal oven."
        }
      ]
    },
    {
      res_id: "res_6",
      restaurant_name: "The Atrium Restaurent",
      restaurant_img: "https://i.ibb.co/rfvyQMW/res-6-The-Atrium-Restaurent.jpg",
      address: "50 & 52 Pragati Avenue, J Block, Baridhara, Dhaka",
      phone: "01712444422",
      time: "11:30 am - 9:00 pm",
      foods: [
        {
          res_id: "res_6",
          food_id: "res_6_food_1",
          food_name: "Chicken Satay (6 pieces)",
          img: "https://i.ibb.co/jWnCz9C/1.jpg",
          persons: "3 Persons",
          price: 549,
          des: "Grilled Chicken strips served with an amazing Tom yum sauce"
        },
        {
          res_id: "res_6",
          food_id: "res_6_food_2",
          food_name: "Creamy Crab Rangoons",
          img: "https://i.ibb.co/dtPTXK8/2.jpg",
          persons: "3 persons",
          price: 485,
          des: "Creamy Crab filling in a wonton skin served with spicy chili sauce."
        },
        {
          res_id: "res_6",
          food_id: "res_6_food_3",
          food_name: "Spicy Garlic Mushroom",
          img: "https://i.ibb.co/1QBCrMF/3.jpg",
          persons: "3 Persons",
          price: 445,
          des: "Button Mushrooms sautee with garlic, butter and chilies."
        },
        {
          res_id: "res_6",
          food_id: "res_6_food_4",
          food_name: "Beef with Ginger",
          img: "https://i.ibb.co/yyn9pqg/4.jpg",
          persons: "3 Persons",
          price: 665,
          des: "Sliced beef cooked with bok choy and fresh ginger"
        },
        {
          res_id: "res_6",
          food_id: "res_6_food_5",
          food_name: "Beef with Oyster Sauce",
          img: "https://i.ibb.co/ss5R7bp/5.jpg",
          persons: "3 Persons",
          price: 665,
          des: "Tender Undercut beef strips cooked with onion and vegetables."
        },
        {
          res_id: "res_6",
          food_id: "res_6_food_6",
          food_name: "Sizzling Beef",
          img: "https://i.ibb.co/6bVfhVT/6.jpg",
          persons: "3 Persons",
          price: 695,
          des: "Slices of Soy braised Beef stir fried with roasted cumin, served in a Hot sizzler Dish."
        },
        {
          res_id: "res_6",
          food_id: "res_6_food_7",
          food_name: "Mongolian Beef",
          img: "https://i.ibb.co/cCLXrDc/7.jpg",
          persons: "3 Persons",
          price: 665,
          des: "Slices of beef simmered in a soy, brown sugar, garlic and ginger sauce"
        },
        {
          res_id: "res_6",
          food_id: "res_6_food_8",
          food_name: "Fish with Dry Red Chilli",
          img: "https://i.ibb.co/KNrG3q3/8.jpg",
          persons: "3 Persons",
          price: 635,
          des: "Fish cubes cooked with dry red chilli"
        }
      ]
    }
  ]