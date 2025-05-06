// B: 비동기적으로 1초마다 출력 (총 3초)
function processB() {
    setTimeout(() => {
        let bCount = 1;
        const bInterval = setInterval(() => {
            console.log(`B프로세스 진행중 ${bCount}초`);
            bCount++;
            if (bCount > 3) clearInterval(bInterval);
        }, 1000);
    }, 3000);
}
// A: 동기적으로 1초마다 출력 (총 10초)
// but 자바스크립트에는 진짜 동기 sleep이 없어서 setTimeout을 체인처럼 사용
function processA(count = 1) {
    if (count > 10) return;
    console.log(`A프로세스 진행중 ${count}초`);
    setTimeout(() => processA(count + 1), 1000);
}

// 실행
processB();
processA();
