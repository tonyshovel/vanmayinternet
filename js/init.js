//Khởi tạo sự kiện các nút bấm

function initBid() {
    for (let element of imgBidList) {
        element.addEventListener('click', function() {
            if (max_bid_points >= 1) {
                
                let countBid = element.querySelector('.count_bid');
                countBid.textContent = parseInt(countBid.textContent) + 1;

                setBid(countBid.id);

                max_bid_points--;
            }
        })
    }
}

function initRebidBtn() {

    btn_rebid.addEventListener('click', function() {
        announceResult.textContent = "";
        rebid();
        resetIntervalData();
    });
}

function initRollBtn() {

    rollBtn.addEventListener('click', function() {
        if (max_bid_points === 0) {
            announce.textContent = "";
            announceResult.textContent = "";
            resetIntervalData();

            disableButtons();
    
            for (let i = 0; i < resultImg.length; i++) {
                IntervalData[i].intervalID = setInterval(random, 50, resultImg[i])
            }
        } else {
            announce.textContent = "Đừng lãng phí điểm cược!"
        }
    }); 
}