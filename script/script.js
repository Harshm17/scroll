let cout =document.getElementById("cont");

async function getImage(n)
{
    for(let i=0;i<n;i++)
    {
        let data= await fetch (`https://picsum.photos/200/300`);
        let rl=data.url;
        
        

        let div=document.createElement("div");
        div.className="a";
        let img =document.createElement("img");
        img .src=rl;

            div.appendChild(img);
            cout.appendChild(div); 
    }

}
getImage(6);
document.addEventListener("scroll",function(e){
       console.log(e);
    let {clientHeight,scrollHeight,scrollTop} = e.target.documentElement;
        if(clientHeight+scrollTop+1 > scrollHeight)
        {

            getImage(12);
        }

})