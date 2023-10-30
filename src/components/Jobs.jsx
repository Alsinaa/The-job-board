import Job from "./Job"

const Jobs = (props)=>{
    return <div className="Jobs">
 <Job classname="red" title="Full Time Sales associate" contractType="CDI" country="Australie" city="Sidney" />
 <Job classname="green" title="Agent de sécurité - Pantin" contractType="CDI" country="France" city="Pantin" />
 <Job classname="yellow" title="Responsable d'atelier (H/F)" contractType="CDD" country="France" city="Paris" />
 <Job classname="blue" title="Chef de Projets" contractType="CDD" country="France" city="Paris" />
 <Job classname="pink" title="Développeur React.js" contractType="CDI" country="France" city="Paris" />
 <Job classname="red" title="Sales Associate Stockholm" contractType="CDI" country="Suède" city="Stockholm" />
 <Job classname="green" title="Vendeur/se" contractType="CDI" country="Suisse" city="Crans-Montana" />
 <Job classname="yellow" title="CRM & Data quality analyst" contractType="CDI" country="USA" city="New-york" />
 <Job classname="blue" title="infimer (H/F)" contractType="CDI" country="France" city="Pantin" />
    </div>
}
export default Jobs