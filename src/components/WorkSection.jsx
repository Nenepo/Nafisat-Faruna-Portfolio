import { works } from "../work";
import WorkList from "./WorkList";
function WorkSection ({home}) {
  
  const workList = works.slice(0, 3);

  return(
    <section className=" py-20">
     {home && <h1 className="text-n-2 text-center dark:text-n-1  text-5xl font-semibold uppercase  md:text-6xl  tracking-[-4px] leading-tight  px-6 lg:px-32" >Work Section</h1>}
      <div className="grid grid-cols-1 py-10 px-6 lg:px-32">
        {workList.map((work, index) => (
          // we can have the worklist with pages of more description, maybe
       <WorkList  key={work.id} index={index} title={work.title}  description={work.description} link={work.link} techUsed={work.techUsed} img={work.img} githubRepo={work.githubRepo} text={work.text}/>
        ))}
      </div>
    </section>
  )

}

export default WorkSection;