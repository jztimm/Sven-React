import React, {useState, useEffect} from 'react'
import Order from './Order'
import {db} from '../firebase'
import {useStateValue} from '../StateProvider'
import '../Style/Orders.css'

function Orders() {
   const [{cart, user}, dispatch] = useStateValue();
   const [orders, setOrders] = useState();

   useEffect(() => {

      if (user) {
         db.collection('users')
         .doc(user?.uid)
         .collection('orders')
         .orderBy('created', 'desc')
         .onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data()
            })))
         })
      } else {
         setOrders([])
      }

   }, [user])

   return (
      <div className="orders">
         <h1>Your Recent Orders</h1>

         <div className="orders_order">
            {orders?.map(order => (
               <Order order={order} />
            ))}
         </div>
      </div>
   )
}

export default Orders
