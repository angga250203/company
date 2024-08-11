interface ImageSliderProps{
    src:string,
    variant?:string;
    alt:string,
}

interface Data {
    position:string,
    location:string,
    jenis:string,
    category:string,
    description:string,
}


export const DataImage:ImageSliderProps[]=[
    {
        src:"https://plus.unsplash.com/premium_photo-1661749354722-59cf2ac7c827?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY3J1aXRtZW50fGVufDB8fDB8fHww",
        variant:"w-[25rem] h-[17rem] lg:w-[40rem] lg:h-[25rem] ",
        alt:"office"
    },
    {
        src:"https://framerusercontent.com/images/iSENb6qUoo0VyeoTDY5ZuuTAg.png",
        variant:"w-[14rem] h-[14rem] lg:w-[20rem] lg:h-[20rem] ",
        alt:"office"
    },
    {
        src:"https://images.unsplash.com/photo-1720048171596-6a7c81662434?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
        variant:"w-[15rem] h-[20rem] lg:w-[20rem] lg:h-[30rem] ",
        alt:"office"
    },
    {
        src:"https://plus.unsplash.com/premium_photo-1668383777295-8343df447607?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        variant:"w-[20rem] h-[15rem] lg:w-[30rem] lg:h-[20rem] ",
        alt:"office" 
    },
  
]




export const JobData : Data[] = [
    {
        position:"Senior Art Director",
        location:"London",
        jenis:"Remote",
        category:"Design",
        description:"Join our dynamic creative agency as a Senior Art Director, where your visionary leadership and artistic prowess will shape groundbreaking campaigns. Drive innovation, inspire teams, and craft captivating visuals that redefine industry standards. Elevate brands to new heights with your unparalleled creativity and strategic vision."
    },
    {
        position:"Design Intern",
        location:"Indonesia",
        jenis:"Onsite",
        category:"Design",
        description:"Join our dynamic creative agency as a Senior Art Director, where your visionary leadership and artistic prowess will shape groundbreaking campaigns. Drive innovation, inspire teams, and craft captivating visuals that redefine industry standards. Elevate brands to new heights with your unparalleled creativity and strategic vision."
    },
    {
        position:"Marketing Manager",
        location:"Indonesia",
        jenis:"Onsite",
        category:"Management",
        description:"Join our dynamic creative agency as a Senior Art Director, where your visionary leadership and artistic prowess will shape groundbreaking campaigns. Drive innovation, inspire teams, and craft captivating visuals that redefine industry standards. Elevate brands to new heights with your unparalleled creativity and strategic vision."
    },
    {
        position:"Motion Designer",
        location:"Indonesia",
        jenis:"Remote",
        category:"Design",
        description:"Join us as a Motion Designer and unleash your creativity in dynamic projects. Bring concepts to life through captivating animations, adding depth and emotion to our narratives. Collaborate with a diverse team, pushing boundaries and setting new standards in motion graphics. Let your imagination take flight as you craft experiences that resonate with audiences worldwide."
    },
    
    
]