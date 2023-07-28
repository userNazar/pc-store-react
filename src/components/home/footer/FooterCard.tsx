
interface FooterCardProps {
    img: string;
    description: string;
    date: string;
}

export default function FooterCard({ img, description, date }: FooterCardProps) {
    return (
        <div className='w-[225px] h-[322px] m-5 mt-10'>
            <div className='w-[225px] h-[151px]'>
                <img className='w-[225px] h-[151px]' src={img} alt="" />
            </div>
            <div className=' mt-[10px] text-center  font-normal'>
                {description.length >= 194 ? description.slice(0, 184) + '...' : description}
            </div>
            <div className='mt-[10px] text-center text-gray-400'>
                {date}
            </div>
        </div>
    )
}
