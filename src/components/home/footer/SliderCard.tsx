
interface SliderCardProps {
    size: number;
    text: string;
    name: string;
}

export default function SliderCard({ text, name, size }: SliderCardProps) {
    return (
        <div className={`px-20 py-10 flex-none w-[${size}px]`}>
            <div className={`text-lg`} style={{width: size - 160}}>{text}</div>
            <div className='text-right'>- {name}</div>
        </div>
    )
}
