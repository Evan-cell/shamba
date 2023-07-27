import React,{useEffect,useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import Shambas from '../../shambas'
import {useDispatch,useSelector} from 'react-redux'
import { listShambas } from '../../actions/ShambaAction'
import Loader from '../../Loader'
import Message from '../../Message'
import './HomeScreen.css'
function HomeScreen() {
  const dispatch = useDispatch()

  const shambaList = useSelector(state => state.shambaList)

  const {error,loading,shambas} = shambaList

  useEffect(() => {
    dispatch(listShambas())
  },[dispatch])
  return (
    <div>
              {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>  : 
                <Row>
                {products.map(products =>(
                    <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                        <Shambas sha />
                    </Col>
                ))}
            </Row>
        }
    </div>
  )
}

export default HomeScreen