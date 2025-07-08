"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

const images = [
    '/banner1.jpg',
    '/banner2.jpg',
];

const mobileImages = [
    '/mobile-banner1.jpg',
    '/mobile-banner2.jpg',
];

const Banner = () => {
    return (
        <>
            <div className="w-full h-screen relative hidden lg:block">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                >
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx} >
                            <Link href={"/products"}>
                                <div className="w-full h-screen relative">
                                    <Image
                                        src={src}
                                        alt={`Banner ${idx + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority={idx === 0}
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full h-screen relative block lg:hidden">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                >
                    {mobileImages.map((src, idx) => (

                        <SwiperSlide key={idx}>
                            <Link href={"/products"}>
                                <div className="w-full h-screen relative">
                                    <Image
                                        src={src}
                                        alt={`Banner ${idx + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority={idx === 0}
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </>
    );
};

export default Banner;