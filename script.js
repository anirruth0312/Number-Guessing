let ans=Math.floor(Math.random() * 100);
let c=0;
function submit()
{
    if(c<10)
    {
        c+=1;
        let arr=["0","1","2","3","4","5","6","7","8","9"];
        let r=document.getElementById("inp").value;
        // let newarr=r.split();
        let i;
        let remaining=10-c;
        if(r.trim()=="")
        {
            alert("Please enter a number.");
            return;
        }
        for(i=0;i<r.length;i++)
        {
            if(r[i] in arr)
            {
                continue;
            }
            else{
                alert("Please enter digits between 0-9 only.")
                return;
            }
        }
        if (r<0 || r>99)
        {
            alert("Please enter values between 0-100 only.")
            return;
        }
        if(r==ans)
        {
            document.getElementById("warning").innerText="Congratulations.You guessed the right answer";
            document.getElementById("attempts").innerText="";

        }
        else if(r-ans>30)
        {
            document.getElementById("warning").innerText=" Your answer is too high. Guess again";
            document.getElementById("attempts").innerText="You have "+remaining.toString()+" attempts left";
        }
        else if(r-ans>0 && r-ans<30)
        {
            document.getElementById("warning").innerText="Your answer is little high. Guess again";
            document.getElementById("attempts").innerText="You have "+remaining.toString()+" attempts left";
        }
        else if (r-ans<-30)
        {
            document.getElementById("warning").innerText="Your answer is too Low. Guess again";
            document.getElementById("attempts").innerText="You have "+remaining.toString()+" attempts left";
        }
        else if (r-ans>-30 && r-ans<0)
        {
            document.getElementById("warning").innerText="Your answer is little Low. Guess again";
            document.getElementById("attempts").innerText="You have "+remaining.toString()+" attempts left";
        }
        console.log(ans);
    }
    else{
        document.getElementById("attempts").innerText="You have used all your attempts";
        alert("Oops You have used all your attempts. Better luck next time")
    }
}

function clrscr()
{
    document.getElementById("warning").innerText="";
    document.getElementById("inp").value="";
}