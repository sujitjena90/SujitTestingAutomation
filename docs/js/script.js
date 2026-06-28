const STORE_DATA = {"circleCategories": [{"name": "Fruits & Vegetables", "emoji": "🥬", "image": "https://cdn.pixabay.com/photo/2017/06/09/16/39/vegetables-2387402_640.jpg", "href": "vegetables.html"}, {"name": "Dairy & Bread", "emoji": "🥛", "image": "https://cdn.pixabay.com/photo/2017/03/19/18/22/milk-2157654_640.jpg", "href": "grocery.html"}, {"name": "Atta Rice & Dals", "emoji": "🌾", "image": "https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_640.jpg", "href": "grocery.html"}, {"name": "Snacks & Beverages", "emoji": "🥤", "image": "https://cdn.pixabay.com/photo/2016/10/22/15/32/chips-1761030_640.jpg", "href": "grocery.html"}, {"name": "Masala & Spices", "emoji": "🌶️", "image": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_640.jpg", "href": "grocery.html"}, {"name": "Breakfast Items", "emoji": "🥣", "image": "https://cdn.pixabay.com/photo/2015/11/19/10/38/tea-1050731_640.jpg", "href": "grocery.html"}, {"name": "Packaged Food", "emoji": "📦", "image": "https://cdn.pixabay.com/photo/2017/09/10/18/25/coffee-2736413_640.jpg", "href": "grocery.html"}, {"name": "Tea Coffee & More", "emoji": "☕", "image": "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_640.jpg", "href": "grocery.html"}, {"name": "Ice Cream & Frozen", "emoji": "🍨", "image": "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg", "href": "grocery.html"}, {"name": "Personal Care", "emoji": "🧴", "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/bread-1869383_640.jpg", "href": "index.html#discover"}], "products": {"grocery": [{"id": "g1", "name": "Aashirvaad Shudh Chakki Atta", "weight": "5 kg", "price": 278, "mrp": 325, "image": "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_640.jpg", "emoji": "🌾", "filters": ["atta-rice"]}, {"id": "g2", "name": "India Gate Classic Basmati Rice", "weight": "5 kg", "price": 429, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_640.jpg", "emoji": "🍚", "filters": ["atta-rice"]}, {"id": "g3", "name": "Fortune Rozana Rice", "weight": "1 kg", "price": 69, "mrp": 84, "image": "https://cdn.pixabay.com/photo/2015/05/30/01/18/rice-789399_640.jpg", "emoji": "🍚", "filters": ["atta-rice"]}, {"id": "g4", "name": "MP Sharbati Atta", "weight": "10 kg", "price": 459, "mrp": 540, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/bread-1869383_640.jpg", "emoji": "🌾", "filters": ["atta-rice"]}, {"id": "g5", "name": "Avalakki Thick Poha", "weight": "1 kg", "price": 74, "mrp": 92, "image": "https://cdn.pixabay.com/photo/2017/03/19/18/22/milk-2157654_640.jpg", "emoji": "🥣", "filters": ["atta-rice"]}, {"id": "g6", "name": "Premium Toor Dal", "weight": "1 kg", "price": 162, "mrp": 189, "image": "https://cdn.pixabay.com/photo/2016/12/26/17/28/biscuits-1932426_640.jpg", "emoji": "🫘", "filters": ["dal-pulses"]}, {"id": "g7", "name": "Unpolished Moong Dal", "weight": "1 kg", "price": 144, "mrp": 172, "image": "https://cdn.pixabay.com/photo/2015/09/02/13/24/cookie-917869_640.jpg", "emoji": "🫘", "filters": ["dal-pulses"]}, {"id": "g8", "name": "Masoor Dal", "weight": "1 kg", "price": 118, "mrp": 145, "image": "https://cdn.pixabay.com/photo/2015/11/19/10/38/tea-1050731_640.jpg", "emoji": "🫘", "filters": ["dal-pulses"]}, {"id": "g9", "name": "Chana Dal", "weight": "1 kg", "price": 96, "mrp": 118, "image": "https://cdn.pixabay.com/photo/2017/09/10/18/25/coffee-2736413_640.jpg", "emoji": "🫘", "filters": ["dal-pulses"]}, {"id": "g10", "name": "Jammu Rajma", "weight": "500 g", "price": 84, "mrp": 102, "image": "https://cdn.pixabay.com/photo/2016/10/22/15/32/chips-1761030_640.jpg", "emoji": "🫘", "filters": ["dal-pulses"]}, {"id": "g11", "name": "Fortune Sunflower Oil", "weight": "1 L", "price": 149, "mrp": 178, "image": "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_640.jpg", "emoji": "🫒", "filters": ["oil-ghee"]}, {"id": "g12", "name": "Saffola Gold Pro Healthy Oil", "weight": "1 L", "price": 189, "mrp": 225, "image": "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg", "emoji": "🫒", "filters": ["oil-ghee"]}, {"id": "g13", "name": "Dhara Kachi Ghani Mustard Oil", "weight": "1 L", "price": 165, "mrp": 194, "image": "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_640.jpg", "emoji": "🫒", "filters": ["oil-ghee"]}, {"id": "g14", "name": "Amul Pure Cow Ghee", "weight": "500 ml", "price": 318, "mrp": 355, "image": "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_640.jpg", "emoji": "🧈", "filters": ["oil-ghee"]}, {"id": "g15", "name": "Filtered Groundnut Oil", "weight": "1 L", "price": 212, "mrp": 248, "image": "https://cdn.pixabay.com/photo/2017/02/01/11/16/drink-2029511_640.jpg", "emoji": "🫒", "filters": ["oil-ghee"]}, {"id": "g16", "name": "Amul Taaza Milk", "weight": "500 ml", "price": 31, "mrp": 34, "image": "https://cdn.pixabay.com/photo/2016/06/28/17/32/sweet-1485549_640.jpg", "emoji": "🥛", "filters": ["dairy"]}, {"id": "g17", "name": "Mother Dairy Fresh Curd", "weight": "400 g", "price": 38, "mrp": 44, "image": "https://cdn.pixabay.com/photo/2017/04/04/18/07/ice-cream-2202561_640.jpg", "emoji": "🥣", "filters": ["dairy"]}, {"id": "g18", "name": "Britannia Brown Bread", "weight": "400 g", "price": 42, "mrp": 48, "image": "https://cdn.pixabay.com/photo/2016/11/29/07/16/honey-1868978_640.jpg", "emoji": "🍞", "filters": ["dairy"]}, {"id": "g19", "name": "Amul Salted Butter", "weight": "100 g", "price": 58, "mrp": 62, "image": "https://cdn.pixabay.com/photo/2015/09/02/12/25/butter-918332_640.jpg", "emoji": "🧈", "filters": ["dairy"]}, {"id": "g20", "name": "Fresh Malai Paneer", "weight": "200 g", "price": 89, "mrp": 102, "image": "https://cdn.pixabay.com/photo/2017/01/20/15/06/chocolate-1995056_640.jpg", "emoji": "🧀", "filters": ["dairy"]}, {"id": "g21", "name": "Everest Garam Masala", "weight": "100 g", "price": 72, "mrp": 90, "image": "https://cdn.pixabay.com/photo/2016/11/29/04/00/bread-1867208_640.jpg", "emoji": "🌶️", "filters": ["masala"]}, {"id": "g22", "name": "Kashmiri Red Chilli Powder", "weight": "100 g", "price": 54, "mrp": 68, "image": "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_640.jpg", "emoji": "🌶️", "filters": ["masala"]}, {"id": "g23", "name": "Lakadong Turmeric Powder", "weight": "100 g", "price": 48, "mrp": 59, "image": "https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg", "emoji": "🧂", "filters": ["masala"]}, {"id": "g24", "name": "Roasted Coriander Powder", "weight": "100 g", "price": 34, "mrp": 42, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/jam-1869385_640.jpg", "emoji": "🧂", "filters": ["masala"]}, {"id": "g25", "name": "Premium Jeera Whole", "weight": "100 g", "price": 66, "mrp": 79, "image": "https://cdn.pixabay.com/photo/2016/06/01/06/26/olive-oil-1428348_640.jpg", "emoji": "🧂", "filters": ["masala"]}, {"id": "g26", "name": "Tata Tea Gold", "weight": "500 g", "price": 282, "mrp": 340, "image": "https://cdn.pixabay.com/photo/2015/09/02/12/25/oats-918337_640.jpg", "emoji": "🍵", "filters": ["beverages"]}, {"id": "g27", "name": "Nescafe Classic Coffee", "weight": "100 g", "price": 349, "mrp": 390, "image": "https://cdn.pixabay.com/photo/2017/02/15/10/57/noodles-2068669_640.jpg", "emoji": "☕", "filters": ["beverages"]}, {"id": "g28", "name": "Tropicana Orange Delight", "weight": "1 L", "price": 109, "mrp": 125, "image": "https://cdn.pixabay.com/photo/2016/11/18/15/31/almonds-1835672_640.jpg", "emoji": "🥤", "filters": ["beverages"]}, {"id": "g29", "name": "Minute Maid Apple Juice", "weight": "1 L", "price": 102, "mrp": 118, "image": "https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_640.jpg", "emoji": "🧃", "filters": ["beverages"]}, {"id": "g30", "name": "Paper Boat Aamras", "weight": "600 ml", "price": 74, "mrp": 89, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/cheese-1869387_640.jpg", "emoji": "🥭", "filters": ["beverages"]}, {"id": "g31", "name": "Lay's Magic Masala Chips", "weight": "52 g", "price": 20, "mrp": 22, "image": "https://cdn.pixabay.com/photo/2015/09/02/12/25/corn-flakes-918340_640.jpg", "emoji": "🥔", "filters": ["snacks"]}, {"id": "g32", "name": "Kurkure Masala Munch", "weight": "90 g", "price": 20, "mrp": 25, "image": "https://cdn.pixabay.com/photo/2016/11/29/09/00/dhal-1868681_640.jpg", "emoji": "🍿", "filters": ["snacks"]}, {"id": "g33", "name": "Haldiram Aloo Bhujia", "weight": "200 g", "price": 62, "mrp": 75, "image": "https://cdn.pixabay.com/photo/2017/01/20/15/06/spices-1995061_640.jpg", "emoji": "🍟", "filters": ["snacks"]}, {"id": "g34", "name": "Bingo Mad Angles", "weight": "72 g", "price": 35, "mrp": 40, "image": "https://cdn.pixabay.com/photo/2016/06/01/06/26/sugar-1428347_640.jpg", "emoji": "🔺", "filters": ["snacks"]}, {"id": "g35", "name": "Too Yumm Multigrain Chips", "weight": "75 g", "price": 42, "mrp": 48, "image": "https://cdn.pixabay.com/photo/2017/09/16/19/21/juice-2756471_640.jpg", "emoji": "🥨", "filters": ["snacks"]}, {"id": "g36", "name": "Kellogg's Corn Flakes", "weight": "475 g", "price": 178, "mrp": 214, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/salt-1869388_640.jpg", "emoji": "🥣", "filters": ["breakfast"]}, {"id": "g37", "name": "Quaker Oats", "weight": "1 kg", "price": 188, "mrp": 225, "image": "https://cdn.pixabay.com/photo/2017/01/14/12/59/margherita-1979385_640.jpg", "emoji": "🥣", "filters": ["breakfast"]}, {"id": "g38", "name": "MTR Rava Idli Mix", "weight": "500 g", "price": 92, "mrp": 108, "image": "https://cdn.pixabay.com/photo/2016/12/26/17/28/popcorn-1932435_640.jpg", "emoji": "🍽️", "filters": ["breakfast"]}, {"id": "g39", "name": "Nutella Hazelnut Spread", "weight": "350 g", "price": 299, "mrp": 340, "image": "https://cdn.pixabay.com/photo/2015/04/20/13/30/pasta-731295_640.jpg", "emoji": "🍫", "filters": ["breakfast"]}, {"id": "g40", "name": "Kissan Mixed Fruit Jam", "weight": "500 g", "price": 142, "mrp": 169, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/ketchup-1869386_640.jpg", "emoji": "🍓", "filters": ["breakfast"]}], "vegetables": [{"id": "v1", "name": "Tomato (Tamatar)", "weight": "1 kg", "price": 38, "mrp": 50, "image": "https://cdn.pixabay.com/photo/2017/10/09/19/29/tomatoes-2834349_640.jpg", "emoji": "🍅", "filters": ["vegetables"]}, {"id": "v2", "name": "Potato (Aloo)", "weight": "1 kg", "price": 29, "mrp": 36, "image": "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_640.jpg", "emoji": "🥔", "filters": ["vegetables"]}, {"id": "v3", "name": "Onion (Pyaaz)", "weight": "1 kg", "price": 34, "mrp": 42, "image": "https://cdn.pixabay.com/photo/2014/07/05/03/23/potatoes-383327_640.jpg", "emoji": "🧅", "filters": ["vegetables"]}, {"id": "v4", "name": "Cauliflower (Phool Gobhi)", "weight": "1 pc", "price": 39, "mrp": 48, "image": "https://cdn.pixabay.com/photo/2016/09/10/17/47/onions-1659686_640.jpg", "emoji": "🥦", "filters": ["vegetables"]}, {"id": "v5", "name": "Brinjal (Baingan)", "weight": "500 g", "price": 28, "mrp": 35, "image": "https://cdn.pixabay.com/photo/2015/06/19/20/13/carrots-814437_640.jpg", "emoji": "🍆", "filters": ["vegetables"]}, {"id": "v6", "name": "Ladies Finger (Bhindi)", "weight": "500 g", "price": 42, "mrp": 52, "image": "https://cdn.pixabay.com/photo/2016/01/03/00/43/bananas-1118129_640.jpg", "emoji": "🫛", "filters": ["vegetables"]}, {"id": "v7", "name": "Bottle Gourd (Lauki)", "weight": "1 pc", "price": 32, "mrp": 39, "image": "https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1872997_640.jpg", "emoji": "🥒", "filters": ["vegetables"]}, {"id": "v8", "name": "Ridge Gourd (Turai)", "weight": "500 g", "price": 36, "mrp": 44, "image": "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_640.jpg", "emoji": "🥒", "filters": ["vegetables"]}, {"id": "v9", "name": "Green Peas (Matar)", "weight": "500 g", "price": 54, "mrp": 68, "image": "https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_640.jpg", "emoji": "🫛", "filters": ["vegetables"]}, {"id": "v10", "name": "Carrot (Gajar)", "weight": "500 g", "price": 31, "mrp": 40, "image": "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_640.jpg", "emoji": "🥕", "filters": ["vegetables"]}, {"id": "v11", "name": "Spinach (Palak)", "weight": "1 bunch", "price": 18, "mrp": 24, "image": "https://cdn.pixabay.com/photo/2016/02/23/10/06/mango-1218129_640.jpg", "emoji": "🥬", "filters": ["leafy-greens"]}, {"id": "v12", "name": "Coriander (Dhaniya)", "weight": "1 bunch", "price": 12, "mrp": 16, "image": "https://cdn.pixabay.com/photo/2015/12/09/17/11/watermelon-1084632_640.jpg", "emoji": "🌿", "filters": ["leafy-greens"]}, {"id": "v13", "name": "Mint (Pudina)", "weight": "1 bunch", "price": 14, "mrp": 18, "image": "https://cdn.pixabay.com/photo/2016/04/01/09/51/grapes-1299696_640.jpg", "emoji": "🌿", "filters": ["leafy-greens"]}, {"id": "v14", "name": "Fenugreek (Methi)", "weight": "1 bunch", "price": 16, "mrp": 20, "image": "https://cdn.pixabay.com/photo/2017/07/11/19/29/spinach-2494710_640.jpg", "emoji": "🌿", "filters": ["leafy-greens"]}, {"id": "v15", "name": "Lettuce", "weight": "1 pc", "price": 42, "mrp": 52, "image": "https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_640.jpg", "emoji": "🥬", "filters": ["leafy-greens"]}, {"id": "v16", "name": "Spring Onion (Hara Pyaz)", "weight": "1 bunch", "price": 24, "mrp": 30, "image": "https://cdn.pixabay.com/photo/2016/03/05/19/02/cauliflower-1238253_640.jpg", "emoji": "🧅", "filters": ["leafy-greens"]}, {"id": "v17", "name": "Curry Leaves (Kadi Patta)", "weight": "100 g", "price": 16, "mrp": 20, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/mushrooms-1534590_640.jpg", "emoji": "🌿", "filters": ["leafy-greens"]}, {"id": "v18", "name": "Amaranthus (Chaulai)", "weight": "1 bunch", "price": 18, "mrp": 22, "image": "https://cdn.pixabay.com/photo/2017/06/29/20/09/cabbage-2456842_640.jpg", "emoji": "🥬", "filters": ["leafy-greens"]}, {"id": "v19", "name": "Dill (Suva Bhaji)", "weight": "1 bunch", "price": 22, "mrp": 28, "image": "https://cdn.pixabay.com/photo/2016/09/10/17/47/corn-1659679_640.jpg", "emoji": "🌿", "filters": ["leafy-greens"]}, {"id": "v20", "name": "Celery", "weight": "200 g", "price": 46, "mrp": 56, "image": "https://cdn.pixabay.com/photo/2015/02/14/17/29/ginger-636371_640.jpg", "emoji": "🥬", "filters": ["leafy-greens"]}, {"id": "v21", "name": "Banana (Kela)", "weight": "6 pcs", "price": 42, "mrp": 50, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/okra-1534674_640.jpg", "emoji": "🍌", "filters": ["fruits"]}, {"id": "v22", "name": "Apple (Seb)", "weight": "4 pcs", "price": 129, "mrp": 149, "image": "https://cdn.pixabay.com/photo/2017/06/09/16/39/lemon-2387344_640.jpg", "emoji": "🍎", "filters": ["fruits"]}, {"id": "v23", "name": "Orange (Santra)", "weight": "4 pcs", "price": 84, "mrp": 98, "image": "https://cdn.pixabay.com/photo/2015/12/09/14/51/pomegranate-1084631_640.jpg", "emoji": "🍊", "filters": ["fruits"]}, {"id": "v24", "name": "Pomegranate (Anar)", "weight": "2 pcs", "price": 98, "mrp": 118, "image": "https://cdn.pixabay.com/photo/2016/02/23/10/08/pineapple-1218166_640.jpg", "emoji": "🍎", "filters": ["fruits"]}, {"id": "v25", "name": "Papaya", "weight": "1 pc", "price": 58, "mrp": 70, "image": "https://cdn.pixabay.com/photo/2015/02/14/17/29/garlic-636374_640.jpg", "emoji": "🍈", "filters": ["fruits"]}, {"id": "v26", "name": "Watermelon", "weight": "1 pc", "price": 49, "mrp": 60, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/papaya-1534682_640.jpg", "emoji": "🍉", "filters": ["fruits"]}, {"id": "v27", "name": "Guava (Amrood)", "weight": "500 g", "price": 44, "mrp": 54, "image": "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-2305192_640.jpg", "emoji": "🍏", "filters": ["fruits"]}, {"id": "v28", "name": "Grapes (Angoor)", "weight": "500 g", "price": 78, "mrp": 92, "image": "https://cdn.pixabay.com/photo/2015/06/19/20/13/beet-814440_640.jpg", "emoji": "🍇", "filters": ["fruits"]}, {"id": "v29", "name": "Mango (Aam)", "weight": "1 kg", "price": 158, "mrp": 186, "image": "https://cdn.pixabay.com/photo/2017/01/20/15/06/kiwi-1995044_640.jpg", "emoji": "🥭", "filters": ["fruits"]}, {"id": "v30", "name": "Pineapple (Ananas)", "weight": "1 pc", "price": 76, "mrp": 92, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/avocado-1534678_640.jpg", "emoji": "🍍", "filters": ["fruits"]}, {"id": "v31", "name": "Avocado", "weight": "2 pcs", "price": 169, "mrp": 198, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/cherry-1534671_640.jpg", "emoji": "🥑", "filters": ["exotic-fruits"]}, {"id": "v32", "name": "Blueberries", "weight": "125 g", "price": 199, "mrp": 229, "image": "https://cdn.pixabay.com/photo/2017/02/05/12/31/leek-2039497_640.jpg", "emoji": "🫐", "filters": ["exotic-fruits"]}, {"id": "v33", "name": "Dragon Fruit", "weight": "1 pc", "price": 145, "mrp": 168, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/celery-1534676_640.jpg", "emoji": "🐉", "filters": ["exotic-fruits"]}, {"id": "v34", "name": "Kiwi", "weight": "3 pcs", "price": 115, "mrp": 132, "image": "https://cdn.pixabay.com/photo/2015/06/19/20/13/radish-814439_640.jpg", "emoji": "🥝", "filters": ["exotic-fruits"]}, {"id": "v35", "name": "Imported Pear", "weight": "4 pcs", "price": 149, "mrp": 176, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/pumpkin-1534672_640.jpg", "emoji": "🍐", "filters": ["exotic-fruits"]}, {"id": "v36", "name": "Plum Premium", "weight": "250 g", "price": 94, "mrp": 110, "image": "https://cdn.pixabay.com/photo/2016/08/01/17/55/pear-1561850_640.jpg", "emoji": "🟣", "filters": ["exotic-fruits"]}, {"id": "v37", "name": "Cherry Pack", "weight": "200 g", "price": 189, "mrp": 219, "image": "https://cdn.pixabay.com/photo/2017/01/20/15/06/coconut-1995049_640.jpg", "emoji": "🍒", "filters": ["exotic-fruits"]}, {"id": "v38", "name": "Broccoli", "weight": "1 pc", "price": 62, "mrp": 74, "image": "https://cdn.pixabay.com/photo/2016/08/11/08/43/zucchini-1585279_640.jpg", "emoji": "🥦", "filters": ["exotic-fruits"]}, {"id": "v39", "name": "Zucchini", "weight": "500 g", "price": 88, "mrp": 104, "image": "https://cdn.pixabay.com/photo/2016/07/22/09/59/eggplant-1534680_640.jpg", "emoji": "🥒", "filters": ["exotic-fruits"]}, {"id": "v40", "name": "Bell Peppers Trio", "weight": "500 g", "price": 132, "mrp": 156, "image": "https://cdn.pixabay.com/photo/2015/02/14/17/29/chili-636372_640.jpg", "emoji": "🫑", "filters": ["exotic-fruits"]}], "fashion": [{"id": "f1", "name": "Men's Round Neck T-Shirt (Cotton)", "weight": "M/L/XL", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_640.jpg", "emoji": "👕", "filters": ["mens-wear"]}, {"id": "f2", "name": "Men's Polo T-Shirt", "weight": "M/L/XL", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/11/23/06/57/jeans-1852548_640.jpg", "emoji": "👕", "filters": ["mens-wear"]}, {"id": "f3", "name": "Men's Casual Shirt (Checked)", "weight": "M/L/XL", "price": 599, "mrp": 1299, "image": "https://cdn.pixabay.com/photo/2014/08/26/21/48/shirts-428600_640.jpg", "emoji": "👔", "filters": ["mens-wear"]}, {"id": "f4", "name": "Men's Formal Shirt (White)", "weight": "38/40/42", "price": 699, "mrp": 1499, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg", "emoji": "👔", "filters": ["mens-wear"]}, {"id": "f5", "name": "Men's Slim Fit Jeans (Blue)", "weight": "30/32/34", "price": 799, "mrp": 1699, "image": "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_640.jpg", "emoji": "👖", "filters": ["mens-wear"]}, {"id": "f6", "name": "Men's Jogger Pants", "weight": "M/L/XL", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/03/27/19/43/suit-1283385_640.jpg", "emoji": "👖", "filters": ["mens-wear"]}, {"id": "f7", "name": "Men's Shorts (Cotton)", "weight": "M/L/XL", "price": 349, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1853847_640.jpg", "emoji": "🩳", "filters": ["mens-wear"]}, {"id": "f8", "name": "Men's Track Pants", "weight": "M/L/XL", "price": 449, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_640.jpg", "emoji": "👖", "filters": ["mens-wear"]}, {"id": "f9", "name": "Men's Hoodie (Winter)", "weight": "M/L/XL", "price": 799, "mrp": 1599, "image": "https://cdn.pixabay.com/photo/2016/01/26/17/24/socks-1162873_640.jpg", "emoji": "🧥", "filters": ["mens-wear"]}, {"id": "f10", "name": "Men's Jacket (Bomber)", "weight": "M/L/XL", "price": 999, "mrp": 2199, "image": "https://cdn.pixabay.com/photo/2016/06/09/06/00/sunglasses-1445738_640.jpg", "emoji": "🧥", "filters": ["mens-wear"]}, {"id": "f11", "name": "Men's Kurta (Ethnic)", "weight": "M/L/XL", "price": 599, "mrp": 1299, "image": "https://cdn.pixabay.com/photo/2014/08/26/21/48/blazer-428571_640.jpg", "emoji": "👘", "filters": ["mens-wear"]}, {"id": "f12", "name": "Men's Blazer (Formal)", "weight": "38/40/42", "price": 1999, "mrp": 3999, "image": "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_640.jpg", "emoji": "🤵", "filters": ["mens-wear"]}, {"id": "f13", "name": "Women's Kurti (Printed)", "weight": "S/M/L", "price": 449, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_640.jpg", "emoji": "👗", "filters": ["womens-wear"]}, {"id": "f14", "name": "Women's Saree (Silk)", "weight": "Free Size", "price": 1299, "mrp": 2999, "image": "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_640.jpg", "emoji": "🥻", "filters": ["womens-wear"]}, {"id": "f15", "name": "Women's Salwar Suit Set", "weight": "S/M/L/XL", "price": 899, "mrp": 1899, "image": "https://cdn.pixabay.com/photo/2015/01/15/13/16/hat-600462_640.jpg", "emoji": "👗", "filters": ["womens-wear"]}, {"id": "f16", "name": "Women's Western Dress", "weight": "S/M/L", "price": 699, "mrp": 1499, "image": "https://cdn.pixabay.com/photo/2016/01/02/02/03/woman-1117480_640.jpg", "emoji": "👗", "filters": ["womens-wear"]}, {"id": "f17", "name": "Women's Palazzo Pants", "weight": "S/M/L/XL", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_640.jpg", "emoji": "👖", "filters": ["womens-wear"]}, {"id": "f18", "name": "Women's Leggings (Cotton)", "weight": "S/M/L/XL", "price": 249, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothing-1839935_640.jpg", "emoji": "👖", "filters": ["womens-wear"]}, {"id": "f19", "name": "Women's T-Shirt (Casual)", "weight": "S/M/L", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_640.jpg", "emoji": "👚", "filters": ["womens-wear"]}, {"id": "f20", "name": "Women's Crop Top", "weight": "S/M/L", "price": 349, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/11/19/15/40/baby-1839564_640.jpg", "emoji": "👚", "filters": ["womens-wear"]}, {"id": "f21", "name": "Women's Jeans (Skinny)", "weight": "26/28/30/32", "price": 699, "mrp": 1399, "image": "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_640.jpg", "emoji": "👖", "filters": ["womens-wear"]}, {"id": "f22", "name": "Women's Dupatta (Chiffon)", "weight": "Free Size", "price": 199, "mrp": 399, "image": "https://cdn.pixabay.com/photo/2015/03/26/09/48/wardrobe-690360_640.jpg", "emoji": "🧣", "filters": ["womens-wear"]}, {"id": "f23", "name": "Women's Cardigan (Winter)", "weight": "S/M/L", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/sneakers-1840727_640.jpg", "emoji": "🧥", "filters": ["womens-wear"]}, {"id": "f24", "name": "Women's Nightwear Set", "weight": "S/M/L/XL", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/jacket-1850035_640.jpg", "emoji": "👗", "filters": ["womens-wear"]}, {"id": "f25", "name": "Men's Cotton Brief (3 Pack)", "weight": "S/M/L/XL", "price": 399, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/11/19/15/40/sweater-1839936_640.jpg", "emoji": "🩲", "filters": ["mens-innerwear"]}, {"id": "f26", "name": "Men's Boxer Shorts (Pack 3)", "weight": "M/L/XL", "price": 499, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/skirt-1850029_640.jpg", "emoji": "🩲", "filters": ["mens-innerwear"]}, {"id": "f27", "name": "Men's Vest (Pack 3)", "weight": "S/M/L/XL", "price": 349, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg", "emoji": "🦺", "filters": ["mens-innerwear"]}, {"id": "f28", "name": "Men's Thermal Set (Winter)", "weight": "M/L/XL", "price": 699, "mrp": 1299, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/scarf-1840726_640.jpg", "emoji": "🧥", "filters": ["mens-innerwear"]}, {"id": "f29", "name": "Men's Trunk (Pack 3)", "weight": "S/M/L/XL", "price": 449, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/belt-1850027_640.jpg", "emoji": "🩲", "filters": ["mens-innerwear"]}, {"id": "f30", "name": "Men's Socks (Pack 5)", "weight": "Free Size", "price": 249, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2016/03/27/19/43/tie-1283384_640.jpg", "emoji": "🧦", "filters": ["mens-innerwear"]}, {"id": "f31", "name": "Men's Sleeveless Vest (Gym)", "weight": "M/L/XL", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/11/29/09/38/gloves-1868751_640.jpg", "emoji": "🦺", "filters": ["mens-innerwear"]}, {"id": "f32", "name": "Men's Bermuda Shorts (Lounge)", "weight": "M/L/XL", "price": 349, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/watch-1850033_640.jpg", "emoji": "🩳", "filters": ["mens-innerwear"]}, {"id": "f33", "name": "Women's Bra (T-Shirt, Pack 2)", "weight": "32/34/36/38", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/06/03/17/35/sandals-1433923_640.jpg", "emoji": "👙", "filters": ["womens-innerwear"]}, {"id": "f34", "name": "Women's Panty Set (Pack 5)", "weight": "S/M/L/XL", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/wallet-1840728_640.jpg", "emoji": "👙", "filters": ["womens-innerwear"]}, {"id": "f35", "name": "Women's Sports Bra", "weight": "S/M/L", "price": 449, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2014/08/26/21/48/kurta-428599_640.jpg", "emoji": "👙", "filters": ["womens-innerwear"]}, {"id": "f36", "name": "Women's Camisole (Pack 2)", "weight": "S/M/L/XL", "price": 349, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/11/23/06/57/leggings-1852549_640.jpg", "emoji": "👚", "filters": ["womens-innerwear"]}, {"id": "f37", "name": "Women's Thermal Set", "weight": "S/M/L", "price": 699, "mrp": 1399, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/necklace-1850031_640.jpg", "emoji": "🧥", "filters": ["womens-innerwear"]}, {"id": "f38", "name": "Women's Socks (Pack 5)", "weight": "Free Size", "price": 199, "mrp": 399, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/08/earrings-1850083_640.jpg", "emoji": "🧦", "filters": ["womens-innerwear"]}, {"id": "f39", "name": "Women's Shapewear", "weight": "S/M/L/XL", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/cap-1840725_640.jpg", "emoji": "👗", "filters": ["womens-innerwear"]}, {"id": "f40", "name": "Women's Slip/Petticoat", "weight": "Free Size", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/06/09/06/00/bracelet-1445739_640.jpg", "emoji": "👗", "filters": ["womens-innerwear"]}, {"id": "f41", "name": "Men's Sports Shoes", "weight": "7/8/9/10", "price": 999, "mrp": 1999, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/ring-1850032_640.jpg", "emoji": "👟", "filters": ["mens-footwear"]}, {"id": "f42", "name": "Men's Casual Sneakers", "weight": "7/8/9/10", "price": 799, "mrp": 1599, "image": "https://cdn.pixabay.com/photo/2016/11/23/18/12/clutch-1853848_640.jpg", "emoji": "👟", "filters": ["mens-footwear"]}, {"id": "f43", "name": "Men's Formal Shoes (Black)", "weight": "7/8/9/10", "price": 1299, "mrp": 2599, "image": "https://cdn.pixabay.com/photo/2016/11/29/09/38/stole-1868752_640.jpg", "emoji": "👞", "filters": ["mens-footwear"]}, {"id": "f44", "name": "Men's Sandals", "weight": "7/8/9/10", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/06/03/17/35/heels-1433924_640.jpg", "emoji": "🩴", "filters": ["mens-footwear"]}, {"id": "f45", "name": "Men's Flip Flops", "weight": "7/8/9/10", "price": 199, "mrp": 399, "image": "https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_640.jpg", "emoji": "🩴", "filters": ["mens-footwear"]}, {"id": "f46", "name": "Men's Loafers", "weight": "7/8/9/10", "price": 899, "mrp": 1799, "image": "https://cdn.pixabay.com/photo/2016/11/23/06/57/jeans-1852548_640.jpg", "emoji": "👞", "filters": ["mens-footwear"]}, {"id": "f47", "name": "Men's Boots (Ankle)", "weight": "7/8/9/10", "price": 1499, "mrp": 2999, "image": "https://cdn.pixabay.com/photo/2014/08/26/21/48/shirts-428600_640.jpg", "emoji": "🥾", "filters": ["mens-footwear"]}, {"id": "f48", "name": "Men's Slippers (Indoor)", "weight": "7/8/9/10", "price": 249, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg", "emoji": "🩴", "filters": ["mens-footwear"]}, {"id": "f49", "name": "Women's Heels (Stiletto)", "weight": "5/6/7/8", "price": 999, "mrp": 1999, "image": "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_640.jpg", "emoji": "👠", "filters": ["womens-footwear"]}, {"id": "f50", "name": "Women's Flats (Bellies)", "weight": "5/6/7/8", "price": 449, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2016/03/27/19/43/suit-1283385_640.jpg", "emoji": "🥿", "filters": ["womens-footwear"]}, {"id": "f51", "name": "Women's Sandals (Wedge)", "weight": "5/6/7/8", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1853847_640.jpg", "emoji": "👡", "filters": ["womens-footwear"]}, {"id": "f52", "name": "Women's Sports Shoes", "weight": "5/6/7/8", "price": 899, "mrp": 1799, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_640.jpg", "emoji": "👟", "filters": ["womens-footwear"]}, {"id": "f53", "name": "Women's Slip-Ons", "weight": "5/6/7/8", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/01/26/17/24/socks-1162873_640.jpg", "emoji": "🥿", "filters": ["womens-footwear"]}, {"id": "f54", "name": "Women's Kolhapuri Chappals", "weight": "5/6/7/8", "price": 349, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/06/09/06/00/sunglasses-1445738_640.jpg", "emoji": "🩴", "filters": ["womens-footwear"]}, {"id": "f55", "name": "Women's Boots (Ankle)", "weight": "5/6/7/8", "price": 1299, "mrp": 2599, "image": "https://cdn.pixabay.com/photo/2014/08/26/21/48/blazer-428571_640.jpg", "emoji": "🥾", "filters": ["womens-footwear"]}, {"id": "f56", "name": "Women's Flip Flops", "weight": "5/6/7/8", "price": 149, "mrp": 299, "image": "https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_640.jpg", "emoji": "🩴", "filters": ["womens-footwear"]}, {"id": "f57", "name": "Boys T-Shirt (Cartoon Print)", "weight": "2-4Y/5-7Y/8-10Y", "price": 249, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_640.jpg", "emoji": "👕", "filters": ["kids-wear"]}, {"id": "f58", "name": "Girls Frock (Party Wear)", "weight": "2-4Y/5-7Y/8-10Y", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_640.jpg", "emoji": "👗", "filters": ["kids-wear"]}, {"id": "f59", "name": "Boys Shorts & T-Shirt Set", "weight": "2-4Y/5-7Y/8-10Y", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2015/01/15/13/16/hat-600462_640.jpg", "emoji": "👕", "filters": ["kids-wear"]}, {"id": "f60", "name": "Girls Leggings (Pack 3)", "weight": "2-4Y/5-7Y/8-10Y", "price": 349, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/01/02/02/03/woman-1117480_640.jpg", "emoji": "👖", "filters": ["kids-wear"]}, {"id": "f61", "name": "Boys Jeans (Slim)", "weight": "4-6Y/7-9Y/10-12Y", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_640.jpg", "emoji": "👖", "filters": ["kids-wear"]}, {"id": "f62", "name": "Girls Kurta Set", "weight": "4-6Y/7-9Y/10-12Y", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothing-1839935_640.jpg", "emoji": "👗", "filters": ["kids-wear"]}, {"id": "f63", "name": "Kids School Uniform Set", "weight": "4-6Y/7-9Y/10-12Y", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_640.jpg", "emoji": "👔", "filters": ["kids-wear"]}, {"id": "f64", "name": "Baby Romper (0-2Y)", "weight": "0-6M/6-12M/1-2Y", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/11/19/15/40/baby-1839564_640.jpg", "emoji": "👶", "filters": ["kids-wear"]}, {"id": "f65", "name": "Kids Sports Shoes", "weight": "1-3Y/4-6Y/7-10Y", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_640.jpg", "emoji": "👟", "filters": ["kids-wear"]}, {"id": "f66", "name": "Kids Winter Jacket", "weight": "2-4Y/5-7Y/8-10Y", "price": 699, "mrp": 1399, "image": "https://cdn.pixabay.com/photo/2015/03/26/09/48/wardrobe-690360_640.jpg", "emoji": "🧥", "filters": ["kids-wear"]}, {"id": "f67", "name": "Women's Tote Bag (Leather)", "weight": "One Size", "price": 899, "mrp": 1799, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/sneakers-1840727_640.jpg", "emoji": "👜", "filters": ["handbags"]}, {"id": "f68", "name": "Women's Crossbody Sling", "weight": "One Size", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/jacket-1850035_640.jpg", "emoji": "👜", "filters": ["handbags"]}, {"id": "f69", "name": "Women's Clutch (Party)", "weight": "One Size", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2016/11/19/15/40/sweater-1839936_640.jpg", "emoji": "👛", "filters": ["handbags"]}, {"id": "f70", "name": "Men's Wallet (Leather)", "weight": "One Size", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/skirt-1850029_640.jpg", "emoji": "👛", "filters": ["handbags"]}, {"id": "f71", "name": "Backpack (Laptop, 15.6\")", "weight": "One Size", "price": 799, "mrp": 1599, "image": "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg", "emoji": "🎒", "filters": ["handbags"]}, {"id": "f72", "name": "Women's Handbag (Office)", "weight": "One Size", "price": 1099, "mrp": 2199, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/scarf-1840726_640.jpg", "emoji": "👜", "filters": ["handbags"]}, {"id": "f73", "name": "Sunglasses (Aviator, Unisex)", "weight": "Free Size", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/belt-1850027_640.jpg", "emoji": "🕶️", "filters": ["eyewear"]}, {"id": "f74", "name": "Blue Light Blocking Glasses", "weight": "Free Size", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/03/27/19/43/tie-1283384_640.jpg", "emoji": "👓", "filters": ["eyewear"]}, {"id": "f75", "name": "Sunglasses (Wayfarer)", "weight": "Free Size", "price": 599, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2016/11/29/09/38/gloves-1868751_640.jpg", "emoji": "🕶️", "filters": ["eyewear"]}, {"id": "f76", "name": "Sports Sunglasses (Polarized)", "weight": "Free Size", "price": 799, "mrp": 1599, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/watch-1850033_640.jpg", "emoji": "🕶️", "filters": ["eyewear"]}, {"id": "f77", "name": "Reading Glasses (+1.5)", "weight": "Free Size", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/06/03/17/35/sandals-1433923_640.jpg", "emoji": "👓", "filters": ["eyewear"]}, {"id": "f78", "name": "Cat Eye Sunglasses (Women)", "weight": "Free Size", "price": 449, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/wallet-1840728_640.jpg", "emoji": "🕶️", "filters": ["eyewear"]}, {"id": "f79", "name": "Gold Plated Necklace Set", "weight": "One Size", "price": 599, "mrp": 1299, "image": "https://cdn.pixabay.com/photo/2014/08/26/21/48/kurta-428599_640.jpg", "emoji": "📿", "filters": ["jewellery"]}, {"id": "f80", "name": "Oxidized Silver Jhumka", "weight": "One Size", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/11/23/06/57/leggings-1852549_640.jpg", "emoji": "��", "filters": ["jewellery"]}, {"id": "f81", "name": "Bangles Set (Pack 6)", "weight": "2.4/2.6/2.8", "price": 399, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/necklace-1850031_640.jpg", "emoji": "💍", "filters": ["jewellery"]}, {"id": "f82", "name": "Stud Earrings (Crystal)", "weight": "One Size", "price": 199, "mrp": 399, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/08/earrings-1850083_640.jpg", "emoji": "💎", "filters": ["jewellery"]}, {"id": "f83", "name": "Mangalsutra (Daily Wear)", "weight": "One Size", "price": 499, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/11/19/18/06/cap-1840725_640.jpg", "emoji": "📿", "filters": ["jewellery"]}, {"id": "f84", "name": "Men's Chain (Steel)", "weight": "22 inch", "price": 349, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2016/06/09/06/00/bracelet-1445739_640.jpg", "emoji": "⛓️", "filters": ["jewellery"]}, {"id": "f85", "name": "Finger Ring Set (Pack 5)", "weight": "Adjustable", "price": 249, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/ring-1850032_640.jpg", "emoji": "💍", "filters": ["jewellery"]}, {"id": "f86", "name": "Anklet (Silver Plated)", "weight": "Free Size", "price": 199, "mrp": 399, "image": "https://cdn.pixabay.com/photo/2016/11/23/18/12/clutch-1853848_640.jpg", "emoji": "💎", "filters": ["jewellery"]}], "electronics": [{"id": "elec-iphone-15", "page": "electronics", "name": "iPhone 15", "weight": "128GB", "price": 79999, "mrp": 82900, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/13/iphone-1869510_640.jpg", "emoji": "📱", "filters": ["mobiles"]}, {"id": "elec-galaxy-s24", "page": "electronics", "name": "Samsung Galaxy S24", "weight": "256GB", "price": 74999, "mrp": 79999, "image": "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg", "emoji": "📱", "filters": ["mobiles"]}, {"id": "elec-oneplus-12", "page": "electronics", "name": "OnePlus 12", "weight": "256GB", "price": 64999, "mrp": 69999, "image": "https://cdn.pixabay.com/photo/2016/11/19/22/52/headphones-1841528_640.jpg", "emoji": "📱", "filters": ["mobiles"]}, {"id": "elec-redmi-note-13-pro", "page": "electronics", "name": "Redmi Note 13 Pro", "weight": "256GB", "price": 24999, "mrp": 27999, "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_640.jpg", "emoji": "📱", "filters": ["mobiles"]}, {"id": "elec-macbook-air-m2", "page": "electronics", "name": "MacBook Air M2", "weight": "13.6-inch, 8GB/256GB", "price": 114900, "mrp": 119900, "image": "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_640.jpg", "emoji": "💻", "filters": ["laptops"]}, {"id": "elec-hp-pavilion", "page": "electronics", "name": "HP Pavilion Laptop", "weight": "15.6-inch, 16GB/512GB", "price": 54999, "mrp": 62999, "image": "https://cdn.pixabay.com/photo/2016/12/09/11/33/camera-1894197_640.jpg", "emoji": "💻", "filters": ["laptops"]}, {"id": "elec-dell-inspiron-15", "page": "electronics", "name": "Dell Inspiron 15", "weight": "15.6-inch, 8GB/512GB", "price": 49999, "mrp": 55999, "image": "https://cdn.pixabay.com/photo/2018/01/11/21/27/laptop-3076957_640.jpg", "emoji": "💻", "filters": ["laptops"]}, {"id": "elec-sony-xm5", "page": "electronics", "name": "Sony WH-1000XM5", "weight": "Wireless Noise Cancelling", "price": 29990, "mrp": 34990, "image": "https://cdn.pixabay.com/photo/2016/11/29/09/00/dj-1868559_640.jpg", "emoji": "🎧", "filters": ["headphones"]}, {"id": "elec-boat-rockerz-450", "page": "electronics", "name": "boAt Rockerz 450", "weight": "Bluetooth On-Ear", "price": 1299, "mrp": 2990, "image": "https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_640.jpg", "emoji": "🎧", "filters": ["headphones"]}, {"id": "elec-jbl-flip-6", "page": "electronics", "name": "JBL Flip 6", "weight": "Portable Bluetooth Speaker", "price": 9999, "mrp": 12999, "image": "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_640.jpg", "emoji": "🔊", "filters": ["speakers"]}, {"id": "elec-airpods-pro", "page": "electronics", "name": "Apple AirPods Pro", "weight": "2nd Gen", "price": 24900, "mrp": 26900, "image": "https://cdn.pixabay.com/photo/2015/01/20/13/13/samsung-605439_640.jpg", "emoji": "🎧", "filters": ["headphones"]}, {"id": "elec-galaxy-buds", "page": "electronics", "name": "Samsung Galaxy Buds", "weight": "True Wireless", "price": 9999, "mrp": 14999, "image": "https://cdn.pixabay.com/photo/2017/10/10/15/28/smartwatch-2837838_640.jpg", "emoji": "🎧", "filters": ["headphones"]}, {"id": "elec-realme-buds-air-5", "page": "electronics", "name": "Realme Buds Air 5", "weight": "ANC Earbuds", "price": 3499, "mrp": 4999, "image": "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_640.jpg", "emoji": "🎧", "filters": ["headphones"]}, {"id": "elec-apple-watch-series-9", "page": "electronics", "name": "Apple Watch Series 9", "weight": "GPS 45mm", "price": 44900, "mrp": 49900, "image": "https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_640.jpg", "emoji": "⌚", "filters": ["smart-watches"]}, {"id": "elec-fire-boltt-phoenix", "page": "electronics", "name": "Fire-Boltt Phoenix", "weight": "Bluetooth Calling", "price": 1499, "mrp": 5999, "image": "https://cdn.pixabay.com/photo/2015/05/31/12/22/laptop-791642_640.jpg", "emoji": "⌚", "filters": ["smart-watches"]}, {"id": "elec-noise-colorfit-pro-5", "page": "electronics", "name": "Noise ColorFit Pro 5", "weight": "AMOLED Display", "price": 2999, "mrp": 5999, "image": "https://cdn.pixabay.com/photo/2017/01/06/19/15/samsung-1957740_640.jpg", "emoji": "⌚", "filters": ["smart-watches"]}, {"id": "elec-anker-powerbank", "page": "electronics", "name": "Anker 20000mAh PowerBank", "weight": "22.5W Fast Charge", "price": 2199, "mrp": 3499, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/13/keyboard-1869511_640.jpg", "emoji": "🔋", "filters": ["power-banks"]}, {"id": "elec-mi-power-bank-3i", "page": "electronics", "name": "Mi Power Bank 3i", "weight": "10000mAh", "price": 1099, "mrp": 1499, "image": "https://cdn.pixabay.com/photo/2017/05/24/21/33/mouse-2341643_640.jpg", "emoji": "🔋", "filters": ["power-banks"]}, {"id": "elec-samsung-25w-charger", "page": "electronics", "name": "Samsung 25W Charger", "weight": "USB-C Fast Charger", "price": 1299, "mrp": 1999, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/13/tablet-1869512_640.jpg", "emoji": "🔌", "filters": ["chargers-cables"]}, {"id": "elec-apple-20w-charger", "page": "electronics", "name": "Apple 20W USB-C Charger", "weight": "Wall Adapter", "price": 1900, "mrp": 2500, "image": "https://cdn.pixabay.com/photo/2015/09/09/18/25/speaker-932096_640.jpg", "emoji": "🔌", "filters": ["chargers-cables"]}, {"id": "elec-portronics-cable", "page": "electronics", "name": "Portronics USB-C Cable", "weight": "1m Fast Charging Cable", "price": 299, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/tv-1850034_640.jpg", "emoji": "🔌", "filters": ["chargers-cables"]}, {"id": "elec-canon-eos-1500d", "page": "electronics", "name": "Canon EOS 1500D", "weight": "24.1MP DSLR", "price": 35990, "mrp": 39995, "image": "https://cdn.pixabay.com/photo/2017/01/22/12/07/printer-1999637_640.jpg", "emoji": "📷", "filters": ["cameras"]}, {"id": "elec-gopro-hero-12", "page": "electronics", "name": "GoPro Hero 12", "weight": "5.3K Action Camera", "price": 39990, "mrp": 44990, "image": "https://cdn.pixabay.com/photo/2016/03/27/07/12/router-1282242_640.jpg", "emoji": "📷", "filters": ["cameras"]}, {"id": "elec-ipad-air-m1", "page": "electronics", "name": "iPad Air M1", "weight": "10.9-inch, 64GB", "price": 59900, "mrp": 64900, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/13/charger-1869513_640.jpg", "emoji": "📱", "filters": ["mobiles"]}, {"id": "elec-tab-s9", "page": "electronics", "name": "Samsung Tab S9", "weight": "11-inch, 128GB", "price": 72999, "mrp": 79999, "image": "https://cdn.pixabay.com/photo/2016/11/19/22/52/earbuds-1841529_640.jpg", "emoji": "📱", "filters": ["mobiles"]}, {"id": "elec-kindle-paperwhite", "page": "electronics", "name": "Kindle Paperwhite", "weight": "11th Gen", "price": 13999, "mrp": 16999, "image": "https://cdn.pixabay.com/photo/2015/01/21/14/14/powerbank-606762_640.jpg", "emoji": "📚", "filters": ["mobiles"]}, {"id": "elec-echo-dot", "page": "electronics", "name": "Echo Dot 5th Gen", "weight": "Smart Speaker", "price": 4499, "mrp": 5499, "image": "https://cdn.pixabay.com/photo/2017/10/10/15/28/drone-2837839_640.jpg", "emoji": "🔊", "filters": ["speakers"]}, {"id": "elec-marshall-acton-iii", "page": "electronics", "name": "Marshall Acton III Speaker", "weight": "Home Bluetooth Speaker", "price": 22999, "mrp": 26999, "image": "https://cdn.pixabay.com/photo/2016/12/09/11/33/tripod-1894198_640.jpg", "emoji": "🔊", "filters": ["speakers"]}, {"id": "elec-sony-alpha-a6400", "page": "electronics", "name": "Sony Alpha A6400", "weight": "Mirrorless Camera", "price": 75990, "mrp": 82990, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/13/monitor-1869514_640.jpg", "emoji": "📷", "filters": ["cameras"]}, {"id": "elec-logitech-mx-master-3s", "page": "electronics", "name": "Logitech MX Master 3S", "weight": "Wireless Mouse", "price": 8995, "mrp": 10995, "image": "https://cdn.pixabay.com/photo/2017/01/06/19/15/console-1957741_640.jpg", "emoji": "🖱️", "filters": ["chargers-cables"]}], "home-kitchen": [{"id": "home-prestige-induction", "page": "home-kitchen", "name": "Prestige Induction Cooktop", "weight": "1200W", "price": 2299, "mrp": 3195, "image": "https://cdn.pixabay.com/photo/2016/11/18/17/20/kitchen-1836315_640.jpg", "emoji": "🍳", "filters": ["kitchen-appliances"]}, {"id": "home-butterfly-mixer", "page": "home-kitchen", "name": "Butterfly Mixer Grinder", "weight": "750W, 4 Jars", "price": 2499, "mrp": 3995, "image": "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_640.jpg", "emoji": "🍳", "filters": ["kitchen-appliances"]}, {"id": "home-philips-air-fryer", "page": "home-kitchen", "name": "Philips Air Fryer", "weight": "4.1L", "price": 7999, "mrp": 9995, "image": "https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_640.jpg", "emoji": "🍳", "filters": ["kitchen-appliances"]}, {"id": "home-kent-ro", "page": "home-kitchen", "name": "Kent RO Water Purifier", "weight": "8L Storage", "price": 15999, "mrp": 21000, "image": "https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_640.jpg", "emoji": "💧", "filters": ["kitchen-appliances"]}, {"id": "home-pigeon-tawa", "page": "home-kitchen", "name": "Pigeon Non-Stick Tawa", "weight": "280 mm", "price": 499, "mrp": 895, "image": "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353_640.jpg", "emoji": "🍲", "filters": ["cookware"]}, {"id": "home-hawkins-cooker", "page": "home-kitchen", "name": "Hawkins Pressure Cooker 5L", "weight": "Aluminium", "price": 2699, "mrp": 3450, "image": "https://cdn.pixabay.com/photo/2016/11/30/08/46/bedroom-1872196_640.jpg", "emoji": "🍲", "filters": ["cookware"]}, {"id": "home-milton-flask", "page": "home-kitchen", "name": "Milton Thermosteel Flask", "weight": "1 Litre", "price": 699, "mrp": 1099, "image": "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg", "emoji": "🥤", "filters": ["storage"]}, {"id": "home-cello-container-set", "page": "home-kitchen", "name": "Cello Storage Container Set", "weight": "Pack of 6", "price": 599, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/07/19/10/16/food-processor-1527326_640.jpg", "emoji": "📦", "filters": ["storage"]}, {"id": "home-scotch-brite-mop", "page": "home-kitchen", "name": "Scotch-Brite Mop", "weight": "Twin Bucket Spin Mop", "price": 899, "mrp": 1299, "image": "https://cdn.pixabay.com/photo/2015/09/09/18/25/mixer-932094_640.jpg", "emoji": "🧹", "filters": ["cleaning"]}, {"id": "home-harpic", "page": "home-kitchen", "name": "Harpic Toilet Cleaner 1L", "weight": "Original", "price": 159, "mrp": 199, "image": "https://cdn.pixabay.com/photo/2017/02/24/12/22/kitchen-2094707_640.jpg", "emoji": "🧼", "filters": ["cleaning"]}, {"id": "home-vim-dishwash", "page": "home-kitchen", "name": "Vim Dishwash Gel 750ml", "weight": "Lemon", "price": 129, "mrp": 179, "image": "https://cdn.pixabay.com/photo/2015/07/28/22/01/lamp-865362_640.jpg", "emoji": "🧼", "filters": ["cleaning"]}, {"id": "home-sleepwell-mattress", "page": "home-kitchen", "name": "Sleepwell Mattress Queen", "weight": "78 x 60 inches", "price": 8999, "mrp": 12999, "image": "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_640.jpg", "emoji": "🛏️", "filters": ["bedding"]}, {"id": "home-bombay-dyeing-bedsheet", "page": "home-kitchen", "name": "Bombay Dyeing Bedsheet", "weight": "Queen Size", "price": 1299, "mrp": 1999, "image": "https://cdn.pixabay.com/photo/2017/08/06/20/01/coffee-2595795_640.jpg", "emoji": "🛏️", "filters": ["bedding"]}, {"id": "home-curtains-set", "page": "home-kitchen", "name": "Curtains Set (7ft)", "weight": "Pack of 2", "price": 799, "mrp": 1499, "image": "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_640.jpg", "emoji": "🪟", "filters": ["decor"]}, {"id": "home-wipro-bulbs", "page": "home-kitchen", "name": "Wipro LED Bulb 9W (Pack 4)", "weight": "Cool Day White", "price": 349, "mrp": 560, "image": "https://cdn.pixabay.com/photo/2017/03/28/12/10/tableware-2181948_640.jpg", "emoji": "💡", "filters": ["lighting"]}, {"id": "home-philips-table-lamp", "page": "home-kitchen", "name": "Philips Table Lamp", "weight": "Study Light", "price": 1499, "mrp": 2199, "image": "https://cdn.pixabay.com/photo/2016/04/18/13/53/curtain-1336498_640.jpg", "emoji": "💡", "filters": ["lighting"]}, {"id": "home-wall-clock", "page": "home-kitchen", "name": "Wall Clock Decorative", "weight": "12 inch", "price": 599, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/11/30/08/46/sofa-1872197_640.jpg", "emoji": "🕒", "filters": ["decor"]}, {"id": "home-artificial-plants", "page": "home-kitchen", "name": "Artificial Plants Set", "weight": "Pack of 2", "price": 449, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2017/08/02/01/01/bathroom-2569326_640.jpg", "emoji": "🪴", "filters": ["decor"]}, {"id": "home-photo-frame-set", "page": "home-kitchen", "name": "Photo Frame Set (5pcs)", "weight": "Black Finish", "price": 699, "mrp": 1299, "image": "https://cdn.pixabay.com/photo/2016/11/19/13/06/clock-1839184_640.jpg", "emoji": "🖼️", "filters": ["decor"]}, {"id": "home-bathroom-organizer", "page": "home-kitchen", "name": "Bathroom Organizer Shelf", "weight": "Wall Mount", "price": 499, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2017/03/19/01/18/vase-2155354_640.jpg", "emoji": "🚿", "filters": ["bathroom"]}, {"id": "home-towel-set", "page": "home-kitchen", "name": "Towel Set (4 pcs)", "weight": "Cotton", "price": 799, "mrp": 1399, "image": "https://cdn.pixabay.com/photo/2015/10/20/18/57/candle-998266_640.jpg", "emoji": "🛁", "filters": ["bathroom"]}, {"id": "home-morphy-richards-iron", "page": "home-kitchen", "name": "Morphy Richards Iron", "weight": "Steam Iron", "price": 1699, "mrp": 2495, "image": "https://cdn.pixabay.com/photo/2016/07/19/10/16/blender-1527327_640.jpg", "emoji": "👕", "filters": ["cleaning"]}, {"id": "home-bajaj-room-heater", "page": "home-kitchen", "name": "Bajaj Room Heater", "weight": "2000W", "price": 1899, "mrp": 2790, "image": "https://cdn.pixabay.com/photo/2016/11/18/17/20/pan-1836316_640.jpg", "emoji": "🔥", "filters": ["lighting"]}, {"id": "home-crompton-fan", "page": "home-kitchen", "name": "Crompton Ceiling Fan", "weight": "1200 mm", "price": 1599, "mrp": 2240, "image": "https://cdn.pixabay.com/photo/2017/02/24/12/22/towel-2094708_640.jpg", "emoji": "🌀", "filters": ["lighting"]}, {"id": "home-borosil-dinner-set", "page": "home-kitchen", "name": "Borosil Dinner Set 27pc", "weight": "Opalware", "price": 2999, "mrp": 4599, "image": "https://cdn.pixabay.com/photo/2016/11/30/08/46/rug-1872198_640.jpg", "emoji": "🍽️", "filters": ["cookware"]}, {"id": "home-milton-casserole-set", "page": "home-kitchen", "name": "Milton Casserole Set", "weight": "Set of 3", "price": 1199, "mrp": 1899, "image": "https://cdn.pixabay.com/photo/2016/04/18/13/53/mirror-1336499_640.jpg", "emoji": "🍽️", "filters": ["storage"]}, {"id": "home-prestige-omega-kadai", "page": "home-kitchen", "name": "Prestige Omega Kadai", "weight": "24 cm", "price": 1099, "mrp": 1695, "image": "https://cdn.pixabay.com/photo/2017/03/28/12/10/shelf-2181949_640.jpg", "emoji": "🍲", "filters": ["cookware"]}, {"id": "home-nirlon-cookware-set", "page": "home-kitchen", "name": "Nirlon Cookware Set 5pc", "weight": "Non-Stick", "price": 1399, "mrp": 2499, "image": "https://cdn.pixabay.com/photo/2015/07/28/22/01/iron-865363_640.jpg", "emoji": "🍲", "filters": ["cookware"]}, {"id": "home-wonderchef-nutri-blender", "page": "home-kitchen", "name": "Wonderchef Nutri Blender", "weight": "400W", "price": 2999, "mrp": 4499, "image": "https://cdn.pixabay.com/photo/2016/11/19/13/06/dustbin-1839185_640.jpg", "emoji": "🍳", "filters": ["kitchen-appliances"]}, {"id": "home-instapot-electric-cooker", "page": "home-kitchen", "name": "InstaPot Electric Cooker", "weight": "6 Litre", "price": 5999, "mrp": 8999, "image": "https://cdn.pixabay.com/photo/2017/08/06/20/01/kettle-2595796_640.jpg", "emoji": "🍳", "filters": ["kitchen-appliances"]}], "beauty": [{"id": "beauty-lakme-foundation", "page": "beauty", "name": "Lakme 9to5 Foundation", "weight": "25 ml", "price": 599, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2017/07/31/22/59/makeup-2561845_640.jpg", "emoji": "💄", "filters": ["makeup"]}, {"id": "beauty-fit-me-concealer", "page": "beauty", "name": "Maybelline Fit Me Concealer", "weight": "6.8 ml", "price": 449, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2015/03/26/09/54/makeup-690804_640.jpg", "emoji": "💄", "filters": ["makeup"]}, {"id": "beauty-loreal-shampoo", "page": "beauty", "name": "L'Oreal Paris Shampoo 640ml", "weight": "Total Repair 5", "price": 499, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2017/07/31/22/59/cosmetics-2561844_640.jpg", "emoji": "🧴", "filters": ["haircare"]}, {"id": "beauty-dove-body-wash", "page": "beauty", "name": "Dove Body Wash 250ml", "weight": "Deep Moisture", "price": 249, "mrp": 325, "image": "https://cdn.pixabay.com/photo/2016/02/19/11/36/bottle-1209411_640.jpg", "emoji": "🧴", "filters": ["bath-body"]}, {"id": "beauty-nivea-moisturizer", "page": "beauty", "name": "Nivea Moisturizer 300ml", "weight": "Body Milk", "price": 349, "mrp": 449, "image": "https://cdn.pixabay.com/photo/2017/08/01/14/51/lotion-2565089_640.jpg", "emoji": "🧴", "filters": ["skincare"]}, {"id": "beauty-biotique-face-wash", "page": "beauty", "name": "Biotique Bio Neem Face Wash", "weight": "150 ml", "price": 199, "mrp": 275, "image": "https://cdn.pixabay.com/photo/2016/02/19/10/00/soap-1209344_640.jpg", "emoji": "🫧", "filters": ["skincare"]}, {"id": "beauty-himalaya-face-wash", "page": "beauty", "name": "Himalaya Neem Face Wash", "weight": "150 ml", "price": 149, "mrp": 199, "image": "https://cdn.pixabay.com/photo/2015/03/26/09/47/lipstick-690801_640.jpg", "emoji": "🫧", "filters": ["skincare"]}, {"id": "beauty-mamaearth-serum", "page": "beauty", "name": "Mamaearth Vitamin C Serum", "weight": "30 ml", "price": 549, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2017/07/31/22/59/perfume-2561843_640.jpg", "emoji": "✨", "filters": ["skincare"]}, {"id": "beauty-the-ordinary-niacinamide", "page": "beauty", "name": "The Ordinary Niacinamide", "weight": "30 ml", "price": 590, "mrp": 750, "image": "https://cdn.pixabay.com/photo/2016/03/27/19/32/hair-dryer-1283803_640.jpg", "emoji": "✨", "filters": ["skincare"]}, {"id": "beauty-cetaphil-cleanser", "page": "beauty", "name": "Cetaphil Gentle Cleanser", "weight": "250 ml", "price": 649, "mrp": 849, "image": "https://cdn.pixabay.com/photo/2016/11/29/06/17/cream-1867963_640.jpg", "emoji": "🫧", "filters": ["skincare"]}, {"id": "beauty-head-shoulders", "page": "beauty", "name": "Head & Shoulders Shampoo", "weight": "340 ml", "price": 399, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2017/08/07/14/02/woman-2604283_640.jpg", "emoji": "🧴", "filters": ["haircare"]}, {"id": "beauty-pantene-conditioner", "page": "beauty", "name": "Pantene Conditioner 180ml", "weight": "Hair Fall Control", "price": 199, "mrp": 275, "image": "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_640.jpg", "emoji": "🧴", "filters": ["haircare"]}, {"id": "beauty-wow-shampoo", "page": "beauty", "name": "WOW Apple Cider Vinegar Shampoo", "weight": "300 ml", "price": 449, "mrp": 599, "image": "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg", "emoji": "🧴", "filters": ["haircare"]}, {"id": "beauty-gillette-razor", "page": "beauty", "name": "Gillette Fusion Razor", "weight": "Manual Razor", "price": 549, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2017/05/13/12/40/beauty-2309518_640.jpg", "emoji": "🪒", "filters": ["mens-grooming"]}, {"id": "beauty-philips-trimmer", "page": "beauty", "name": "Philips Trimmer BT3211", "weight": "Cordless", "price": 1699, "mrp": 2195, "image": "https://cdn.pixabay.com/photo/2016/01/19/15/05/shampoo-1149149_640.jpg", "emoji": "🪒", "filters": ["mens-grooming"]}, {"id": "beauty-park-avenue-perfume", "page": "beauty", "name": "Park Avenue Perfume", "weight": "120 ml", "price": 399, "mrp": 550, "image": "https://cdn.pixabay.com/photo/2017/07/31/22/59/brush-2561846_640.jpg", "emoji": "🌸", "filters": ["fragrances"]}, {"id": "beauty-forest-essentials-night-cream", "page": "beauty", "name": "Forest Essentials Night Cream", "weight": "30 g", "price": 1850, "mrp": 2375, "image": "https://cdn.pixabay.com/photo/2016/02/19/11/36/nail-polish-1209412_640.jpg", "emoji": "🌙", "filters": ["skincare"]}, {"id": "beauty-neutrogena-sunscreen", "page": "beauty", "name": "Neutrogena Sunscreen SPF50", "weight": "88 ml", "price": 649, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2015/03/26/09/54/eyeshadow-690805_640.jpg", "emoji": "☀️", "filters": ["skincare"]}, {"id": "beauty-colgate-max-fresh", "page": "beauty", "name": "Colgate Max Fresh 300g", "weight": "Toothpaste", "price": 199, "mrp": 260, "image": "https://cdn.pixabay.com/photo/2016/11/29/06/17/serum-1867964_640.jpg", "emoji": "🪥", "filters": ["oral-care"]}, {"id": "beauty-oral-b-electric-toothbrush", "page": "beauty", "name": "Oral-B Electric Toothbrush", "weight": "Rechargeable", "price": 1999, "mrp": 2999, "image": "https://cdn.pixabay.com/photo/2017/08/01/14/51/sunscreen-2565090_640.jpg", "emoji": "🪥", "filters": ["oral-care"]}, {"id": "beauty-dettol-hand-wash", "page": "beauty", "name": "Dettol Hand Wash 750ml", "weight": "Original", "price": 149, "mrp": 199, "image": "https://cdn.pixabay.com/photo/2016/02/19/10/00/body-wash-1209345_640.jpg", "emoji": "🧼", "filters": ["health"]}, {"id": "beauty-vaseline-body-lotion", "page": "beauty", "name": "Vaseline Body Lotion 400ml", "weight": "Deep Moisture", "price": 299, "mrp": 399, "image": "https://cdn.pixabay.com/photo/2016/03/27/19/32/comb-1283804_640.jpg", "emoji": "🧴", "filters": ["bath-body"]}, {"id": "beauty-mac-ruby-woo", "page": "beauty", "name": "MAC Lipstick Ruby Woo", "weight": "Matte", "price": 1750, "mrp": 1950, "image": "https://cdn.pixabay.com/photo/2017/07/31/22/59/mask-2561847_640.jpg", "emoji": "💄", "filters": ["makeup"]}, {"id": "beauty-lakme-eyeconic-kajal", "page": "beauty", "name": "Lakmé Eyeconic Kajal", "weight": "Deep Black", "price": 249, "mrp": 325, "image": "https://cdn.pixabay.com/photo/2015/03/26/09/47/foundation-690802_640.jpg", "emoji": "👁️", "filters": ["makeup"]}, {"id": "beauty-maybelline-mascara", "page": "beauty", "name": "Maybelline Mascara Colossal", "weight": "Washable", "price": 399, "mrp": 525, "image": "https://cdn.pixabay.com/photo/2016/11/29/06/17/toner-1867965_640.jpg", "emoji": "👁️", "filters": ["makeup"]}, {"id": "beauty-nyx-setting-spray", "page": "beauty", "name": "NYX Setting Spray", "weight": "60 ml", "price": 699, "mrp": 950, "image": "https://cdn.pixabay.com/photo/2017/08/07/14/02/skincare-2604284_640.jpg", "emoji": "💦", "filters": ["makeup"]}, {"id": "beauty-bath-body-works-mist", "page": "beauty", "name": "Bath & Body Works Mist", "weight": "236 ml", "price": 1499, "mrp": 1799, "image": "https://cdn.pixabay.com/photo/2016/02/19/11/36/deodorant-1209413_640.jpg", "emoji": "🌸", "filters": ["fragrances"]}, {"id": "beauty-plum-toner", "page": "beauty", "name": "Plum Green Tea Toner", "weight": "200 ml", "price": 399, "mrp": 545, "image": "https://cdn.pixabay.com/photo/2017/05/13/12/40/eyeliner-2309520_640.jpg", "emoji": "🍃", "filters": ["skincare"]}, {"id": "beauty-beardo-hair-serum", "page": "beauty", "name": "Beardo Hair Serum", "weight": "50 ml", "price": 499, "mrp": 695, "image": "https://cdn.pixabay.com/photo/2016/11/21/12/42/razor-1845167_640.jpg", "emoji": "✨", "filters": ["mens-grooming"]}, {"id": "beauty-set-wet-hair-gel", "page": "beauty", "name": "Set Wet Hair Gel 250ml", "weight": "Wet Look", "price": 169, "mrp": 225, "image": "https://cdn.pixabay.com/photo/2016/03/27/19/32/conditioner-1283805_640.jpg", "emoji": "✨", "filters": ["mens-grooming"]}], "toys": [{"id": "toys-lego-city-police", "page": "toys", "name": "LEGO City Police Set", "weight": "340 pieces", "price": 2999, "mrp": 3999, "image": "https://cdn.pixabay.com/photo/2016/07/01/22/33/lego-1492199_640.jpg", "emoji": "🧱", "filters": ["building-blocks"]}, {"id": "toys-hot-wheels-track", "page": "toys", "name": "Hot Wheels Track Set", "weight": "Loop Builder", "price": 1499, "mrp": 1999, "image": "https://cdn.pixabay.com/photo/2015/06/19/21/38/teddy-bear-814456_640.jpg", "emoji": "🚗", "filters": ["cars-vehicles"]}, {"id": "toys-barbie-dreamhouse", "page": "toys", "name": "Barbie Dreamhouse", "weight": "3 Storey Set", "price": 4999, "mrp": 6999, "image": "https://cdn.pixabay.com/photo/2016/04/01/09/51/building-blocks-1299198_640.jpg", "emoji": "🧸", "filters": ["dolls"]}, {"id": "toys-nerf-elite-blaster", "page": "toys", "name": "Nerf Elite Blaster", "weight": "Foam Dart Gun", "price": 1799, "mrp": 2499, "image": "https://cdn.pixabay.com/photo/2016/06/16/16/41/toy-car-1461270_640.jpg", "emoji": "🦸", "filters": ["action-figures"]}, {"id": "toys-uno-card-game", "page": "toys", "name": "UNO Card Game", "weight": "Family Pack", "price": 199, "mrp": 299, "image": "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_640.jpg", "emoji": "🎲", "filters": ["board-games"]}, {"id": "toys-monopoly", "page": "toys", "name": "Monopoly Board Game", "weight": "Classic Edition", "price": 999, "mrp": 1499, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/ball-1850028_640.jpg", "emoji": "🎲", "filters": ["board-games"]}, {"id": "toys-chess-set", "page": "toys", "name": "Chess Set Wooden", "weight": "Foldable Board", "price": 499, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2015/01/28/23/35/toys-615961_640.jpg", "emoji": "♟️", "filters": ["board-games"]}, {"id": "toys-funskool-scrabble", "page": "toys", "name": "Funskool Scrabble", "weight": "Word Board Game", "price": 699, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2016/06/01/06/26/rubber-duck-1428411_640.jpg", "emoji": "🎲", "filters": ["board-games"]}, {"id": "toys-remote-control-car", "page": "toys", "name": "Remote Control Car", "weight": "Rechargeable", "price": 1299, "mrp": 1999, "image": "https://cdn.pixabay.com/photo/2015/05/31/14/23/lego-792009_640.jpg", "emoji": "🚗", "filters": ["cars-vehicles"]}, {"id": "toys-drone-camera", "page": "toys", "name": "Drone with Camera", "weight": "HD Video", "price": 3999, "mrp": 5999, "image": "https://cdn.pixabay.com/photo/2017/02/15/13/40/board-game-2068757_640.jpg", "emoji": "🚁", "filters": ["cars-vehicles"]}, {"id": "toys-play-doh", "page": "toys", "name": "Play-Doh 8 Pack", "weight": "Classic Colors", "price": 599, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2017/09/23/16/27/child-2779488_640.jpg", "emoji": "🎨", "filters": ["educational"]}, {"id": "toys-rubiks-cube", "page": "toys", "name": "Rubik's Cube 3x3", "weight": "Original", "price": 299, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2016/07/30/00/03/child-1556305_640.jpg", "emoji": "🧠", "filters": ["educational"]}, {"id": "toys-carrom-board", "page": "toys", "name": "Carrom Board Full Size", "weight": "Tournament Size", "price": 1499, "mrp": 2299, "image": "https://cdn.pixabay.com/photo/2016/11/19/15/40/baby-1839564_640.jpg", "emoji": "🎯", "filters": ["board-games"]}, {"id": "toys-badminton-set", "page": "toys", "name": "Badminton Set", "weight": "2 Racquets + Shuttle", "price": 699, "mrp": 999, "image": "https://cdn.pixabay.com/photo/2017/03/27/14/56/baby-2178653_640.jpg", "emoji": "🏸", "filters": ["sports"]}, {"id": "toys-cricket-bat", "page": "toys", "name": "Cricket Bat Kashmir Willow", "weight": "Size 6", "price": 999, "mrp": 1499, "image": "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg", "emoji": "🏏", "filters": ["sports"]}, {"id": "toys-football", "page": "toys", "name": "Football Size 5", "weight": "Training Ball", "price": 599, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2016/07/01/22/33/puzzle-1492200_640.jpg", "emoji": "⚽", "filters": ["sports"]}, {"id": "toys-keyboard-piano", "page": "toys", "name": "Keyboard Piano 61 Keys", "weight": "Beginner Edition", "price": 2999, "mrp": 4499, "image": "https://cdn.pixabay.com/photo/2015/06/19/21/38/doll-814457_640.jpg", "emoji": "🎹", "filters": ["musical"]}, {"id": "toys-guitar-acoustic", "page": "toys", "name": "Guitar Acoustic Beginner", "weight": "38 inch", "price": 3499, "mrp": 4999, "image": "https://cdn.pixabay.com/photo/2016/04/01/09/51/train-1299199_640.jpg", "emoji": "🎸", "filters": ["musical"]}, {"id": "toys-telescope", "page": "toys", "name": "Telescope for Kids", "weight": "50mm Aperture", "price": 1999, "mrp": 2999, "image": "https://cdn.pixabay.com/photo/2016/06/16/16/41/robot-1461271_640.jpg", "emoji": "🔭", "filters": ["educational"]}, {"id": "toys-science-kit", "page": "toys", "name": "Science Experiment Kit", "weight": "STEM Lab", "price": 799, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2017/02/15/13/40/chess-2068758_640.jpg", "emoji": "🧪", "filters": ["educational"]}, {"id": "toys-jigsaw-puzzle", "page": "toys", "name": "Jigsaw Puzzle 1000pc", "weight": "Landscape Edition", "price": 599, "mrp": 899, "image": "https://cdn.pixabay.com/photo/2016/11/22/19/25/cricket-1850030_640.jpg", "emoji": "🧩", "filters": ["educational"]}, {"id": "toys-rc-helicopter", "page": "toys", "name": "RC Helicopter", "weight": "USB Rechargeable", "price": 1799, "mrp": 2699, "image": "https://cdn.pixabay.com/photo/2015/01/28/23/35/bicycle-615962_640.jpg", "emoji": "🚁", "filters": ["cars-vehicles"]}, {"id": "toys-marvel-action-figure-set", "page": "toys", "name": "Marvel Action Figure Set", "weight": "Pack of 4", "price": 1499, "mrp": 2199, "image": "https://cdn.pixabay.com/photo/2016/07/30/00/03/kite-1556306_640.jpg", "emoji": "🦸", "filters": ["action-figures"]}, {"id": "toys-toy-kitchen-set", "page": "toys", "name": "Toy Kitchen Set", "weight": "Accessories Included", "price": 1299, "mrp": 1999, "image": "https://cdn.pixabay.com/photo/2017/09/23/16/27/paint-2779489_640.jpg", "emoji": "🍳", "filters": ["dolls"]}, {"id": "toys-building-blocks", "page": "toys", "name": "Building Blocks 500pc", "weight": "Creative Box", "price": 899, "mrp": 1399, "image": "https://cdn.pixabay.com/photo/2016/06/01/06/26/clay-1428412_640.jpg", "emoji": "🧱", "filters": ["building-blocks"]}, {"id": "toys-sketch-art-set", "page": "toys", "name": "Sketch Art Set 150pc", "weight": "Coloring Kit", "price": 699, "mrp": 1099, "image": "https://cdn.pixabay.com/photo/2015/09/05/21/51/science-925590_640.jpg", "emoji": "🎨", "filters": ["educational"]}, {"id": "toys-baby-walker", "page": "toys", "name": "Baby Walker Musical", "weight": "Foldable", "price": 1999, "mrp": 2999, "image": "https://cdn.pixabay.com/photo/2016/04/01/09/51/drum-1299200_640.jpg", "emoji": "👶", "filters": ["musical"]}, {"id": "toys-teddy-bear", "page": "toys", "name": "Soft Toys Teddy Bear 3ft", "weight": "Plush", "price": 899, "mrp": 1499, "image": "https://cdn.pixabay.com/photo/2017/03/27/14/56/skateboard-2178654_640.jpg", "emoji": "🧸", "filters": ["dolls"]}, {"id": "toys-magic-kit", "page": "toys", "name": "Magic Kit for Kids", "weight": "30 Tricks", "price": 499, "mrp": 799, "image": "https://cdn.pixabay.com/photo/2016/07/01/22/33/action-figure-1492201_640.jpg", "emoji": "🎩", "filters": ["action-figures"]}, {"id": "toys-beyblades", "page": "toys", "name": "Beyblades Battle Set", "weight": "Arena Included", "price": 799, "mrp": 1199, "image": "https://cdn.pixabay.com/photo/2017/08/06/12/06/sandbox-2591875_640.jpg", "emoji": "🌀", "filters": ["action-figures"]}], "fresh": [{"id": "fresh-chicken-curry-cut", "page": "fresh", "name": "Fresh Chicken Curry Cut 500g", "weight": "500 g", "price": 179, "mrp": 220, "image": "https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_640.jpg", "emoji": "🍗", "filters": ["chicken"]}, {"id": "fresh-chicken-breast", "page": "fresh", "name": "Chicken Breast Boneless 500g", "weight": "500 g", "price": 249, "mrp": 299, "image": "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg", "emoji": "🍗", "filters": ["chicken"]}, {"id": "fresh-chicken-drumsticks", "page": "fresh", "name": "Chicken Drumsticks 500g", "weight": "500 g", "price": 199, "mrp": 249, "image": "https://cdn.pixabay.com/photo/2016/11/18/14/39/meat-1834916_640.jpg", "emoji": "🍗", "filters": ["chicken"]}, {"id": "fresh-chicken-wings", "page": "fresh", "name": "Chicken Wings 500g", "weight": "500 g", "price": 159, "mrp": 199, "image": "https://cdn.pixabay.com/photo/2016/11/29/04/00/steak-1867208_640.jpg", "emoji": "🍗", "filters": ["chicken"]}, {"id": "fresh-chicken-keema", "page": "fresh", "name": "Chicken Keema 500g", "weight": "500 g", "price": 219, "mrp": 269, "image": "https://cdn.pixabay.com/photo/2014/03/05/01/20/fish-279715_640.jpg", "emoji": "🍗", "filters": ["chicken"]}, {"id": "fresh-mutton-curry-cut", "page": "fresh", "name": "Fresh Mutton Curry Cut 500g", "weight": "500 g", "price": 599, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_640.jpg", "emoji": "🥩", "filters": ["mutton"]}, {"id": "fresh-mutton-keema", "page": "fresh", "name": "Mutton Keema 500g", "weight": "500 g", "price": 649, "mrp": 749, "image": "https://cdn.pixabay.com/photo/2016/11/18/14/05/eggs-1834852_640.jpg", "emoji": "🥩", "filters": ["mutton"]}, {"id": "fresh-mutton-biryani-cut", "page": "fresh", "name": "Mutton Biryani Cut 500g", "weight": "500 g", "price": 629, "mrp": 729, "image": "https://cdn.pixabay.com/photo/2017/03/23/19/57/shrimp-2169631_640.jpg", "emoji": "🥩", "filters": ["mutton"]}, {"id": "fresh-goat-liver", "page": "fresh", "name": "Goat Liver 250g", "weight": "250 g", "price": 199, "mrp": 249, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/chicken-1869384_640.jpg", "emoji": "🥩", "filters": ["mutton"]}, {"id": "fresh-rohu-fish", "page": "fresh", "name": "Rohu Fish Curry Cut 500g", "weight": "500 g", "price": 199, "mrp": 249, "image": "https://cdn.pixabay.com/photo/2017/01/11/11/33/roast-beef-1971580_640.jpg", "emoji": "🐟", "filters": ["fish"]}, {"id": "fresh-pomfret", "page": "fresh", "name": "Pomfret Medium 500g", "weight": "500 g", "price": 449, "mrp": 549, "image": "https://cdn.pixabay.com/photo/2016/06/28/17/32/food-1485518_640.jpg", "emoji": "🐟", "filters": ["fish"]}, {"id": "fresh-surmai", "page": "fresh", "name": "Surmai/King Fish Steak 500g", "weight": "500 g", "price": 549, "mrp": 649, "image": "https://cdn.pixabay.com/photo/2017/01/23/15/36/eat-2002918_640.jpg", "emoji": "🐟", "filters": ["fish"]}, {"id": "fresh-prawns-medium", "page": "fresh", "name": "Prawns Medium 500g", "weight": "500 g", "price": 399, "mrp": 499, "image": "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_640.jpg", "emoji": "🦐", "filters": ["prawns"]}, {"id": "fresh-tiger-prawns", "page": "fresh", "name": "Tiger Prawns Large 500g", "weight": "500 g", "price": 599, "mrp": 699, "image": "https://cdn.pixabay.com/photo/2017/03/23/19/57/lobster-2169632_640.jpg", "emoji": "🦐", "filters": ["prawns"]}, {"id": "fresh-hilsa", "page": "fresh", "name": "Hilsa Fish 500g", "weight": "500 g", "price": 699, "mrp": 849, "image": "https://cdn.pixabay.com/photo/2016/11/18/14/39/lamb-1834917_640.jpg", "emoji": "🐟", "filters": ["fish"]}, {"id": "fresh-bangda", "page": "fresh", "name": "Bangda/Mackerel 500g", "weight": "500 g", "price": 199, "mrp": 249, "image": "https://cdn.pixabay.com/photo/2016/11/29/04/00/sausage-1867209_640.jpg", "emoji": "🐟", "filters": ["fish"]}, {"id": "fresh-eggs-white", "page": "fresh", "name": "Eggs White (12 pcs)", "weight": "12 pcs", "price": 89, "mrp": 108, "image": "https://cdn.pixabay.com/photo/2014/03/05/01/20/crab-279716_640.jpg", "emoji": "🥚", "filters": ["eggs"]}, {"id": "fresh-eggs-brown", "page": "fresh", "name": "Eggs Brown (6 pcs)", "weight": "6 pcs", "price": 69, "mrp": 85, "image": "https://cdn.pixabay.com/photo/2017/01/26/02/06/prawns-2009591_640.jpg", "emoji": "🥚", "filters": ["eggs"]}, {"id": "fresh-country-eggs", "page": "fresh", "name": "Country Eggs (6 pcs)", "weight": "6 pcs", "price": 79, "mrp": 99, "image": "https://cdn.pixabay.com/photo/2016/11/18/14/05/duck-1834853_640.jpg", "emoji": "🥚", "filters": ["eggs"]}, {"id": "fresh-quail-eggs", "page": "fresh", "name": "Quail Eggs (12 pcs)", "weight": "12 pcs", "price": 99, "mrp": 129, "image": "https://cdn.pixabay.com/photo/2017/03/23/19/57/tuna-2169633_640.jpg", "emoji": "🥚", "filters": ["eggs"]}, {"id": "fresh-tandoori-chicken-marinated", "page": "fresh", "name": "Tandoori Chicken Marinated", "weight": "500 g", "price": 349, "mrp": 429, "image": "https://cdn.pixabay.com/photo/2016/06/28/17/32/kebab-1485519_640.jpg", "emoji": "🍢", "filters": ["ready-to-cook"]}, {"id": "fresh-chicken-seekh-kebab", "page": "fresh", "name": "Chicken Seekh Kebab 300g", "weight": "300 g", "price": 299, "mrp": 369, "image": "https://cdn.pixabay.com/photo/2016/11/29/12/54/bacon-1869389_640.jpg", "emoji": "🍢", "filters": ["ready-to-cook"]}, {"id": "fresh-fish-fingers", "page": "fresh", "name": "Fish Fingers 250g", "weight": "250 g", "price": 249, "mrp": 319, "image": "https://cdn.pixabay.com/photo/2017/01/11/11/33/ham-1971581_640.jpg", "emoji": "🍢", "filters": ["ready-to-cook"]}, {"id": "fresh-chicken-nuggets", "page": "fresh", "name": "Chicken Nuggets 300g", "weight": "300 g", "price": 199, "mrp": 269, "image": "https://cdn.pixabay.com/photo/2016/11/18/14/39/turkey-1834918_640.jpg", "emoji": "🍢", "filters": ["ready-to-cook"]}, {"id": "fresh-prawn-koliwada", "page": "fresh", "name": "Prawn Koliwada 250g", "weight": "250 g", "price": 349, "mrp": 429, "image": "https://cdn.pixabay.com/photo/2014/11/05/15/57/squid-518033_640.jpg", "emoji": "🍢", "filters": ["ready-to-cook"]}]}, "homeSections": [{"title": "Best in Fruits & Vegetables", "href": "vegetables.html", "productIds": ["v1", "v2", "v3", "v10", "v21", "v22", "v28", "v38"]}, {"title": "Dairy & Breakfast", "href": "grocery.html", "productIds": ["g16", "g17", "g18", "g19", "g20", "g36", "g37", "g40"]}, {"title": "Snacks & Beverages", "href": "grocery.html", "productIds": ["g26", "g27", "g28", "g29", "g30", "g31", "g32", "g33"]}], "pageConfig": {"grocery": {"title": "Grocery & Staples", "subtitle": "Daily essentials, pantry staples, masala, snacks and breakfast picks curated like your favourite quick-commerce store.", "filters": [{"label": "All", "value": "all"}, {"label": "Atta & Rice", "value": "atta-rice"}, {"label": "Dal & Pulses", "value": "dal-pulses"}, {"label": "Oil & Ghee", "value": "oil-ghee"}, {"label": "Dairy", "value": "dairy"}, {"label": "Masala", "value": "masala"}, {"label": "Beverages", "value": "beverages"}, {"label": "Snacks", "value": "snacks"}, {"label": "Breakfast", "value": "breakfast"}]}, "vegetables": {"title": "Fruits & Vegetables", "subtitle": "Fresh Indian vegetables, leafy greens, fruits and exotics with quick-delivery style browsing.", "filters": [{"label": "All", "value": "all"}, {"label": "Vegetables", "value": "vegetables"}, {"label": "Leafy Greens", "value": "leafy-greens"}, {"label": "Fruits", "value": "fruits"}, {"label": "Exotic Fruits", "value": "exotic-fruits"}]}, "fashion": {"title": "Fashion & Apparel", "subtitle": "Trending looks for men, women, boys and girls, styled in the same swipeable SJ MegaMart experience.", "filters": [{"label": "All", "value": "all"}, {"label": "Men's Wear", "value": "mens-wear"}, {"label": "Women's Wear", "value": "womens-wear"}, {"label": "Men's Innerwear", "value": "mens-innerwear"}, {"label": "Women's Innerwear", "value": "womens-innerwear"}, {"label": "Men's Footwear", "value": "mens-footwear"}, {"label": "Women's Footwear", "value": "womens-footwear"}, {"label": "Kids Wear", "value": "kids-wear"}, {"label": "Handbags & Purses", "value": "handbags"}, {"label": "Eyewear", "value": "eyewear"}, {"label": "Jewellery", "value": "jewellery"}]}, "electronics": {"title": "Electronics & Mobiles", "subtitle": "Upgrade daily life with bestselling phones, laptops, audio gear and smart devices at sharp SJ MegaMart prices.", "filters": [{"label": "All", "value": "all"}, {"label": "Mobiles", "value": "mobiles"}, {"label": "Laptops", "value": "laptops"}, {"label": "Headphones", "value": "headphones"}, {"label": "Chargers & Cables", "value": "chargers-cables"}, {"label": "Speakers", "value": "speakers"}, {"label": "Smart Watches", "value": "smart-watches"}, {"label": "Power Banks", "value": "power-banks"}, {"label": "Cameras", "value": "cameras"}]}, "home-kitchen": {"title": "Home & Kitchen", "subtitle": "Refresh every room with cookware, appliances, storage, cleaning and décor picks tailored for Indian homes.", "filters": [{"label": "All", "value": "all"}, {"label": "Kitchen Appliances", "value": "kitchen-appliances"}, {"label": "Cookware", "value": "cookware"}, {"label": "Storage", "value": "storage"}, {"label": "Cleaning", "value": "cleaning"}, {"label": "Bedding", "value": "bedding"}, {"label": "Decor", "value": "decor"}, {"label": "Bathroom", "value": "bathroom"}, {"label": "Lighting", "value": "lighting"}]}, "beauty": {"title": "Beauty & Personal Care", "subtitle": "Daily skincare, glam essentials and grooming favourites picked from trusted beauty brands shoppers love.", "filters": [{"label": "All", "value": "all"}, {"label": "Skincare", "value": "skincare"}, {"label": "Haircare", "value": "haircare"}, {"label": "Makeup", "value": "makeup"}, {"label": "Fragrances", "value": "fragrances"}, {"label": "Men's Grooming", "value": "mens-grooming"}, {"label": "Bath & Body", "value": "bath-body"}, {"label": "Oral Care", "value": "oral-care"}, {"label": "Health", "value": "health"}]}, "toys": {"title": "Toys & Games", "subtitle": "Playtime gets better with action toys, board games, learning kits, sports sets and musical fun for every age.", "filters": [{"label": "All", "value": "all"}, {"label": "Action Figures", "value": "action-figures"}, {"label": "Board Games", "value": "board-games"}, {"label": "Educational", "value": "educational"}, {"label": "Dolls", "value": "dolls"}, {"label": "Cars & Vehicles", "value": "cars-vehicles"}, {"label": "Building Blocks", "value": "building-blocks"}, {"label": "Sports", "value": "sports"}, {"label": "Musical", "value": "musical"}]}, "fresh": {"title": "Meat, Fish & Eggs", "subtitle": "Order premium cuts, seafood and protein staples with clean packaging and same-day freshness in every pack.", "filters": [{"label": "All", "value": "all"}, {"label": "Chicken", "value": "chicken"}, {"label": "Mutton", "value": "mutton"}, {"label": "Fish", "value": "fish"}, {"label": "Eggs", "value": "eggs"}, {"label": "Prawns", "value": "prawns"}, {"label": "Ready to Cook", "value": "ready-to-cook"}]}}};

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
    { name: "Women's Innerwear", filter: 'womens-innerwear', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_640.jpg' },
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
