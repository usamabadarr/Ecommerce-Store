
import { useQuery } from '@apollo/client';

import ProductList from './DepartmentCard';
import IDepartment from '../../interfaces/Department';

import { QUERY_DEPARTMENT_NAME } from '../../utils/queries';

const Department = () => {
    const { loading, data } = useQuery(QUERY_DEPARTMENT_NAME);
    const departmentData = data?.departmentData || [];
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="w-100 mt-auto text-dark p-4">
            <div className="container text-center mb-5">
                {departmentData.map((department: IDepartment) => (
                    <>
                        <h2>{department.name}</h2>
                        <ProductList key={department.id} DepartmentID={String(department.id)} />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Department;
