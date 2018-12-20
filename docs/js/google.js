function create_route() {
  // ルート検索の条件
  var request = {
    origin: new google.maps.LatLng(33.372345, 130.495871), // 出発地
    destination: new google.maps.LatLng(33.397008, 130.564548), // 目的地
    waypoints: [ // 経由地点(指定なしでも可)
      { location: new google.maps.LatLng(33.424991, 130.521328) },
    ],
    travelMode: google.maps.DirectionsTravelMode.WALKING, // 交通手段(歩行。DRIVINGの場合は車)
  };

  // マップの生成
  var map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(33.399447, 130.523720), // マップの中心
    zoom: 12 // ズームレベル
  });

  var d = new google.maps.DirectionsService(); // ルート検索オブジェクト
  var r = new google.maps.DirectionsRenderer({ // ルート描画オブジェクト
    map: map, // 描画先の地図
    preserveViewport: true, // 描画後に中心点をずらさない
  });
  // ルート検索
  d.route(request, function(result, status){
    // OKの場合ルート描画
    if (status == google.maps.DirectionsStatus.OK) {
      r.setDirections(result);
    }
  });
}

function init_map() {
  var latlng = new google.maps.LatLng(33.399447, 130.523720);

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    }

  });
  return map;
}

var markerData = [];

function create_marker() {
  var map;
  var marker = [];
  var infoWindow= [];
  var markerData= [
    {
      name: 'spot name 0',
      lat: 33.399447,
      lng: 130.523720,
    },
  ];

  map = init_map();
  // マーカー毎の処理
  for (var i = 0; i < markerData.length; i++) {
    markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
    marker[i] = new google.maps.Marker({ // マーカーの追加
      position: markerLatLng, // マーカーを立てる位置を指定
      map: map, // マーカーを立てる地図を指定
      /*
      icon: {
        url: '../icon/blue_pin.png',
        scaledSize: new google.maps.Size(40, 40),
      }
      */
    });
  }
}
