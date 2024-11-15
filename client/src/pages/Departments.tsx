export default function Departments() {
    return (
        <div className="container" >
            <h1>Departments:</h1>
            <section>
                {departments.map((department) => (
                    <div key={department.title} >
                        <h2>{department.title}</h2>
                        <img src={department.image} alt={department.title} />
                        <section> {department.featured} </section> 
                    </div>
                ))}
            </section>
        </div>
    )
}
