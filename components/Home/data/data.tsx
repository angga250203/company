interface Services {
    no:string,
    title:string,
    image:string,
    description:string,
    kategory:string,
  }

  interface ArticleProps{
    title:string,
    date:string,
    excerpt:string,
    image:string,
   

  }
  
  export const service:Services[] = [
    {
      no:"01 /",
      title: "Education technology",
      image:"https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
      description: "Mewakili layanan yang mengembangkan solusi pendidikan berbasis teknologi untuk proses belajar mengajar yang lebih efektif dan interaktif.",
      kategory:'Study',
    },
    {
      no:"02 /",
      title: "Medical devices",
      image:"https://images.unsplash.com/photo-1674702727317-d29b2788dc4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      description: "Menyediakan produk dan solusi alat kesehatan yang meningkatkan kualitas layanan kesehatan dengan teknologi canggih.",
      kategory:'Health',
    },
    {
      no:"03 /",
      title: "Internet of Things (IoT)",
      image:"https://plus.unsplash.com/premium_photo-1688678097506-6c12a0376238?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJuZXQlMjBvZiUyMHRoaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Menawarkan solusi IoT untuk menghubungkan perangkat dan sistem guna meningkatkan efisiensi dan kontrol.",
      kategory:'Teknology',
    },
    {
      no:"04 /",
      title: "Industrial Automation",
      image:"https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Memberikan solusi otomasi industri yang membantu meningkatkan produktivitas dan efisiensi melalui teknologi otomatisasi terkini.",
      kategory:'Industrial',
    }
  ]


export const articles:ArticleProps[] = [
    {
      title: 'Inovasi Teknologi Pendidikan untuk Generasi Mendatang',
      date: 'Juli 1, 2024',
      excerpt: 'Mengintegrasikan teknologi dalam pendidikan untuk menciptakan pengalaman belajar yang lebih baik dan interaktif.',
      image: "https://plus.unsplash.com/premium_photo-1661277672864-6a57b90858d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: 'Alat Kesehatan Terbaru yang Perlu Anda Ketahui',
      date: 'Juni 25, 2024',
      excerpt: 'Menjelajahi berbagai inovasi terbaru dalam alat kesehatan yang dapat meningkatkan kualitas layanan kesehatan.',
      image: "https://plus.unsplash.com/premium_photo-1677529494239-682591edd525?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: 'Masa Depan dengan Internet of Things (IoT)',
      date: 'Juni 15, 2024',
      excerpt: 'Bagaimana IoT mengubah cara kita berinteraksi dengan dunia di sekitar kita dan meningkatkan efisiensi berbagai industri.',
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];