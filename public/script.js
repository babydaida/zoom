//assign the variables
const socket=io("/");
const videoGrid=document.getELelementById("video-grid");
const myvideo=document.getELelement("video");
const shoeChat=document.querySelector("showChat");
const backBtn=document.querySelector(".header_back");

myVideo.muted=true;


//adding events listeners
backBtn.addEventListener("click",()=>{
    document.querySelector("main_right").style.display="none";
    document.querySelector(".header_back").style.display="none";
    document.querySelector(".main_left").style.display="flex";
    document.querySelector(".main_left").style.display="none";
})
shoeChat.addEventListener("click",()=>{
    document.querySelector("main_right").style.display="none";
    document.querySelector(".main_right").style.display="1";
    document.querySelector(".main_left").style.display="none";
    document.querySelector(".header_back").style.display="flex";
})

const user=prompt("Enter Your Name");
var peer=new peer(underFined, {
    path"/peer.js",
    host:"/",
    port:"/443"
});
let myVideoStream;
navigator.mediaDevices.getUserMedia({
    audio:true,
    video:true,

})
.then((stream)=>{
    myVideoStream=stream;
    addVideoStream(myVideo,stream);
})
//adding connection to peer
peer.on("call",(call))=>{
    call.answer(stream);
    const video=document.createElement("video");
    call.on("stream",(UserVideoStream)=>{
        addEventListener(video,UserVideoStream)
    }
}

})
//taking unique user and es
socket.on("user.connected,"(userId)=>{
    connectToNewUser("userId")=>{

    }
})
peer.on("open",(id)=>{
    socket.emit("join-room",ROOM_ID,users);

});
const addVideoStream=video(viedo,strem) => {
    viedo.srcobject = strem;
    viedo.addEventListener("loadmetadata",() => {
        viedo.play();
    videoGrid.append(viedo);

    });
    

};
let text = document .querySelector("#chat_message");
let send = document .getELelementById("send");
let text = document .querySelector(".message");


