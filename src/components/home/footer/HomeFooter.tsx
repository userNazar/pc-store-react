import FooterCard from "./FooterCard";
import FooterSlider from "./FooterSlider";


export default function HomeFooter() {

    const timeData = [
        {
            id: 1,
            img: 'https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn',
            description: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '20/30/12'
        },
        {
            id: 2,
            img: 'https://media.4rgos.it/i/Argos/1121-m0014-m007-m050-m008-gaming-pcs-and-laptops-guide-as274382882?maxW=1200&qlt=75&fmt.jpeg.interlaced=true',
            description: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '20/30/12'
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5lSZpRu6MzLuiarUsf50FPOfaojF-sknAR9gPFOm64jm5HJm_5l5cvbMJ9-Yk8j7RQg&usqp=CAU',
            description: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '20/30/12'
        },
        {
            id: 4,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75FV5dJeoqauSqIt1tMaZBo1JbXzL_5-1ThlMcjrloCSmXiIk_txc2ch7lCJg2KKqqno&usqp=CAU',
            description: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '20/30/12'
        }, {
            id: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoocUpYo-JUvc-yQAc7WzlaAizLZZ9j4t7FHuWX2pDWQxh6CB7g_kDfzO1RvPZnVk5A8&usqp=CAU',
            description: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '20/30/12'
        }, {
            id: 6,
            img: 'https://media.karousell.com/media/photos/products/2023/4/1/pc_gaming_fullset_1680331360_b937e24e_progressive.jpg',
            description: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
            date: '20/30/12'
        }
    ]

    return (
        <>
            <div className='max-w-[1200px] mx-auto flex flex-wrap justify-center mt-14'>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://www.pamitech.cz/user/categories/orig/msi-logo.png" alt="" /></div>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://www.3ds.com/fileadmin/depositary/alliances/CRM_PARTATT1/20180300/PPR0000551_2Nvidia_logo.png" alt="" /></div>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/640px-Razer_snake_logo.svg.png" alt="" /></div>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://cdn-icons-png.flaticon.com/512/882/882734.png" alt="" /></div>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/1200px-Intel_logo_2023.svg.png" alt="" /></div>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://cdn-icons-png.flaticon.com/512/5969/5969002.png" alt="" /></div>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://cdn-icons-png.flaticon.com/512/882/882747.png" alt="" /></div>
                <div className="w-[122px] h-[80px] m-2"><img className="w-[122px] h-[80px]" src="https://cdn-icons-png.flaticon.com/512/1999/1999687.png" alt="" /></div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-20 px-10">
                <h2 className="text-[22px] font-semibold">Follow us on Instagram for News, Offers & More</h2>

                <div className="flex flex-wrap justify-center">
                    {
                        timeData.map(card =>
                            <FooterCard key={card.id} img={card.img} description={card.description} date={card.date} />
                        )
                    }
                </div>
                
                <FooterSlider />
            </div>
        </>
    )
}
