import React, {useEffect} from "react";
import './App.css';
import apartmentOne from './assets/apartment1.jpg';
import apartmentTwo from './assets/apartment2.png';
import apartmentThree from './assets/apartment13.jpg';
import Apartment from "./Apartment/Apartment";
import {connect, useDispatch} from "react-redux";
import {GET_ENTITIES} from "./store/actions/getEntities";
import axios from 'axios';
import entities from '../entities.json';

function App({getEntities}) {
    const arrApartment = [{id: 1, img: apartmentOne}, {id: 2, img: apartmentTwo}, {id: 3, img: apartmentThree}];
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080').then(() => {
            dispatch({type: GET_ENTITIES, payload: entities})
        }).catch(error => alert(error))
    }, [])

    return (
        <div className="App">
            <div className='apartmentContainer'>
                {getEntities?.response.map((item) => <Apartment key={item.id} entity={item}
                                                                img={arrApartment.find((apartmentImg) => apartmentImg.id === item.id)}/>)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        getEntities: state.getEntities,
    }
}

export default connect(mapStateToProps)(App);
