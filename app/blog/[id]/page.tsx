import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  subheading1: string;
  content1: string;
  subheading2: string;
  content2: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  kesimpulan: string;
  date: string;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData).blog as BlogPost[];

  return data.map((post) => ({
    id: post.id.toString(),
  }));
}

// Mengambil metadata berdasarkan ID (opsional)
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData).blog as BlogPost[];
  const post = data.find((p) => p.id.toString() === params.id);

  return {
    title: post?.title || 'Blog Post',
  };
}

const BlogPostDetail = async ({ params }: { params: { id: string } }) => {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData).blog as BlogPost[];

  const post = data.find((post) => post.id.toString() === params.id);
  const otherPosts = data.filter((p) => p.id.toString() !== params.id).slice(0, 3); // Menampilkan 3 blog lainnya

  if (!post) {
    return <div>Data tidak ditemukan.</div>;
  }

  return (

    <div className='pb-32 px-3 '>
      <div className='max-w-7xl mx-auto py-24 '>
        <div className='w-full md:w-1/2 py-12'>
          <h1 className='text-[2.5rem] '>{post.title}</h1>
          <p className='text-gray-500'>{post.date}</p>
        </div>
        <div className='w-full relative h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden  '>
            <Image src={post.image1} fill alt='imageblog' className='object-cover hover:scale-110 transition-all duration-1000 ease-in-out'/>
        </div>

      </div>

      <div className='max-w-4xl mx-auto  '>
        <article>
            <h1 className='text-[1.7rem] font-light'>{post.title}</h1>
            <p className='mt-1 text-gray-900 font-light'>{post.content}</p>
        </article>
         <article className='pt-5'>
              <h1 className='text-[1.7rem] font-light'>{post.subheading1}</h1>
              <p className='mt-1 text-gray-600 font-light'>{post.content1}</p>
         </article>

         <div className='flex flex-wrap  mt-16'>

            <div className='w-full md:w-1/2    relative h-[60vh] md:h-[70vh]'>
              <Image src={post.image2} alt='' fill className='object-cover  px-2'/>   
            </div>    
            <div className='w-full md:w-1/2   overflow-hidden  relative h-[60vh] md:h-[70vh]'>
              <Image src={post.image3} alt='' fill className='object-cover  px-2'/>   
            </div>    
          </div>


          <article className='pt-12'>
              <h1 className='text-[1.7rem] font-light'>{post.subheading2}</h1>
              <p className='mt-1  font-light'>{post.content2}</p>
           </article>

           <div className='w-full  relative h-[70vh] rounded-2xl overflow-hidden mt-12'>
              <Image src={post.image4} alt='' fill className='object-cover'/>   
            </div>   

            <article className='bg-gray-100 px-5 rounded-xl py-5 mt-12'>
              <h1 className='text-[1.5rem] pb-5 font-light'>Conclusion</h1>
                <p className='font-light'>{post.kesimpulan}</p>
            </article>
      </div>


      <div className='max-w-7xl mx-auto  border-t-[1px] border-gray-600 mt-24'>

        <h1 className='py-12 text-[2rem] font-light'>Read More</h1>
        <div className='flex flex-wrap justify-between'>
        {otherPosts.map((otherPost) => {
          return(
            <div className='w-full md:w-4/12  px-2' key={otherPost.id}>
        <div className='w-full h-[50vh] overflow-hidden rounded-lg relative'>
            <Image src={otherPost.image1} alt={otherPost.title} fill/>
        </div>
        <article className='mt-3 flex flex-col justify-between '>
            <h1 className='text-2xl font-light'>{otherPost.title}</h1>
            <div className='flex'>
            <Link href={`${otherPost.id}`}>
             <p className='text-gray-500 mt-3 under2'>show more</p>
              
            </Link>
           </div>
        </article>
    </div>
          )
        })}
        </div>
      </div>
    
    
    </div>


  );
};

export default BlogPostDetail;
