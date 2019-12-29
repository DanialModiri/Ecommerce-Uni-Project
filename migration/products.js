const Product = require('../model/Product');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/uni-project-ecommerce');
const products = [
    {
        "name": "Pail With Metal Handle 16l White",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "6.0 Inch"
        },
        "price": 6701092,
        "image": "http://dummyimage.com/189x151.png/5fa2dd/ffffff"
    },
    {
        "name": "Corn Meal",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "filters": {
            "ram": "8Gb",
            "cpu": "3.0Ghz",
            "screen": "6.0 Inch"
        },
        "price": 11858903,
        "image": "http://dummyimage.com/132x124.bmp/5fa2dd/ffffff"
    },
    {
        "name": "Marjoram - Dried, Rubbed",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "6.0 Inch"
        },
        "price": 5307473,
        "image": "http://dummyimage.com/206x122.png/5fa2dd/ffffff"
    },
    {
        "name": "Compound - Strawberry",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "5.5 Inch"
        },
        "price": 10368109,
        "image": "http://dummyimage.com/113x110.jpg/5fa2dd/ffffff"
    },
    {
        "name": "Sage - Rubbed",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "filters": {
            "ram": "4Gb",
            "cpu": "3.0Ghz",
            "screen": "5.5 Inch"
        },
        "price": 8366648,
        "image": "http://dummyimage.com/130x217.jpg/dddddd/000000"
    },
    {
        "name": "Wine - Magnotta - Belpaese",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "filters": {
            "ram": "16Gb",
            "cpu": "3.0Ghz",
            "screen": "6.0 Inch"
        },
        "price": 5893930,
        "image": "http://dummyimage.com/108x148.bmp/dddddd/000000"
    },
    {
        "name": "Cleaner - Bleach",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 10240545,
        "image": "http://dummyimage.com/123x137.png/cc0000/ffffff"
    },
    {
        "name": "Beef - Tenderloin Tails",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "7 Inch"
        },
        "price": 2790860,
        "image": "http://dummyimage.com/246x234.png/dddddd/000000"
    },
    {
        "name": "Bamboo Shoots - Sliced",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "filters": {
            "ram": "16Gb",
            "cpu": "1.2Ghz",
            "screen": "6.0 Inch"
        },
        "price": 9133179,
        "image": "http://dummyimage.com/233x116.bmp/5fa2dd/ffffff"
    },
    {
        "name": "Tea - Decaf Lipton",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 7059489,
        "image": "http://dummyimage.com/194x205.png/5fa2dd/ffffff"
    },
    {
        "name": "Beef - Ox Tongue",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "6.0 Inch"
        },
        "price": 3242872,
        "image": "http://dummyimage.com/179x168.png/dddddd/000000"
    },
    {
        "name": "Hot Chocolate - Individual",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "6.0 Inch"
        },
        "price": 8235386,
        "image": "http://dummyimage.com/208x185.jpg/cc0000/ffffff"
    },
    {
        "name": "Soup - Verve - Chipotle Chicken",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "filters": {
            "ram": "4Gb",
            "cpu": "1.2Ghz",
            "screen": "6.0 Inch"
        },
        "price": 3531766,
        "image": "http://dummyimage.com/247x239.jpg/cc0000/ffffff"
    },
    {
        "name": "Tomatoes - Cherry, Yellow",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "filters": {
            "ram": "4Gb",
            "cpu": "3.0Ghz",
            "screen": "6.0 Inch"
        },
        "price": 4189581,
        "image": "http://dummyimage.com/124x195.bmp/cc0000/ffffff"
    },
    {
        "name": "Chilli Paste, Hot Sambal Oelek",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "filters": {
            "ram": "4Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 5071249,
        "image": "http://dummyimage.com/224x130.png/ff4444/ffffff"
    },
    {
        "name": "Soap - Pine Sol Floor Cleaner",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "filters": {
            "ram": "16Gb",
            "cpu": "1.2Ghz",
            "screen": "6.0 Inch"
        },
        "price": 9069375,
        "image": "http://dummyimage.com/117x191.png/cc0000/ffffff"
    },
    {
        "name": "Lady Fingers",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "5.5 Inch"
        },
        "price": 11785032,
        "image": "http://dummyimage.com/216x223.jpg/5fa2dd/ffffff"
    },
    {
        "name": "Arizona - Plum Green Tea",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "filters": {
            "ram": "16Gb",
            "cpu": "3.0Ghz",
            "screen": "6.0 Inch"
        },
        "price": 11743646,
        "image": "http://dummyimage.com/132x152.bmp/dddddd/000000"
    },
    {
        "name": "Beef - Bresaola",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "filters": {
            "ram": "4Gb",
            "cpu": "1.2Ghz",
            "screen": "7 Inch"
        },
        "price": 5443827,
        "image": "http://dummyimage.com/178x241.png/dddddd/000000"
    },
    {
        "name": "Nut - Pecan, Pieces",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "filters": {
            "ram": "16Gb",
            "cpu": "1.2Ghz",
            "screen": "6.0 Inch"
        },
        "price": 9413938,
        "image": "http://dummyimage.com/159x150.bmp/ff4444/ffffff"
    },
    {
        "name": "Yogurt - Plain",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "filters": {
            "ram": "8Gb",
            "cpu": "3.0Ghz",
            "screen": "5.5 Inch"
        },
        "price": 5602578,
        "image": "http://dummyimage.com/200x126.bmp/5fa2dd/ffffff"
    },
    {
        "name": "Soup - Campbells, Classic Chix",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "filters": {
            "ram": "4Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 5018156,
        "image": "http://dummyimage.com/210x186.jpg/5fa2dd/ffffff"
    },
    {
        "name": "Bar Mix - Pina Colada, 355 Ml",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "7 Inch"
        },
        "price": 9770377,
        "image": "http://dummyimage.com/145x183.bmp/ff4444/ffffff"
    },
    {
        "name": "Star Fruit",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "filters": {
            "ram": "16Gb",
            "cpu": "3.0Ghz",
            "screen": "7 Inch"
        },
        "price": 3221252,
        "image": "http://dummyimage.com/138x209.bmp/5fa2dd/ffffff"
    },
    {
        "name": "Swiss Chard",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "filters": {
            "ram": "16Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 8999766,
        "image": "http://dummyimage.com/212x217.png/5fa2dd/ffffff"
    },
    {
        "name": "Cucumber - English",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "filters": {
            "ram": "4Gb",
            "cpu": "3.0Ghz",
            "screen": "7 Inch"
        },
        "price": 9600287,
        "image": "http://dummyimage.com/101x104.jpg/cc0000/ffffff"
    },
    {
        "name": "Bread Base - Gold Formel",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "filters": {
            "ram": "4Gb",
            "cpu": "3.0Ghz",
            "screen": "5.5 Inch"
        },
        "price": 8127237,
        "image": "http://dummyimage.com/205x196.bmp/dddddd/000000"
    },
    {
        "name": "Cheese - Grie Des Champ",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 6593347,
        "image": "http://dummyimage.com/142x108.png/5fa2dd/ffffff"
    },
    {
        "name": "Coconut - Shredded, Unsweet",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "7 Inch"
        },
        "price": 7815216,
        "image": "http://dummyimage.com/193x114.jpg/cc0000/ffffff"
    },
    {
        "name": "Crackers - Melba Toast",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        "filters": {
            "ram": "16Gb",
            "cpu": "1.2Ghz",
            "screen": "7 Inch"
        },
        "price": 3014591,
        "image": "http://dummyimage.com/195x205.jpg/5fa2dd/ffffff"
    },
    {
        "name": "Shrimp - 100 / 200 Cold Water",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        "filters": {
            "ram": "8Gb",
            "cpu": "3.0Ghz",
            "screen": "5.5 Inch"
        },
        "price": 7250150,
        "image": "http://dummyimage.com/235x189.bmp/dddddd/000000"
    },
    {
        "name": "Calypso - Black Cherry Lemonade",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "6.0 Inch"
        },
        "price": 5837695,
        "image": "http://dummyimage.com/202x119.bmp/cc0000/ffffff"
    },
    {
        "name": "Table Cloth 62x120 Colour",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "7 Inch"
        },
        "price": 4537548,
        "image": "http://dummyimage.com/190x118.png/cc0000/ffffff"
    },
    {
        "name": "Cleaner - Bleach",
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "7 Inch"
        },
        "price": 8141349,
        "image": "http://dummyimage.com/237x168.bmp/5fa2dd/ffffff"
    },
    {
        "name": "Glass Clear 8 Oz",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "7 Inch"
        },
        "price": 5451743,
        "image": "http://dummyimage.com/185x229.jpg/5fa2dd/ffffff"
    },
    {
        "name": "Marsala - Sperone, Fine, D.o.c.",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "6.0 Inch"
        },
        "price": 10487092,
        "image": "http://dummyimage.com/126x183.png/cc0000/ffffff"
    },
    {
        "name": "Wine - White, Lindemans Bin 95",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "filters": {
            "ram": "16Gb",
            "cpu": "3.0Ghz",
            "screen": "7 Inch"
        },
        "price": 10249408,
        "image": "http://dummyimage.com/115x176.png/cc0000/ffffff"
    },
    {
        "name": "Beer - Blue Light",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "filters": {
            "ram": "16Gb",
            "cpu": "3.0Ghz",
            "screen": "7 Inch"
        },
        "price": 3941200,
        "image": "http://dummyimage.com/182x217.png/dddddd/000000"
    },
    {
        "name": "Bamboo Shoots - Sliced",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "filters": {
            "ram": "16Gb",
            "cpu": "3.0Ghz",
            "screen": "7 Inch"
        },
        "price": 9681110,
        "image": "http://dummyimage.com/233x135.png/ff4444/ffffff"
    },
    {
        "name": "Sprouts - Corn",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "filters": {
            "ram": "4Gb",
            "cpu": "2.1Ghz",
            "screen": "7 Inch"
        },
        "price": 8724813,
        "image": "http://dummyimage.com/167x216.png/cc0000/ffffff"
    },
    {
        "name": "Wine - White, Chardonnay",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "filters": {
            "ram": "16Gb",
            "cpu": "3.0Ghz",
            "screen": "6.0 Inch"
        },
        "price": 10022228,
        "image": "http://dummyimage.com/117x109.bmp/dddddd/000000"
    },
    {
        "name": "Yogurt - Assorted Pack",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "filters": {
            "ram": "8Gb",
            "cpu": "3.0Ghz",
            "screen": "6.0 Inch"
        },
        "price": 11010312,
        "image": "http://dummyimage.com/116x179.png/ff4444/ffffff"
    },
    {
        "name": "Goldschalger",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "5.5 Inch"
        },
        "price": 4296468,
        "image": "http://dummyimage.com/204x239.png/dddddd/000000"
    },
    {
        "name": "Asparagus - Mexican",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "filters": {
            "ram": "4Gb",
            "cpu": "2.1Ghz",
            "screen": "5.5 Inch"
        },
        "price": 8196058,
        "image": "http://dummyimage.com/189x137.png/ff4444/ffffff"
    },
    {
        "name": "Bread - White Epi Baguette",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "filters": {
            "ram": "4Gb",
            "cpu": "3.0Ghz",
            "screen": "5.5 Inch"
        },
        "price": 9579409,
        "image": "http://dummyimage.com/154x201.png/5fa2dd/ffffff"
    },
    {
        "name": "Cheese - Brie Roitelet",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "filters": {
            "ram": "8Gb",
            "cpu": "3.0Ghz",
            "screen": "6.0 Inch"
        },
        "price": 8408394,
        "image": "http://dummyimage.com/230x141.png/dddddd/000000"
    },
    {
        "name": "Soup Campbells Turkey Veg.",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "7 Inch"
        },
        "price": 11003047,
        "image": "http://dummyimage.com/105x132.jpg/5fa2dd/ffffff"
    },
    {
        "name": "Veal - Sweetbread",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "filters": {
            "ram": "8Gb",
            "cpu": "3.0Ghz",
            "screen": "7 Inch"
        },
        "price": 5664718,
        "image": "http://dummyimage.com/123x208.bmp/ff4444/ffffff"
    },
    {
        "name": "Bar - Sweet And Salty Chocolate",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "6.0 Inch"
        },
        "price": 10880640,
        "image": "http://dummyimage.com/159x121.bmp/dddddd/000000"
    },
    {
        "name": "Turkey Leg With Drum And Thigh",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "filters": {
            "ram": "16Gb",
            "cpu": "1.2Ghz",
            "screen": "7 Inch"
        },
        "price": 3653287,
        "image": "http://dummyimage.com/137x194.bmp/cc0000/ffffff"
    },
    {
        "name": "Wine - Pinot Grigio Collavini",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 10041904,
        "image": "http://dummyimage.com/181x109.png/ff4444/ffffff"
    },
    {
        "name": "Spinach - Spinach Leaf",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 10397527,
        "image": "http://dummyimage.com/245x189.bmp/dddddd/000000"
    },
    {
        "name": "Tomatoes",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "6.0 Inch"
        },
        "price": 9245828,
        "image": "http://dummyimage.com/185x243.png/cc0000/ffffff"
    },
    {
        "name": "Star Fruit",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "filters": {
            "ram": "16Gb",
            "cpu": "1.2Ghz",
            "screen": "5.5 Inch"
        },
        "price": 2755683,
        "image": "http://dummyimage.com/136x219.jpg/ff4444/ffffff"
    },
    {
        "name": "Cake Sheet Combo Party Pack",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "6.0 Inch"
        },
        "price": 11539061,
        "image": "http://dummyimage.com/162x152.bmp/cc0000/ffffff"
    },
    {
        "name": "Lamb - Leg, Boneless",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "filters": {
            "ram": "8Gb",
            "cpu": "2.1Ghz",
            "screen": "5.5 Inch"
        },
        "price": 3848571,
        "image": "http://dummyimage.com/193x185.jpg/ff4444/ffffff"
    },
    {
        "name": "Bread - Assorted Rolls",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "filters": {
            "ram": "4Gb",
            "cpu": "2.1Ghz",
            "screen": "6.0 Inch"
        },
        "price": 11146361,
        "image": "http://dummyimage.com/100x232.png/dddddd/000000"
    },
    {
        "name": "Chicken - Base, Ultimate",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "filters": {
            "ram": "16Gb",
            "cpu": "2.1Ghz",
            "screen": "5.5 Inch"
        },
        "price": 3270050,
        "image": "http://dummyimage.com/173x159.png/dddddd/000000"
    },
    {
        "name": "Orange Roughy 4/6 Oz",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "filters": {
            "ram": "8Gb",
            "cpu": "1.2Ghz",
            "screen": "7 Inch"
        },
        "price": 2601136,
        "image": "http://dummyimage.com/211x173.bmp/ff4444/ffffff"
    },
    {
        "name": "Snapple Raspberry Tea",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "filters": {
            "ram": "4Gb",
            "cpu": "3.0Ghz",
            "screen": "7 Inch"
        },
        "price": 2606224,
        "image": "http://dummyimage.com/100x197.jpg/ff4444/ffffff"
    }
]

const images = [
    'https://dkstatics-public.digikala.com/digikala-products/111460798.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public-2.digikala.com/digikala-products/111469811.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/112551751.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/113413435.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/112893905.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/114396752.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/113413378.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/112519028.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/113542286.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/791490.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/112545692.jpg?x-oss-process=image/resize,h_1600/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/112545703.jpg?x-oss-process=image/resize,h_1600/quality,q_80'
]
Product.insertMany(products.map(item => ({ ...item, image: images[Math.floor(Math.random()*images.length)], category: '5e05bc562d75521b14687406' })), { ordered: true }).then(res => {
    console.log(res)
})

