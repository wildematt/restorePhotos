import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SquigglyLines from '../components/SquigglyLines';


const Home: NextPage = () => {
  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
      <Head>
        <title>AI照片修复神器</title>
      </Head>
      <main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20'>

        <h1 className='mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl'>
        一键照片修复{' '}
          <span className='relative whitespace-nowrap text-green-600'>
            <SquigglyLines />
            <span className='relative'>专业级AI</span>
          </span>{' '}
          修复神器.
        </h1>

        <p className='mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7'>
        利用先进的智能修复模糊图片技术，只需一键操作，无需等待，
        即刻体验模糊照片变清晰，重现美好瞬间。
        </p>
        <div className='flex justify-center space-x-4'>
   

          <Link
            className='bg-green-600 rounded-xl text-white font-medium px-8 py-4 sm:mt-10 mt-8 hover:bg-green-600/80'
            href='/restore'
          >
           上传照片
          </Link>
        </div>
        <div className='flex justify-between items-center w-full flex-col sm:mt-10 mt-6'>
          <div className='flex flex-col space-y-10 mt-4 mb-16'>
            <div className='flex sm:space-x-2 sm:flex-row flex-col'>
              <div>
                <h2 className='mb-1 font-medium text-lg'>原图</h2>
                <Image
                  alt='Original photo of my bro'
                  src='/michael.jpg'
                  className='w-96 h-96 rounded-2xl'
                  width={400}
                  height={400}
                />
              </div>
              <div className='sm:mt-0 mt-8'>
                <h2 className='mb-1 font-medium text-lg'>修复后</h2>
                <Image
                  alt='Restored photo of my bro'
                  width={400}
                  height={400}
                  src='/michael-new.jpg'
                  className='w-96 h-96 rounded-2xl sm:mt-0 mt-2'
                />
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;
