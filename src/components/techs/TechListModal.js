import React,{useState,useEffect} from "react";
import TechItemModal from "./TechItemModal";
import {connect} from 'react-redux';
import { getTechs } from "../../actions/techActions";
import PropTypes from 'prop-types';

const TechListModal =({tech:{techs,loading},getTechs})=>{


    
    useEffect(()=>{
        getTechs()
    },[])

    return(
       <div id="tech-list-modal" className="modal">
           <div className="modal-content">
               <h4>Technician List</h4>
               <ul className="collection">
                   {!loading && techs!==null && techs.map(tech=>(
                       <TechItemModal tech={tech} key={tech.id}/>
                   ))}
               </ul>
           </div>

       </div>
    )
}
TechListModal.propTypes={
    techs:PropTypes.object.isRequired,
    getTechs:PropTypes.func.isRequired,
}

const mapStateToProps=state=>({
    tech:state.tech
})
export default connect(mapStateToProps,{getTechs})(TechListModal)