var num=0;
var arrofVid=["video.mp4","video1.mp4"]
var vidTag=document.querySelector("video")
function autoSlide()
{
    num++
    if(num<=arrofVid.length-1)
    {
        vidTag.src=`./${arrofVid[num]}`
    }
    else
    {
        num=0
        vidTag.src=`./${arrofVid[num]}`
    }
    setTimeout(autoSlide,1000)
}
autoSlide()