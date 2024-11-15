import depts from 'departments.db'
import Department from '../interfaces/Department'

export default function departmentList({ depts }) {
    return (
        <div className="container">
            <h1>Departments:</h1>
            <section className="card-deck">
                {depts.map((department: Department) => (
                    <div key={department.id} className='card'>
                        <h2> {department.title} </h2>
                        <img className='' src={department.image} alt="Department Image" />                        
                        <div> ${department.featured} </div>
                    </div>)
                    )
                }
            </section>
        </div>
    )
}
