import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import AllFilter from './AllFilter';
import AllProductsTable from './AllProductsTable';

const AllBody = () => {

    const { list } = useAppSelector(state => state.goodsAsync)
    const navigate  = useNavigate();
  
    return (
        <div className='container mx-auto mt-10 px-10 sm:px-0'>
            <h1 className='text-3xl font-bold'>ALL ({list.length})</h1>
            <button className='flex items-center text-lg font-large mt-3' onClick={() => navigate(-1)}>
                <AiOutlineArrowLeft className='mr-3'/>
                Back
            </button>
            <div className='flex mt-4 overflow-hidden'>
                <AllFilter />
                <AllProductsTable />
            </div>
        </div>
    )
}

export default AllBody
