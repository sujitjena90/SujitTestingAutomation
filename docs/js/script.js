const STORE_DATA = {"circleCategories":[{"name":"Fruits & Vegetables","emoji":"🥬","image":"https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=600","href":"vegetables.html"},{"name":"Dairy & Bread","emoji":"🥛","image":"https://images.pexels.com/photos/1596568/pexels-photo-1596568.jpeg?auto=compress&cs=tinysrgb&w=600","href":"grocery.html"},{"name":"Atta Rice & Dals","emoji":"🌾","image":"https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600","href":"grocery.html"},{"name":"Snacks & Beverages","emoji":"🥤","image":"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600","href":"grocery.html"},{"name":"Masala & Spices","emoji":"🌶️","image":"https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600","href":"grocery.html"},{"name":"Breakfast Items","emoji":"🥣","image":"https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600","href":"grocery.html"},{"name":"Packaged Food","emoji":"📦","image":"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&h=600&q=80","href":"grocery.html"},{"name":"Tea Coffee & More","emoji":"☕","image":"https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=600","href":"grocery.html"},{"name":"Ice Cream & Frozen","emoji":"🍨","image":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&h=600&q=80","href":"grocery.html"},{"name":"Personal Care","emoji":"🧴","image":"https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=600","href":"index.html#discover"}],"products":{"grocery":[{"id":"g1","name":"Aashirvaad Shudh Chakki Atta","weight":"5 kg","price":278,"mrp":325,"image":"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🌾","filters":["atta-rice"]},{"id":"g2","name":"India Gate Classic Basmati Rice","weight":"5 kg","price":429,"mrp":499,"image":"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍚","filters":["atta-rice"]},{"id":"g3","name":"Fortune Rozana Rice","weight":"1 kg","price":69,"mrp":84,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Rice_grains_%28IRRI%29.jpg?width=640","emoji":"🍚","filters":["atta-rice"]},{"id":"g4","name":"MP Sharbati Atta","weight":"10 kg","price":459,"mrp":540,"image":"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🌾","filters":["atta-rice"]},{"id":"g5","name":"Avalakki Thick Poha","weight":"1 kg","price":74,"mrp":92,"image":"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥣","filters":["atta-rice"]},{"id":"g6","name":"Premium Toor Dal","weight":"1 kg","price":162,"mrp":189,"image":"https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🫘","filters":["dal-pulses"]},{"id":"g7","name":"Unpolished Moong Dal","weight":"1 kg","price":144,"mrp":172,"image":"https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🫘","filters":["dal-pulses"]},{"id":"g8","name":"Masoor Dal","weight":"1 kg","price":118,"mrp":145,"image":"https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🫘","filters":["dal-pulses"]},{"id":"g9","name":"Chana Dal","weight":"1 kg","price":96,"mrp":118,"image":"https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🫘","filters":["dal-pulses"]},{"id":"g10","name":"Jammu Rajma","weight":"500 g","price":84,"mrp":102,"image":"https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🫘","filters":["dal-pulses"]},{"id":"g11","name":"Fortune Sunflower Oil","weight":"1 L","price":149,"mrp":178,"image":"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🫒","filters":["oil-ghee"]},{"id":"g12","name":"Saffola Gold Pro Healthy Oil","weight":"1 L","price":189,"mrp":225,"image":"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🫒","filters":["oil-ghee"]},{"id":"g13","name":"Dhara Kachi Ghani Mustard Oil","weight":"1 L","price":165,"mrp":194,"image":"https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🫒","filters":["oil-ghee"]},{"id":"g14","name":"Amul Pure Cow Ghee","weight":"500 ml","price":318,"mrp":355,"image":"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧈","filters":["oil-ghee"]},{"id":"g15","name":"Filtered Groundnut Oil","weight":"1 L","price":212,"mrp":248,"image":"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🫒","filters":["oil-ghee"]},{"id":"g16","name":"Amul Taaza Milk","weight":"500 ml","price":31,"mrp":34,"image":"https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥛","filters":["dairy"]},{"id":"g17","name":"Mother Dairy Fresh Curd","weight":"400 g","price":38,"mrp":44,"image":"https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥣","filters":["dairy"]},{"id":"g18","name":"Britannia Brown Bread","weight":"400 g","price":42,"mrp":48,"image":"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍞","filters":["dairy"]},{"id":"g19","name":"Amul Salted Butter","weight":"100 g","price":58,"mrp":62,"image":"https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧈","filters":["dairy"]},{"id":"g20","name":"Fresh Malai Paneer","weight":"200 g","price":89,"mrp":102,"image":"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧀","filters":["dairy"]},{"id":"g21","name":"Everest Garam Masala","weight":"100 g","price":72,"mrp":90,"image":"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🌶️","filters":["masala"]},{"id":"g22","name":"Kashmiri Red Chilli Powder","weight":"100 g","price":54,"mrp":68,"image":"https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🌶️","filters":["masala"]},{"id":"g23","name":"Lakadong Turmeric Powder","weight":"100 g","price":48,"mrp":59,"image":"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧂","filters":["masala"]},{"id":"g24","name":"Roasted Coriander Powder","weight":"100 g","price":34,"mrp":42,"image":"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧂","filters":["masala"]},{"id":"g25","name":"Premium Jeera Whole","weight":"100 g","price":66,"mrp":79,"image":"https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧂","filters":["masala"]},{"id":"g26","name":"Tata Tea Gold","weight":"500 g","price":282,"mrp":340,"image":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍵","filters":["beverages"]},{"id":"g27","name":"Nescafe Classic Coffee","weight":"100 g","price":349,"mrp":390,"image":"https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&h=600&q=80","emoji":"☕","filters":["beverages"]},{"id":"g28","name":"Tropicana Orange Delight","weight":"1 L","price":109,"mrp":125,"image":"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥤","filters":["beverages"]},{"id":"g29","name":"Minute Maid Apple Juice","weight":"1 L","price":102,"mrp":118,"image":"https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧃","filters":["beverages"]},{"id":"g30","name":"Paper Boat Aamras","weight":"600 ml","price":74,"mrp":89,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Mangos_-_single_and_halved.jpg?width=640","emoji":"🥭","filters":["beverages"]},{"id":"g31","name":"Lay's Magic Masala Chips","weight":"52 g","price":20,"mrp":22,"image":"https://images.unsplash.com/photo-1613919113640-25732ec5e61f?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥔","filters":["snacks"]},{"id":"g32","name":"Kurkure Masala Munch","weight":"90 g","price":20,"mrp":25,"image":"https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍿","filters":["snacks"]},{"id":"g33","name":"Haldiram Aloo Bhujia","weight":"200 g","price":62,"mrp":75,"image":"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍟","filters":["snacks"]},{"id":"g34","name":"Bingo Mad Angles","weight":"72 g","price":35,"mrp":40,"image":"https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🔺","filters":["snacks"]},{"id":"g35","name":"Too Yumm Multigrain Chips","weight":"75 g","price":42,"mrp":48,"image":"https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥨","filters":["snacks"]},{"id":"g36","name":"Kellogg's Corn Flakes","weight":"475 g","price":178,"mrp":214,"image":"https://images.pexels.com/photos/135525/pexels-photo-135525.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥣","filters":["breakfast"]},{"id":"g37","name":"Quaker Oats","weight":"1 kg","price":188,"mrp":225,"image":"https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥣","filters":["breakfast"]},{"id":"g38","name":"MTR Rava Idli Mix","weight":"500 g","price":92,"mrp":108,"image":"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍽️","filters":["breakfast"]},{"id":"g39","name":"Nutella Hazelnut Spread","weight":"350 g","price":299,"mrp":340,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Nutella_for_breakfast_-_Flickr_-_love.jsc.jpg?width=640","emoji":"🍫","filters":["breakfast"]},{"id":"g40","name":"Kissan Mixed Fruit Jam","weight":"500 g","price":142,"mrp":169,"image":"https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍓","filters":["breakfast"]}],"vegetables":[{"id":"v1","name":"Tomato (Tamatar)","weight":"1 kg","price":38,"mrp":50,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Tomato_je.jpg?width=640","emoji":"🍅","filters":["vegetables"]},{"id":"v2","name":"Potato (Aloo)","weight":"1 kg","price":29,"mrp":36,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Patates.jpg?width=640","emoji":"🥔","filters":["vegetables"]},{"id":"v3","name":"Onion (Pyaaz)","weight":"1 kg","price":34,"mrp":42,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Mixed_onions.jpg?width=640","emoji":"🧅","filters":["vegetables"]},{"id":"v4","name":"Cauliflower (Phool Gobhi)","weight":"1 pc","price":39,"mrp":48,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Chou-fleur_02.jpg?width=640","emoji":"🥦","filters":["vegetables"]},{"id":"v5","name":"Brinjal (Baingan)","weight":"500 g","price":28,"mrp":35,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Solanum_melongena_24_08_2012_%281%29.JPG?width=640","emoji":"🍆","filters":["vegetables"]},{"id":"v6","name":"Ladies Finger (Bhindi)","weight":"500 g","price":42,"mrp":52,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Hong_Kong_Okra_Aug_25_2012.JPG?width=640","emoji":"🫛","filters":["vegetables"]},{"id":"v7","name":"Bottle Gourd (Lauki)","weight":"1 pc","price":32,"mrp":39,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Calabash.jpg?width=640","emoji":"🥒","filters":["vegetables"]},{"id":"v8","name":"Ridge Gourd (Turai)","weight":"500 g","price":36,"mrp":44,"image":"https://images.pexels.com/photos/1092731/pexels-photo-1092731.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥒","filters":["vegetables"]},{"id":"v9","name":"Green Peas (Matar)","weight":"500 g","price":54,"mrp":68,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Peas_in_pods_-_Studio.jpg?width=640","emoji":"🫛","filters":["vegetables"]},{"id":"v10","name":"Carrot (Gajar)","weight":"500 g","price":31,"mrp":40,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Vegetable-Carrot-Bundle-wStalks.jpg?width=640","emoji":"🥕","filters":["vegetables"]},{"id":"v11","name":"Spinach (Palak)","weight":"1 bunch","price":18,"mrp":24,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Spinacia_oleracea_Spinazie_bloeiend.jpg?width=640","emoji":"🥬","filters":["leafy-greens"]},{"id":"v12","name":"Coriander (Dhaniya)","weight":"1 bunch","price":12,"mrp":16,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Coriandrum_sativum_3.jpg?width=640","emoji":"🌿","filters":["leafy-greens"]},{"id":"v13","name":"Mint (Pudina)","weight":"1 bunch","price":14,"mrp":18,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Mint.jpg?width=640","emoji":"🌿","filters":["leafy-greens"]},{"id":"v14","name":"Fenugreek (Methi)","weight":"1 bunch","price":16,"mrp":20,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Fenugreek.jpg?width=640","emoji":"🌿","filters":["leafy-greens"]},{"id":"v15","name":"Lettuce","weight":"1 pc","price":42,"mrp":52,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Iceberg_lettuce_in_SB.jpg?width=640","emoji":"🥬","filters":["leafy-greens"]},{"id":"v16","name":"Spring Onion (Hara Pyaz)","weight":"1 bunch","price":24,"mrp":30,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Spring_onions.jpg?width=640","emoji":"🧅","filters":["leafy-greens"]},{"id":"v17","name":"Curry Leaves (Kadi Patta)","weight":"100 g","price":16,"mrp":20,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Curry_leaves.jpg?width=640","emoji":"🌿","filters":["leafy-greens"]},{"id":"v18","name":"Amaranthus (Chaulai)","weight":"1 bunch","price":18,"mrp":22,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Red_amaranth.jpg?width=640","emoji":"🥬","filters":["leafy-greens"]},{"id":"v19","name":"Dill (Suva Bhaji)","weight":"1 bunch","price":22,"mrp":28,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Anethum_graveolens.jpg?width=640","emoji":"🌿","filters":["leafy-greens"]},{"id":"v20","name":"Celery","weight":"200 g","price":46,"mrp":56,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Celery.jpg?width=640","emoji":"🥬","filters":["leafy-greens"]},{"id":"v21","name":"Banana (Kela)","weight":"6 pcs","price":42,"mrp":50,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Bananavarieties.jpg?width=640","emoji":"🍌","filters":["fruits"]},{"id":"v22","name":"Apple (Seb)","weight":"4 pcs","price":129,"mrp":149,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Red_Apple.jpg?width=640","emoji":"🍎","filters":["fruits"]},{"id":"v23","name":"Orange (Santra)","weight":"4 pcs","price":84,"mrp":98,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Oranges_-_whole-halved-segment.jpg?width=640","emoji":"🍊","filters":["fruits"]},{"id":"v24","name":"Pomegranate (Anar)","weight":"2 pcs","price":98,"mrp":118,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Pomegranate_fruit.jpg?width=640","emoji":"🍎","filters":["fruits"]},{"id":"v25","name":"Papaya","weight":"1 pc","price":58,"mrp":70,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Papaya_cross_section_BNC.jpg?width=640","emoji":"🍈","filters":["fruits"]},{"id":"v26","name":"Watermelon","weight":"1 pc","price":49,"mrp":60,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Watermelon_cross_BNC.jpg?width=640","emoji":"🍉","filters":["fruits"]},{"id":"v27","name":"Guava (Amrood)","weight":"500 g","price":44,"mrp":54,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Guava_ID.jpg?width=640","emoji":"🍏","filters":["fruits"]},{"id":"v28","name":"Grapes (Angoor)","weight":"500 g","price":78,"mrp":92,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Table_grapes_on_white.jpg?width=640","emoji":"🍇","filters":["fruits"]},{"id":"v29","name":"Mango (Aam)","weight":"1 kg","price":158,"mrp":186,"image":"https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥭","filters":["fruits"]},{"id":"v30","name":"Pineapple (Ananas)","weight":"1 pc","price":76,"mrp":92,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Pineapple_and_cross_section.jpg?width=640","emoji":"🍍","filters":["fruits"]},{"id":"v31","name":"Avocado","weight":"2 pcs","price":169,"mrp":198,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Avocado_with_cross_section.jpg?width=640","emoji":"🥑","filters":["exotic-fruits"]},{"id":"v32","name":"Blueberries","weight":"125 g","price":199,"mrp":229,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Blueberries.jpg?width=640","emoji":"🫐","filters":["exotic-fruits"]},{"id":"v33","name":"Dragon Fruit","weight":"1 pc","price":145,"mrp":168,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Pitaya_cross_section_ed2.jpg?width=640","emoji":"🐉","filters":["exotic-fruits"]},{"id":"v34","name":"Kiwi","weight":"3 pcs","price":115,"mrp":132,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Kiwi_aka.jpg?width=640","emoji":"🥝","filters":["exotic-fruits"]},{"id":"v35","name":"Imported Pear","weight":"4 pcs","price":149,"mrp":176,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Pears.jpg?width=640","emoji":"🍐","filters":["exotic-fruits"]},{"id":"v36","name":"Plum Premium","weight":"250 g","price":94,"mrp":110,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Plums.jpg?width=640","emoji":"🟣","filters":["exotic-fruits"]},{"id":"v37","name":"Cherry Pack","weight":"200 g","price":189,"mrp":219,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Cherry_Stella444.jpg?width=640","emoji":"🍒","filters":["exotic-fruits"]},{"id":"v38","name":"Broccoli","weight":"1 pc","price":62,"mrp":74,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Broccoli_and_cross_section_edit.jpg?width=640","emoji":"🥦","filters":["exotic-fruits"]},{"id":"v39","name":"Zucchini","weight":"500 g","price":88,"mrp":104,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/CSA-Striped-Zucchini.jpg?width=640","emoji":"🥒","filters":["exotic-fruits"]},{"id":"v40","name":"Bell Peppers Trio","weight":"500 g","price":132,"mrp":156,"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Green-Yellow-Red-Pepper-2009.jpg?width=640","emoji":"🫑","filters":["exotic-fruits"]},{"id":"veg-drumstick","name":"Drumstick (Sahjan)","weight":"500 g","price":38,"mrp":45,"emoji":"🥒","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Moringa_oleifera_pods.jpg?width=640"},{"id":"veg-bitter-gourd","name":"Bitter Gourd (Karela)","weight":"500 g","price":34,"mrp":40,"emoji":"🥒","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Momordica_charantia_fruit.jpg?width=640"},{"id":"veg-ash-gourd","name":"Ash Gourd (Petha)","weight":"1 kg","price":28,"mrp":35,"emoji":"🥒","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Winter_melon.jpg?width=640"},{"id":"veg-snake-gourd","name":"Snake Gourd (Chichinda)","weight":"500 g","price":32,"mrp":38,"emoji":"🥒","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Trichosanthes_cucumerina.jpg?width=640"},{"id":"veg-pointed-gourd","name":"Pointed Gourd (Parwal)","weight":"500 g","price":36,"mrp":42,"emoji":"🥒","filters":["vegetables"],"image":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=600&q=80"},{"id":"veg-raw-banana","name":"Raw Banana (Kachcha Kela)","weight":"500 g","price":22,"mrp":28,"emoji":"🍌","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Plantains.jpg?width=640"},{"id":"veg-colocasia","name":"Colocasia (Arbi)","weight":"500 g","price":34,"mrp":40,"emoji":"🥔","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Colocasia_esculenta_corms.jpg?width=640"},{"id":"veg-sweet-potato","name":"Sweet Potato (Shakarkandi)","weight":"500 g","price":28,"mrp":35,"emoji":"🍠","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Ipomoea_batatas_006.JPG?width=640"},{"id":"veg-radish","name":"Radish (Mooli)","weight":"500 g","price":18,"mrp":24,"emoji":"🥕","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Radish_3371103037_4ab07db0bf_o.jpg?width=640"},{"id":"veg-jackfruit","name":"Raw Jackfruit (Kathal)","weight":"500 g","price":42,"mrp":50,"emoji":"🍈","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Jackfruit%20hanging.JPG?width=640"},{"id":"veg-ivy-gourd","name":"Ivy Gourd (Kundru)","weight":"250 g","price":24,"mrp":30,"emoji":"🥒","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Coccinia_grandis.jpg?width=640"},{"id":"veg-cluster-beans","name":"Cluster Beans (Gawar)","weight":"250 g","price":28,"mrp":35,"emoji":"🫘","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Cluster_beans.jpg?width=640"},{"id":"veg-elephant-yam","name":"Elephant Yam (Suran/Jimikand)","weight":"500 g","price":32,"mrp":38,"emoji":"🥔","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Amorphophallus_paeoniifolius_corm.jpg?width=640"},{"id":"veg-lotus-stem","name":"Lotus Stem (Kamal Kakdi)","weight":"250 g","price":38,"mrp":45,"emoji":"🌿","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Lotus_root.jpg?width=640"},{"id":"veg-raw-papaya","name":"Raw Papaya (Kachcha Papita)","weight":"500 g","price":22,"mrp":28,"emoji":"🥒","filters":["vegetables"],"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Carica_papaya_-_papaya_-_desc-fruit.jpg?width=640"}],"fashion":[{"id":"f1","name":"Men's Round Neck T-Shirt (Cotton)","weight":"M/L/XL","price":299,"mrp":599,"image":"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👕","filters":["mens-wear"]},{"id":"f2","name":"Men's Polo T-Shirt","weight":"M/L/XL","price":499,"mrp":999,"image":"https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👕","filters":["mens-wear"]},{"id":"f3","name":"Men's Casual Shirt (Checked)","weight":"M/L/XL","price":599,"mrp":1299,"image":"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👔","filters":["mens-wear"]},{"id":"f4","name":"Men's Formal Shirt (White)","weight":"38/40/42","price":699,"mrp":1499,"image":"https://images.unsplash.com/photo-1598033125813-cbe00038d0c4?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👔","filters":["mens-wear"]},{"id":"f5","name":"Men's Slim Fit Jeans (Blue)","weight":"30/32/34","price":799,"mrp":1699,"image":"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👖","filters":["mens-wear"]},{"id":"f6","name":"Men's Jogger Pants","weight":"M/L/XL","price":499,"mrp":999,"image":"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👖","filters":["mens-wear"]},{"id":"f7","name":"Men's Shorts (Cotton)","weight":"M/L/XL","price":349,"mrp":699,"image":"https://images.pexels.com/photos/767116/pexels-photo-767116.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🩳","filters":["mens-wear"]},{"id":"f8","name":"Men's Track Pants","weight":"M/L/XL","price":449,"mrp":899,"image":"https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👖","filters":["mens-wear"]},{"id":"f13","name":"Women's Kurti (Printed)","weight":"S/M/L","price":449,"mrp":999,"image":"https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👗","filters":["womens-wear"]},{"id":"f14","name":"Women's Saree (Silk)","weight":"Free Size","price":1299,"mrp":2999,"image":"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥻","filters":["womens-wear"]},{"id":"f15","name":"Women's Salwar Suit Set","weight":"S/M/L/XL","price":899,"mrp":1899,"image":"https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👗","filters":["womens-wear"]},{"id":"f16","name":"Women's Western Dress","weight":"S/M/L","price":699,"mrp":1499,"image":"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👗","filters":["womens-wear"]},{"id":"f17","name":"Women's Palazzo Pants","weight":"S/M/L/XL","price":399,"mrp":799,"image":"https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👖","filters":["womens-wear"]},{"id":"f18","name":"Women's Leggings (Cotton)","weight":"S/M/L/XL","price":249,"mrp":499,"image":"https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👖","filters":["womens-wear"]},{"id":"f19","name":"Women's T-Shirt (Casual)","weight":"S/M/L","price":299,"mrp":599,"image":"https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👚","filters":["womens-wear"]},{"id":"f20","name":"Women's Crop Top","weight":"S/M/L","price":349,"mrp":699,"image":"https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👚","filters":["womens-wear"]},{"id":"f21","name":"Women's Jeans (Skinny)","weight":"26/28/30/32","price":699,"mrp":1399,"image":"https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👖","filters":["womens-wear"]},{"id":"f22","name":"Women's Dupatta (Chiffon)","weight":"Free Size","price":199,"mrp":399,"image":"https://images.pexels.com/photos/3651599/pexels-photo-3651599.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧣","filters":["womens-wear"]},{"id":"f25","name":"Men's Cotton Brief (3 Pack)","weight":"S/M/L/XL","price":399,"mrp":699,"image":"https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🩲","filters":["mens-innerwear"]},{"id":"f26","name":"Men's Boxer Shorts (Pack 3)","weight":"M/L/XL","price":499,"mrp":899,"image":"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🩲","filters":["mens-innerwear"]},{"id":"f27","name":"Men's Vest (Pack 3)","weight":"S/M/L/XL","price":349,"mrp":599,"image":"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🦺","filters":["mens-innerwear"]},{"id":"f28","name":"Men's Thermal Set (Winter)","weight":"M/L/XL","price":699,"mrp":1299,"image":"https://images.pexels.com/photos/6311575/pexels-photo-6311575.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧥","filters":["mens-innerwear"]},{"id":"f41","name":"Men's Sports Shoes","weight":"7/8/9/10","price":999,"mrp":1999,"image":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👟","filters":["mens-footwear"]},{"id":"f42","name":"Men's Casual Sneakers","weight":"7/8/9/10","price":799,"mrp":1599,"image":"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👟","filters":["mens-footwear"]},{"id":"f43","name":"Men's Formal Shoes (Black)","weight":"7/8/9/10","price":1299,"mrp":2599,"image":"https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👞","filters":["mens-footwear"]},{"id":"f44","name":"Men's Sandals","weight":"7/8/9/10","price":399,"mrp":799,"image":"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🩴","filters":["mens-footwear"]},{"id":"f45","name":"Men's Flip Flops","weight":"7/8/9/10","price":199,"mrp":399,"image":"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🩴","filters":["mens-footwear"]},{"id":"f49","name":"Women's Heels (Stiletto)","weight":"5/6/7/8","price":999,"mrp":1999,"image":"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👠","filters":["womens-footwear"]},{"id":"f50","name":"Women's Flats (Bellies)","weight":"5/6/7/8","price":449,"mrp":899,"image":"https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥿","filters":["womens-footwear"]},{"id":"f51","name":"Women's Sandals (Wedge)","weight":"5/6/7/8","price":599,"mrp":1199,"image":"https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👡","filters":["womens-footwear"]},{"id":"f52","name":"Women's Sports Shoes","weight":"5/6/7/8","price":899,"mrp":1799,"image":"https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👟","filters":["womens-footwear"]},{"id":"f53","name":"Women's Slip-Ons","weight":"5/6/7/8","price":399,"mrp":799,"image":"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥿","filters":["womens-footwear"]},{"id":"f57","name":"Boys T-Shirt (Cartoon Print)","weight":"2-4Y/5-7Y/8-10Y","price":249,"mrp":499,"image":"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👕","filters":["kids-wear"]},{"id":"f58","name":"Girls Frock (Party Wear)","weight":"2-4Y/5-7Y/8-10Y","price":499,"mrp":999,"image":"https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👗","filters":["kids-wear"]},{"id":"f59","name":"Boys Shorts & T-Shirt Set","weight":"2-4Y/5-7Y/8-10Y","price":399,"mrp":799,"image":"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👕","filters":["kids-wear"]},{"id":"f60","name":"Girls Leggings (Pack 3)","weight":"2-4Y/5-7Y/8-10Y","price":349,"mrp":699,"image":"https://images.pexels.com/photos/1620761/pexels-photo-1620761.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👖","filters":["kids-wear"]},{"id":"f61","name":"Boys Jeans (Slim)","weight":"4-6Y/7-9Y/10-12Y","price":499,"mrp":999,"image":"https://images.pexels.com/photos/1620762/pexels-photo-1620762.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👖","filters":["kids-wear"]},{"id":"f62","name":"Girls Kurta Set","weight":"4-6Y/7-9Y/10-12Y","price":599,"mrp":1199,"image":"https://images.pexels.com/photos/1620763/pexels-photo-1620763.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👗","filters":["kids-wear"]},{"id":"f67","name":"Women's Tote Bag (Leather)","weight":"One Size","price":899,"mrp":1799,"image":"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👜","filters":["handbags"]},{"id":"f68","name":"Women's Crossbody Sling","weight":"One Size","price":499,"mrp":999,"image":"https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👜","filters":["handbags"]},{"id":"f69","name":"Women's Clutch (Party)","weight":"One Size","price":599,"mrp":1199,"image":"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👛","filters":["handbags"]},{"id":"f70","name":"Men's Wallet (Leather)","weight":"One Size","price":399,"mrp":799,"image":"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👛","filters":["handbags"]},{"id":"f73","name":"Sunglasses (Aviator, Unisex)","weight":"Free Size","price":499,"mrp":999,"image":"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🕶️","filters":["eyewear"]},{"id":"f74","name":"Blue Light Blocking Glasses","weight":"Free Size","price":399,"mrp":799,"image":"https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👓","filters":["eyewear"]},{"id":"f75","name":"Sunglasses (Wayfarer)","weight":"Free Size","price":599,"mrp":1199,"image":"https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🕶️","filters":["eyewear"]},{"id":"f76","name":"Sports Sunglasses (Polarized)","weight":"Free Size","price":799,"mrp":1599,"image":"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🕶️","filters":["eyewear"]},{"id":"f79","name":"Gold Plated Necklace Set","weight":"One Size","price":599,"mrp":1299,"image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📿","filters":["jewellery"]},{"id":"f80","name":"Oxidized Silver Jhumka","weight":"One Size","price":299,"mrp":599,"image":"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&h=600&q=80","emoji":"��","filters":["jewellery"]},{"id":"f81","name":"Bangles Set (Pack 6)","weight":"2.4/2.6/2.8","price":399,"mrp":799,"image":"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&h=600&q=80","emoji":"💍","filters":["jewellery"]},{"id":"f82","name":"Stud Earrings (Crystal)","weight":"One Size","price":199,"mrp":399,"image":"https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"💎","filters":["jewellery"]}],"electronics":[{"id":"elec-iphone-15","page":"electronics","name":"iPhone 15","weight":"128GB","price":79999,"mrp":82900,"image":"https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📱","filters":["mobiles"]},{"id":"elec-galaxy-s24","page":"electronics","name":"Samsung Galaxy S24","weight":"256GB","price":74999,"mrp":79999,"image":"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📱","filters":["mobiles"]},{"id":"elec-oneplus-12","page":"electronics","name":"OnePlus 12","weight":"256GB","price":64999,"mrp":69999,"image":"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📱","filters":["mobiles"]},{"id":"elec-redmi-note-13-pro","page":"electronics","name":"Redmi Note 13 Pro","weight":"256GB","price":24999,"mrp":27999,"image":"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📱","filters":["mobiles"]},{"id":"elec-macbook-air-m2","page":"electronics","name":"MacBook Air M2","weight":"13.6-inch, 8GB/256GB","price":114900,"mrp":119900,"image":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&h=600&q=80","emoji":"💻","filters":["laptops"]},{"id":"elec-hp-pavilion","page":"electronics","name":"HP Pavilion Laptop","weight":"15.6-inch, 16GB/512GB","price":54999,"mrp":62999,"image":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&h=600&q=80","emoji":"💻","filters":["laptops"]},{"id":"elec-dell-inspiron-15","page":"electronics","name":"Dell Inspiron 15","weight":"15.6-inch, 8GB/512GB","price":49999,"mrp":55999,"image":"https://images.pexels.com/photos/1458695/pexels-photo-1458695.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"💻","filters":["laptops"]},{"id":"elec-sony-xm5","page":"electronics","name":"Sony WH-1000XM5","weight":"Wireless Noise Cancelling","price":29990,"mrp":34990,"image":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎧","filters":["headphones"]},{"id":"elec-boat-rockerz-450","page":"electronics","name":"boAt Rockerz 450","weight":"Bluetooth On-Ear","price":1299,"mrp":2990,"image":"https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎧","filters":["headphones"]},{"id":"elec-jbl-flip-6","page":"electronics","name":"JBL Flip 6","weight":"Portable Bluetooth Speaker","price":9999,"mrp":12999,"image":"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔊","filters":["speakers"]},{"id":"elec-airpods-pro","page":"electronics","name":"Apple AirPods Pro","weight":"2nd Gen","price":24900,"mrp":26900,"image":"https://images.unsplash.com/photo-1600294037681-c2a4b07c0b0b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎧","filters":["headphones"]},{"id":"elec-galaxy-buds","page":"electronics","name":"Samsung Galaxy Buds","weight":"True Wireless","price":9999,"mrp":14999,"image":"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎧","filters":["headphones"]},{"id":"elec-realme-buds-air-5","page":"electronics","name":"Realme Buds Air 5","weight":"ANC Earbuds","price":3499,"mrp":4999,"image":"https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎧","filters":["headphones"]},{"id":"elec-apple-watch-series-9","page":"electronics","name":"Apple Watch Series 9","weight":"GPS 45mm","price":44900,"mrp":49900,"image":"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-fire-boltt-phoenix","page":"electronics","name":"Fire-Boltt Phoenix","weight":"Bluetooth Calling","price":1499,"mrp":5999,"image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=600&q=80","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-noise-colorfit-pro-5","page":"electronics","name":"Noise ColorFit Pro 5","weight":"AMOLED Display","price":2999,"mrp":5999,"image":"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&h=600&q=80","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-anker-powerbank","page":"electronics","name":"Anker 20000mAh PowerBank","weight":"22.5W Fast Charge","price":2199,"mrp":3499,"image":"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔋","filters":["power-banks"]},{"id":"elec-mi-power-bank-3i","page":"electronics","name":"Mi Power Bank 3i","weight":"10000mAh","price":1099,"mrp":1499,"image":"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔋","filters":["power-banks"]},{"id":"elec-samsung-25w-charger","page":"electronics","name":"Samsung 25W Charger","weight":"USB-C Fast Charger","price":1299,"mrp":1999,"image":"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-apple-20w-charger","page":"electronics","name":"Apple 20W USB-C Charger","weight":"Wall Adapter","price":1900,"mrp":2500,"image":"https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-portronics-cable","page":"electronics","name":"Portronics USB-C Cable","weight":"1m Fast Charging Cable","price":299,"mrp":599,"image":"https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-canon-eos-1500d","page":"electronics","name":"Canon EOS 1500D","weight":"24.1MP DSLR","price":35990,"mrp":39995,"image":"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📷","filters":["cameras"]},{"id":"elec-gopro-hero-12","page":"electronics","name":"GoPro Hero 12","weight":"5.3K Action Camera","price":39990,"mrp":44990,"image":"https://images.pexels.com/photos/1616090/pexels-photo-1616090.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"📷","filters":["cameras"]},{"id":"elec-ipad-air-m1","page":"electronics","name":"iPad Air M1","weight":"10.9-inch, 64GB","price":59900,"mrp":64900,"image":"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📱","filters":["mobiles"]},{"id":"elec-tab-s9","page":"electronics","name":"Samsung Tab S9","weight":"11-inch, 128GB","price":72999,"mrp":79999,"image":"https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📱","filters":["mobiles"]},{"id":"elec-kindle-paperwhite","page":"electronics","name":"Kindle Paperwhite","weight":"11th Gen","price":13999,"mrp":16999,"image":"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📚","filters":["mobiles"]},{"id":"elec-echo-dot","page":"electronics","name":"Echo Dot 5th Gen","weight":"Smart Speaker","price":4499,"mrp":5499,"image":"https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔊","filters":["speakers"]},{"id":"elec-marshall-acton-iii","page":"electronics","name":"Marshall Acton III Speaker","weight":"Home Bluetooth Speaker","price":22999,"mrp":26999,"image":"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔊","filters":["speakers"]},{"id":"elec-sony-alpha-a6400","page":"electronics","name":"Sony Alpha A6400","weight":"Mirrorless Camera","price":75990,"mrp":82990,"image":"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📷","filters":["cameras"]},{"id":"elec-logitech-mx-master-3s","page":"electronics","name":"Logitech MX Master 3S","weight":"Wireless Mouse","price":8995,"mrp":10995,"image":"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🖱️","filters":["chargers-cables"]},{"id":"elec-iphone-16","name":"iPhone 16","weight":"128 GB","price":79900,"mrp":89900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/IPhone_16_Vector.svg/500px-IPhone_16_Vector.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-iphone-16-pro","name":"iPhone 16 Pro","weight":"256 GB","price":119900,"mrp":134900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/IPhone_16_Pro_Vector.svg/500px-IPhone_16_Pro_Vector.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-iphone-15-plus","name":"iPhone 15 Plus","weight":"128 GB","price":72900,"mrp":79900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/IPhone_15_Vector.svg/500px-IPhone_15_Vector.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-s24-ultra","name":"Samsung Galaxy S24 Ultra","weight":"256 GB","price":109999,"mrp":129999,"image":"https://upload.wikimedia.org/wikipedia/commons/0/05/Samsung_Galaxy_S24%2C_Sperrbildschirm.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled","emoji":"📱","filters":["mobiles"]},{"id":"elec-s24-fe","name":"Samsung Galaxy S24 FE","weight":"128 GB","price":44999,"mrp":54999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/A_platinum_Microsoft_Surface_Laptop_Go.jpg/960px-A_platinum_Microsoft_Surface_Laptop_Go.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-a55","name":"Samsung Galaxy A55 5G","weight":"128 GB","price":28999,"mrp":39999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Samsung_Galaxy_A55_5G_2024.jpg/3840px-Samsung_Galaxy_A55_5G_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-a35","name":"Samsung Galaxy A35 5G","weight":"128 GB","price":23999,"mrp":30999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Samsung_Galaxy_A35_5G_2024_%281%29.jpg/3840px-Samsung_Galaxy_A35_5G_2024_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-pixel-8a","name":"Google Pixel 8a","weight":"128 GB","price":39999,"mrp":52999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Google_Pixel_8a_front.svg/960px-Google_Pixel_8a_front.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-pixel-9","name":"Google Pixel 9","weight":"128 GB","price":74999,"mrp":82999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Backlit_Laptop_Keyboard.jpg/960px-Backlit_Laptop_Keyboard.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-nothing-2a","name":"Nothing Phone 2a","weight":"128 GB","price":21999,"mrp":25999,"image":"https://upload.wikimedia.org/wikipedia/commons/b/b7/Nothing-Design-Event-Tokyo-2024-07-05_018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled","emoji":"📱","filters":["mobiles"]},{"id":"elec-nothing-3a","name":"Nothing Phone 3a","weight":"128 GB","price":24999,"mrp":27999,"image":"https://upload.wikimedia.org/wikipedia/commons/7/78/Nothing_Phone_%283a%29_Pro_20250628.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled","emoji":"📱","filters":["mobiles"]},{"id":"elec-vivo-v30","name":"Vivo V30 5G","weight":"256 GB","price":29999,"mrp":39999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Cat_on_laptop_-_Just_Browsing.jpg/960px-Cat_on_laptop_-_Just_Browsing.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-vivo-t3","name":"Vivo T3 5G","weight":"128 GB","price":17999,"mrp":21999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dell_Inspiron_tablet_laptop_teardown.jpg/960px-Dell_Inspiron_tablet_laptop_teardown.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-oppo-reno12","name":"OPPO Reno 12 5G","weight":"256 GB","price":32999,"mrp":38999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dual_touch_screen_laptop.jpg/960px-Dual_touch_screen_laptop.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-oppo-f27","name":"OPPO F27 5G","weight":"128 GB","price":21999,"mrp":26999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HP_Laptop_14S.jpg/960px-HP_Laptop_14S.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-realme-12-pro","name":"realme 12 Pro+","weight":"256 GB","price":27999,"mrp":31999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/HP_Laptop_15-da1xxx.jpg/960px-HP_Laptop_15-da1xxx.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-realme-narzo-70","name":"realme Narzo 70 Pro","weight":"128 GB","price":16999,"mrp":19999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/HP_Laptop_15-da1xxx_%281%29.jpg/960px-HP_Laptop_15-da1xxx_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-motorola-edge-50","name":"Motorola Edge 50 Pro","weight":"256 GB","price":29999,"mrp":35999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HP_Pavilion_Computer_laptop_keyboard_closeup.jpg/960px-HP_Pavilion_Computer_laptop_keyboard_closeup.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-moto-g85","name":"Motorola G85 5G","weight":"128 GB","price":17999,"mrp":20999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/HP_laptop_keyboard.jpg/960px-HP_laptop_keyboard.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-iqoo-neo9","name":"iQOO Neo 9 Pro","weight":"256 GB","price":29999,"mrp":34999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hewlett-Packard_Pavilion_dm1_laptop_keyboard_and_touchpad.jpg/960px-Hewlett-Packard_Pavilion_dm1_laptop_keyboard_and_touchpad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-poco-x6-pro","name":"POCO X6 Pro 5G","weight":"256 GB","price":22999,"mrp":26999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Image_with_nested_realities_of_a_laptop_showing_the_image_of_the_same_laptop_showing_a_Wikimedia_Commons_image_of_the_laptop.jpeg/960px-Image_with_nested_realities_of_a_laptop_showing_the_image_of_the_same_laptop_showing_a_Wikimedia_Commons_image_of_the_laptop.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-redmi-13c","name":"Redmi 13C 5G","weight":"128 GB","price":10999,"mrp":13999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Journalist_at_work..._laptop%2C_recorder...._01.jpg/960px-Journalist_at_work..._laptop%2C_recorder...._01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-cmf-phone-1","name":"CMF Phone 1","weight":"128 GB","price":15999,"mrp":19999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Journalist_at_work..._laptop%2C_recorder...._02.jpg/960px-Journalist_at_work..._laptop%2C_recorder...._02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["mobiles"]},{"id":"elec-ipad-10","name":"iPad 10th Gen","weight":"64 GB","price":34900,"mrp":44900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Journalist_at_work..._laptop%2C_recorder...._07.jpg/960px-Journalist_at_work..._laptop%2C_recorder...._07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["tablets"]},{"id":"elec-ipad-mini","name":"iPad mini 6","weight":"64 GB","price":46900,"mrp":49900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Journalist_at_work..._laptop%2C_recorder...._08.jpg/960px-Journalist_at_work..._laptop%2C_recorder...._08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["tablets"]},{"id":"elec-lenovo-tab-p12","name":"Lenovo Tab P12","weight":"128 GB","price":21999,"mrp":27999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/LAPTOPS_Y_COMPUTADORAS.jpg/960px-LAPTOPS_Y_COMPUTADORAS.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["tablets"]},{"id":"elec-xiaomi-pad-6","name":"Xiaomi Pad 6","weight":"128 GB","price":24999,"mrp":29999,"image":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Xiaomi_Pad_6_display.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled","emoji":"📱","filters":["tablets"]},{"id":"elec-realme-pad-2","name":"realme Pad 2","weight":"6 GB/128 GB","price":14999,"mrp":19999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Laptop%2C_Small_notebook%2C_Netbook%2C_Rostov-on-Don%2C_Russia.jpg/960px-Laptop%2C_Small_notebook%2C_Netbook%2C_Rostov-on-Don%2C_Russia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📱","filters":["tablets"]},{"id":"elec-lenovo-ideapad-slim3","name":"Lenovo IdeaPad Slim 3","weight":"16/512 GB","price":42990,"mrp":54990,"image":"https://upload.wikimedia.org/wikipedia/commons/6/63/Laptop-2411303_960_720.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"💻","filters":["laptops"]},{"id":"elec-asus-vivobook-15","name":"ASUS VivoBook 15","weight":"16/512 GB","price":44990,"mrp":56990,"image":"https://upload.wikimedia.org/wikipedia/commons/3/39/Laptop-coaster.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"💻","filters":["laptops"]},{"id":"elec-acer-aspire-5","name":"Acer Aspire 5","weight":"16/512 GB","price":46990,"mrp":58990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Acer_Aspire_Switch_12_S_%2824109486459%29.jpg/3840px-Acer_Aspire_Switch_12_S_%2824109486459%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"💻","filters":["laptops"]},{"id":"elec-hp-15s","name":"HP 15s Laptop","weight":"8/512 GB","price":38990,"mrp":48990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Laptop-intel-core2duo-t5500.jpg/960px-Laptop-intel-core2duo-t5500.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💻","filters":["laptops"]},{"id":"elec-dell-15-3520","name":"Dell 15 Thin & Light","weight":"8/512 GB","price":39990,"mrp":51990,"image":"https://upload.wikimedia.org/wikipedia/commons/4/4f/Laptop_%28Pixi%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"💻","filters":["laptops"]},{"id":"elec-lenovo-loq","name":"Lenovo LOQ Gaming","weight":"16/512 GB","price":69990,"mrp":89990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Laptop_1.jpg/960px-Laptop_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💻","filters":["laptops"]},{"id":"elec-asus-tuf-f15","name":"ASUS TUF Gaming F15","weight":"16/512 GB","price":74990,"mrp":94990,"image":"https://upload.wikimedia.org/wikipedia/commons/3/33/Laptop_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"💻","filters":["laptops"]},{"id":"elec-macbook-air-m3","name":"MacBook Air 13 M3","weight":"8/256 GB","price":99900,"mrp":114900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Laptop_Graveyard.jpg/960px-Laptop_Graveyard.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💻","filters":["laptops"]},{"id":"elec-samsung-book4","name":"Samsung Galaxy Book4","weight":"16/512 GB","price":64990,"mrp":79990,"image":"https://upload.wikimedia.org/wikipedia/commons/8/8b/Laptop_World.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"💻","filters":["laptops"]},{"id":"elec-msi-thin-15","name":"MSI Thin 15 Gaming","weight":"16/512 GB","price":59990,"mrp":74990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Laptop_base_repair.jpg/960px-Laptop_base_repair.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💻","filters":["laptops"]},{"id":"elec-boat-airdopes-141","name":"boAt Airdopes 141","weight":"1 pc","price":999,"mrp":2990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Laptop_computer.jpeg/960px-Laptop_computer.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-boat-airdopes-800","name":"boAt Airdopes 800","weight":"1 pc","price":1499,"mrp":3490,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Laptop_der_Marke_exone_go_20240203_HOF06886_RAW-Export_000276.png/960px-Laptop_der_Marke_exone_go_20240203_HOF06886_RAW-Export_000276.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-noise-buds-vs104","name":"Noise Buds VS104","weight":"1 pc","price":899,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Laptop_full_of_stickers.jpg/960px-Laptop_full_of_stickers.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-boult-z40","name":"Boult Audio Z40","weight":"1 pc","price":999,"mrp":4999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Laptop_hp.jpg/960px-Laptop_hp.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-oneplus-buds-3","name":"OnePlus Buds 3","weight":"1 pc","price":4499,"mrp":6499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Laptop_image.jpg/960px-Laptop_image.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-sony-wf-c700n","name":"Sony WF-C700N","weight":"1 pc","price":7990,"mrp":12990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Laptop_picture.jpg/960px-Laptop_picture.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-jbl-tune-510bt","name":"JBL Tune 510BT","weight":"1 pc","price":2999,"mrp":4999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Laptop_stand.jpg/960px-Laptop_stand.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-boat-rockerz-255","name":"boAt Rockerz 255 Pro+","weight":"1 pc","price":1099,"mrp":3990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Laptop_use_in_bed_in_2000s.jpg/960px-Laptop_use_in_bed_in_2000s.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-sennheiser-accentum","name":"Sennheiser Accentum","weight":"1 pc","price":9990,"mrp":14990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Laptop_with_stickers.jpg/960px-Laptop_with_stickers.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-apple-airpods-4","name":"Apple AirPods 4","weight":"1 pc","price":12900,"mrp":14900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Microsoft_Surface_Laptop_7.jpg/960px-Microsoft_Surface_Laptop_7.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎧","filters":["headphones"]},{"id":"elec-boat-stone-352","name":"boAt Stone 352","weight":"1 pc","price":1299,"mrp":3490,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Old_Laptop_Running_Ubuntu_Linux.jpg/960px-Old_Laptop_Running_Ubuntu_Linux.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔊","filters":["speakers"]},{"id":"elec-jbl-go-4","name":"JBL Go 4","weight":"1 pc","price":2999,"mrp":3999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RANDY_BROKEN_LAPTOP_01.jpg/960px-RANDY_BROKEN_LAPTOP_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔊","filters":["speakers"]},{"id":"elec-sony-srs-xb100","name":"Sony SRS-XB100","weight":"1 pc","price":3990,"mrp":5990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ruler_and_laptop_on_a_desk_%28Unsplash%29.jpg/960px-Ruler_and_laptop_on_a_desk_%28Unsplash%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔊","filters":["speakers"]},{"id":"elec-echo-pop","name":"Amazon Echo Pop","weight":"1 pc","price":2999,"mrp":4499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Schenker_VIA14_Laptop_asv2021-01.jpg/960px-Schenker_VIA14_Laptop_asv2021-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔊","filters":["speakers"]},{"id":"elec-google-nest-mini","name":"Google Nest Mini","weight":"1 pc","price":3499,"mrp":4499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/A_technical_laptop_repairer.jpg/960px-A_technical_laptop_repairer.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔊","filters":["speakers"]},{"id":"elec-zebronics-zeb-county","name":"Zebronics Zeb-County","weight":"1 pc","price":799,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Acer_laptop_keyboard.jpg/960px-Acer_laptop_keyboard.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔊","filters":["speakers"]},{"id":"elec-bose-soundlink-flex","name":"Bose SoundLink Flex","weight":"1 pc","price":13900,"mrp":16900,"image":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Acer_laptop_side.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🔊","filters":["speakers"]},{"id":"elec-samsung-watch6","name":"Samsung Galaxy Watch6","weight":"40 mm","price":22999,"mrp":32999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Samsung_Galaxy_Watch_6.jpg/3840px-Samsung_Galaxy_Watch_6.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-galaxy-fit3","name":"Samsung Galaxy Fit3","weight":"1 pc","price":3999,"mrp":5999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Cat_on_laptop_yawning.jpg/960px-Cat_on_laptop_yawning.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-amazfit-gts4","name":"Amazfit GTS 4 Mini","weight":"1 pc","price":4999,"mrp":7999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Dell_Latitude_E6410_laptop_with_Kiwix.jpg/960px-Dell_Latitude_E6410_laptop_with_Kiwix.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-fastrack-revoltt","name":"Fastrack Revoltt FS1","weight":"1 pc","price":1499,"mrp":3995,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Gateway_laptop_at_Walmart_2022.jpg/960px-Gateway_laptop_at_Walmart_2022.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-titan-smart-3","name":"Titan Smart 3","weight":"1 pc","price":4995,"mrp":7995,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Gridcase_1535_EXP_laptop_at_MIT_Flea.agr.jpg/960px-Gridcase_1535_EXP_laptop_at_MIT_Flea.agr.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-fitbit-charge6","name":"Fitbit Charge 6","weight":"1 pc","price":11999,"mrp":14999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/HP_Laptop.jpg/960px-HP_Laptop.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-noise-colorfit-icon","name":"Noise ColorFit Icon 2","weight":"1 pc","price":1299,"mrp":5999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HP_Laptop_at_Best_Buy_Edmonton_2020.jpg/960px-HP_Laptop_at_Best_Buy_Edmonton_2020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-fireboltt-invincible","name":"Fire-Boltt Invincible Plus","weight":"1 pc","price":2499,"mrp":15000,"image":"https://upload.wikimedia.org/wikipedia/commons/6/67/HP_Victus_15_gaming_laptop_side_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"⌚","filters":["smart-watches"]},{"id":"elec-ambrane-20000","name":"Ambrane 20000mAh Power Bank","weight":"20000 mAh","price":1299,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/HP_Victus_laptop_2.jpg/960px-HP_Victus_laptop_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔋","filters":["power-banks"]},{"id":"elec-syska-10000","name":"Syska 10000mAh Power Bank","weight":"10000 mAh","price":899,"mrp":1799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/How-to_make_a_laptop_perfectly_disguised_-_covering_company_logo.png/960px-How-to_make_a_laptop_perfectly_disguised_-_covering_company_logo.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔋","filters":["power-banks"]},{"id":"elec-urbn-20000","name":"URBN 20000mAh Power Bank","weight":"20000 mAh","price":1499,"mrp":2999,"image":"https://upload.wikimedia.org/wikipedia/commons/7/76/JUAL_BELI_LAPTOP%2CKOMPUTER_dan_ELEKTRONIK_LAINYA.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🔋","filters":["power-banks"]},{"id":"elec-boat-energy","name":"boAt 10000mAh EnergyShroom","weight":"10000 mAh","price":999,"mrp":1990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Johannes_Grenzfurthner_laptop_monochrom_Office_2026.jpg/960px-Johannes_Grenzfurthner_laptop_monochrom_Office_2026.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔋","filters":["power-banks"]},{"id":"elec-belkin-30w","name":"Belkin 30W USB-C Charger","weight":"30W","price":1499,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/LCD_Crack_of_Laptop_Computer.jpg/960px-LCD_Crack_of_Laptop_Computer.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-cmf-65w","name":"CMF by Nothing 65W GaN","weight":"65W","price":1999,"mrp":2999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Laptop_.jpg/960px-Laptop_.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-spigen-cable","name":"Spigen USB-C to C Cable 1m","weight":"1 m","price":599,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Laptop_003.jpg/960px-Laptop_003.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-amazonbasics-cable","name":"Amazon Basics USB-C Cable","weight":"1.5 m","price":299,"mrp":599,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Laptop_4.jpg/960px-Laptop_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-portronics-65w","name":"Portronics 65W GaN Charger","weight":"65W","price":1299,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Laptop_Arima_Tastatur_abgenommen.jpg/960px-Laptop_Arima_Tastatur_abgenommen.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔌","filters":["chargers-cables"]},{"id":"elec-logitech-k380","name":"Logitech K380 Keyboard","weight":"1 pc","price":2495,"mrp":3495,"image":"https://upload.wikimedia.org/wikipedia/commons/2/2c/Laptop_Gaming_and_Design.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"⌨️","filters":["chargers-cables"]},{"id":"elec-logitech-m331","name":"Logitech M331 Silent Mouse","weight":"1 pc","price":995,"mrp":1495,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Laptop_LCD_with_a_faulty_connector.jpg/960px-Laptop_LCD_with_a_faulty_connector.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🖱️","filters":["chargers-cables"]},{"id":"elec-canon-r50","name":"Canon EOS R50","weight":"Body+Lens","price":75990,"mrp":85990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Canon_EOS_R50_%2852694437103%29.jpg/3840px-Canon_EOS_R50_%2852694437103%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"📷","filters":["cameras"]},{"id":"elec-nikon-z30","name":"Nikon Z30 Vlog Camera","weight":"Body","price":59990,"mrp":70990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Laptop_Maintenance_Work_Area.jpg/960px-Laptop_Maintenance_Work_Area.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📷","filters":["cameras"]},{"id":"elec-dji-mini4k","name":"DJI Mini 4K Drone","weight":"1 pc","price":45990,"mrp":52990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Laptop_Microphone_Array.jpg/960px-Laptop_Microphone_Array.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📷","filters":["cameras"]},{"id":"elec-insta360-x3","name":"Insta360 X3","weight":"1 pc","price":39990,"mrp":45990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Laptop_collage.jpg/960px-Laptop_collage.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📷","filters":["cameras"]},{"id":"elec-gopro-hero13","name":"GoPro Hero 13 Black","weight":"1 pc","price":42990,"mrp":49990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Laptop_in_the_Kitchen_in_New_Orleans.jpg/960px-Laptop_in_the_Kitchen_in_New_Orleans.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📷","filters":["cameras"]},{"id":"elec-samsung-43-crystal","name":"Samsung 43-inch Crystal 4K","weight":"43 inch","price":28990,"mrp":44990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Laptop_with_Free_and_Open_Source_and_hacking_stickers.jpg/960px-Laptop_with_Free_and_Open_Source_and_hacking_stickers.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-lg-55-uoled","name":"LG 55-inch 4K Smart TV","weight":"55 inch","price":45990,"mrp":69990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Lenovo_G500s_laptop-2903.jpg/960px-Lenovo_G500s_laptop-2903.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-sony-bravia-43","name":"Sony Bravia 43-inch 4K","weight":"43 inch","price":52990,"mrp":74990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lenovo_G500s_laptop-2905.jpg/960px-Lenovo_G500s_laptop-2905.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-mi-tv-x-55","name":"Xiaomi Smart TV X 55 4K","weight":"55 inch","price":34990,"mrp":49990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_IdeaPad_Flex14_laptop.jpg/960px-Lenovo_IdeaPad_Flex14_laptop.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-tcl-43p635","name":"TCL 43-inch 4K Google TV","weight":"43 inch","price":24990,"mrp":39990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Lenovo_IdeaPad_Flex14_laptop_%28Leftside%29.jpg/960px-Lenovo_IdeaPad_Flex14_laptop_%28Leftside%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-oneplus-y1s-43","name":"OnePlus Y1S 43-inch","weight":"43 inch","price":21990,"mrp":29990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lenovo_IdeaPad_Flex14_laptop_%28rightside%29.jpg/960px-Lenovo_IdeaPad_Flex14_laptop_%28rightside%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-hp-deskjet-2723","name":"HP DeskJet 2723 Printer","weight":"1 pc","price":5999,"mrp":8999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lenovo_laptop_yat.jpg/960px-Lenovo_laptop_yat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🖨️","filters":["printers-storage"]},{"id":"elec-canon-g3012","name":"Canon PIXMA G3012","weight":"1 pc","price":14499,"mrp":17999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/MSI_laptop_with_English_Wikipedia_screenshot_20100614.jpg/960px-MSI_laptop_with_English_Wikipedia_screenshot_20100614.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🖨️","filters":["printers-storage"]},{"id":"elec-sandisk-1tb","name":"SanDisk 1TB SSD Extreme","weight":"1 TB","price":7499,"mrp":9999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/MSI_laptop_with_English_Wikipedia_screenshot_20100614_%282%29.jpg/960px-MSI_laptop_with_English_Wikipedia_screenshot_20100614_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💾","filters":["printers-storage"]},{"id":"elec-wd-2tb","name":"WD 2TB Elements HDD","weight":"2 TB","price":4999,"mrp":6999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Microscope_close-up_of_blown_step-down_regulator_on_laptop_PCB.jpg/960px-Microscope_close-up_of_blown_step-down_regulator_on_laptop_PCB.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💾","filters":["printers-storage"]},{"id":"elec-seagate-1tb","name":"Seagate 1TB Portable HDD","weight":"1 TB","price":3799,"mrp":5499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Pillar_Laptop_Photo.jpg/960px-Pillar_Laptop_Photo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💾","filters":["printers-storage"]},{"id":"elec-tplink-ax3000","name":"TP-Link AX3000 WiFi 6 Router","weight":"1 pc","price":3999,"mrp":5999,"image":"https://upload.wikimedia.org/wikipedia/commons/f/fd/Qocept_Laptops.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"📡","filters":["networking"]},{"id":"elec-tplink-deco","name":"TP-Link Deco M4 Mesh","weight":"2 pack","price":5999,"mrp":8999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rusty_Reena_laptop_IIT_Mandi_2012_P1050450.jpg/960px-Rusty_Reena_laptop_IIT_Mandi_2012_P1050450.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📡","filters":["networking"]},{"id":"elec-dlink-dir615","name":"D-Link DIR-615 Router","weight":"1 pc","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Samsung_laptop_nc10.jpg/960px-Samsung_laptop_nc10.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📡","filters":["networking"]},{"id":"elec-jiofi","name":"JioFi 4G Hotspot","weight":"1 pc","price":1999,"mrp":2999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/202606_A_sports_sandal_and_a_smartphone_on_Shalun_beach.jpg/960px-202606_A_sports_sandal_and_a_smartphone_on_Shalun_beach.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📡","filters":["networking"]},{"id":"elec-kindle-11","name":"Kindle 11th Gen","weight":"16 GB","price":9999,"mrp":11999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/5_different_Smartphones.jpg/960px-5_different_Smartphones.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📖","filters":["tablets"]},{"id":"elec-firetv-stick","name":"Fire TV Stick 4K","weight":"1 pc","price":4999,"mrp":6499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Anamorphic_lens_for_Smartphone.jpg/960px-Anamorphic_lens_for_Smartphone.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-chromecast","name":"Google Chromecast 4K","weight":"1 pc","price":3999,"mrp":5999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Blackview_A60_Smartphone_Android_mobile_phone_and_folio_case.jpg/960px-Blackview_A60_Smartphone_Android_mobile_phone_and_folio_case.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📺","filters":["tvs"]},{"id":"elec-ps5-slim","name":"PlayStation 5 Slim","weight":"1 TB","price":54990,"mrp":54990,"image":"https://upload.wikimedia.org/wikipedia/commons/7/77/Black_and_white_Playstation_5_base_edition_with_controller.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled","emoji":"🎮","filters":["gaming"]},{"id":"elec-xbox-s","name":"Xbox Series S","weight":"512 GB","price":34990,"mrp":39990,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Xbox_Series_X_S_color.svg/120px-Xbox_Series_X_S_color.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"🎮","filters":["gaming"]},{"id":"elec-nintendo-switch","name":"Nintendo Switch OLED","weight":"1 pc","price":32999,"mrp":34999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nintendo_Switch_logo.svg/960px-Nintendo_Switch_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail","emoji":"🎮","filters":["gaming"]},{"id":"elec-dualsense","name":"PS5 DualSense Controller","weight":"1 pc","price":5990,"mrp":6490,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Blackview_A60_Smartphone_Android_mobile_phone_back_face.jpg/960px-Blackview_A60_Smartphone_Android_mobile_phone_back_face.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎮","filters":["gaming"]}],"home-kitchen":[{"id":"home-prestige-induction","page":"home-kitchen","name":"Prestige Induction Cooktop","weight":"1200W","price":2299,"mrp":3195,"image":"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍳","filters":["kitchen-appliances"]},{"id":"home-butterfly-mixer","page":"home-kitchen","name":"Butterfly Mixer Grinder","weight":"750W, 4 Jars","price":2499,"mrp":3995,"image":"https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍳","filters":["kitchen-appliances"]},{"id":"home-philips-air-fryer","page":"home-kitchen","name":"Philips Air Fryer","weight":"4.1L","price":7999,"mrp":9995,"image":"https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍳","filters":["kitchen-appliances"]},{"id":"home-kent-ro","page":"home-kitchen","name":"Kent RO Water Purifier","weight":"8L Storage","price":15999,"mrp":21000,"image":"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"💧","filters":["kitchen-appliances"]},{"id":"home-pigeon-tawa","page":"home-kitchen","name":"Pigeon Non-Stick Tawa","weight":"280 mm","price":499,"mrp":895,"image":"https://images.pexels.com/photos/1927548/pexels-photo-1927548.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍲","filters":["cookware"]},{"id":"home-hawkins-cooker","page":"home-kitchen","name":"Hawkins Pressure Cooker 5L","weight":"Aluminium","price":2699,"mrp":3450,"image":"https://images.pexels.com/photos/1927549/pexels-photo-1927549.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍲","filters":["cookware"]},{"id":"home-milton-flask","page":"home-kitchen","name":"Milton Thermosteel Flask","weight":"1 Litre","price":699,"mrp":1099,"image":"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥤","filters":["storage"]},{"id":"home-cello-container-set","page":"home-kitchen","name":"Cello Storage Container Set","weight":"Pack of 6","price":599,"mrp":999,"image":"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&h=600&q=80","emoji":"📦","filters":["storage"]},{"id":"home-scotch-brite-mop","page":"home-kitchen","name":"Scotch-Brite Mop","weight":"Twin Bucket Spin Mop","price":899,"mrp":1299,"image":"https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧹","filters":["cleaning"]},{"id":"home-harpic","page":"home-kitchen","name":"Harpic Toilet Cleaner 1L","weight":"Original","price":159,"mrp":199,"image":"https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧼","filters":["cleaning"]},{"id":"home-vim-dishwash","page":"home-kitchen","name":"Vim Dishwash Gel 750ml","weight":"Lemon","price":129,"mrp":179,"image":"https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧼","filters":["cleaning"]},{"id":"home-sleepwell-mattress","page":"home-kitchen","name":"Sleepwell Mattress Queen","weight":"78 x 60 inches","price":8999,"mrp":12999,"image":"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🛏️","filters":["bedding"]},{"id":"home-bombay-dyeing-bedsheet","page":"home-kitchen","name":"Bombay Dyeing Bedsheet","weight":"Queen Size","price":1299,"mrp":1999,"image":"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🛏️","filters":["bedding"]},{"id":"home-curtains-set","page":"home-kitchen","name":"Curtains Set (7ft)","weight":"Pack of 2","price":799,"mrp":1499,"image":"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🪟","filters":["decor"]},{"id":"home-wipro-bulbs","page":"home-kitchen","name":"Wipro LED Bulb 9W (Pack 4)","weight":"Cool Day White","price":349,"mrp":560,"image":"https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=600&h=600&q=80","emoji":"💡","filters":["lighting"]},{"id":"home-philips-table-lamp","page":"home-kitchen","name":"Philips Table Lamp","weight":"Study Light","price":1499,"mrp":2199,"image":"https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"💡","filters":["lighting"]},{"id":"home-wall-clock","page":"home-kitchen","name":"Wall Clock Decorative","weight":"12 inch","price":599,"mrp":999,"image":"https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🕒","filters":["decor"]},{"id":"home-artificial-plants","page":"home-kitchen","name":"Artificial Plants Set","weight":"Pack of 2","price":449,"mrp":799,"image":"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🪴","filters":["decor"]},{"id":"home-photo-frame-set","page":"home-kitchen","name":"Photo Frame Set (5pcs)","weight":"Black Finish","price":699,"mrp":1299,"image":"https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🖼️","filters":["decor"]},{"id":"home-bathroom-organizer","page":"home-kitchen","name":"Bathroom Organizer Shelf","weight":"Wall Mount","price":499,"mrp":899,"image":"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🚿","filters":["bathroom"]},{"id":"home-towel-set","page":"home-kitchen","name":"Towel Set (4 pcs)","weight":"Cotton","price":799,"mrp":1399,"image":"https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🛁","filters":["bathroom"]},{"id":"home-morphy-richards-iron","page":"home-kitchen","name":"Morphy Richards Iron","weight":"Steam Iron","price":1699,"mrp":2495,"image":"https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&h=600&q=80","emoji":"👕","filters":["cleaning"]},{"id":"home-bajaj-room-heater","page":"home-kitchen","name":"Bajaj Room Heater","weight":"2000W","price":1899,"mrp":2790,"image":"https://images.pexels.com/photos/1112599/pexels-photo-1112599.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🔥","filters":["lighting"]},{"id":"home-crompton-fan","page":"home-kitchen","name":"Crompton Ceiling Fan","weight":"1200 mm","price":1599,"mrp":2240,"image":"https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🌀","filters":["lighting"]},{"id":"home-borosil-dinner-set","page":"home-kitchen","name":"Borosil Dinner Set 27pc","weight":"Opalware","price":2999,"mrp":4599,"image":"https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍽️","filters":["cookware"]},{"id":"home-milton-casserole-set","page":"home-kitchen","name":"Milton Casserole Set","weight":"Set of 3","price":1199,"mrp":1899,"image":"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍽️","filters":["storage"]},{"id":"home-prestige-omega-kadai","page":"home-kitchen","name":"Prestige Omega Kadai","weight":"24 cm","price":1099,"mrp":1695,"image":"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍲","filters":["cookware"]},{"id":"home-nirlon-cookware-set","page":"home-kitchen","name":"Nirlon Cookware Set 5pc","weight":"Non-Stick","price":1399,"mrp":2499,"image":"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍲","filters":["cookware"]},{"id":"home-wonderchef-nutri-blender","page":"home-kitchen","name":"Wonderchef Nutri Blender","weight":"400W","price":2999,"mrp":4499,"image":"https://images.pexels.com/photos/3737675/pexels-photo-3737675.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍳","filters":["kitchen-appliances"]},{"id":"home-instapot-electric-cooker","page":"home-kitchen","name":"InstaPot Electric Cooker","weight":"6 Litre","price":5999,"mrp":8999,"image":"https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍳","filters":["kitchen-appliances"]}],"beauty":[{"id":"beauty-lakme-foundation","page":"beauty","name":"Lakme 9to5 Foundation","weight":"25 ml","price":599,"mrp":799,"image":"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&h=600&q=80","emoji":"💄","filters":["makeup"]},{"id":"beauty-fit-me-concealer","page":"beauty","name":"Maybelline Fit Me Concealer","weight":"6.8 ml","price":449,"mrp":599,"image":"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&h=600&q=80","emoji":"💄","filters":["makeup"]},{"id":"beauty-loreal-shampoo","page":"beauty","name":"L'Oreal Paris Shampoo 640ml","weight":"Total Repair 5","price":499,"mrp":699,"image":"https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧴","filters":["haircare"]},{"id":"beauty-dove-body-wash","page":"beauty","name":"Dove Body Wash 250ml","weight":"Deep Moisture","price":249,"mrp":325,"image":"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧴","filters":["bath-body"]},{"id":"beauty-nivea-moisturizer","page":"beauty","name":"Nivea Moisturizer 300ml","weight":"Body Milk","price":349,"mrp":449,"image":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧴","filters":["skincare"]},{"id":"beauty-biotique-face-wash","page":"beauty","name":"Biotique Bio Neem Face Wash","weight":"150 ml","price":199,"mrp":275,"image":"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🫧","filters":["skincare"]},{"id":"beauty-himalaya-face-wash","page":"beauty","name":"Himalaya Neem Face Wash","weight":"150 ml","price":149,"mrp":199,"image":"https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🫧","filters":["skincare"]},{"id":"beauty-mamaearth-serum","page":"beauty","name":"Mamaearth Vitamin C Serum","weight":"30 ml","price":549,"mrp":699,"image":"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&h=600&q=80","emoji":"✨","filters":["skincare"]},{"id":"beauty-the-ordinary-niacinamide","page":"beauty","name":"The Ordinary Niacinamide","weight":"30 ml","price":590,"mrp":750,"image":"https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"✨","filters":["skincare"]},{"id":"beauty-cetaphil-cleanser","page":"beauty","name":"Cetaphil Gentle Cleanser","weight":"250 ml","price":649,"mrp":849,"image":"https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🫧","filters":["skincare"]},{"id":"beauty-head-shoulders","page":"beauty","name":"Head & Shoulders Shampoo","weight":"340 ml","price":399,"mrp":499,"image":"https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧴","filters":["haircare"]},{"id":"beauty-pantene-conditioner","page":"beauty","name":"Pantene Conditioner 180ml","weight":"Hair Fall Control","price":199,"mrp":275,"image":"https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧴","filters":["haircare"]},{"id":"beauty-wow-shampoo","page":"beauty","name":"WOW Apple Cider Vinegar Shampoo","weight":"300 ml","price":449,"mrp":599,"image":"https://images.pexels.com/photos/3738338/pexels-photo-3738338.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧴","filters":["haircare"]},{"id":"beauty-gillette-razor","page":"beauty","name":"Gillette Fusion Razor","weight":"Manual Razor","price":549,"mrp":699,"image":"https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🪒","filters":["mens-grooming"]},{"id":"beauty-philips-trimmer","page":"beauty","name":"Philips Trimmer BT3211","weight":"Cordless","price":1699,"mrp":2195,"image":"https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🪒","filters":["mens-grooming"]},{"id":"beauty-park-avenue-perfume","page":"beauty","name":"Park Avenue Perfume","weight":"120 ml","price":399,"mrp":550,"image":"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🌸","filters":["fragrances"]},{"id":"beauty-forest-essentials-night-cream","page":"beauty","name":"Forest Essentials Night Cream","weight":"30 g","price":1850,"mrp":2375,"image":"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🌙","filters":["skincare"]},{"id":"beauty-neutrogena-sunscreen","page":"beauty","name":"Neutrogena Sunscreen SPF50","weight":"88 ml","price":649,"mrp":899,"image":"https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"☀️","filters":["skincare"]},{"id":"beauty-colgate-max-fresh","page":"beauty","name":"Colgate Max Fresh 300g","weight":"Toothpaste","price":199,"mrp":260,"image":"https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🪥","filters":["oral-care"]},{"id":"beauty-oral-b-electric-toothbrush","page":"beauty","name":"Oral-B Electric Toothbrush","weight":"Rechargeable","price":1999,"mrp":2999,"image":"https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🪥","filters":["oral-care"]},{"id":"beauty-dettol-hand-wash","page":"beauty","name":"Dettol Hand Wash 750ml","weight":"Original","price":149,"mrp":199,"image":"https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧼","filters":["health"]},{"id":"beauty-vaseline-body-lotion","page":"beauty","name":"Vaseline Body Lotion 400ml","weight":"Deep Moisture","price":299,"mrp":399,"image":"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧴","filters":["bath-body"]},{"id":"beauty-mac-ruby-woo","page":"beauty","name":"MAC Lipstick Ruby Woo","weight":"Matte","price":1750,"mrp":1950,"image":"https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"💄","filters":["makeup"]},{"id":"beauty-lakme-eyeconic-kajal","page":"beauty","name":"Lakmé Eyeconic Kajal","weight":"Deep Black","price":249,"mrp":325,"image":"https://images.pexels.com/photos/2533269/pexels-photo-2533269.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👁️","filters":["makeup"]},{"id":"beauty-maybelline-mascara","page":"beauty","name":"Maybelline Mascara Colossal","weight":"Washable","price":399,"mrp":525,"image":"https://images.pexels.com/photos/2533270/pexels-photo-2533270.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👁️","filters":["makeup"]},{"id":"beauty-nyx-setting-spray","page":"beauty","name":"NYX Setting Spray","weight":"60 ml","price":699,"mrp":950,"image":"https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"💦","filters":["makeup"]},{"id":"beauty-bath-body-works-mist","page":"beauty","name":"Bath & Body Works Mist","weight":"236 ml","price":1499,"mrp":1799,"image":"https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🌸","filters":["fragrances"]},{"id":"beauty-plum-toner","page":"beauty","name":"Plum Green Tea Toner","weight":"200 ml","price":399,"mrp":545,"image":"https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍃","filters":["skincare"]},{"id":"beauty-beardo-hair-serum","page":"beauty","name":"Beardo Hair Serum","weight":"50 ml","price":499,"mrp":695,"image":"https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"✨","filters":["mens-grooming"]},{"id":"beauty-set-wet-hair-gel","page":"beauty","name":"Set Wet Hair Gel 250ml","weight":"Wet Look","price":169,"mrp":225,"image":"https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=600&h=600&q=80","emoji":"✨","filters":["mens-grooming"]},{"id":"bty-lakme-lipstick","name":"Lakme 9to5 Lipstick","weight":"3.5 g","price":499,"mrp":650,"image":"https://upload.wikimedia.org/wikipedia/commons/4/47/Young_woman_slipping_out_of_blouse.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"💄","filters":["makeup"]},{"id":"bty-lakme-primer","name":"Lakme Absolute Primer","weight":"30 g","price":549,"mrp":750,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Slip%2C_half_%28AM_2000.93.106-2%29.jpg/960px-Slip%2C_half_%28AM_2000.93.106-2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-lakme-compact","name":"Lakme Perfecting Compact","weight":"8 g","price":199,"mrp":275,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/A_bar_of_soap.jpg/960px-A_bar_of_soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-maybelline-fitme","name":"Maybelline Fit Me Foundation","weight":"30 ml","price":549,"mrp":725,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/A_touchless_solid_bar_soap_dispenser.jpg/960px-A_touchless_solid_bar_soap_dispenser.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-maybelline-liner","name":"Maybelline Hypercurl Liner","weight":"1 pc","price":199,"mrp":299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Aleppo_Bab_al-Faraj_Street_Soap_8947.jpg/960px-Aleppo_Bab_al-Faraj_Street_Soap_8947.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-maybelline-lipstick","name":"Maybelline Superstay Lipstick","weight":"5 g","price":699,"mrp":850,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Aleppo_Soap_9195.jpg/960px-Aleppo_Soap_9195.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-loreal-foundation","name":"L'Oreal True Match Foundation","weight":"30 ml","price":799,"mrp":999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Aleppo_Soap_9196.jpg/960px-Aleppo_Soap_9196.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-loreal-mascara","name":"L'Oreal Volume Million Mascara","weight":"9 ml","price":649,"mrp":850,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Aleppo_soap_01.jpg/960px-Aleppo_soap_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-sugar-lipstick","name":"SUGAR Matte Attack Lipstick","weight":"2 g","price":499,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aleppo_soap_03.jpg/960px-Aleppo_soap_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-sugar-kajal","name":"SUGAR Kohl of Honour Kajal","weight":"1.2 g","price":249,"mrp":349,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aleppo_soap_for_sale_in_Mardin%2C_Turkey.jpg/960px-Aleppo_soap_for_sale_in_Mardin%2C_Turkey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-nykaa-palette","name":"Nykaa Eyeshadow Palette","weight":"1 pc","price":699,"mrp":999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bar_of_carbolic_soap_with_price_sticker_affixed.jpg/960px-Bar_of_carbolic_soap_with_price_sticker_affixed.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-colorbar-lip","name":"Colorbar Velvet Matte Lip","weight":"4.2 g","price":399,"mrp":575,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bars_of_pure_Marseille_and_Aleppo_soap%2C_2024.jpg/960px-Bars_of_pure_Marseille_and_Aleppo_soap%2C_2024.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-faces-kajal","name":"Faces Canada Magneteyes Kajal","weight":"0.35 g","price":149,"mrp":199,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Body_soap_bar_virgin_coconut_oil3.jpg/960px-Body_soap_bar_virgin_coconut_oil3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-mac-studio-fix","name":"MAC Studio Fix Fluid","weight":"30 ml","price":3100,"mrp":3500,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic1.JPG/960px-Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-mac-prep","name":"MAC Prep + Prime","weight":"30 ml","price":2400,"mrp":2700,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic2.JPG/960px-Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic2.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-nars-orgasm","name":"NARS Blush Orgasm","weight":"4.8 g","price":3200,"mrp":3600,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic3.JPG/960px-Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic3.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-huda-palette","name":"Huda Beauty Nude Palette","weight":"1 pc","price":5500,"mrp":6200,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic4.JPG/960px-Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic4.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-charlotte-powder","name":"Charlotte Tilbury Powder","weight":"8 g","price":4200,"mrp":4800,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic5.JPG/960px-Cold_Cream_Soap_Hilko%2C_soap_bar%2C_pic5.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💄","filters":["makeup"]},{"id":"bty-minimalist-vitc","name":"Minimalist Vitamin C 10%","weight":"30 ml","price":549,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/DJN_BAR_SOAP_LUSCIOUS_LAVENDER_BAR.jpg/960px-DJN_BAR_SOAP_LUSCIOUS_LAVENDER_BAR.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-minimalist-spf","name":"Minimalist SPF 50 Sunscreen","weight":"50 g","price":399,"mrp":499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Femina%2C_soap_bar%2C_pic1.JPG/960px-Femina%2C_soap_bar%2C_pic1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-minimalist-retinol","name":"Minimalist Retinol 0.3%","weight":"30 ml","price":599,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Femina%2C_soap_bar%2C_pic2.JPG/960px-Femina%2C_soap_bar%2C_pic2.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-dotkey-vitc","name":"Dot & Key Vitamin C Serum","weight":"30 ml","price":545,"mrp":695,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Femina%2C_soap_bar%2C_pic3.JPG/960px-Femina%2C_soap_bar%2C_pic3.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-dotkey-spf","name":"Dot & Key Watermelon SPF","weight":"50 g","price":395,"mrp":495,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Femina%2C_soap_bar%2C_pic4-001.JPG/960px-Femina%2C_soap_bar%2C_pic4-001.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-plum-cleanser","name":"Plum Green Tea Cleanser","weight":"75 ml","price":275,"mrp":345,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Femina%2C_soap_bar%2C_pic4.JPG/960px-Femina%2C_soap_bar%2C_pic4.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-mamaearth-ubtan","name":"Mamaearth Ubtan Face Wash","weight":"100 ml","price":249,"mrp":349,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hand_soap_bar_1_2018-07-09.jpg/960px-Hand_soap_bar_1_2018-07-09.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-mamaearth-spf","name":"Mamaearth SPF 50 Sunscreen","weight":"50 g","price":349,"mrp":449,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Handmade_soap.jpg/960px-Handmade_soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-simple-wash","name":"Simple Kind to Skin Face Wash","weight":"150 ml","price":325,"mrp":399,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Handmade_soap_cropped_and_simplified.jpg/960px-Handmade_soap_cropped_and_simplified.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-cerave-cleanser","name":"CeraVe Hydrating Cleanser","weight":"236 ml","price":799,"mrp":999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Marius_Fabre_-_Marseille_Soap_Bar_100g_-_paper_box.jpg/960px-Marius_Fabre_-_Marseille_Soap_Bar_100g_-_paper_box.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-cerave-moist","name":"CeraVe PM Moisturizer","weight":"52 g","price":899,"mrp":1150,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Marius_Fabre_-_Marseille_Soap_Bar_150g_-_paper_box.jpg/960px-Marius_Fabre_-_Marseille_Soap_Bar_150g_-_paper_box.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-ordinary-ha","name":"The Ordinary Hyaluronic Acid","weight":"30 ml","price":670,"mrp":790,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Marius_Fabre_-_Marseille_Soap_Bar_400g_-_paper_box.jpg/960px-Marius_Fabre_-_Marseille_Soap_Bar_400g_-_paper_box.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-ordinary-aha","name":"The Ordinary AHA 30% Peel","weight":"30 ml","price":890,"mrp":1050,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Natural_Soap_Bars_%2846363900951%29.jpg/960px-Natural_Soap_Bars_%2846363900951%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-neutrogena-hydro","name":"Neutrogena Hydro Boost","weight":"50 g","price":850,"mrp":1050,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nature_Bar_handmade_soap_bar.jpg/960px-Nature_Bar_handmade_soap_bar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-ponds-light","name":"Ponds Light Moisturiser","weight":"75 ml","price":149,"mrp":199,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nature_Bar_natural_soap_bar.jpg/960px-Nature_Bar_natural_soap_bar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-garnier-micellar","name":"Garnier Micellar Water","weight":"125 ml","price":199,"mrp":249,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Nature_Bar_soap.jpg/960px-Nature_Bar_soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-lotus-spf","name":"Lotus Herbals SPF 30","weight":"100 g","price":285,"mrp":365,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nature_Bar_soap_bar.jpg/960px-Nature_Bar_soap_bar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-kama-rose","name":"Kama Ayurveda Rose Water","weight":"200 ml","price":695,"mrp":850,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nature_Bar_soap_bar_-_pine_forest.jpg/960px-Nature_Bar_soap_bar_-_pine_forest.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-clinique-moisture","name":"Clinique Moisture Surge","weight":"50 ml","price":3900,"mrp":4500,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nizza-Soap-4070848.jpg/960px-Nizza-Soap-4070848.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-estee-anr","name":"Estee Lauder Advanced Night Repair","weight":"30 ml","price":6200,"mrp":7200,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Overvette_Grondzeep%2C_Brocacef%2C_soap_bar%2C_pic.JPG/960px-Overvette_Grondzeep%2C_Brocacef%2C_soap_bar%2C_pic.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"✨","filters":["skincare"]},{"id":"bty-loreal-elvive","name":"L'Oreal Elvive Shampoo","weight":"704 ml","price":449,"mrp":599,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic1.JPG/960px-Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-tresemme-keratin","name":"TRESemme Keratin Smooth","weight":"580 ml","price":399,"mrp":550,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic2.JPG/960px-Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic2.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-dove-hair","name":"Dove Intense Repair Shampoo","weight":"650 ml","price":349,"mrp":499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic3.JPG/960px-Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic3.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-sunsilk","name":"Sunsilk Stunning Black Shine","weight":"650 ml","price":299,"mrp":425,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic4.JPG/960px-Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic4.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-clinic-plus","name":"Clinic Plus Strong & Long","weight":"650 ml","price":249,"mrp":340,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic5.JPG/960px-Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic5.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-indulekha","name":"Indulekha Bringha Oil","weight":"100 ml","price":399,"mrp":480,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic6.JPG/960px-Pineco_zeep%2C_Clovers_soap_works%2C_soap_bar%2C_pic6.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-parachute-gold","name":"Parachute Gold Coconut Oil","weight":"200 ml","price":149,"mrp":190,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Scissors_and_soap_l_%D1%85%D0%B0%D1%87%D3%91_%D1%82%D0%B0%D1%82%D3%91_%D1%81%D1%83%D0%BF%D3%91%D0%BD%D1%8C.jpg/960px-Scissors_and_soap_l_%D1%85%D0%B0%D1%87%D3%91_%D1%82%D0%B0%D1%82%D3%91_%D1%81%D1%83%D0%BF%D3%91%D0%BD%D1%8C.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-wow-onion-oil","name":"WOW Onion Black Seed Oil","weight":"200 ml","price":399,"mrp":549,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Secret_Garden_Rose_Soap_bar.jpg/960px-Secret_Garden_Rose_Soap_bar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-mamaearth-onion","name":"Mamaearth Onion Hair Oil","weight":"150 ml","price":349,"mrp":449,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Soap_Shop%2C_T%C3%BCbingen_%282019%29.jpg/960px-Soap_Shop%2C_T%C3%BCbingen_%282019%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-loreal-serum","name":"L'Oreal Extraordinary Oil Serum","weight":"100 ml","price":449,"mrp":599,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Soap_in_blue_dish.JPG/960px-Soap_in_blue_dish.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-matrix-mask","name":"Matrix Opti.Care Mask","weight":"200 g","price":520,"mrp":650,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/A_touchless_handwashing_tap_and_solid_bar_soap_dispenser_kit.jpg/960px-A_touchless_handwashing_tap_and_solid_bar_soap_dispenser_kit.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-schwarzkopf","name":"Schwarzkopf BC Repair Mask","weight":"200 ml","price":850,"mrp":1050,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/African_Black_Soap.jpg/960px-African_Black_Soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-olaplex-3","name":"Olaplex No.3 Hair Perfector","weight":"100 ml","price":2950,"mrp":3300,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Albaha_Spearmint_Soap-_All_Natural.jpg/960px-Albaha_Spearmint_Soap-_All_Natural.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧴","filters":["haircare"]},{"id":"bty-dove-soap","name":"Dove Cream Beauty Bar 3x","weight":"3x125 g","price":199,"mrp":270,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Albahaka_Hemp_Soap_Original.jpg/960px-Albahaka_Hemp_Soap_Original.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-pears-soap","name":"Pears Pure & Gentle 3x","weight":"3x125 g","price":149,"mrp":210,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Aleppo-soap.JPG/960px-Aleppo-soap.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-lux-soap","name":"Lux Soft Touch Soap 4x","weight":"4x125 g","price":129,"mrp":180,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Aleppo_soap_02.jpg/960px-Aleppo_soap_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-nivea-shower","name":"Nivea Shower Gel 250ml","weight":"250 ml","price":199,"mrp":275,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bar_of_Castile_soap.jpg/960px-Bar_of_Castile_soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-palmolive","name":"Palmolive Aroma Body Wash","weight":"750 ml","price":349,"mrp":449,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bar_of_Irish_Spring_Aloe_Soap.jpg/960px-Bar_of_Irish_Spring_Aloe_Soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-himalaya-body","name":"Himalaya Body Lotion","weight":"400 ml","price":199,"mrp":270,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Bar_of_Irish_Spring_Moisture_Blast_Soap.jpg/960px-Bar_of_Irish_Spring_Moisture_Blast_Soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-nivea-cocoa","name":"Nivea Cocoa Nourish Lotion","weight":"400 ml","price":325,"mrp":425,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bar_of_Irish_Spring_deodorant_soap.JPG/960px-Bar_of_Irish_Spring_deodorant_soap.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-thebodyshop-butter","name":"The Body Shop Body Butter","weight":"200 ml","price":1295,"mrp":1495,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bar_of_Safeguard_deodorant_soap.JPG/960px-Bar_of_Safeguard_deodorant_soap.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-mcaffeine-scrub","name":"mCaffeine Coffee Scrub","weight":"100 g","price":349,"mrp":449,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bar_of_carbolic_soap.jpg/960px-Bar_of_carbolic_soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧼","filters":["bath-body"]},{"id":"bty-fogg-scent","name":"Fogg Scent Impressio","weight":"100 ml","price":399,"mrp":550,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Bars_of_soap_Pcs34560_IMG1666.jpg/960px-Bars_of_soap_Pcs34560_IMG1666.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-skinn-steel","name":"Titan Skinn Steel","weight":"50 ml","price":1495,"mrp":1895,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bi_pride_soap_heart.jpg/960px-Bi_pride_soap_heart.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-bella-ceo","name":"Bella Vita CEO Man","weight":"100 ml","price":499,"mrp":899,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fifties_%281950%27s%29_Sunlight_soap_%28bar_of_soap%29_-_Gressenhall_Farm_%26_Workhouse%2C_Dereham%2C_Norfolk_%2828635524120%29.jpg/960px-Fifties_%281950%27s%29_Sunlight_soap_%28bar_of_soap%29_-_Gressenhall_Farm_%26_Workhouse%2C_Dereham%2C_Norfolk_%2828635524120%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-wildstone","name":"Wild Stone Ultra Sensual","weight":"50 ml","price":249,"mrp":349,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Fight_Club_Soap_%286624162303%29.jpg/960px-Fight_Club_Soap_%286624162303%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-davidoff-cool","name":"Davidoff Cool Water","weight":"75 ml","price":3200,"mrp":3900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Hand_wash_soap.jpg/960px-Hand_wash_soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-chanel-5","name":"Chanel No.5 Eau de Parfum","weight":"50 ml","price":8900,"mrp":10500,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Handmade_Soap_2.JPG/960px-Handmade_Soap_2.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-dior-sauvage","name":"Dior Sauvage EDT","weight":"60 ml","price":7800,"mrp":8900,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Handmade_soap_3.JPG/960px-Handmade_soap_3.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-versace-eros","name":"Versace Eros EDT","weight":"50 ml","price":5200,"mrp":6200,"image":"https://upload.wikimedia.org/wikipedia/commons/b/bd/Handmade_soap_caroya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🌸","filters":["fragrances"]},{"id":"bty-bbw-japanese","name":"Bath & Body Works Japanese Cherry","weight":"236 ml","price":1699,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Imperial_Leather_soap_bar.jpg/960px-Imperial_Leather_soap_bar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌸","filters":["fragrances"]},{"id":"bty-beardo-whisky","name":"Beardo Whisky Smoke Perfume","weight":"50 ml","price":499,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Kraalbos_soap_NamaquaGold.jpg/960px-Kraalbos_soap_NamaquaGold.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-bombay-kit","name":"Bombay Shaving Company Kit","weight":"1 kit","price":499,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Lemon_shaped_hand_soap_at_The_Prospect_Inn%2C_Exeter%2C_Devon%2C_UK.jpg/960px-Lemon_shaped_hand_soap_at_The_Prospect_Inn%2C_Exeter%2C_Devon%2C_UK.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-gillette-mach3","name":"Gillette Mach3 Razor","weight":"1 pc","price":349,"mrp":449,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Maja_soap_1.jpg/960px-Maja_soap_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-gillette-foam","name":"Gillette Foamy Shave Gel","weight":"196 g","price":199,"mrp":249,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Maja_soap_2.jpg/960px-Maja_soap_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-nivea-men-wash","name":"Nivea Men Face Wash","weight":"100 g","price":175,"mrp":225,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Maja_soap_3.jpg/960px-Maja_soap_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-garnier-men","name":"Garnier Men Oil Clear","weight":"100 g","price":149,"mrp":199,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Maja_soap_4.jpg/960px-Maja_soap_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-themancompany","name":"The Man Company Beard Oil","weight":"30 ml","price":349,"mrp":499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Maja_soap_7.jpg/960px-Maja_soap_7.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-philips-s1121","name":"Philips Shaver S1121","weight":"1 pc","price":1999,"mrp":2995,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Maja_soap_8.jpg/960px-Maja_soap_8.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧔","filters":["mens-grooming"]},{"id":"bty-sensodyne","name":"Sensodyne Repair & Protect","weight":"70 g","price":160,"mrp":210,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Maja_soap_and_talcum_1.jpg/960px-Maja_soap_and_talcum_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"😁","filters":["oral-care"]},{"id":"bty-colgate-vedshakti","name":"Colgate Vedshakti","weight":"200 g","price":99,"mrp":130,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Maja_soap_and_talcum_2.jpg/960px-Maja_soap_and_talcum_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"😁","filters":["oral-care"]},{"id":"bty-closeup","name":"Closeup Everfresh","weight":"150 g","price":85,"mrp":110,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Maja_soap_and_talcum_3.jpg/960px-Maja_soap_and_talcum_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"😁","filters":["oral-care"]},{"id":"bty-listerine","name":"Listerine Cool Mint 250ml","weight":"250 ml","price":135,"mrp":175,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Maja_soap_and_talcum_4.jpg/960px-Maja_soap_and_talcum_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"😁","filters":["oral-care"]},{"id":"bty-oralb-pro","name":"Oral-B Pro 2 Toothbrush","weight":"1 pc","price":2499,"mrp":3499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Maja_soap_and_talcum_5.jpg/960px-Maja_soap_and_talcum_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"😁","filters":["oral-care"]},{"id":"bty-sensodyne-brush","name":"Sensodyne Soft Toothbrush 3","weight":"3 pcs","price":149,"mrp":199,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Marseille_soap_bars_%28lemon_verbena_and_lavender%29.jpg/960px-Marseille_soap_bars_%28lemon_verbena_and_lavender%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"😁","filters":["oral-care"]},{"id":"bty-dettol-soap","name":"Dettol Original Soap 4x","weight":"4x125 g","price":149,"mrp":210,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nabulsi_soap.jpg/960px-Nabulsi_soap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]},{"id":"bty-savlon","name":"Savlon Handwash 750ml","weight":"750 ml","price":129,"mrp":175,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Our_soap%21.jpg/960px-Our_soap%21.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]},{"id":"bty-himalaya-neem-soap","name":"Himalaya Neem Soap 4x","weight":"4x125 g","price":120,"mrp":160,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Pure_Natural_Complexion_Soap_-_50_Dial_mini-bars.jpg/960px-Pure_Natural_Complexion_Soap_-_50_Dial_mini-bars.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]},{"id":"bty-lifebuoy","name":"Lifebuoy Total 10 Soap 4x","weight":"4x125 g","price":99,"mrp":140,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Rose_Soap_by_Albahaka.jpg/960px-Rose_Soap_by_Albahaka.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]},{"id":"bty-vicks-vaporub","name":"Vicks VapoRub 25ml","weight":"25 ml","price":99,"mrp":125,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Soap_Hac%C4%B1_%C5%9Eakir_01.jpg/960px-Soap_Hac%C4%B1_%C5%9Eakir_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]},{"id":"bty-moov","name":"Moov Pain Relief Cream","weight":"50 g","price":175,"mrp":220,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Soap_Hac%C4%B1_%C5%9Eakir_02.jpg/960px-Soap_Hac%C4%B1_%C5%9Eakir_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]},{"id":"bty-volini","name":"Volini Spray 60g","weight":"60 g","price":199,"mrp":255,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Soap_and_brushes.jpg/960px-Soap_and_brushes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]},{"id":"bty-band-aid","name":"Band-Aid Washproof 100","weight":"100 pcs","price":149,"mrp":199,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Soap_from_Bath_and_Body_Works.png/960px-Soap_from_Bath_and_Body_Works.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🛡️","filters":["health"]}],"toys":[{"id":"toys-lego-city-police","page":"toys","name":"LEGO City Police Set","weight":"340 pieces","price":2999,"mrp":3999,"image":"https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧱","filters":["building-blocks"]},{"id":"toys-hot-wheels-track","page":"toys","name":"Hot Wheels Track Set","weight":"Loop Builder","price":1499,"mrp":1999,"image":"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toys-barbie-dreamhouse","page":"toys","name":"Barbie Dreamhouse","weight":"3 Storey Set","price":4999,"mrp":6999,"image":"https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧸","filters":["dolls"]},{"id":"toys-nerf-elite-blaster","page":"toys","name":"Nerf Elite Blaster","weight":"Foam Dart Gun","price":1799,"mrp":2499,"image":"https://images.unsplash.com/photo-1567620905732-2d1ec7e883f2?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🦸","filters":["action-figures"]},{"id":"toys-uno-card-game","page":"toys","name":"UNO Card Game","weight":"Family Pack","price":199,"mrp":299,"image":"https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎲","filters":["board-games"]},{"id":"toys-monopoly","page":"toys","name":"Monopoly Board Game","weight":"Classic Edition","price":999,"mrp":1499,"image":"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎲","filters":["board-games"]},{"id":"toys-chess-set","page":"toys","name":"Chess Set Wooden","weight":"Foldable Board","price":499,"mrp":799,"image":"https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"♟️","filters":["board-games"]},{"id":"toys-funskool-scrabble","page":"toys","name":"Funskool Scrabble","weight":"Word Board Game","price":699,"mrp":999,"image":"https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🎲","filters":["board-games"]},{"id":"toys-remote-control-car","page":"toys","name":"Remote Control Car","weight":"Rechargeable","price":1299,"mrp":1999,"image":"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toys-drone-camera","page":"toys","name":"Drone with Camera","weight":"HD Video","price":3999,"mrp":5999,"image":"https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🚁","filters":["cars-vehicles"]},{"id":"toys-play-doh","page":"toys","name":"Play-Doh 8 Pack","weight":"Classic Colors","price":599,"mrp":899,"image":"https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎨","filters":["educational"]},{"id":"toys-rubiks-cube","page":"toys","name":"Rubik's Cube 3x3","weight":"Original","price":299,"mrp":499,"image":"https://images.unsplash.com/photo-1591994843349-f415893b3a6b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧠","filters":["educational"]},{"id":"toys-carrom-board","page":"toys","name":"Carrom Board Full Size","weight":"Tournament Size","price":1499,"mrp":2299,"image":"https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎯","filters":["board-games"]},{"id":"toys-badminton-set","page":"toys","name":"Badminton Set","weight":"2 Racquets + Shuttle","price":699,"mrp":999,"image":"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🏸","filters":["sports"]},{"id":"toys-cricket-bat","page":"toys","name":"Cricket Bat Kashmir Willow","weight":"Size 6","price":999,"mrp":1499,"image":"https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🏏","filters":["sports"]},{"id":"toys-football","page":"toys","name":"Football Size 5","weight":"Training Ball","price":599,"mrp":899,"image":"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&h=600&q=80","emoji":"⚽","filters":["sports"]},{"id":"toys-keyboard-piano","page":"toys","name":"Keyboard Piano 61 Keys","weight":"Beginner Edition","price":2999,"mrp":4499,"image":"https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🎹","filters":["musical"]},{"id":"toys-guitar-acoustic","page":"toys","name":"Guitar Acoustic Beginner","weight":"38 inch","price":3499,"mrp":4999,"image":"https://images.pexels.com/photos/165606/pexels-photo-165606.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🎸","filters":["musical"]},{"id":"toys-telescope","page":"toys","name":"Telescope for Kids","weight":"50mm Aperture","price":1999,"mrp":2999,"image":"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🔭","filters":["educational"]},{"id":"toys-science-kit","page":"toys","name":"Science Experiment Kit","weight":"STEM Lab","price":799,"mrp":1199,"image":"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧪","filters":["educational"]},{"id":"toys-jigsaw-puzzle","page":"toys","name":"Jigsaw Puzzle 1000pc","weight":"Landscape Edition","price":599,"mrp":899,"image":"https://images.pexels.com/photos/109998/pexels-photo-109998.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧩","filters":["educational"]},{"id":"toys-rc-helicopter","page":"toys","name":"RC Helicopter","weight":"USB Rechargeable","price":1799,"mrp":2699,"image":"https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🚁","filters":["cars-vehicles"]},{"id":"toys-marvel-action-figure-set","page":"toys","name":"Marvel Action Figure Set","weight":"Pack of 4","price":1499,"mrp":2199,"image":"https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🦸","filters":["action-figures"]},{"id":"toys-toy-kitchen-set","page":"toys","name":"Toy Kitchen Set","weight":"Accessories Included","price":1299,"mrp":1999,"image":"https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍳","filters":["dolls"]},{"id":"toys-building-blocks","page":"toys","name":"Building Blocks 500pc","weight":"Creative Box","price":899,"mrp":1399,"image":"https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🧱","filters":["building-blocks"]},{"id":"toys-sketch-art-set","page":"toys","name":"Sketch Art Set 150pc","weight":"Coloring Kit","price":699,"mrp":1099,"image":"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎨","filters":["educational"]},{"id":"toys-baby-walker","page":"toys","name":"Baby Walker Musical","weight":"Foldable","price":1999,"mrp":2999,"image":"https://images.pexels.com/photos/1546890/pexels-photo-1546890.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"👶","filters":["musical"]},{"id":"toys-teddy-bear","page":"toys","name":"Soft Toys Teddy Bear 3ft","weight":"Plush","price":899,"mrp":1499,"image":"https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🧸","filters":["dolls"]},{"id":"toys-magic-kit","page":"toys","name":"Magic Kit for Kids","weight":"30 Tricks","price":499,"mrp":799,"image":"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🎩","filters":["action-figures"]},{"id":"toys-beyblades","page":"toys","name":"Beyblades Battle Set","weight":"Arena Included","price":799,"mrp":1199,"image":"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🌀","filters":["action-figures"]},{"id":"toy-lego-classic","name":"LEGO Classic Bricks Box","weight":"1500 pcs","price":3499,"mrp":4499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Nettoyage_de_bijoux._2.jpg/960px-Nettoyage_de_bijoux._2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧱","filters":["building-blocks"]},{"id":"toy-lego-friends","name":"LEGO Friends Heartlake","weight":"1 set","price":2999,"mrp":3999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Antique_German_Teddy_bears_%2826548900256%29.jpg/960px-Antique_German_Teddy_bears_%2826548900256%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧱","filters":["building-blocks"]},{"id":"toy-lego-technic","name":"LEGO Technic Race Car","weight":"1 set","price":3999,"mrp":4999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Antique_teddy_bear_toy.jpg/960px-Antique_teddy_bear_toy.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧱","filters":["building-blocks"]},{"id":"toy-mega-bloks","name":"Mega Bloks 150 pcs","weight":"150 pcs","price":999,"mrp":1499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Antique_toy_schoolhouse_for_Teddy_bears_%2826952828435%29.jpg/960px-Antique_toy_schoolhouse_for_Teddy_bears_%2826952828435%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧱","filters":["building-blocks"]},{"id":"toy-magnetic-tiles","name":"Magnetic Tiles 120 pcs","weight":"120 pcs","price":1499,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Battered_antique_teddy_bears_%2826713450163%29.jpg/960px-Battered_antique_teddy_bears_%2826713450163%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧱","filters":["building-blocks"]},{"id":"toy-funskool-jenga","name":"Funskool Jenga","weight":"1 set","price":499,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/a/a7/Belgian_Malinois_teddy_bear.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🎲","filters":["board-games"]},{"id":"toy-ludo-xl","name":"Ludo XL Family Game","weight":"1 set","price":299,"mrp":499,"image":"https://upload.wikimedia.org/wikipedia/commons/c/c4/Farm-Fresh_teddy_bear.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🎲","filters":["board-games"]},{"id":"toy-snakes-ladders","name":"Snakes & Ladders","weight":"1 set","price":249,"mrp":399,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Little_girl_doing_injection_to_sick_teddy_bear_toy.jpg/960px-Little_girl_doing_injection_to_sick_teddy_bear_toy.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎲","filters":["board-games"]},{"id":"toy-business-game","name":"Business Board Game","weight":"1 set","price":399,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Little_girl_hugs_teddy_bear_toy.jpg/960px-Little_girl_hugs_teddy_bear_toy.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎲","filters":["board-games"]},{"id":"toy-clue","name":"Clue Detective Game","weight":"1 set","price":899,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/2/2e/Making_of_a_teddy_bear_1_cutting.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🎲","filters":["board-games"]},{"id":"toy-connect4","name":"Connect 4 Game","weight":"1 set","price":499,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Making_of_a_teddy_bear_2_sewing_and_turning.jpg/960px-Making_of_a_teddy_bear_2_sewing_and_turning.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎲","filters":["board-games"]},{"id":"toy-guess-who","name":"Guess Who Game","weight":"1 set","price":699,"mrp":999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Making_of_a_teddy_bear_3_filling.jpg/960px-Making_of_a_teddy_bear_3_filling.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎲","filters":["board-games"]},{"id":"toy-taboo","name":"Taboo Party Game","weight":"1 set","price":799,"mrp":1199,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Making_of_a_teddy_bear_4_assembling.jpg/960px-Making_of_a_teddy_bear_4_assembling.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎲","filters":["board-games"]},{"id":"toy-pictionary","name":"Pictionary","weight":"1 set","price":899,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/d/d0/Old_Teddy_Bear.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🎲","filters":["board-games"]},{"id":"toy-exploding-kittens","name":"Exploding Kittens","weight":"1 set","price":1299,"mrp":1799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Old_Teddy_Bears_cropped.jpg/960px-Old_Teddy_Bears_cropped.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎲","filters":["board-games"]},{"id":"toy-barbie-fashionista","name":"Barbie Fashionista Doll","weight":"1 pc","price":799,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Shimokitazawa_Teddy_bears-20091016-RM-191205.jpg/960px-Shimokitazawa_Teddy_bears-20091016-RM-191205.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-barbie-career","name":"Barbie Career Doll Doctor","weight":"1 pc","price":899,"mrp":1399,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Steiff_Company_Teddy_Bear_with_Blue_Overalls_-_DPLA_-_dc1d6ce26aa057b33cf68fd4c027088c_%28page_1%29.jpg/960px-Steiff_Company_Teddy_Bear_with_Blue_Overalls_-_DPLA_-_dc1d6ce26aa057b33cf68fd4c027088c_%28page_1%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-frozen-elsa","name":"Frozen Elsa Doll","weight":"1 pc","price":999,"mrp":1499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Steiff_Company_Teddy_Bear_with_Blue_Overalls_-_DPLA_-_dc1d6ce26aa057b33cf68fd4c027088c_%28page_3%29.jpg/960px-Steiff_Company_Teddy_Bear_with_Blue_Overalls_-_DPLA_-_dc1d6ce26aa057b33cf68fd4c027088c_%28page_3%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-peppa-house","name":"Peppa Pig Family House","weight":"1 set","price":1499,"mrp":2299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Steiff_Teddy_Bear.jpg/960px-Steiff_Teddy_Bear.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-baby-born","name":"Baby Born Doll","weight":"1 pc","price":2499,"mrp":3499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_2%29.jpg/960px-Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-doctor-set","name":"Doctor Play Set","weight":"1 set","price":499,"mrp":899,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_3%29.jpg/960px-Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_3%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-kitchen-deluxe","name":"Deluxe Toy Kitchen","weight":"1 set","price":2499,"mrp":3999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_4%29.jpg/960px-Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_4%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-tea-set","name":"Toy Tea Set Porcelain","weight":"1 set","price":699,"mrp":1099,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Steiff_teddy_bear_on_pedal_toy_car%2C_Spielzeug_Welten_Museum%2C_Basel%2C_Switzerland_julesvernex2.jpg/960px-Steiff_teddy_bear_on_pedal_toy_car%2C_Spielzeug_Welten_Museum%2C_Basel%2C_Switzerland_julesvernex2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-pram","name":"Doll Pram Stroller","weight":"1 pc","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Teddy_And_The_Bear_Mechanical_Coin_Bank.jpg/960px-Teddy_And_The_Bear_Mechanical_Coin_Bank.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎀","filters":["dolls"]},{"id":"toy-teddy-2ft","name":"Teddy Bear 2 ft","weight":"2 ft","price":599,"mrp":999,"image":"https://upload.wikimedia.org/wikipedia/commons/d/d9/Teddy_Bear_Museum_-_geograph.org.uk_-_698121.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🧸","filters":["soft-toys"]},{"id":"toy-teddy-heart","name":"Heart Teddy Soft Toy","weight":"1 pc","price":399,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Teddy_Bear_on_a_deck_chair%2C_part_of_The_Great_Bear_Hunt%2C_during_Covid-19_level_4_lockdown.jpg/960px-Teddy_Bear_on_a_deck_chair%2C_part_of_The_Great_Bear_Hunt%2C_during_Covid-19_level_4_lockdown.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧸","filters":["soft-toys"]},{"id":"toy-unicorn-plush","name":"Unicorn Plush 50cm","weight":"50 cm","price":699,"mrp":1199,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Teddy_and_the_Bear%2C_cast_iron_mechanical_bank%2C_c._1907.jpg/960px-Teddy_and_the_Bear%2C_cast_iron_mechanical_bank%2C_c._1907.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧸","filters":["soft-toys"]},{"id":"toy-dino-plush","name":"Dinosaur Soft Toy","weight":"1 pc","price":499,"mrp":899,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Teddy_bear%2C_toy_doll%2C_kids%2C_leather_ball%2C_arm_chair%2C_boy%2C_girl%2C_double_portrait_Fortepan_1186.jpg/960px-Teddy_bear%2C_toy_doll%2C_kids%2C_leather_ball%2C_arm_chair%2C_boy%2C_girl%2C_double_portrait_Fortepan_1186.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧸","filters":["soft-toys"]},{"id":"toy-panda-plush","name":"Panda Soft Toy","weight":"1 pc","price":449,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Teddy_bear_-_lost_in_the_grass.JPG/960px-Teddy_bear_-_lost_in_the_grass.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧸","filters":["soft-toys"]},{"id":"toy-dog-plush","name":"Puppy Soft Toy","weight":"1 pc","price":399,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/d/d8/Teddy_bear_early_1900s_-_Smithsonian_Museum_of_Natural_History.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🧸","filters":["soft-toys"]},{"id":"toy-hotwheels-20","name":"Hot Wheels 20 Car Pack","weight":"20 pcs","price":1999,"mrp":2999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Teddy_bear_on_the_window_sill_01.jpg/960px-Teddy_bear_on_the_window_sill_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-hotwheels-track-loop","name":"Hot Wheels Loop Track","weight":"1 set","price":1799,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Teddy_bear_on_the_window_sill_02.jpg/960px-Teddy_bear_on_the_window_sill_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-matchbox-set","name":"Matchbox 9 Car Gift Set","weight":"9 pcs","price":999,"mrp":1499,"image":"https://upload.wikimedia.org/wikipedia/commons/4/4a/Teddy_bear_produced_in_1903_detail%2C_from-_Teddy_bear_early_1900s_-_Smithsonian_Museum_of_Natural_History_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-rc-lamborghini","name":"RC Lamborghini 1:16","weight":"1 pc","price":1499,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/4/48/Teddy_bear_produced_in_1903_face_detail%2C_from-_Teddy_bear_early_1900s_-_Smithsonian_Museum_of_Natural_History_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-rc-jeep","name":"RC Off-Road Jeep","weight":"1 pc","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/c/cf/Teddy_bear_soft_toy.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-train-set","name":"Electric Train Set","weight":"1 set","price":1999,"mrp":2999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Teddy_bear_toy_in_a_medical_mask_is_sitting_in_a_child_seat_in_the_car._%2849894805893%29.jpg/960px-Teddy_bear_toy_in_a_medical_mask_is_sitting_in_a_child_seat_in_the_car._%2849894805893%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-excavator","name":"Toy Excavator Truck","weight":"1 pc","price":799,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Teddy_bear_toys_collection.jpg/960px-Teddy_bear_toys_collection.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-fire-truck","name":"Fire Truck with Lights","weight":"1 pc","price":899,"mrp":1399,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Teddy_hugs_toy.jpg/960px-Teddy_hugs_toy.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-airplane-rc","name":"RC Airplane Glider","weight":"1 pc","price":1499,"mrp":2299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Toy%2C_teddy_%28AM_1992.323-1%29.jpg/960px-Toy%2C_teddy_%28AM_1992.323-1%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🚗","filters":["cars-vehicles"]},{"id":"toy-nerf-elite-2","name":"Nerf Elite 2.0 Blaster","weight":"1 pc","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Toy%2C_teddy_%28AM_1992.323-1%29_cropped.jpg/960px-Toy%2C_teddy_%28AM_1992.323-1%29_cropped.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔫","filters":["action-figures"]},{"id":"toy-nerf-mega","name":"Nerf Mega Dart Blaster","weight":"1 pc","price":1599,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/b/b4/Toy%2C_teddy_%28AM_1992.323-2%29._cropped_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🔫","filters":["action-figures"]},{"id":"toy-water-gun","name":"Holika Water Gun","weight":"1 pc","price":299,"mrp":499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Toy%2C_teddy_%28AM_1992.323-2%29.jpg/960px-Toy%2C_teddy_%28AM_1992.323-2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔫","filters":["action-figures"]},{"id":"toy-avengers-set","name":"Avengers 6 Figure Set","weight":"6 pcs","price":1799,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Toy%2C_teddy_%28AM_1999.141.1-1%29.jpg/960px-Toy%2C_teddy_%28AM_1999.141.1-1%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🦸","filters":["action-figures"]},{"id":"toy-spiderman-fig","name":"Spider-Man Action Figure","weight":"1 pc","price":699,"mrp":1099,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Toy%2C_teddy_%28AM_1999.141.1-1%29_cropped.jpg/960px-Toy%2C_teddy_%28AM_1999.141.1-1%29_cropped.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🦸","filters":["action-figures"]},{"id":"toy-batman-fig","name":"Batman Action Figure","weight":"1 pc","price":699,"mrp":1099,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Toy%2C_teddy_%28AM_1999.141.1-2%29.jpg/960px-Toy%2C_teddy_%28AM_1999.141.1-2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🦸","filters":["action-figures"]},{"id":"toy-paw-patrol","name":"Paw Patrol Chase Vehicle","weight":"1 pc","price":1299,"mrp":1899,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Toy_Museum_in_Prague_Teddy_bears.jpg/960px-Toy_Museum_in_Prague_Teddy_bears.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🐕","filters":["action-figures"]},{"id":"toy-transformers","name":"Transformers Optimus","weight":"1 pc","price":1499,"mrp":2299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Two_life-size_teddy_bears_getting_married_outside_a_toy_store_in_Katowice.jpg/960px-Two_life-size_teddy_bears_getting_married_outside_a_toy_store_in_Katowice.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🤖","filters":["action-figures"]},{"id":"toy-beyblade-stadium","name":"Beyblade Burst Stadium","weight":"1 set","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/View_of_a_large_teddy_bear_on_the_side_of_the_Hamley%27s_float_in_the_Hamley%27s_Toy_Parade_-_geograph.org.uk_-_5200193.jpg/960px-View_of_a_large_teddy_bear_on_the_side_of_the_Hamley%27s_float_in_the_Hamley%27s_Toy_Parade_-_geograph.org.uk_-_5200193.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌀","filters":["action-figures"]},{"id":"toy-cricket-kit-kids","name":"Kids Cricket Kit","weight":"1 set","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/1915_detail%2C_People_making_teddy_bears_in_factory_LCCN93517563_%28cropped%29.jpg/960px-1915_detail%2C_People_making_teddy_bears_in_factory_LCCN93517563_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🏏","filters":["sports"]},{"id":"toy-tennis-set","name":"Kids Tennis Set","weight":"1 set","price":799,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Antique_toy_horses%2C_dolls%2C_and_musical_bears_%2826165128140%29.jpg/960px-Antique_toy_horses%2C_dolls%2C_and_musical_bears_%2826165128140%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎾","filters":["sports"]},{"id":"toy-skipping-rope","name":"Skipping Rope Counter","weight":"1 pc","price":199,"mrp":399,"image":"https://upload.wikimedia.org/wikipedia/commons/6/64/Big_Bear_Riding_Toy_--_1921_%2853393498558%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"⏭️","filters":["sports"]},{"id":"toy-basketball","name":"Basketball Size 5","weight":"1 pc","price":499,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Child_with_a_teddy_bear.jpg/960px-Child_with_a_teddy_bear.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🏀","filters":["sports"]},{"id":"toy-volleyball","name":"Volleyball","weight":"1 pc","price":399,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Das_Erste_Corona_Opfer_-_Der_Teddy_B%C3%A4r.jpg/960px-Das_Erste_Corona_Opfer_-_Der_Teddy_B%C3%A4r.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🏐","filters":["sports"]},{"id":"toy-skateboard","name":"Kids Skateboard","weight":"1 pc","price":1499,"mrp":2299,"image":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Dolls_house_and_teddy_bear_shop%2C_St_Marychurch_precinct_-_geograph.org.uk_-_1211198.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🛹","filters":["sports"]},{"id":"toy-cycle-helmet","name":"Kids Cycle Helmet","weight":"1 pc","price":699,"mrp":1199,"image":"https://upload.wikimedia.org/wikipedia/commons/9/92/Farnell_Alpha_Hygienic_Soft_Toy_label.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🪖","filters":["sports"]},{"id":"toy-hula-hoop","name":"Hula Hoop","weight":"1 pc","price":249,"mrp":449,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/HK_%E5%B0%96%E6%B2%99%E5%92%80%E6%9D%B1_TST_East_%E9%BA%BC%E5%9C%B0%E9%81%93_69_Mody_Road_%E5%B8%9D%E8%8B%91%E9%85%92%E5%BA%97_Royal_Garden_Hotel_Xmas_decor_sofa_seat_n_big_toys_teddy_bear_November_2022_Px3_01.jpg/960px-HK_%E5%B0%96%E6%B2%99%E5%92%80%E6%9D%B1_TST_East_%E9%BA%BC%E5%9C%B0%E9%81%93_69_Mody_Road_%E5%B8%9D%E8%8B%91%E9%85%92%E5%BA%97_Royal_Garden_Hotel_Xmas_decor_sofa_seat_n_big_toys_teddy_bear_November_2022_Px3_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"⭕","filters":["sports"]},{"id":"toy-science-lab","name":"Science Lab Kit 80 Expts","weight":"1 set","price":999,"mrp":1499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HK_%E5%B0%96%E6%B2%99%E5%92%80%E6%9D%B1_TST_East_%E9%BA%BC%E5%9C%B0%E9%81%93_69_Mody_Road_%E5%B8%9D%E8%8B%91%E9%85%92%E5%BA%97_Royal_Garden_Hotel_Xmas_decor_sofa_seat_n_big_toys_teddy_bear_November_2022_Px3_02.jpg/960px-HK_%E5%B0%96%E6%B2%99%E5%92%80%E6%9D%B1_TST_East_%E9%BA%BC%E5%9C%B0%E9%81%93_69_Mody_Road_%E5%B8%9D%E8%8B%91%E9%85%92%E5%BA%97_Royal_Garden_Hotel_Xmas_decor_sofa_seat_n_big_toys_teddy_bear_November_2022_Px3_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔬","filters":["educational"]},{"id":"toy-microscope","name":"Kids Microscope 1200x","weight":"1 pc","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/HK_%E5%B0%96%E6%B2%99%E5%92%80%E6%9D%B1_TST_East_%E9%BA%BC%E5%9C%B0%E9%81%93_69_Mody_Road_%E5%B8%9D%E8%8B%91%E9%85%92%E5%BA%97_Royal_Garden_Hotel_Xmas_decor_sofa_seat_n_big_toys_teddy_bear_November_2022_Px3_05.jpg/960px-HK_%E5%B0%96%E6%B2%99%E5%92%80%E6%9D%B1_TST_East_%E9%BA%BC%E5%9C%B0%E9%81%93_69_Mody_Road_%E5%B8%9D%E8%8B%91%E9%85%92%E5%BA%97_Royal_Garden_Hotel_Xmas_decor_sofa_seat_n_big_toys_teddy_bear_November_2022_Px3_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔬","filters":["educational"]},{"id":"toy-abacus","name":"Wooden Abacus","weight":"1 pc","price":299,"mrp":499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Kid%2C_yard%2C_toy%2C_teddy_bear%2C_girl_Fortepan_6331.jpg/960px-Kid%2C_yard%2C_toy%2C_teddy_bear%2C_girl_Fortepan_6331.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧮","filters":["educational"]},{"id":"toy-flash-cards","name":"ABC Flash Cards","weight":"1 pack","price":199,"mrp":349,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mechelen_Toy_Museum_03.jpg/960px-Mechelen_Toy_Museum_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🔤","filters":["educational"]},{"id":"toy-coding-robot","name":"Coding Robot Mouse","weight":"1 pc","price":1999,"mrp":2999,"image":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Missie_Brown_and_teddy_bear%2C_Montreal%2C_QC%2C_1921_%285263692356%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🤖","filters":["educational"]},{"id":"toy-globe","name":"Illuminated World Globe","weight":"1 pc","price":799,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/OCF_2022_Teddy_Bear_Water_Fest.png/960px-OCF_2022_Teddy_Bear_Water_Fest.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🌍","filters":["educational"]},{"id":"toy-map-puzzle","name":"India Map Puzzle","weight":"1 pc","price":349,"mrp":599,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/People_making_teddy_bears_in_factory_LCCN93517563.jpg/960px-People_making_teddy_bears_in_factory_LCCN93517563.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🧩","filters":["educational"]},{"id":"toy-clay-set","name":"Modelling Clay 12 Shades","weight":"12 pcs","price":249,"mrp":449,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Red_toy_bear.JPG/960px-Red_toy_bear.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎨","filters":["art-craft"]},{"id":"toy-easel","name":"Kids Art Easel","weight":"1 pc","price":1499,"mrp":2299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Singer_sewing_machines_in_1915_detail%2C_People_making_teddy_bears_in_factory_LCCN93517563_%28cropped%29.jpg/960px-Singer_sewing_machines_in_1915_detail%2C_People_making_teddy_bears_in_factory_LCCN93517563_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎨","filters":["art-craft"]},{"id":"toy-coloring-kit","name":"120 Pc Colouring Kit","weight":"120 pcs","price":499,"mrp":899,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Soft_toy_bear_and_seal.JPG/960px-Soft_toy_bear_and_seal.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🖍️","filters":["art-craft"]},{"id":"toy-origami","name":"Origami Paper Kit","weight":"1 pack","price":199,"mrp":349,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sow_Bear_Dolls_1011.jpg/960px-Sow_Bear_Dolls_1011.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📄","filters":["art-craft"]},{"id":"toy-slime-kit","name":"DIY Slime Kit","weight":"1 set","price":399,"mrp":699,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Steiff_Company_Teddy_Bear_with_Blue_Overalls_-_DPLA_-_dc1d6ce26aa057b33cf68fd4c027088c_%28page_2%29.jpg/960px-Steiff_Company_Teddy_Bear_with_Blue_Overalls_-_DPLA_-_dc1d6ce26aa057b33cf68fd4c027088c_%28page_2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🟢","filters":["art-craft"]},{"id":"toy-bead-kit","name":"Jewellery Bead Kit","weight":"1 set","price":449,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_1%29.jpg/960px-Steiff_Teddy_Bear_-_DPLA_-_a719f31a8e90ddeea821508f9500099c_%28page_1%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"📿","filters":["art-craft"]},{"id":"toy-keyboard-37","name":"37 Key Kids Keyboard","weight":"1 pc","price":1499,"mrp":2299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Strange_antique_toy_aliens_with_skirts_and_WWI_rifles_%2826947552765%29.jpg/960px-Strange_antique_toy_aliens_with_skirts_and_WWI_rifles_%2826947552765%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎹","filters":["musical"]},{"id":"toy-djembe","name":"Kids Djembe Drum","weight":"1 pc","price":799,"mrp":1299,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tableau%2C_kids%2C_toy%2C_yard%2C_baby_carriage%2C_teddy_bear%2C_rubber_ball_Fortepan_12562.jpg/960px-Tableau%2C_kids%2C_toy%2C_yard%2C_baby_carriage%2C_teddy_bear%2C_rubber_ball_Fortepan_12562.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🥁","filters":["musical"]},{"id":"toy-harmonica","name":"Kids Harmonica","weight":"1 pc","price":199,"mrp":349,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tableau%2C_women%2C_men%2C_kid%2C_hat%2C_fashion%2C_toy%2C_teddy_bear_Fortepan_14789.jpg/960px-Tableau%2C_women%2C_men%2C_kid%2C_hat%2C_fashion%2C_toy%2C_teddy_bear_Fortepan_14789.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎵","filters":["musical"]},{"id":"toy-xylophone","name":"Wooden Xylophone","weight":"1 pc","price":499,"mrp":799,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Teddy%27s_bears_-_DPLA_-_4c3f70ddc67abc440ad98099ab85f019.jpg/960px-Teddy%27s_bears_-_DPLA_-_4c3f70ddc67abc440ad98099ab85f019.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🎶","filters":["musical"]},{"id":"toy-ukulele","name":"Kids Ukulele","weight":"1 pc","price":999,"mrp":1499,"image":"https://upload.wikimedia.org/wikipedia/commons/b/b9/TeddyBearFair.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🎸","filters":["musical"]},{"id":"toy-walker-activity","name":"Activity Walker","weight":"1 pc","price":1799,"mrp":2499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Teddy_Bear_Returns_-_DPLA_-_41d799e34b5511fa3ed0f15757e65d8b.jpg/960px-Teddy_Bear_Returns_-_DPLA_-_41d799e34b5511fa3ed0f15757e65d8b.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"👶","filters":["baby-toys"]},{"id":"toy-rattle-set","name":"Baby Rattle Set 5 pcs","weight":"5 pcs","price":299,"mrp":499,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Teddy_bear%2C_a_small_motorcycle.jpg/960px-Teddy_bear%2C_a_small_motorcycle.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"👶","filters":["baby-toys"]},{"id":"toy-stacking-rings","name":"Stacking Rings","weight":"1 pc","price":249,"mrp":399,"image":"https://upload.wikimedia.org/wikipedia/commons/7/78/Teddy_bear_icon.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"👶","filters":["baby-toys"]},{"id":"toy-shape-sorter","name":"Shape Sorter Cube","weight":"1 pc","price":349,"mrp":599,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Teddy_bears%2C_made_in_New_York%2C_on_table%2C_in_factory%28%3F%29_LCCN93517561.jpg/960px-Teddy_bears%2C_made_in_New_York%2C_on_table%2C_in_factory%28%3F%29_LCCN93517561.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"👶","filters":["baby-toys"]},{"id":"toy-activity-gym","name":"Baby Play Gym Mat","weight":"1 pc","price":1299,"mrp":1999,"image":"https://upload.wikimedia.org/wikipedia/commons/a/a1/Three_teddy_bears.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"👶","filters":["baby-toys"]},{"id":"toy-bubble-machine","name":"Bubble Machine","weight":"1 pc","price":599,"mrp":999,"image":"https://upload.wikimedia.org/wikipedia/commons/1/13/Toddler%2C_dressed_in_a_sailor_suit%2C_holding_a_teddy_bear_%283197839617%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🫧","filters":["outdoor"]},{"id":"toy-frisbee","name":"Flying Disc Frisbee","weight":"1 pc","price":199,"mrp":349,"image":"https://upload.wikimedia.org/wikipedia/commons/a/aa/Toddler%2C_dressed_in_a_sailor_suit%2C_holding_a_teddy_bear_%283197839617%29_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled","emoji":"🥏","filters":["outdoor"]},{"id":"toy-kites","name":"Patang Kite Pack 10","weight":"10 pcs","price":149,"mrp":249,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Toy%2C_bear_%28AM_1999.141.4-1%29.jpg/960px-Toy%2C_bear_%28AM_1999.141.4-1%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🪁","filters":["outdoor"]},{"id":"toy-water-table","name":"Kids Water Play Table","weight":"1 pc","price":1999,"mrp":2999,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Toy%2C_bear_%28AM_1999.141.4-2%29.jpg/960px-Toy%2C_bear_%28AM_1999.141.4-2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"💦","filters":["outdoor"]},{"id":"toy-sandbox","name":"Sand Play Set","weight":"1 set","price":699,"mrp":1099,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Toy%2C_teddy_%28AM_1992.323-2%29._cropped.jpg/960px-Toy%2C_teddy_%28AM_1992.323-2%29._cropped.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail","emoji":"🏖️","filters":["outdoor"]}],"fresh":[{"id":"fresh-chicken-curry-cut","page":"fresh","name":"Fresh Chicken Curry Cut 500g","weight":"500 g","price":179,"mrp":220,"image":"https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍗","filters":["chicken"]},{"id":"fresh-chicken-breast","page":"fresh","name":"Chicken Breast Boneless 500g","weight":"500 g","price":249,"mrp":299,"image":"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍗","filters":["chicken"]},{"id":"fresh-chicken-drumsticks","page":"fresh","name":"Chicken Drumsticks 500g","weight":"500 g","price":199,"mrp":249,"image":"https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍗","filters":["chicken"]},{"id":"fresh-chicken-wings","page":"fresh","name":"Chicken Wings 500g","weight":"500 g","price":159,"mrp":199,"image":"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍗","filters":["chicken"]},{"id":"fresh-chicken-keema","page":"fresh","name":"Chicken Keema 500g","weight":"500 g","price":219,"mrp":269,"image":"https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍗","filters":["chicken"]},{"id":"fresh-mutton-curry-cut","page":"fresh","name":"Fresh Mutton Curry Cut 500g","weight":"500 g","price":599,"mrp":699,"image":"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥩","filters":["mutton"]},{"id":"fresh-mutton-keema","page":"fresh","name":"Mutton Keema 500g","weight":"500 g","price":649,"mrp":749,"image":"https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥩","filters":["mutton"]},{"id":"fresh-mutton-biryani-cut","page":"fresh","name":"Mutton Biryani Cut 500g","weight":"500 g","price":629,"mrp":729,"image":"https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥩","filters":["mutton"]},{"id":"fresh-goat-liver","page":"fresh","name":"Goat Liver 250g","weight":"250 g","price":199,"mrp":249,"image":"https://images.pexels.com/photos/65176/pexels-photo-65176.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥩","filters":["mutton"]},{"id":"fresh-rohu-fish","page":"fresh","name":"Rohu Fish Curry Cut 500g","weight":"500 g","price":199,"mrp":249,"image":"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🐟","filters":["fish"]},{"id":"fresh-pomfret","page":"fresh","name":"Pomfret Medium 500g","weight":"500 g","price":449,"mrp":549,"image":"https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🐟","filters":["fish"]},{"id":"fresh-surmai","page":"fresh","name":"Surmai/King Fish Steak 500g","weight":"500 g","price":549,"mrp":649,"image":"https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🐟","filters":["fish"]},{"id":"fresh-prawns-medium","page":"fresh","name":"Prawns Medium 500g","weight":"500 g","price":399,"mrp":499,"image":"https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🦐","filters":["prawns"]},{"id":"fresh-tiger-prawns","page":"fresh","name":"Tiger Prawns Large 500g","weight":"500 g","price":599,"mrp":699,"image":"https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🦐","filters":["prawns"]},{"id":"fresh-hilsa","page":"fresh","name":"Hilsa Fish 500g","weight":"500 g","price":699,"mrp":849,"image":"https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🐟","filters":["fish"]},{"id":"fresh-bangda","page":"fresh","name":"Bangda/Mackerel 500g","weight":"500 g","price":199,"mrp":249,"image":"https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🐟","filters":["fish"]},{"id":"fresh-eggs-white","page":"fresh","name":"Eggs White (12 pcs)","weight":"12 pcs","price":89,"mrp":108,"image":"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥚","filters":["eggs"]},{"id":"fresh-eggs-brown","page":"fresh","name":"Eggs Brown (6 pcs)","weight":"6 pcs","price":69,"mrp":85,"image":"https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥚","filters":["eggs"]},{"id":"fresh-country-eggs","page":"fresh","name":"Country Eggs (6 pcs)","weight":"6 pcs","price":79,"mrp":99,"image":"https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🥚","filters":["eggs"]},{"id":"fresh-quail-eggs","page":"fresh","name":"Quail Eggs (12 pcs)","weight":"12 pcs","price":99,"mrp":129,"image":"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🥚","filters":["eggs"]},{"id":"fresh-tandoori-chicken-marinated","page":"fresh","name":"Tandoori Chicken Marinated","weight":"500 g","price":349,"mrp":429,"image":"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍢","filters":["ready-to-cook"]},{"id":"fresh-chicken-seekh-kebab","page":"fresh","name":"Chicken Seekh Kebab 300g","weight":"300 g","price":299,"mrp":369,"image":"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍢","filters":["ready-to-cook"]},{"id":"fresh-fish-fingers","page":"fresh","name":"Fish Fingers 250g","weight":"250 g","price":249,"mrp":319,"image":"https://images.unsplash.com/photo-1580959375944-abd7e991f971?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍢","filters":["ready-to-cook"]},{"id":"fresh-chicken-nuggets","page":"fresh","name":"Chicken Nuggets 300g","weight":"300 g","price":199,"mrp":269,"image":"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&h=600&q=80","emoji":"🍢","filters":["ready-to-cook"]},{"id":"fresh-prawn-koliwada","page":"fresh","name":"Prawn Koliwada 250g","weight":"250 g","price":349,"mrp":429,"image":"https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=600","emoji":"🍢","filters":["ready-to-cook"]}]},"homeSections":[{"title":"Best in Fruits & Vegetables","href":"vegetables.html","productIds":["v1","v2","v3","v10","v21","v22","v28","v38"]},{"title":"Dairy & Breakfast","href":"grocery.html","productIds":["g16","g17","g18","g19","g20","g36","g37","g40"]},{"title":"Snacks & Beverages","href":"grocery.html","productIds":["g26","g27","g28","g29","g30","g31","g32","g33"]}],"pageConfig":{"grocery":{"title":"Grocery & Staples","subtitle":"Daily essentials, pantry staples, masala, snacks and breakfast picks curated like your favourite quick-commerce store.","filters":[{"label":"All","value":"all"},{"label":"Atta & Rice","value":"atta-rice"},{"label":"Dal & Pulses","value":"dal-pulses"},{"label":"Oil & Ghee","value":"oil-ghee"},{"label":"Dairy","value":"dairy"},{"label":"Masala","value":"masala"},{"label":"Beverages","value":"beverages"},{"label":"Snacks","value":"snacks"},{"label":"Breakfast","value":"breakfast"}]},"vegetables":{"title":"Fruits & Vegetables","subtitle":"Fresh Indian vegetables, leafy greens, fruits and exotics with quick-delivery style browsing.","filters":[{"label":"All","value":"all"},{"label":"Vegetables","value":"vegetables"},{"label":"Leafy Greens","value":"leafy-greens"},{"label":"Fruits","value":"fruits"},{"label":"Exotic Fruits","value":"exotic-fruits"}]},"fashion":{"title":"Fashion & Apparel","subtitle":"Clothing, footwear and accessories for men, women and kids.","filters":[{"label":"All","value":"all"},{"label":"Men's Wear","value":"mens-wear"},{"label":"Women's Wear","value":"womens-wear"},{"label":"Men's Innerwear","value":"mens-innerwear"},{"label":"Men's Footwear","value":"mens-footwear"},{"label":"Women's Footwear","value":"womens-footwear"},{"label":"Kids Wear","value":"kids-wear"},{"label":"Handbags & Purses","value":"handbags"},{"label":"Eyewear","value":"eyewear"},{"label":"Jewellery","value":"jewellery"}]},"electronics":{"title":"Electronics & Mobiles","subtitle":"Phones, laptops, TVs, audio, watches, cameras and gadgets popular on Amazon and Flipkart in India.","filters":[{"label":"All","value":"all"},{"label":"Mobiles","value":"mobiles"},{"label":"Laptops","value":"laptops"},{"label":"Headphones","value":"headphones"},{"label":"Chargers & Cables","value":"chargers-cables"},{"label":"Speakers","value":"speakers"},{"label":"Smart Watches","value":"smart-watches"},{"label":"Power Banks","value":"power-banks"},{"label":"Cameras","value":"cameras"},{"label":"Tablets","value":"tablets"},{"label":"TVs","value":"tvs"},{"label":"Storage & Printers","value":"printers-storage"},{"label":"Networking","value":"networking"},{"label":"Gaming","value":"gaming"}]},"home-kitchen":{"title":"Home & Kitchen","subtitle":"Refresh every room with cookware, appliances, storage, cleaning and décor picks tailored for Indian homes.","filters":[{"label":"All","value":"all"},{"label":"Kitchen Appliances","value":"kitchen-appliances"},{"label":"Cookware","value":"cookware"},{"label":"Storage","value":"storage"},{"label":"Cleaning","value":"cleaning"},{"label":"Bedding","value":"bedding"},{"label":"Decor","value":"decor"},{"label":"Bathroom","value":"bathroom"},{"label":"Lighting","value":"lighting"}]},"beauty":{"title":"Beauty & Personal Care","subtitle":"Indian and global beauty — Lakme, Mamaearth, MAC, CeraVe, Dior and daily grooming essentials.","filters":[{"label":"All","value":"all"},{"label":"Skincare","value":"skincare"},{"label":"Haircare","value":"haircare"},{"label":"Makeup","value":"makeup"},{"label":"Fragrances","value":"fragrances"},{"label":"Men's Grooming","value":"mens-grooming"},{"label":"Bath & Body","value":"bath-body"},{"label":"Oral Care","value":"oral-care"},{"label":"Health","value":"health"}]},"toys":{"title":"Toys & Games","subtitle":"LEGO, Hot Wheels, Funskool, Barbie, sports and learning toys from the Indian marketplace.","filters":[{"label":"All","value":"all"},{"label":"Action Figures","value":"action-figures"},{"label":"Board Games","value":"board-games"},{"label":"Educational","value":"educational"},{"label":"Dolls","value":"dolls"},{"label":"Cars & Vehicles","value":"cars-vehicles"},{"label":"Building Blocks","value":"building-blocks"},{"label":"Sports","value":"sports"},{"label":"Musical","value":"musical"},{"label":"Soft Toys","value":"soft-toys"},{"label":"Art & Craft","value":"art-craft"},{"label":"Baby Toys","value":"baby-toys"},{"label":"Outdoor","value":"outdoor"}]},"fresh":{"title":"Meat, Fish & Eggs","subtitle":"Order premium cuts, seafood and protein staples with clean packaging and same-day freshness in every pack.","filters":[{"label":"All","value":"all"},{"label":"Chicken","value":"chicken"},{"label":"Mutton","value":"mutton"},{"label":"Fish","value":"fish"},{"label":"Eggs","value":"eggs"},{"label":"Prawns","value":"prawns"},{"label":"Ready to Cook","value":"ready-to-cook"}]}}};

const APP = {
  cartItemsKey: 'sjCartItems',
  cartCountKey: 'sjCartCount',
  legacyCartKey: 'sjMegaMartCart',
  addressKey: 'sjDeliveryAddress',
  orderKey: 'sjLastOrder',
  locationKey: 'sjUserLocation',
  activeFilter: 'all',
  homeActiveTab: 'all',
  homeBrandFilter: 'all',
  homepageMarkup: '',
  searchText: '',
  toastTimer: null,
  seasonalHeroTimer: null,
};

const ALL_PRODUCTS = Object.entries(STORE_DATA.products).flatMap(([page, items]) =>
  items.map((item) => ({ ...item, page }))
);
const PRODUCT_MAP = new Map(ALL_PRODUCTS.map((item) => [item.id, item]));
const CATEGORY_NAMES = {
  grocery: 'Grocery',
  vegetables: 'Fresh Veggies',
  fashion: 'Fashion',
  electronics: 'Electronics',
  'home-kitchen': 'Home & Kitchen',
  beauty: 'Beauty',
  toys: 'Toys',
  fresh: 'Meat & Fish',
};
const CATEGORY_PAGES = {
  grocery: 'grocery.html',
  vegetables: 'vegetables.html',
  fashion: 'fashion.html',
  electronics: 'electronics.html',
  'home-kitchen': 'home.html',
  beauty: 'beauty.html',
  toys: 'toys.html',
  fresh: 'fresh.html',
};
const HOME_TAB_PROMOS = {
  grocery: { eyebrow: 'Pantry restock', title: 'Staples, snacks and household favourites', copy: 'Jump between atta, dairy, masala and beverages exactly like a quick-commerce aisle.' },
  vegetables: { eyebrow: 'Fresh haul', title: 'Seasonal greens and fruit baskets', copy: 'Browse crispy vegetables, leafy picks and juicy fruits without leaving the homepage.' },
  fresh: { eyebrow: 'Protein specials', title: 'Butcher-style freshness, delivered fast', copy: 'Switch between chicken, fish, eggs and ready-to-cook packs in one swipeable flow.' },
  fashion: { eyebrow: 'Style edit', title: 'Daily fashion deals for every wardrobe', copy: 'Explore trending looks across men, women and kids in compact horizontal rails.' },
  electronics: { eyebrow: 'Tech rush', title: 'Phones, audio and gadgets in one stream', copy: 'Swipe through bestselling electronics sections with brand-led discovery like Zepto.' },
  'home-kitchen': { eyebrow: 'Home refresh', title: 'Cookware, storage and décor highlights', copy: 'Move from appliances to décor with promotional callouts between product rails.' },
  beauty: { eyebrow: 'Glow picks', title: 'Skincare, makeup and grooming must-haves', copy: 'Find beauty essentials by subcategory while keeping quick access to full listing pages.' },
  toys: { eyebrow: 'Play zone', title: 'Games and toys sorted for easy discovery', copy: 'Scroll through learning kits, action toys and indoor fun with quick add-to-cart access.' },
};

document.addEventListener('DOMContentLoaded', () => {
  markActiveTab();
  updateCartCount();
  bindCategoryTabHover();
  bindSearch();
  initGlobalSearch();
  initLocationChip();
  bindSoonLinks();
  initSeasonalHero();

  const page = document.body.dataset.page;
  if (page === 'home') {
    renderCircleCategories();
    renderHomeSections();
    cacheHomepageMarkup();
    initHomepageTabs();
  } else if (STORE_DATA.pageConfig[page]) {
    renderListingPage(page);
  }

  if (page === 'cart') renderCartPage();
  if (page === 'checkout') renderCheckoutPage();
  if (page === 'order-success') renderSuccessPage();

  checkSearchParam();
});

function markActiveTab() {
  const current = document.body.dataset.tab || 'all';
  document.querySelectorAll('.category-tab').forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.tab === current);
  });
}

function bindCategoryTabHover() {
  document.querySelectorAll('.tabs-bar .category-tab').forEach((tab) => {
    let hoverTimer;
    tab.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        if (document.body.dataset.page === 'home') {
          const targetTab = tab.dataset.tab || 'all';
          const content = document.getElementById('homeTabContent');
          if (!content || targetTab === APP.homeActiveTab) return;
          renderTabContent(targetTab, content);
          return;
        }
        const href = tab.getAttribute('href');
        if (href && tab.dataset.tab !== (document.body.dataset.tab || 'all')) {
          window.location.href = href;
        }
      }, 140);
    });
    tab.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
  });
}

function bindSearch() {
  const search = document.getElementById('siteSearch');
  if (!search) return;
  search.addEventListener('input', (event) => {
    APP.searchText = event.target.value.trim().toLowerCase();
    applyFilters();
  });
}

function initLocationChip() {
  const chip = document.querySelector('.location-chip');
  if (!chip) return;

  const savedLocation = localStorage.getItem(APP.locationKey);
  if (savedLocation) {
    try {
      const parsed = JSON.parse(savedLocation);
      if (parsed?.city) {
        updateLocationChip(chip, parsed.city, parsed.area);
      }
    } catch (error) {
      localStorage.removeItem(APP.locationKey);
    }
  }

  chip.addEventListener('click', () => {
    if (chip.dataset.loading === 'true') return;

    const spans = chip.querySelectorAll('span');
    const label = spans[1];
    const originalText = label ? label.textContent : 'Select Location';
    chip.dataset.loading = 'true';
    if (label) label.textContent = 'Detecting...';

    if (!navigator.geolocation) {
      if (label) label.textContent = originalText;
      chip.dataset.loading = 'false';
      alert('Geolocation not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&addressdetails=1`,
            { headers: { 'Accept-Language': 'en' } }
          );
          const data = await response.json();
          const address = data.address || {};
          const city = address.city || address.town || address.village || address.county || 'Unknown';
          const area = address.suburb || address.neighbourhood || address.state_district || address.state || '';
          const locationData = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            city,
            area,
            full: data.display_name || '',
          };

          localStorage.setItem(APP.locationKey, JSON.stringify(locationData));
          updateLocationChip(chip, city, area);
        } catch (error) {
          if (label) label.textContent = originalText || 'Location detected';
          showToast('Unable to fetch area details right now');
        } finally {
          chip.dataset.loading = 'false';
        }
      },
      () => {
        if (label) label.textContent = originalText;
        chip.dataset.loading = 'false';
        alert('Please allow location access to detect your area');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}

function updateLocationChip(chip, city, area) {
  const spans = chip.querySelectorAll('span');
  if (spans.length < 2) return;

  const display = area ? `${area}, ${city}` : city;
  spans[1].textContent = display.length > 25 ? `${display.substring(0, 22)}...` : display;
  chip.classList.add('location-detected');
}

function initSeasonalHero() {
  window.clearInterval(APP.seasonalHeroTimer);

  const hero = document.querySelector('.seasonal-hero');
  const slides = document.querySelectorAll('.season-slide');
  const dots = document.querySelectorAll('.season-dot');
  if (!hero || slides.length === 0 || dots.length === 0) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function startAutoPlay() {
    window.clearInterval(APP.seasonalHeroTimer);
    APP.seasonalHeroTimer = window.setInterval(nextSlide, 8000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoPlay();
    });
  });

  hero.addEventListener('mouseenter', () => window.clearInterval(APP.seasonalHeroTimer));
  hero.addEventListener('mouseleave', startAutoPlay);

  showSlide(0);
  startAutoPlay();
}

function initGlobalSearch() {
  const searchInput = document.getElementById('siteSearch');
  if (!searchInput) return;

  const searchbar = searchInput.closest('.searchbar');
  if (!searchbar) return;

  searchInput.setAttribute('autocomplete', 'off');

  let dropdown = document.getElementById('searchDropdown');
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    dropdown.id = 'searchDropdown';
    searchbar.appendChild(dropdown);
  }

  const renderResults = (query) => {
    const results = ALL_PRODUCTS.filter((product) => product.name.toLowerCase().includes(query)).slice(0, 10);

    if (!results.length) {
      dropdown.innerHTML = `<div class="search-no-results">No products found for &quot;${escapeText(query)}&quot;</div>`;
      dropdown.classList.add('active');
      return;
    }

    dropdown.innerHTML = results.map((product) => {
      const categoryName = CATEGORY_NAMES[product.page] || product.page;
      return `
        <div class="search-result" data-page="${product.page}" data-product-id="${product.id}" data-product-name="${escapeAttr(product.name)}" role="button" tabindex="0">
          <span class="search-result__emoji">${product.emoji || '🛍️'}</span>
          <div class="search-result__info">
            <span class="search-result__name">${highlightMatch(product.name, query)}<span class="search-category-tag">${escapeText(categoryName)}</span></span>
            <span class="search-result__meta">${formatCurrency(product.price)}${product.weight ? ` · ${escapeText(product.weight)}` : ''}</span>
          </div>
        </div>
      `;
    }).join('');

    dropdown.querySelectorAll('.search-result').forEach((result) => {
      const openProduct = () => {
        goToProduct(
          result.dataset.page,
          result.dataset.productId,
          result.dataset.productName || ''
        );
      };

      result.addEventListener('click', openProduct);
      result.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProduct();
        }
      });
    });

    dropdown.classList.add('active');
  };

  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    if (query.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    renderResults(query);
  });

  searchInput.addEventListener('focus', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length >= 2) {
      renderResults(query);
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.searchbar')) {
      dropdown.classList.remove('active');
    }
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      dropdown.classList.remove('active');
    }
  });
}

function goToProduct(page, productId, productName) {
  const targetPage = CATEGORY_PAGES[page] || 'index.html';
  const params = new URLSearchParams();

  if (productName) params.set('search', productName);
  if (productId) params.set('product', productId);

  window.location.href = `${targetPage}?${params.toString()}`;
}

function checkSearchParam() {
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search');
  const productId = params.get('product');
  if (!searchTerm && !productId) return;

  const searchInput = document.getElementById('siteSearch');
  if (searchInput && searchTerm) {
    searchInput.value = searchTerm;
    APP.searchText = searchTerm.trim().toLowerCase();
    applyFilters();
  }

  if (productId) {
    window.setTimeout(() => highlightProductCard(productId), 120);
  }
}

function highlightProductCard(productId) {
  document.querySelectorAll('.product-card--search-hit').forEach((card) => {
    card.classList.remove('product-card--search-hit');
  });

  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (!card || card.classList.contains('hidden')) return;

  card.classList.add('product-card--search-hit');
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function highlightMatch(text, query) {
  const normalizedText = text.toLowerCase();
  const index = normalizedText.indexOf(query);
  if (index === -1) return escapeText(text);

  return `${escapeText(text.substring(0, index))}<mark>${escapeText(text.substring(index, index + query.length))}</mark>${escapeText(text.substring(index + query.length))}`;
}

function bindSoonLinks() {
  document.querySelectorAll('[data-soon="true"]').forEach((link) => {
    link.addEventListener('click', () => {
      showToast('More categories are landing on SJ MegaMart soon');
    });
  });
}

function renderCircleCategories() {
  const track = document.getElementById('circleTrack');
  if (!track) return;
  track.innerHTML = STORE_DATA.circleCategories.map((item) => `
    <a class="circle-card" href="${item.href}">
      <div class="circle-card__media">
        <img src="${item.image}" alt="${escapeAttr(item.name)}" loading="lazy" data-emoji="${item.emoji}">
      </div>
      <span>${item.name}</span>
    </a>
  `).join('');
  attachImageFallbacks(track);
  bindScrollButtons();
}

function renderHomeSections() {
  const mount = document.getElementById('homeSections');
  if (!mount) return;
  mount.innerHTML = STORE_DATA.homeSections.map((section, index) => {
    const cards = section.productIds.map((id) => PRODUCT_MAP.get(id)).filter(Boolean).map((product) => productCard(product, 'row')).join('');
    return `
      <section class="products-section" data-section="${index}">
        <div class="section-title">
          <h2>${section.title}</h2>
          <a class="section-link" href="${section.href}">see all ›</a>
        </div>
        <div class="row-shell">
          <div class="row-track" data-row-id="home-row-${index}">${cards}</div>
          <button class="scroll-arrow" type="button" data-scroll-target="home-row-${index}" aria-label="Scroll products">➜</button>
        </div>
      </section>
    `;
  }).join('');
  attachImageFallbacks(mount);
  bindCardButtons(mount);
  bindScrollButtons();
  applyFilters();
}

function cacheHomepageMarkup() {
  const mount = document.getElementById('homeTabContent');
  if (!mount) return;
  APP.homepageMarkup = mount.innerHTML;
}

function initHomepageTabs() {
  if (document.body.dataset.page !== 'home') return;

  const tabs = document.querySelectorAll('.tabs-bar .category-tab');
  const content = document.getElementById('homeTabContent');
  if (!tabs.length || !content) return;

  APP.homeActiveTab = document.body.dataset.tab || 'all';
  APP.homeBrandFilter = 'all';

  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      const targetTab = tab.dataset.tab || 'all';
      if (targetTab === APP.homeActiveTab && content.innerHTML) return;
      renderTabContent(targetTab, content);
    });
  });
}

function renderTabContent(tabName, container) {
  APP.homeActiveTab = tabName;
  APP.homeBrandFilter = 'all';
  document.body.dataset.tab = tabName;
  markActiveTab();

  if (tabName === 'all') {
    restoreHomepageContent(container);
    return;
  }

  if (tabName === 'fashion') {
    renderFashionTab(container);
    return;
  }

  renderCategoryTabContent(tabName, container);
}

function restoreHomepageContent(container) {
  if (!container || !APP.homepageMarkup) return;
  container.innerHTML = APP.homepageMarkup;
  renderCircleCategories();
  renderHomeSections();
  initSeasonalHero();
  applyFilters();
}

function renderCategoryTabContent(tabName, container) {
  const products = STORE_DATA.products[tabName];
  const config = STORE_DATA.pageConfig[tabName];
  if (!container || !products || !config) return;

  const filterLabels = Object.fromEntries(config.filters.map((filter) => [filter.value, filter.label]));
  const grouped = new Map();

  products.forEach((product) => {
    const filterKey = product.filters?.[0] || 'other';
    if (!grouped.has(filterKey)) grouped.set(filterKey, []);
    grouped.get(filterKey).push(product);
  });

  const orderedKeys = config.filters
    .filter((filter) => filter.value !== 'all')
    .map((filter) => filter.value)
    .filter((filterKey) => grouped.has(filterKey));
  const extraKeys = [...grouped.keys()].filter((filterKey) => !orderedKeys.includes(filterKey));
  const sectionKeys = [...orderedKeys, ...extraKeys];
  const brands = getHomepageBrands(products);
  const pageHref = CATEGORY_PAGES[tabName] || 'index.html';

  let html = `
    <section class="hero-section">
      <div class="home-category-hero">
        <h2>${escapeText(config.title)}</h2>
        <p>${escapeText(config.subtitle)}</p>
      </div>
      <div class="brand-filters" aria-label="Filter ${escapeAttr(CATEGORY_NAMES[tabName] || config.title)} by brand">
        <button class="brand-pill active" type="button" data-brand="all">All</button>
        ${brands.map((brand) => `<button class="brand-pill" type="button" data-brand="${escapeAttr(normalizeToken(brand))}">${escapeText(brand)}</button>`).join('')}
      </div>
  `;

  sectionKeys.forEach((filterKey, index) => {
    const items = grouped.get(filterKey) || [];
    const label = filterLabels[filterKey] || toTitleCase(filterKey);

    html += `
      <section class="subcategory-section" data-filter-section="${escapeAttr(filterKey)}">
        <div class="subcategory-header">
          <h3>${escapeText(label)}</h3>
          <a href="${pageHref}?filter=${encodeURIComponent(filterKey)}" class="see-all-link">See All →</a>
        </div>
        <div class="horizontal-scroll-row">
          ${items.map((product) => renderProductCard(product, tabName)).join('')}
        </div>
      </section>
    `;

    if ((index + 1) % 2 === 0 && index < sectionKeys.length - 1) {
      html += renderCategoryPromo(tabName, index);
    }
  });

  html += '</section>';
  container.innerHTML = html;
  attachImageFallbacks(container);
  bindCardButtons(container);
  bindHomepageBrandFilters(container);
  applyFilters();
}

function renderFashionTab(container) {
  if (!container) return;

  const products = STORE_DATA.products.fashion || [];
  const lootDeals = products.filter((product) => product.mrp > product.price && Math.round(((product.mrp - product.price) / product.mrp) * 100) >= 30);
  const featuredDeals = (lootDeals.length ? lootDeals : products).slice(0, 12);
  const categories = [
    { name: "Men's Topwear", filter: 'mens-wear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: "Men's Bottomwear", filter: 'mens-wear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: "Women's Topwear", filter: 'womens-wear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: "Women's Bottomwear", filter: 'womens-wear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: "Men's Innerwear", filter: 'mens-innerwear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Footwear', filter: 'mens-footwear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Jewellery', filter: 'jewellery', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Accessories', filter: 'handbags', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Bags & Wallets', filter: 'handbags', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Eyewear', filter: 'eyewear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Travel', href: 'fashion.html', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
  ];
  const brandBadges = ['Adidas', 'Puma', '30+ Brands'];
  const brandCards = [
    { name: 'Adidas Originals', tag: 'Street-ready styles', href: 'fashion.html?filter=mens-footwear', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Puma Motion', tag: 'Athleisure essentials', href: 'fashion.html?filter=mens-footwear', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Denim Days', tag: 'Everyday favourites', href: 'fashion.html?filter=mens-wear', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { name: 'Chic Edit', tag: 'Minimal wardrobe picks', href: 'fashion.html?filter=womens-wear', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
  ];
  const collections = [
    { label: 'WORK FROM HOME COLLECTION', href: 'fashion.html?filter=womens-wear', gradient: 'linear-gradient(135deg,#667eea,#764ba2)', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { label: 'OFFICE READY COLLECTION', href: 'fashion.html?filter=mens-wear', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { label: 'FITNESS FOCUS COLLECTION', href: 'fashion.html?filter=mens-footwear', gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
    { label: 'DATE NIGHT LOOK COLLECTION', href: 'fashion.html?filter=womens-wear', gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', image: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
  ];

  container.innerHTML = `
    <section class="fashion-section">
      <h3 class="fashion-section__title">New in store</h3>
      <div class="fashion-circles">
        <a href="fashion.html?filter=mens-wear" class="fashion-circle-item">
          <div class="fashion-circle-img" style="background-image:url('https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg')"></div>
          <span>Men</span>
        </a>
        <a href="fashion.html?filter=womens-wear" class="fashion-circle-item">
          <div class="fashion-circle-img" style="background-image:url('https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg')"></div>
          <span>Women</span>
        </a>
        <a href="fashion.html" class="fashion-circle-item">
          <div class="fashion-circle-img" style="background-image:url('https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg')"></div>
          <span>Travel & Accessories</span>
        </a>
      </div>
    </section>

    <section class="fashion-deals-banner">
      <div class="fashion-deals-info">
        <span class="fashion-deals-sub">UP TO 60% OFF</span>
        <h3 class="fashion-deals-title">DEALS OF THE DAY</h3>
      </div>
      <a href="fashion.html" class="see-all-btn">See All ›</a>
    </section>

    <section class="fashion-section">
      <h3 class="fashion-section__title fashion-section__title--caps">Categories</h3>
      <div class="fashion-category-row">
        ${categories.map((category) => `
          <a href="${category.href || `fashion.html?filter=${category.filter}`}" class="fashion-cat-item">
            <div class="fashion-cat-img" style="background-image:url('${category.img}')"></div>
            <span>${category.name}</span>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="fashion-section">
      <div class="subcategory-header">
        <h3>Most Loved Brands</h3>
        <a href="fashion.html" class="see-all-link">See All →</a>
      </div>
      <div class="fashion-brand-strip">
        ${brandBadges.map((brand, index) => `<span class="fashion-brand-badge${index === 2 ? ' fashion-brand-badge--count' : ''}">${brand}</span>`).join('')}
      </div>
      <div class="fashion-brand-cards">
        ${brandCards.map((brand) => `
          <a href="${brand.href}" class="fashion-brand-card" style="background-image:url('${brand.image}')">
            <div class="fashion-brand-card__text">
              <strong>${brand.name}</strong>
              <span>${brand.tag}</span>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="fashion-section">
      <h3 class="fashion-section__title">Curated collections</h3>
      <div class="fashion-collections">
        ${collections.map((collection) => `
          <a href="${collection.href}" class="collection-card" style="background:${collection.gradient}">
            <div class="collection-card__text">
              <span class="collection-card__label">${collection.label}</span>
            </div>
            <img src="${collection.image}" alt="${collection.label}" loading="lazy" onerror="this.style.display='none'">
          </a>
        `).join('')}
      </div>
    </section>

    <section class="fashion-section fashion-loot-deals" data-filter-section="loot-deals">
      <div class="subcategory-header">
        <h3>Loot Deals</h3>
        <a href="fashion.html" class="see-all-link">See All →</a>
      </div>
      <div class="horizontal-scroll-row">
        ${featuredDeals.map((product) => renderProductCard(product, 'fashion')).join('')}
      </div>
    </section>
  `;

  attachImageFallbacks(container);
  bindCardButtons(container);
  applyFilters();
}

function bindHomepageBrandFilters(container) {
  container.querySelectorAll('.brand-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      APP.homeBrandFilter = pill.dataset.brand || 'all';
      container.querySelectorAll('.brand-pill').forEach((button) => button.classList.toggle('active', button === pill));
      applyHomepageCategoryFilters(container);
    });
  });
}

function applyHomepageCategoryFilters(container = document.getElementById('homeTabContent')) {
  if (!container) return;

  const activeBrand = APP.homeBrandFilter || 'all';
  const searchText = APP.searchText;

  container.querySelectorAll('[data-filter-section]').forEach((section) => {
    let visibleCards = 0;

    section.querySelectorAll('.product-card').forEach((card) => {
      const matchesBrand = activeBrand === 'all' || (card.dataset.brand || '') === activeBrand;
      const matchesSearch = !searchText || (card.dataset.name || '').includes(searchText);
      const isVisible = matchesBrand && matchesSearch;
      card.classList.toggle('hidden', !isVisible);
      if (isVisible) visibleCards += 1;
    });

    section.classList.toggle('is-empty', visibleCards === 0);
  });
}

function getHomepageBrands(products) {
  const brands = [];

  products.forEach((product) => {
    const brand = getProductBrand(product);
    if (brand && !brands.includes(brand)) brands.push(brand);
  });

  return brands.slice(0, 12);
}

function getProductBrand(product) {
  const firstToken = String(product?.name || '').trim().split(/\s+/)[0] || '';
  return firstToken.replace(/[^a-zA-Z0-9'&.-]/g, '') || 'SJ';
}

function normalizeToken(value) {
  return String(value || '').trim().toLowerCase();
}

function toTitleCase(value) {
  return String(value || '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function renderCategoryPromo(tabName, index) {
  const promo = HOME_TAB_PROMOS[tabName] || {
    eyebrow: 'Featured drop',
    title: 'Quick picks for every cart',
    copy: 'Explore more handpicked items with fast access to the full category page.',
  };
  const themeClass = index % 4 === 1 ? 'banner--dark' : 'banner--lavender';
  const pageHref = CATEGORY_PAGES[tabName] || 'index.html';

  return `
    <section class="banner tab-promo ${themeClass}">
      <div>
        <div class="banner__eyebrow">${escapeText(promo.eyebrow)}</div>
        <h3>${escapeText(promo.title)}</h3>
        <p>${escapeText(promo.copy)}</p>
      </div>
      <a class="banner__cta" href="${pageHref}">Explore ${escapeText(CATEGORY_NAMES[tabName] || 'category')}</a>
    </section>
  `;
}

function renderListingPage(page) {
  const hero = document.getElementById('listingHero');
  const filters = document.getElementById('filterBar');
  const grid = document.getElementById('productGrid');
  const config = STORE_DATA.pageConfig[page];
  const items = STORE_DATA.products[page] || [];
  if (hero) {
    hero.innerHTML = `<h1>${config.title}</h1><p>${config.subtitle}</p><div class="muted-note">${items.length} products curated for SJ MegaMart</div>`;
  }
  if (filters) {
    filters.innerHTML = config.filters.map((filter, index) => `
      <button class="filter-chip ${index === 0 ? 'is-active' : ''}" type="button" data-filter="${filter.value}">${filter.label}</button>
    `).join('');
    filters.querySelectorAll('.filter-chip').forEach((button) => {
      button.addEventListener('click', () => {
        APP.activeFilter = button.dataset.filter;
        filters.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.toggle('is-active', chip === button));
        applyFilters();
      });
    });
  }
  if (grid) {
    grid.innerHTML = items.map((product) => productCard(product, 'grid')).join('');
    attachImageFallbacks(grid);
    bindCardButtons(grid);
  }
  APP.activeFilter = 'all';
  applyFilters();
}

function productCard(product, mode) {
  const discount = product.mrp > product.price ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;
  const discountClass = product.page === 'fashion' ? 'discount-chip purple' : 'discount-chip';
  return `
    <article class="product-card product-card--${mode}" data-id="${product.id}" data-name="${escapeAttr(product.name.toLowerCase())}" data-filter="${product.filters.join(' ')}">
      <div class="product-card__inner">
        <div class="product-card__media">
          <img src="${product.image}" alt="${escapeAttr(product.name)}" loading="lazy" data-emoji="${product.emoji || '🛍️'}">
          <button class="add-btn" type="button" data-add-id="${product.id}">ADD</button>
        </div>
        <span class="delivery-badge">⏱ 8 MINS</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-weight">${product.weight}</p>
        <div class="price-row">
          <span class="price-now">${formatCurrency(product.price)}</span>
          <span class="price-mrp">${formatCurrency(product.mrp)}</span>
          <span class="${discountClass}">${discount}% OFF</span>
        </div>
      </div>
    </article>
  `;
}

function renderProductCard(product, category) {
  const productWithPage = product.page ? product : { ...product, page: category };
  const brand = normalizeToken(getProductBrand(productWithPage));

  return productCard(productWithPage, 'row').replace(
    '<article class="product-card product-card--row"',
    `<article class="product-card product-card--row" data-brand="${escapeAttr(brand)}" data-category="${escapeAttr(category)}"`
  );
}

function attachImageFallbacks(root) {
  root.querySelectorAll('img[data-emoji]').forEach((img) => {
    img.addEventListener('error', () => applyImageFallback(img, img.dataset.emoji));
  });
}

function applyImageFallback(img, emoji) {
  if (!img || img.dataset.fallbackApplied === 'true') return;
  img.dataset.fallbackApplied = 'true';
  const shell = document.createElement('div');
  shell.className = 'image-fallback';
  shell.textContent = emoji || '🛍️';
  img.replaceWith(shell);
}

function bindCardButtons(root) {
  root.querySelectorAll('[data-add-id]').forEach((button) => {
    button.addEventListener('click', () => addToCart(button.dataset.addId));
  });
}

function bindScrollButtons() {
  document.querySelectorAll('[data-scroll-target]').forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
    button.addEventListener('click', () => {
      const target = button.dataset.scrollTarget;
      const track = document.querySelector(`[data-row-id="${target}"]`) || document.getElementById(target);
      if (!track) return;
      track.scrollBy({ left: Math.max(track.clientWidth * 0.8, 260), behavior: 'smooth' });
    });
  });
}

function addToCart(productId) {
  const product = PRODUCT_MAP.get(productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price) || 0,
      qty: 1,
    });
  }
  saveCart(cart);
  showToast('Added to cart');
}

function getCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(APP.cartItemsKey) || '[]');
    if (Array.isArray(stored)) {
      return sanitizeCartItems(stored);
    }
  } catch (error) {
    // Ignore parse errors and fall back to legacy data below.
  }

  try {
    const legacy = JSON.parse(localStorage.getItem(APP.legacyCartKey) || '{}');
    if (legacy && typeof legacy === 'object') {
      const migrated = Object.entries(legacy).map(([id, qty]) => {
        const product = PRODUCT_MAP.get(id);
        if (!product || !qty) return null;
        return { id: product.id, name: product.name, price: Number(product.price) || 0, qty: Number(qty) || 0 };
      }).filter(Boolean);
      saveCart(migrated);
      localStorage.removeItem(APP.legacyCartKey);
      return migrated;
    }
  } catch (error) {
    // Ignore parse errors and use an empty cart.
  }

  return [];
}

function sanitizeCartItems(items) {
  return items
    .map((item) => {
      const qty = Math.max(0, Number(item.qty) || 0);
      const product = PRODUCT_MAP.get(item.id) || ALL_PRODUCTS.find((entry) => entry.name === item.name && Number(entry.price) === Number(item.price));
      if (!qty) return null;
      return {
        id: item.id || product?.id || `custom-${escapeAttr(item.name || 'item')}`,
        name: item.name || product?.name || 'SJ MegaMart item',
        price: Number(item.price ?? product?.price) || 0,
        qty,
      };
    })
    .filter(Boolean);
}

function saveCart(items) {
  const cleanItems = sanitizeCartItems(items);
  const count = cleanItems.reduce((sum, item) => sum + item.qty, 0);
  localStorage.setItem(APP.cartItemsKey, JSON.stringify(cleanItems));
  localStorage.setItem(APP.cartCountKey, String(count));
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem(APP.cartItemsKey);
  localStorage.setItem(APP.cartCountKey, '0');
  updateCartCount();
}

function updateCartCount() {
  const items = getCart();
  const total = items.reduce((sum, item) => sum + item.qty, 0);
  localStorage.setItem(APP.cartCountKey, String(total));
  document.querySelectorAll('.cart-count').forEach((node) => {
    node.textContent = total;
  });
}

function getCartSummary(items = getCart()) {
  const itemsTotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = itemsTotal >= 1000 ? Math.round(itemsTotal * 0.05) : 0;
  const deliveryFee = 0;
  const handlingFee = 0;
  return {
    itemCount: items.reduce((sum, item) => sum + item.qty, 0),
    itemsTotal,
    deliveryFee,
    handlingFee,
    discount,
    totalAmount: Math.max(0, itemsTotal + deliveryFee + handlingFee - discount),
  };
}

function renderCartPage() {
  const itemCountNode = document.getElementById('cartItemCount');
  const listNode = document.getElementById('cartItemsList');
  const summaryNode = document.getElementById('cartSummary');
  if (!listNode || !summaryNode) return;

  const items = getCart();
  const summary = getCartSummary(items);
  if (itemCountNode) {
    itemCountNode.textContent = `${summary.itemCount} item${summary.itemCount === 1 ? '' : 's'}`;
  }

  if (!items.length) {
    listNode.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-state__icon">🛍️</div>
        <h2>Your cart is empty</h2>
        <p>Add fresh finds, gadgets and daily essentials to get started.</p>
        <a class="primary-btn" href="index.html">Start Shopping</a>
      </div>
    `;
    summaryNode.innerHTML = `
      <div class="summary-card">
        <h3>Bill details</h3>
        <p class="summary-empty">Your bag is waiting for amazing picks.</p>
      </div>
    `;
    return;
  }

  listNode.innerHTML = items.map((item) => `
    <article class="cart-item-card" data-item-id="${escapeAttr(item.id)}">
      <div class="cart-item-card__main">
        <div>
          <h3>${item.name}</h3>
          <p>${formatCurrency(item.price)} each</p>
        </div>
        <button class="icon-btn danger" type="button" data-cart-remove="${escapeAttr(item.id)}" aria-label="Remove item">🗑️</button>
      </div>
      <div class="cart-item-card__footer">
        <div class="qty-control">
          <button type="button" data-cart-decrease="${escapeAttr(item.id)}">−</button>
          <span>${item.qty}</span>
          <button type="button" data-cart-increase="${escapeAttr(item.id)}">+</button>
        </div>
        <strong>${formatCurrency(item.price * item.qty)}</strong>
      </div>
    </article>
  `).join('');

  summaryNode.innerHTML = renderSummaryMarkup(summary, true);

  listNode.querySelectorAll('[data-cart-increase]').forEach((button) => {
    button.addEventListener('click', () => changeCartQuantity(button.dataset.cartIncrease, 1));
  });
  listNode.querySelectorAll('[data-cart-decrease]').forEach((button) => {
    button.addEventListener('click', () => changeCartQuantity(button.dataset.cartDecrease, -1));
  });
  listNode.querySelectorAll('[data-cart-remove]').forEach((button) => {
    button.addEventListener('click', () => removeCartItem(button.dataset.cartRemove));
  });
}

function renderSummaryMarkup(summary, withCheckoutButton = false) {
  const checkoutHref = window.SJAuth?.getCheckoutHref?.() || 'checkout.html';
  return `
    <div class="summary-card">
      <h3>Bill details</h3>
      <div class="summary-row"><span>Items total</span><strong>${formatCurrency(summary.itemsTotal)}</strong></div>
      <div class="summary-row"><span>Delivery Fee</span><strong class="summary-free">FREE</strong></div>
      <div class="summary-row"><span>Handling Fee</span><strong>${formatCurrency(summary.handlingFee)}</strong></div>
      ${summary.discount ? `<div class="summary-row summary-row--discount"><span>Discount</span><strong>- ${formatCurrency(summary.discount)}</strong></div>` : ''}
      <div class="summary-divider"></div>
      <div class="summary-row summary-row--total"><span>Total Amount</span><strong>${formatCurrency(summary.totalAmount)}</strong></div>
      ${withCheckoutButton ? `<a class="primary-btn primary-btn--full" href="${escapeAttr(checkoutHref)}">Proceed to Checkout</a>` : ''}
    </div>
  `;
}

function changeCartQuantity(itemId, delta) {
  const cart = getCart();
  const target = cart.find((item) => item.id === itemId);
  if (!target) return;
  target.qty += delta;
  saveCart(cart.filter((item) => item.qty > 0));
  renderCartPage();
  if (document.body.dataset.page === 'checkout') renderCheckoutPage();
}

function removeCartItem(itemId) {
  const cart = getCart().filter((item) => item.id !== itemId);
  saveCart(cart);
  renderCartPage();
  if (document.body.dataset.page === 'checkout') renderCheckoutPage();
}

function renderCheckoutPage() {
  const items = getCart();
  const address = getSavedAddress();
  const content = document.getElementById('checkoutContent');
  const summaryNode = document.getElementById('checkoutSummary');
  if (!content || !summaryNode) return;

  if (!items.length) {
    content.innerHTML = `
      <div class="empty-cart-state empty-cart-state--compact">
        <div class="empty-cart-state__icon">🧾</div>
        <h2>Your cart is empty</h2>
        <p>Add a few products before moving to payment.</p>
        <a class="primary-btn" href="cart.html">Go to Cart</a>
      </div>
    `;
    summaryNode.innerHTML = renderSummaryMarkup(getCartSummary([]), false);
    return;
  }

  const summary = getCartSummary(items);
  if (window.SJAuth?.shouldBlockCheckout?.()) {
    window.SJAuth.renderCheckoutAuthNotice({
      items,
      summary,
      content,
      summaryNode,
      renderSummaryMarkup
    });
    return;
  }

  summaryNode.innerHTML = `
    <div class="summary-card">
      <h3>Order Summary</h3>
      <div class="checkout-order-list">
        ${items.map((item) => `
          <div class="checkout-order-item">
            <div>
              <strong>${item.name}</strong>
              <span>Qty ${item.qty}</span>
            </div>
            <strong>${formatCurrency(item.price * item.qty)}</strong>
          </div>
        `).join('')}
      </div>
      <div class="summary-divider"></div>
      <div class="summary-row summary-row--total"><span>Total Amount</span><strong>${formatCurrency(summary.totalAmount)}</strong></div>
    </div>
  `;

  hydrateCheckout(summary, address);
  window.SJAuth?.prefillCheckoutForm?.();
}

function hydrateCheckout(summary, address) {
  const amountText = formatCurrency(summary.totalAmount);
  const checkoutShell = document.getElementById('checkoutContent');
  if (!checkoutShell) return;

  checkoutShell.innerHTML = `
    <section class="checkout-panel">
      <div class="section-title section-title--left">
        <h2>Delivery Address</h2>
      </div>
      <div class="form-grid">
        <label class="form-field">
          <span>Full Name</span>
          <input id="fullName" type="text" placeholder="Enter full name" value="${escapeAttr(address.fullName || '')}">
        </label>
        <label class="form-field">
          <span>Phone Number</span>
          <input id="phoneNumber" type="tel" placeholder="10 digit mobile number" maxlength="10" value="${escapeAttr(address.phoneNumber || '')}">
        </label>
        <label class="form-field form-field--full">
          <span>Address</span>
          <textarea id="addressLine" rows="4" placeholder="House no, street, landmark">${escapeText(address.addressLine || '')}</textarea>
        </label>
        <label class="form-field">
          <span>City</span>
          <input id="city" type="text" placeholder="City" value="${escapeAttr(address.city || '')}">
        </label>
        <label class="form-field">
          <span>State</span>
          <input id="state" type="text" placeholder="State" value="${escapeAttr(address.state || '')}">
        </label>
        <label class="form-field">
          <span>PIN Code</span>
          <input id="pinCode" type="text" placeholder="6 digit PIN" maxlength="6" value="${escapeAttr(address.pinCode || '')}">
        </label>
      </div>
      <div class="location-section">
        <button type="button" class="detect-location-btn" onclick="detectLocation()">
          📍 Detect My Location
        </button>
        <div id="checkoutMap" class="checkout-map"></div>
        <p class="location-hint">We'll deliver to this pinned location</p>
      </div>
      <button class="secondary-btn" id="saveAddressBtn" type="button">Save Address</button>

      <section class="payment-panel-wrap">
        <div class="section-title section-title--left">
          <h2>Payment Methods</h2>
        </div>
        <div class="payment-tabs" role="tablist">
          <button class="payment-tab is-active" type="button" data-payment-tab="card">Credit/Debit Card</button>
          <button class="payment-tab" type="button" data-payment-tab="upi">UPI</button>
          <button class="payment-tab" type="button" data-payment-tab="netbanking">Net Banking</button>
          <button class="payment-tab" type="button" data-payment-tab="cod">Cash on Delivery</button>
        </div>

        <div class="payment-panels">
          <section class="payment-method is-active" data-payment-panel="card">
            <div class="form-grid">
              <label class="form-field form-field--full card-number-field">
                <span>Card Number</span>
                <div class="input-with-icon">
                  <span>💳</span>
                  <input id="cardNumber" type="text" inputmode="numeric" maxlength="19" placeholder="XXXX XXXX XXXX XXXX">
                </div>
              </label>
              <label class="form-field form-field--full">
                <span>Card Holder Name</span>
                <input id="cardHolder" type="text" placeholder="Name on card">
              </label>
              <label class="form-field">
                <span>Expiry Date</span>
                <input id="cardExpiry" type="text" inputmode="numeric" maxlength="5" placeholder="MM/YY">
              </label>
              <label class="form-field">
                <span>CVV</span>
                <input id="cardCvv" type="password" inputmode="numeric" maxlength="3" placeholder="CVV">
              </label>
            </div>
            <button class="primary-btn primary-btn--full" type="button" data-pay-now="card">Pay ${amountText}</button>
          </section>

          <section class="payment-method" data-payment-panel="upi">
            <div class="form-grid">
              <label class="form-field form-field--full">
                <span>UPI ID</span>
                <input id="upiId" type="text" placeholder="name@upi">
              </label>
            </div>
            <div class="upi-qr-box">
              <div class="upi-qr-placeholder" aria-hidden="true">
                <div></div><div></div><div></div><div></div>
                <span>SJ MegaMart UPI QR</span>
              </div>
              <p>Or scan using your favourite app</p>
            </div>
            <div class="upi-apps">
              <span class="upi-app upi-app--gpay">GPay</span>
              <span class="upi-app upi-app--phonepe">PhonePe</span>
              <span class="upi-app upi-app--paytm">Paytm</span>
              <span class="upi-app upi-app--bhim">BHIM</span>
            </div>
            <button class="primary-btn primary-btn--full" type="button" data-pay-now="upi">Pay ${amountText}</button>
          </section>

          <section class="payment-method" data-payment-panel="netbanking">
            <div class="bank-grid" id="popularBanks">
              ${['SBI','HDFC','ICICI','Axis','Kotak','PNB','BOB','Yes Bank'].map((bank) => `<button class="bank-option" type="button" data-bank="${bank}">${bank}</button>`).join('')}
            </div>
            <label class="form-field form-field--full">
              <span>Other Bank</span>
              <select id="otherBank">
                <option value="">Select your bank</option>
                <option value="Canara Bank">Canara Bank</option>
                <option value="Indian Bank">Indian Bank</option>
                <option value="Union Bank">Union Bank</option>
                <option value="Bank of India">Bank of India</option>
              </select>
            </label>
            <button class="primary-btn primary-btn--full" type="button" data-pay-now="netbanking">Pay ${amountText}</button>
          </section>

          <section class="payment-method" data-payment-panel="cod">
            <div class="cod-box">
              <h3>Cash on Delivery</h3>
              <p>Pay when your order is delivered.</p>
            </div>
            <button class="primary-btn primary-btn--full" type="button" data-pay-now="cod">Place Order (COD)</button>
          </section>
        </div>
      </section>
    </section>
  `;

  bindCheckoutEvents(summary);
}

function bindCheckoutEvents(summary) {
  document.getElementById('saveAddressBtn')?.addEventListener('click', () => {
    const result = validateAddress();
    if (!result.valid) {
      showToast(result.message);
      return;
    }
    localStorage.setItem(APP.addressKey, JSON.stringify(result.address));
    showToast('Address saved');
  });

  document.querySelectorAll('[data-payment-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-payment-tab]').forEach((tab) => tab.classList.toggle('is-active', tab === button));
      document.querySelectorAll('[data-payment-panel]').forEach((panel) => panel.classList.toggle('is-active', panel.dataset.paymentPanel === button.dataset.paymentTab));
    });
  });

  document.querySelectorAll('#popularBanks .bank-option').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('#popularBanks .bank-option').forEach((option) => option.classList.toggle('is-active', option === button));
      const otherBank = document.getElementById('otherBank');
      if (otherBank) otherBank.value = '';
    });
  });

  const phone = document.getElementById('phoneNumber');
  const pin = document.getElementById('pinCode');
  const cardNumber = document.getElementById('cardNumber');
  const cardExpiry = document.getElementById('cardExpiry');
  const cardCvv = document.getElementById('cardCvv');

  phone?.addEventListener('input', () => {
    phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
  });
  pin?.addEventListener('input', () => {
    pin.value = pin.value.replace(/\D/g, '').slice(0, 6);
  });
  cardNumber?.addEventListener('input', () => {
    const digits = cardNumber.value.replace(/\D/g, '').slice(0, 16);
    cardNumber.value = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  });
  cardExpiry?.addEventListener('input', () => {
    const digits = cardExpiry.value.replace(/\D/g, '').slice(0, 4);
    cardExpiry.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  });
  cardCvv?.addEventListener('input', () => {
    cardCvv.value = cardCvv.value.replace(/\D/g, '').slice(0, 3);
  });

  document.querySelectorAll('[data-pay-now]').forEach((button) => {
    button.addEventListener('click', () => processPayment(button.dataset.payNow, summary));
  });
}

function validateAddress() {
  const address = {
    fullName: document.getElementById('fullName')?.value.trim() || '',
    phoneNumber: document.getElementById('phoneNumber')?.value.trim() || '',
    addressLine: document.getElementById('addressLine')?.value.trim() || '',
    city: document.getElementById('city')?.value.trim() || '',
    state: document.getElementById('state')?.value.trim() || '',
    pinCode: document.getElementById('pinCode')?.value.trim() || '',
  };

  if (!address.fullName || !address.addressLine || !address.city || !address.state) {
    return { valid: false, message: 'Please fill in the complete delivery address.' };
  }
  if (!/^\d{10}$/.test(address.phoneNumber)) {
    return { valid: false, message: 'Phone number must be 10 digits.' };
  }
  if (!/^\d{6}$/.test(address.pinCode)) {
    return { valid: false, message: 'PIN code must be 6 digits.' };
  }
  return { valid: true, address };
}

function processPayment(method, summary) {
  const items = getCart();
  if (!items.length) {
    showToast('Your cart is empty');
    return;
  }

  const addressState = validateAddress();
  if (!addressState.valid) {
    showToast(addressState.message);
    return;
  }
  localStorage.setItem(APP.addressKey, JSON.stringify(addressState.address));

  if (method === 'card') {
    const cardNumber = (document.getElementById('cardNumber')?.value || '').replace(/\s/g, '');
    const cardHolder = document.getElementById('cardHolder')?.value.trim() || '';
    const cardExpiry = document.getElementById('cardExpiry')?.value.trim() || '';
    const cardCvv = document.getElementById('cardCvv')?.value.trim() || '';
    if (!/^\d{16}$/.test(cardNumber) || !cardHolder || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry) || !/^\d{3}$/.test(cardCvv)) {
      showToast('Please enter valid card details.');
      return;
    }
  }

  if (method === 'upi') {
    const upiId = document.getElementById('upiId')?.value.trim() || '';
    if (!upiId.includes('@')) {
      showToast('Enter a valid UPI ID.');
      return;
    }
  }

  if (method === 'netbanking') {
    const activeBank = document.querySelector('#popularBanks .bank-option.is-active')?.dataset.bank || document.getElementById('otherBank')?.value || '';
    if (!activeBank) {
      showToast('Please select a bank.');
      return;
    }
  }

  const order = {
    orderId: generateOrderId(),
    items,
    summary,
    address: addressState.address,
    location: typeof window.getOrderLocation === 'function' ? window.getOrderLocation() : null,
    paymentMethod: getPaymentLabel(method),
    placedAt: new Date().toISOString(),
    etaText: 'Your order will be delivered in 10-15 minutes',
    status: 'confirmed'
  };

  const overlay = document.getElementById('paymentLoader');
  overlay?.classList.add('is-visible');
  window.setTimeout(async () => {
    try {
      const finalOrder = await Promise.resolve(window.SJAuth?.handleOrderPlacement?.(order) || order);
      localStorage.setItem(APP.orderKey, JSON.stringify(finalOrder));
      clearCart();
      window.location.href = 'order-success.html';
    } catch (error) {
      overlay?.classList.remove('is-visible');
      showToast(error?.message || 'Unable to place order right now. Please try again.');
    }
  }, 2400);
}

function renderSuccessPage() {
  const fallbackOrder = {
    orderId: generateOrderId(),
    items: [],
    summary: getCartSummary([]),
    address: getSavedAddress(),
    paymentMethod: 'Online Payment',
    etaText: 'Your order will be delivered in 10-15 minutes',
    placedAt: new Date().toISOString(),
  };

  const order = getStoredOrder() || fallbackOrder;
  const orderIdNode = document.getElementById('successOrderId');
  const etaNode = document.getElementById('successEta');
  const summaryNode = document.getElementById('successSummary');
  if (orderIdNode) orderIdNode.textContent = order.orderId;
  if (etaNode) etaNode.textContent = order.etaText;
  if (summaryNode) {
    summaryNode.innerHTML = `
      <div class="success-summary-grid">
        <div><span>Items</span><strong>${order.summary.itemCount || 0}</strong></div>
        <div><span>Total Paid</span><strong>${formatCurrency(order.summary.totalAmount || 0)}</strong></div>
        <div><span>Payment</span><strong>${order.paymentMethod}</strong></div>
        <div><span>Delivery To</span><strong>${escapeText(order.address.city || 'Bhubaneswar')}</strong></div>
      </div>
      <div class="success-items">
        ${(order.items || []).map((item) => `<div class="success-item"><span>${item.name} × ${item.qty}</span><strong>${formatCurrency(item.price * item.qty)}</strong></div>`).join('') || '<div class="success-item"><span>Your latest order details will appear here.</span><strong>-</strong></div>'}
      </div>
    `;
  }
  window.SJAuth?.enhanceSuccessPage?.(order);
}

function getSavedAddress() {
  try {
    return JSON.parse(localStorage.getItem(APP.addressKey) || '{}');
  } catch (error) {
    return {};
  }
}

function getStoredOrder() {
  try {
    return JSON.parse(localStorage.getItem(APP.orderKey) || 'null');
  } catch (error) {
    return null;
  }
}

function generateOrderId() {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `SJM-${year}-${random}`;
}

function getPaymentLabel(method) {
  return {
    card: 'Credit / Debit Card',
    upi: 'UPI',
    netbanking: 'Net Banking',
    cod: 'Cash on Delivery',
  }[method] || 'Online Payment';
}

function applyFilters() {
  const page = document.body.dataset.page;
  const text = APP.searchText;
  if (page === 'home') {
    if (APP.homeActiveTab !== 'all') {
      applyHomepageCategoryFilters();
      return;
    }

    document.querySelectorAll('#homeSections .product-card').forEach((card) => {
      const name = card.dataset.name || '';
      card.classList.toggle('hidden', Boolean(text) && !name.includes(text));
    });
    return;
  }

  document.querySelectorAll('#productGrid .product-card').forEach((card) => {
    const matchesFilter = APP.activeFilter === 'all' || (card.dataset.filter || '').split(' ').includes(APP.activeFilter);
    const matchesSearch = !text || (card.dataset.name || '').includes(text);
    card.classList.toggle('hidden', !(matchesFilter && matchesSearch));
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(APP.toastTimer);
  APP.toastTimer = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString('en-IN')}`;
}

function escapeAttr(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeText(value) {
  return escapeAttr(value).replaceAll('"', '&quot;');
}
