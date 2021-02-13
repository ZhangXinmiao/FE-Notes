function getSearchFromUrl (url) {
    url = url || '';
    // location.search
    var search = url.split('?')[1];
    if (search) {
        var paramArr = search.split('&');
        var result = {};
        for (var i = 0; i < paramArr.length; i++) {
            var param = paramArr[i].split('=');
            if (param[0]) result[param[0]] = decodeURIComponent(param[1] || '');
        }
        return result;
    }
    return {};
};

var url = 'https://creditpay.meituan.com/marketing?isInWhite=1&utmSource=creditpay_app-cp-feedcross_60919&uuid=0000000000000106A9C64B7A0467B98380E1A0A38A5E4A155689707905389722&mainImageUrl=http%3A%2F%2Fp0.meituan.net%2Fwmproduct%2F4fea823f2b2b827870948db0660732b3152373.jpg%40watermark%3D1%26%26object%3DL3dtcHJvZHVjdC9kZWJiN2M1ZTgyZjJiNjU4Y2ZmNzA1ZTg1N2FjOTcwYjgxLnBuZw%3D%3D&deliveryMsg=40%E5%88%86%E9%92%9F%E9%80%81%E8%BE%BE&distance=&title=%E9%99%95%C2%B7%E8%8B%8F%E4%B8%89%E4%B8%83%28%E7%B1%B3%E7%9A%AE%C2%B7%E8%82%89%E5%A4%B9%E9%A6%8D%EF%BC%89&curPrice=%E4%BA%BA%E5%9D%87%C2%A521&score=4.9%E5%88%86&targetUrl=imeituan%3A%2F%2Fwww.meituan.com%2Ftakeout%2Ffoods%3Fpoi_id%3D1038060454978647%26g_source%3D4%26spu_id%3D2776408001%26sku_id%3D3128581505&apiType=WAIMAI_POI&global_id=a5b30dfebb1a36555564551621984531&stid=&style=dynamicV2&id=1467008427&type=waimai&trace=&dtype=POI_WAIMAI&ct_poi=207492107868717579626283094234401349571_c1_ea5b30dfebb1a36555564551621984531&monthlySales=%E6%9C%88%E5%94%AE1075&discount=%5B%7B%22text%22%3A5%E5%87%8F3%7D%2C%7B%22text%22%3A3.75%E6%8A%98%E8%B5%B7%7D%2C%7B%22text%22%3A%E9%A6%96%E5%8D%95%E5%87%8F15%7D%5D&f=android&token=6wGUjcTur5rhBd-kRvkUdv01sI4AAAAAJQwAAA-ilFdGb7ai-7ZWWS85R52ye6ZAFeWFOUJw2BiilzVJsfiW7Eb0i_AgdY07UtKIAg&userid=178665992&lat=22.541552505250255&lng=114.04809221998208&utm_source=huawei4&utm_medium=android&utm_term=1100040403&version_name=11.4.403&utm_content=106a9c64b7a0467b98380e1a0a38a5e4a155689707905389722&utm_campaign=AgroupBgroupC0D200E0Ghomepage&ci=30&msid=DeviceId01607419687268';
var urlTest = '';
var result = getSearchFromUrl(url);
console.log(result);
console.log(getSearchFromUrl(urlTest));