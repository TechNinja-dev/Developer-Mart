var bg=document.getElementById('bg'); //body tag
var ng=document.getElementById("ng"); //nav tag
var li=document.getElementsByClassName("ita");   //li tag
var ic=document.getElementById('ic');  //icon
var sld=document.getElementById('sld'); //slider section tag
var cd=document.getElementsByClassName('cd');
var txt=document.getElementsByClassName('txt');
var lbox=document.getElementsByClassName('langbox');
var ltitle=document.getElementsByClassName('ltitle');
var serv=document.getElementsByClassName('sct');
let i=0;
var col='black';
// var bgcol='rgb(227, 224, 224)';  //color for language cards

function thchange()
{
    if (i==0)
        {
            col='white'
            bg.style.backgroundColor="black";
            ng.style.backgroundColor="rgb(36, 36, 36)";
            
            ic.style.backgroundColor="rgb(27, 27, 27)";
            ic.style.color='white';
           
            for (let A=0;A<li.length;A++)
                {
                    li[A].style.color=col;
                }
                
                i++;
            for (let B=0;B<serv.length;B++)
                {
                    serv[B].style.background="linear-gradient(145deg, #1a1a1a, #0d0d0d)";
                    serv[B].style.boxShadow='0 8px 20px rgba(0, 255, 255, 0.05), inset 0 0 10px rgba(0, 255, 255, 0.1)';
                    serv[B].style.color='white';
                }
            for (let C=0;C<cd.length;C++)
                {
                    cd[C].style.background="linear-gradient(145deg, #1a1a1a, #0d0d0d)";
                    cd[C].style.boxShadow='0 8px 20px rgba(0, 255, 255, 0.05), inset 0 0 10px rgba(0, 255, 255, 0.1)';
                    //linear-gradient(135deg, #121212, #2a2a2a
                }
            for(let D=0;D<txt.length;D++)
                    {
                        txt[D].style.color='#ccc';
                    }
            for (let E=0;E<lbox.length;E++)
                {
                    lbox[E].style.background='linear-gradient(145deg, #1a1a1a, #0d0d0d)';
                    // ltitle[E].style.color='white';
                    //inear-gradient(135deg, #121212, #2a2a2a)
                }
            for (let F=0;F<ltitle.length;F++)
                {
                    ltitle[F].style.color='white';
                }       

        }
        else{
            
            col='black'
            // bgcol='rgb(227, 224, 224)';
            bg.style.backgroundColor="white";
            ng.style.backgroundColor="rgb(228, 194, 194)";
            ic.style.backgroundColor="rgb(238, 237, 237)";
            ic.style.color='black';
            
            for(let a=0;a<li.length;a++)
                {
                    li[a].style.color=col;
                }
                for (let b=0;b<serv.length;b++)
                    {
                        serv[b].style.background="rgb(227, 224, 224)";
                        serv[b].style.boxShadow='2px 2px 10px gray, -2px -2px 10px white';
                        serv[b].style.color='black';

                    }
                for (let c=0;c<cd.length;c++)
                    {
   
                        // cd[c].style.background="linear-gradient(to bottom right, rgb(221, 218, 218), #1e293b)";
                        cd[c].style.background="rgb(227, 224, 224)";
                        cd[c].style.boxShadow='none';

                      
                    }
                for(let d=0;d<txt.length;d++)
                        {
                            txt[d].style.color='black';
                        }
                for (let e=0;e<lbox.length;e++)
                    {

                        lbox[e].style.background='rgb(227, 224, 224)';
                      
                    }
                for (let f=0;f<ltitle.length;f++)
                    {
                        ltitle[f].style.color='#333';
                    }
                    
       
        i--;
    }
}
function showlogin()
{
    var sgbox=document.getElementById('signupModal')
    var lgbox=document.getElementById("loginModal")
    lgbox.style.display='block';
    sgbox.style.display='none';
}
function showSignup()
{
    var sgbox=document.getElementById('signupModal')
    var lgbox=document.getElementById("loginModal")
    lgbox.style.display='none';
    sgbox.style.display='block';
}

function closelogin()
{

    var lgcbox=document.getElementById("loginModal")
    lgcbox.style.display='none';
   
}
function closesignup()
{
    var sgcbox=document.getElementById('signupModal')
    sgcbox.style.display='none';
}


//hover effect for navbar elements
for (let a=0;a<li.length;a++)
    {
        li[a].style.color=col;
        li[a].addEventListener("mouseover",e=>
            {
                li[a].style.color="rgb(75, 75, 245)";
            })
        li[a].addEventListener("mouseout",e=>
            {
                        li[a].style.color=col;
            })
    }

//hover effect for code edtor cards
for (let ced=0;ced<cd.length;ced++)
    {
        cd[ced].addEventListener('mouseover',e=>
            {
                cd[ced].style.boxShadow=(i == 0)
                ? '3px 3px 12px gray, -2px -2px 10px white':'0 12px 25px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.2)'
            });
            cd[ced].addEventListener('mouseout',e=>{
                cd[ced].style.boxShadow= (i == 0)
                ? '2px 2px 10px gray, -2px -2px 10px white':'0 8px 20px rgba(0, 255, 255, 0.05), inset 0 0 10px rgba(0, 255, 255, 0.1)'
            }
                
            );
    }

//hover effect for language cards
    for (let lang = 0; lang < lbox.length; lang++) {
        lbox[lang].addEventListener('mouseover', e => {
            lbox[lang].style.boxShadow = (i == 0) 
                ? '2px 2px 10px gray, -2px -2px 10px white'
                : '0 12px 25px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.2)'
        });
        
        lbox[lang].addEventListener('mouseout', e => {
            lbox[lang].style.boxShadow = 'none';
        });
    }



