window.addEventListener('DOMContentLoaded',()=>{
    const tabheader__item=document.querySelectorAll('.tabheader__item')
    const tabcontent = document.querySelectorAll('.tabcontent')
    const tabheader__items =document.querySelector('.tabheader__items')
    const loader= document.querySelector('.loader')
    
    setTimeout(()=>{
        setTimeout(()=>{
            loader.style.display='none'
        },1500)
        
        loader.style.opacity=0
       
    },2000)
    
    
    tabheader__items.addEventListener('click',(item)=>{
        const target = item.target
    
        tabheader__item.forEach((item,index)=>{
            if(target===item){
                contenthide()
                showcontent(index)
            }
        })
    })
    
    
    
    function contenthide(){
        tabcontent.forEach((item)=>{
            item.style.display='none'
        })
        tabheader__item.forEach((item)=>{
            item.classList.remove('tabheader__item_active')
        })
    }
    
    function showcontent(index=0){
        tabcontent[index].style.display='block'
        tabheader__item[index].classList.add('tabheader__item_active')
        tabcontent[index].classList.add('fade')
    }
    
    contenthide()
    
    
    const newYear=new Date('2023-01-01')
    
    function remainingTime(){
        const timer =Date.parse(newYear)- Date.parse(new Date())
        const days = Math.floor(timer/(1000*60*60*24))
        const hours = Math.floor((timer/(1000*60*60))%24)
        const minutes = Math.floor((timer/(1000*60))%60)
        const seconds = Math.floor((timer/(1000))%60)
        
        return{
            days,
            hours,
            minutes,
            seconds
        }
    
    }
    
    function fixedTime(time){
        if(time<10){
            return `0${time}`
        }else{
            return time
        }
    }
    
    function addTime(endtime,selektor){
        const timer =document.querySelector(selektor)
        const days =timer.querySelector('#days')
        const minutes =timer.querySelector('#minutes')
        const seconds =timer.querySelector('#seconds')
        const hours =timer.querySelector('#hours')
        function  addclock(){
            const t = remainingTime(endtime)
            days.innerHTML=fixedTime(t.days)
            minutes.innerHTML=fixedTime(t.minutes)
            seconds.innerHTML=fixedTime(t.seconds)
            hours.innerHTML=fixedTime(t.hours)
        }
        let interval = setInterval(() => {
            addclock()
        }, 1000);
       
        
    }
    
    addTime(newYear, '.timer')

    const prev = document.querySelector('.offer__slider-prev')
    const next = document.querySelector('.offer__slider-next')
    const current = document.getElementById('current')
    const slides =document.querySelectorAll('.offer__slide')
    let z=0;

    next.addEventListener('click',()=>{
        z++;
        if(z===slides.length){
            z=0
        }
        slidehide();
        showslide(z);

    })

    prev.addEventListener('click',()=>{
        z--;
        if(z<0){
            z=slides.length-1
        }

        slidehide();
        showslide(z);

    })

    function slidehide(){
        slides.forEach((item)=>{
            item.style.display='none'
            item.classList.add('fade')
        })

    }

    function showslide(i=0){
        slides[i].style.display='block '
            current.innerHTML=`0${i+1}`;
    }

    slidehide()
   showslide()

   const modal = document.querySelector('.modal')
   const close = document.querySelector('.modal__close')
   const button = document.querySelector('.button')

    button.addEventListener('click',()=>{
        modal.classList.add('show')
        document.querySelector('body').style.overflow='hidden'
    })
        modal.addEventListener('click',(e)=>{
            
            if(e.target.classList.contains('modal__close') || e.target.classList.contains('modal')){
                modal.classList.remove('show')
                document.querySelector('body').style.overflow=''
            }
        })
})