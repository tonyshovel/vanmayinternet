//Các hàm xử lí chính

function setBid(id) {
    let item = BidData.find(item => item.id === id);

    if (item && item.bid < 3)
        item.bid++;
}

function resetBid() {
    BidData.forEach(element => {
        element.bid = 0;
    });
}

function random(img) {
    if (!isRolling)
        isRolling = true;

    let max = 5;
    let min = 0;
    //BidData has 6 items, indexed from 0 to 5;

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    img.src = BidData[randomNumber].image;

    for (let i = 0; i < IntervalData.length; i++)
    {
        if (img.id === IntervalData[i].id) {
            IntervalData[i].BidDataIndex = randomNumber;

            if (IntervalData[i].intervalCount < 100)
                IntervalData[i].intervalCount++;
            else {
                clearInterval(IntervalData[i].intervalID);
                if (i === IntervalData.length-1)
                {
                    enablebuttons();
                    isRolling = false;

                    alertResult();
                }
            }
        }
    }
}

//Return an image of BidData base on given number
function getImgUrl(number) {
    return BidData.find(item => item.number === number).image;
}

function resetIntervalData() {
    IntervalData.forEach(element => {
        element.intervalCount = 0;
        element.intervalID = null;
    });

    isRolling = false;
}

function disableButtons() {
    rollBtn.disabled = true;
    btn_rebid.disabled = true;

    rollBtn.style.backgroundColor = 'grey';
    rollBtn.style.cursor = 'not-allowed';

    btn_rebid.style.backgroundColor = 'grey';
    btn_rebid.style.cursor = 'not-allowed';
}

function enablebuttons() {
    rollBtn.disabled = false;
    btn_rebid.disabled = false;

    rollBtn.style.backgroundColor = 'lightgreen';
    btn_rebid.style.backgroundColor = 'lightgreen';

    rollBtn.style.cursor = 'pointer';
    btn_rebid.style.cursor = 'pointer';
}

function rebid() {
    BidData.forEach(element => {
        element.bid = 0;
    });

    for (let element of imgBidList) {

        let countBid = element.querySelector('.count_bid');
        countBid.textContent = 0;
    }

    max_bid_points = 3;
    resetBid();
}

function alertResult() {
    let isWin = getBidResult();
    let userChoice = getUserChoiceToPrint();

    //console.log(userChoice)
    let text = '';

    if(isWin) {
        announceResult.style.color = 'green';
        text = 'Bạn chiến thắng với lựa chọn:' + userChoice;
    } else {
        announceResult.style.color = 'red';
        text = 'Bạn đã đoán sai với lựa chọn:' + userChoice;
    }
    console.log(text);
    announceResult.textContent = text;
}

function getBidResult() {
    //Bỏ tất cả kết quả vào 1 mảng
    let IndexResultArray = IntervalData.map(item => item.BidDataIndex);
    
    //Mảng này sẽ chứa thông tin bid của kết quả
    let ResultData = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < IndexResultArray.length; i++) {
        ResultData[IndexResultArray[i]]++;
    }

    //console.log(ResultData);
    //Mảng này chứa thông tin bid của người dùng
    let UserBidData = BidData.map(item => item.bid);
    //console.log(UserBidData);

    //So sánh hai mảng kết quả và người dùng
    return ResultData.every((value, index) => value === UserBidData[index]);
}

function getUserChoiceToPrint() {
    const filteredBidData = BidData.filter(item => item.bid > 0);
    let strResult = ''

    filteredBidData.forEach(element => {

        let quantity = '';
        let translated = '';
        switch (element.id) {
            case 'bau': translated = 'Bầu'; break;
            case 'cua': translated = 'Cua'; break;
            case 'tom': translated = 'Tôm'; break;
            case 'ca': translated = 'Cá'; break;
            case 'huou': translated = 'Hươu'; break;
            case 'ga': translated = 'Gà'; break;
        }
        
        quantity = element.bid;
        strResult += ' ' + quantity + ' ' + translated;
    });

    return strResult;
}