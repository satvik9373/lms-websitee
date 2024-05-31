
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../../_utils/GlobalApi';

function SideBanner() {
    const [sideBannerList, setSideBannerList] = useState([]);

    useEffect(() => {
        getSideBanner();
    }, []);

    const getSideBanner = () => {
        GlobalApi.getSideBanner().then(resp => {
            console.log(resp);
            setSideBannerList(resp.sideBanners);
        });
    };

    return (
        <div> 
            {sideBannerList.map((item, index) => (
                <div key={index}>
                    <Image 
                        src={item.banner.url} 
                        alt='banner'
                        width={500}
                        height={300}
                        onClick={() => window.open(item?.url)}
                        className='rounded-xl mb-4 cursor-pointer'
                    />
                </div>
            ))}
        </div>
    );
}

export default SideBanner;
