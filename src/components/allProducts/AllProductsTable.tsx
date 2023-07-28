import { useAppSelector } from '../../store/hooks'
import CardProduct from '../common/CardProduct'

const AllProductsTable = () => {

    const { list } = useAppSelector(state => state.goodsAsync)

    return (
        <div className='flex flex-wrap justify-center'>
            {
                list.map(prod =>
                    <CardProduct key={prod.id} img={prod.img} />
                )
            }
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
            <CardProduct img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
        </div>
    )
}

export default AllProductsTable
