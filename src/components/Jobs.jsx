import Job from "./Job"

const Jobs = (props)=>{
    return <div className="Jobs">
 <Job className="red" title="Full Time Sales associate" contractType="CDI - " country="Australie - " city="Sidney" />
 <Job className="green" title="Agent de sécurité - Pantin" contractType="CDI - " country="France - " city="Pantin" />
 <Job className="yellow" title="Responsable d'atelier (H/F)" contractType="CDD - " country="France - " city="Paris" />
 <Job className="blue" title="Chef de Projets" contractType="CDD - " country="France - " city="Paris" />
 <Job className="pink" title="Développeur React.js" contractType="CDI - " country="France - " city="Paris" />
 <Job className="red" title="Sales Associate Stockholm" contractType="CDI - " country="Suède - " city="Stockholm" />
 <Job className="green" title="Vendeur/se" contractType="CDI - " country="Suisse - " city="Crans-Montana" />
 <Job className="yellow" title="CRM & Data quality analyst" contractType="CDI - " country="USA - " city="New-york" />
 <Job className="blue" title="infimer (H/F)" contractType="CDI - " country="France - " city="Pantin" />
    </div>
}
export default Jobs