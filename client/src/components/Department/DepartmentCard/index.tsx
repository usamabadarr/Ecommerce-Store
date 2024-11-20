// import Department from '../../interfaces/Department';
// import { SyntheticEvent } from 'react';
// import { useMutation } from '@apollo/client';

const DepartmentCard = (props) => {
    const { id, departmentName, departmentImg, description } = props;

    

    return (
        <div className="card" style= {{width:"18rem"}} >
            <h4>id</h4> 
            <h2>{departmentName}</h2>
            <img src={departmentImg}className="card-img-top" alt={departmentName} />
            <p>{description}</p>
        </div>
    );
};

export default DepartmentCard;
