import React, {useState} from 'react';
import './Apartment.css'
import likeTrue from "../assets/hearts-red.png";
import likeFalse from "../assets/hearts.png";
import {connect} from "react-redux";

const Apartment = ({entity, img}) => {
    const [isLike, setIsLike] = useState(false);

    const onClickLike = () => {
        setIsLike(!isLike);
    }

    return (
        <div className='apartmentContainer_block'>
            <div className='apartmentContainer_div'>
                <div className='apartmentContainer_img'>
                    <img className='apartment' alt='apartment' src={img.img}/>
                    <img className='hearts' alt='hearts' src={isLike ? likeTrue : likeFalse} onClick={onClickLike}/>
                </div>
                <div className='apartmentContainer_info'>
                    <h4>{entity.attributes.title}</h4>
                    <p>Адрес: г.{entity.attributes.address.city}, ул.{entity.attributes.address.street},
                        дом.{entity.attributes.address.house}, кв.{entity.attributes.address.room}</p>
                    <p>Площадь: {entity.attributes.area} {entity.attributes.unit}.</p>
                    <p>Обращатся
                        к {entity.relationships.attributes.last_name}у {entity.relationships.attributes.first_name.substring(0, 1)}. {entity.relationships.attributes.middle_name.substring(0, 1)}.</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLike: state.isLike
    }
}

export default connect(mapStateToProps)(Apartment);