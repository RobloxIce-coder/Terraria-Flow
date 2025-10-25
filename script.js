// script.js

let progressBar = document.getElementById('progress-bar');
let progressText = document.getElementById('progress-text');
let loadText = document.getElementById('load');

let percent = 0;
let targetPercent = 100;
let stages = [
  { percent: 30, intervalTime: 50 },
  { percent: 60, intervalTime: 30 },
  { percent: 80, intervalTime: 100 },
  { percent: targetPercent, intervalTime: 300 }
];
let index = 0;

function loadProgress() {
  let interval = setInterval(() => {
    if (percent < stages[index].percent) {
      percent++;
      progressBar.style.width = `${percent}%`;
      progressText.innerText = `${percent}%`;
    } else {
      clearInterval(interval);
      if (index < stages.length - 1) {
        index++;
        loadProgress();
      } else {
        progressText.style.color = "white";
        progressText.style.fontSize = "24px";
        progressText.innerText = 'Selamat datang!';
        loadText.style.display = 'none';
        setTimeout(() => {
          document.querySelector('.progress-bar-container').style.display = 'none';
          document.getElementById('content').style.display = 'block';
          let tombol = document.getElementById("tombol");
          let gambar = document.getElementById("gambar");
          let imut = document.getElementById("imut");
          let bubble = document.getElementById("bubble");
          tombol.style.animationPlayState = "running";
          tombol.addEventListener("click", function() {
            let teks_notif = document.querySelector("#teks-notif");
            let nativeUI = document.getElementById("nativeUI");
            nativeUI.content = "deepskyblue";
          
            setTimeout(
              () => {
                bubble.play();
              }, 1000
            )
            imut.play();
            document.querySelector("body").style.backgroundColor = "#C4C9FF";
            tombol.style.backgroundColor = "rose";
            tombol.style.color = "black";
            tombol.textContent = "Bagus!";
            setTimeout(() => {
              tombol.style.display = "none";
            }, 8000)
            setTimeout(() => {
              let notif = document.querySelector("#notif");
              notif.style.display = "flex";
              notif.style.animationPlayState = "running";
              teks_notif.style.animationPlayState = "running";
              gambar.style.animationPlayState = "running";
              setTimeout(() => {
                imut.play();
              }, 5030)
            }, 1000);
            setTimeout(() => {
              let collide = document.createElement("audio");
              collide.src = "https://audio.jukehost.co.uk/4iHeFEElgPfhMjyUQpK2cNBh0D0jf5V7";
              collide.play();
              let start = 32;
              let end = 0;
              let ulang = setInterval(() => {
                start--;
                teks_notif.textContent = `Tunggu ya :3 nanti kamu akan aku beri kuis pertanyaan, tunggu selama: ${start}`;
                if (start <= end) {
                  clearInterval(ulang);
                  let judul = document.getElementById("judul");
                  let teks1 = document.getElementById("teks1");
                  let teks2 = document.getElementById("teks2");
                  let teks3 = document.getElementById("teks3");
                  judul.style.visibility = "hidden";
                  teks1.style.visibility= "hidden";
                  teks2.style.visibility = "hidden";
                  teks3.style.visibility = "hidden";
                  teks_notif.textContent = `Sampai jumpa lagi! 👋`;
                  setTimeout(
                    () => {
                      window.location.href = "https://quis-pertanyaan-v1.vercel.app/";
                    }, 1500
                  )
                }
              }, 1000)
            }, 7000)
          });
        }, 1000);
      }
    }
  }, stages[index].intervalTime);
}

loadProgress();

let yt = document.getElementById("youtube");
let wa = document.getElementById("whatsapp");
let tiktok = document.getElementById("tiktok");

yt.addEventListener("click", ()=>{
  window.open("https://www.youtube.com/@Lovelyz_Yupi", "_top");
});
wa.addEventListener("click", ()=>{
  window.open("https://wa.me/+6289676567495?text=Halo Dek Anin😁\nApa kabar?", "_top");
});
tiktok.addEventListener("click", ()=>{
  window.open("https://www.roblox.com/id/users/8753508725/profile", "_top");
});
