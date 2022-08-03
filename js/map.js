//goole map styles
var styles = [
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e9e9e9"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 18
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dedede"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#ffffff"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#333333"
      },
      {
        "lightness": 40
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f2f2f2"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#fefefe"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  }
];

const theme = {
  "url": window.location.host,
  "language": "pl",
  "googleMap": {
      "lat": 52.2137239,
      "lang": 20.798687,
      "icon": "data:image/svg+xml,%3Csvg width='148' height='70' viewBox='0 0 148 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_106_3)'%3E%3Cpath d='M70.833 57.5H4V2H144V57.5H78.166L74.5 63.5L70.833 57.5Z' fill='%2306A6B9'/%3E%3C/g%3E%3Cpath d='M112.296 40.6492L110.013 40.6562L103.005 28.2682L103.029 40.6562H100.905V15.9032H103.028L103.004 28.2682L109.336 15.8992L111.592 15.9092L105.313 28.2472L112.296 40.6492Z' fill='white'/%3E%3Cpath d='M34.9301 40.6492L32.6471 40.6562L25.6391 28.2682L25.6631 40.6562H23.5391V15.9032H25.6621L25.6381 28.2682L31.9701 15.8992L34.2261 15.9092L27.9471 28.2472L34.9301 40.6492Z' fill='white'/%3E%3Cpath d='M66.3688 40.7372H64.2358V17.8282L60.1428 40.7372H58.5608L54.4678 17.8282V40.7372H52.4678V15.8672L56.1908 15.8142L58.7978 30.4972C58.8898 31.0479 59.0854 32.6879 59.3848 35.4172C59.5908 33.1465 59.7861 31.4839 59.9708 30.4292L62.5818 15.8142L66.3648 15.8672L66.3688 40.7372Z' fill='white'/%3E%3Cpath d='M78.7522 31.4842L76.4622 18.0432L73.9722 31.4842H78.7522ZM82.5362 40.7372H80.3692L79.0962 33.4102H73.6962L72.4232 40.7372H70.3232L74.7952 15.8672H77.9592L82.5362 40.7372Z' fill='white'/%3E%3Cpath d='M94.4899 22.3001C94.6163 21.0407 94.2871 19.7776 93.5619 18.7401C93.1153 18.3565 92.5948 18.0686 92.0326 17.894C91.4703 17.7194 90.8783 17.662 90.2929 17.7251H88.6759V26.8411C89.2719 26.8871 89.6849 26.9098 89.9149 26.9091C90.5424 26.969 91.1754 26.9042 91.7777 26.7183C92.3799 26.5324 92.9394 26.2292 93.4239 25.8261C94.2244 24.8342 94.6067 23.5694 94.4899 22.3001ZM97.0699 40.7381H94.9019L91.2569 28.7001C90.9809 28.7231 90.5569 28.7341 89.9839 28.7341C89.4109 28.7341 88.9749 28.7231 88.6769 28.7001V40.7401H86.5439V15.8701H89.2959C91.9326 15.8701 93.8246 16.3288 94.9719 17.2461C96.1193 18.1635 96.6926 19.8031 96.6919 22.1651C96.6919 25.3765 95.5569 27.4175 93.2869 28.2881L97.0699 40.7381Z' fill='white'/%3E%3Cpath d='M37.0101 21.1472C36.9978 20.4483 37.1241 19.754 37.3816 19.1042C37.6392 18.4545 38.023 17.8622 38.5107 17.3616C38.9985 16.861 39.5806 16.462 40.2235 16.1876C40.8663 15.9133 41.5572 15.769 42.2561 15.7632C43.1888 15.7654 44.1044 16.0142 44.9101 16.4842C45.716 16.9377 46.3867 17.5975 46.8533 18.3959C47.3199 19.1943 47.5655 20.1025 47.5651 21.0272C47.5613 21.9708 47.307 22.8964 46.8282 23.7096C46.3495 24.5227 45.6634 25.1941 44.8401 25.6552C42.2171 27.1762 37.0191 30.1842 37.0191 30.1842C37.0191 30.1842 37.0101 22.4172 37.0101 21.1472Z' fill='white'/%3E%3Cpath d='M47.4529 26.0891C44.9989 27.5291 42.5479 28.9971 39.6529 30.6941C38.8397 31.1425 38.1611 31.8001 37.6873 32.5989C37.2136 33.3976 36.962 34.3085 36.9585 35.2371C36.9551 36.1658 37.1999 37.0785 37.6676 37.8807C38.1354 38.683 38.8091 39.3457 39.6189 39.8001C40.4231 40.2645 41.3368 40.5056 42.2654 40.4983C43.194 40.491 44.1037 40.2357 44.9005 39.7587C45.6973 39.2818 46.3521 38.6005 46.7972 37.7855C47.2423 36.9705 47.4614 36.0513 47.4319 35.1231C47.4159 31.7691 47.5179 28.8681 47.4499 26.0891' fill='white'/%3E%3Cpath d='M124.414 35.1651C124.426 35.864 124.3 36.5584 124.043 37.2083C123.785 37.8581 123.401 38.4504 122.914 38.951C122.426 39.4517 121.844 39.8507 121.201 40.125C120.558 40.3993 119.867 40.5434 119.168 40.5491C118.236 40.547 117.321 40.2983 116.517 39.8281C115.711 39.3749 115.04 38.7151 114.573 37.9167C114.106 37.1183 113.86 36.21 113.861 35.2851C113.865 34.3415 114.119 33.4158 114.598 32.6027C115.076 31.7895 115.762 31.1182 116.586 30.6572C119.206 29.1362 124.405 26.1292 124.405 26.1292C124.405 26.1292 124.413 33.8961 124.413 35.1651' fill='white'/%3E%3Cpath d='M113.974 30.2242C116.428 28.7842 118.879 27.3172 121.774 25.6192C122.587 25.1705 123.265 24.5128 123.738 23.714C124.212 22.9152 124.463 22.0045 124.467 21.0759C124.47 20.1474 124.225 19.2348 123.758 18.4327C123.29 17.6305 122.616 16.9678 121.807 16.5132C121.003 16.0486 120.089 15.8074 119.16 15.8146C118.231 15.8218 117.321 16.0771 116.524 16.554C115.727 17.031 115.072 17.7123 114.627 18.5274C114.182 19.3426 113.962 20.2619 113.992 21.1902C114.008 24.5432 113.906 27.4452 113.974 30.2242Z' fill='white'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_106_3' x='0' y='0' width='148' height='69.5' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.169 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_106_3'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_106_3' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A"
  },
  "debug": ""
}


//goole map
function initialize(lat, lang, id) {
  var latlng = new google.maps.LatLng(lat, lang);

  var myOptions =
  {
    zoom: 11,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
  };

  map = new google.maps.Map(document.getElementById(id), myOptions);
  map.setOptions({ styles: styles });
  map.panBy(0, -40);


  var myMarker = new google.maps.Marker(
    {
      position: latlng,
      map: map,
      icon: theme.googleMap.icon,
    });

  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}

$(window).on('load', function () {
  if ($("div").is("#map-canvas")) {
    initialize(theme.googleMap.lat, theme.googleMap.lang, "map-canvas");
  }
});