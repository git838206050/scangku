$(function () {
    var data = [
        {
            name:'笔记本电脑',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:998,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'外星人笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2280183197,763913268&fm=200&gp=0.jpg',
            price:9999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'批售服务器',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935222401,1983125872&fm=27&gp=0.jpg',
            price:49999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'3D笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1307334686,2078374065&fm=27&gp=0.jpg',
            price:6000,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'E540核服务器',
            mainImageUrl:'http://img1.imgtn.bdimg.com/it/u=3400877733,3849922232&fm=200&gp=0.jpg',
            price:13999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'大哥机',
            mainImageUrl:'http://img3.imgtn.bdimg.com/it/u=3762564554,919211873&fm=200&gp=0.jpg',
            price:1,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'苹果20',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=18558777,2970581122&fm=27&gp=0.jpg',
            price:2,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑FL5900',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1891820928,1620033395&fm=27&gp=0.jpg',
            price:4999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑XR4700',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:7999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'笔记本电脑',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:998,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'外星人笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2280183197,763913268&fm=200&gp=0.jpg',
            price:9999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'批售服务器',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935222401,1983125872&fm=27&gp=0.jpg',
            price:49999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'3D笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1307334686,2078374065&fm=27&gp=0.jpg',
            price:6000,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'E540核服务器',
            mainImageUrl:'http://img1.imgtn.bdimg.com/it/u=3400877733,3849922232&fm=200&gp=0.jpg',
            price:13999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'大哥机',
            mainImageUrl:'http://img3.imgtn.bdimg.com/it/u=3762564554,919211873&fm=200&gp=0.jpg',
            price:1,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'苹果20',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=18558777,2970581122&fm=27&gp=0.jpg',
            price:2,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑FL5900',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1891820928,1620033395&fm=27&gp=0.jpg',
            price:4999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑XR4700',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:7999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'笔记本电脑',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:998,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'外星人笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2280183197,763913268&fm=200&gp=0.jpg',
            price:9999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'批售服务器',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935222401,1983125872&fm=27&gp=0.jpg',
            price:49999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'3D笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1307334686,2078374065&fm=27&gp=0.jpg',
            price:6000,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'E540核服务器',
            mainImageUrl:'http://img1.imgtn.bdimg.com/it/u=3400877733,3849922232&fm=200&gp=0.jpg',
            price:13999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'大哥机',
            mainImageUrl:'http://img3.imgtn.bdimg.com/it/u=3762564554,919211873&fm=200&gp=0.jpg',
            price:1,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'苹果20',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=18558777,2970581122&fm=27&gp=0.jpg',
            price:2,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑FL5900',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1891820928,1620033395&fm=27&gp=0.jpg',
            price:4999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑XR4700',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:7999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'笔记本电脑',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:998,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'外星人笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2280183197,763913268&fm=200&gp=0.jpg',
            price:9999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'批售服务器',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3935222401,1983125872&fm=27&gp=0.jpg',
            price:49999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'3D笔记本电脑',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1307334686,2078374065&fm=27&gp=0.jpg',
            price:6000,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'E540核服务器',
            mainImageUrl:'http://img1.imgtn.bdimg.com/it/u=3400877733,3849922232&fm=200&gp=0.jpg',
            price:13999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'大哥机',
            mainImageUrl:'http://img3.imgtn.bdimg.com/it/u=3762564554,919211873&fm=200&gp=0.jpg',
            price:1,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'苹果20',
            mainImageUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=18558777,2970581122&fm=27&gp=0.jpg',
            price:2,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑FL5900',
            mainImageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1891820928,1620033395&fm=27&gp=0.jpg',
            price:4999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        },
        {
            name:'华硕笔记本电脑XR4700',
            mainImageUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994450565,4064214859&fm=27&gp=0.jpg',
            price:7999,
            describe:'\n' +
            '笔记本电脑（Laptop）又被称为“便携式电脑，手提电脑、掌上电脑或膝上型电脑”，其最大的特点就是机身小巧，相比PC携带方便，是一种小型、可便于携带的个人电脑，通常重1-3公斤。\n' +
            '当前的发展趋势是体积越来越小，重量越来越轻，而功能却越发强大。为了缩小体积，笔记型电脑当今采用液晶显示器（也称液晶LCD屏）。除了键盘以外有些还装有触控板（Touchpad）或触控点（Pointing stick）作为定位设备（Pointing device）。\n' +
            '笔记本跟PC的主要区别在于其携带方便，对主板，CPU要求，内存，显卡，硬盘容量都有不同等等。虽然笔记本的机身十分轻便，但完全不用怀疑其应用性，在日常操作和基本商务、娱乐 、运算操作中，笔记本电脑完全可以胜任。当今的笔记本电脑正在根据用途分化出不同的趋势，上网本趋于日常办公以及电影，商务本趋于稳定低功耗获得更长久的续航时间，家用本拥有不错的性能和很高的性价比，游戏本则是专门为了迎合少数人群外出游戏使用的，发烧级配置，娱乐体验效果好，当然价格不低，电池续航时间也不理想。\n' +
            '目前，在全球市场上有多种品牌的笔记本电脑，排名前列的有联想、华硕、戴尔（DELL）、ThinkPad、惠普（HP）、苹果（Apple）、宏碁（Acer）、索尼、东芝、三星等。[1] \n'
        }
    ];

    new Vue({
        el:'#itemBox',
        data:{
            items:data
        }
    });

    $('.p-info').click(function () {
        var itemNum = $(this).attr('itemIndex');
        $('#showInfoModa').modal('toggle');
        $('#info-body').html(
            '<h3>商品名称：</h3>'+data[itemNum].name+
            "<br /><br /><h3>商品描述：</h3>"+data[itemNum].describe+
            "<br /><br /><h3>商品价格：</h3>"+data[itemNum].price+" 美金"
        );

    });
});