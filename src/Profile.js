
import React from "react";
import "./Profile.css";
import EditIcon from '@material-ui/icons/Edit';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';


function Profile({ id, name, image, email, phone,language }) {
  

  return (
    <div className="product">
      

      <img src={image} alt="" />
      <div className="product__info">
            <b>{name}</b><br/><br/>
            <div><EmailIcon/> {email}</div><br/>
            <div><PhoneIcon/> {phone}</div><br/>
            <div><LanguageIcon/> {language}</div><br/>
        </div>
      <div className="table"><br/>
            <table striped bordered hover size="sm">
                <thead>
                    <tr >
                        <th className="like">
                        <button><FavoriteBorderIcon /></button>
                            
                            
                        </th>
                        <th className="edit">
                        <button ><EditIcon/></button>
                            
                            
                        </th>
                        <th className="delete">
                        <button><DeleteIcon/></button>
                            
                            
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  );
}

export default Profile;