import React, {useState, useEffect} from 'react';
import './ATF.scss';
import ScrollIntoView from 'react-scroll-into-view';
import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../Header/Header';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const ATF = () => {
    SwiperCore.use([Autoplay]);

    const [imgCount, setImgCount] = useState(1);
    const [imgPath, setImgPath] = useState("/images/main-bg1.jpg");

    const images = "/images/main-bg";

    useEffect(() => {
        const interval = setInterval(() => {
            if(imgCount > 3){
                setImgCount(1);
            }
            else{
                setImgCount(imgCount => imgCount + 1);
            }
            const imgPathHolder = images + imgCount + ".jpg";
            setImgPath(imgPathHolder);
        }, 3000);
        return () => clearInterval(interval);
    }, [imgCount]);

    return (
        <section className="top-sec" style={{ backgroundImage: `url(${imgPath})` }}>
            <Header />
            <div className="atf-wrap">
                <h1>Asian Crane Service</h1>
                <div className='slider-wrap'>
                    <Swiper
                        modules={[Pagination, Scrollbar, A11y]}
                        autoplay={{ delay: 3500, disableOnInteraction: true }}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        fadeEffect= {{crossFade: true}}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className='slider-innerwrap'>
                                <h2>We have a young fleet of about 30 cranes with capacities ranging from 12 metric tons to 80 metric tones.</h2>
                                <ScrollIntoView className='anchr-wrap' selector="#equipments">
                                    <a className="cta">Check Equipments</a>
                                </ScrollIntoView>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slider-innerwrap'>
                                <h2>Asian CraneServices also deals in sales and services of cranes. Check our list of cranes which you might be interested in.</h2>
                                <ScrollIntoView className='anchr-wrap' selector="#cranesforsale">
                                    <a className="cta">Cranes for sale</a>
                                </ScrollIntoView>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slider-innerwrap'>
                                <h2>We provide a wide range of different services, like Boom Lifts, Erection Service, Lifting and Shifting etc.</h2>
                                <ScrollIntoView className='anchr-wrap' selector="#services">
                                    <a className="cta">Check Services</a>
                                </ScrollIntoView>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slider-innerwrap'>
                                <h2>At Asian Crane Services we value our clients and as a result of which we have a loyal base. Check our clients.</h2>
                                <ScrollIntoView className='anchr-wrap' selector="#ourclients">
                                    <a className="cta">Our Clients</a>
                                </ScrollIntoView>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slider-innerwrap'>
                                <h2>We would love to hear and help find a perfect solution for your crane needs. Drop us a message and we will get back.</h2>
                                <ScrollIntoView className='anchr-wrap' selector="#contact">
                                    <a className="cta">Make an Enquiry</a>
                                </ScrollIntoView>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default ATF;