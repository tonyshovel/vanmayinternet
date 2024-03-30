//data của game

var BidData = [
    {
        id: "bau",
        image: "../assets/bau.png",
        bid: 0,
    },
    {
        id: "cua",
        image: "../assets/cua.png",
        bid: 0,
    },
    {
        id: "tom",
        image: "../assets/tom.png",
        bid: 0
    },
    {
        id: "ca",
        image: "../assets/ca.png",
        bid: 0
    },
    {
        id: "huou",
        image: "../assets/huou.png",
        bid: 0
    },
    {
        id:"ga",
        image: "../assets/ga.png",
        bid: 0
    }
]

var IntervalData = [
    {
        id: "result_1",
        BidDataIndex: null,
        intervalID: null,
        intervalCount: 0,
    },
    {
        id: "result_2",
        BidDataIndex: null,
        intervalID: null,
        intervalCount: 0,
    },
    {
        id: "result_3",
        BidDataIndex: null,
        intervalID: null,
        intervalCount: 0,
    }
]

var isRolling = false;

var max_bid_points = 3;
var imgBidList = document.getElementsByClassName('img_bid');
var resultImg = document.querySelectorAll('.result img');

var btn_rebid = document.getElementById('re-bid');
var rollBtn = document.getElementById('roll');

var announce = document.getElementById('announce');
var announceResult = document.getElementById('announceResult');