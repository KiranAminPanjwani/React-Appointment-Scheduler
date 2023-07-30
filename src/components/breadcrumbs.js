import "./breadcrumbs.css"

const Breadcrumbs = ({ links }) => {
  return (
    <div className="breadcrumbs">
      <p className="back">{"<"} Back</p>
      {links.map((link, i) => (
        <>
        <p className="sch_appointment">&nbsp;| {link}</p>
        </>
        
      ))}
      
    </div>
  );
};

export default Breadcrumbs;
