
const tags = ["html", "css", "js", "Bootstrap", "Tailwind", "MongoDB", "Firebase"]

const Sidebar = () => {

  // create a state to store the checked status of each tag

  return (
    <div className='border  border-black w-[300px] h-full'>
        <div>
          <h3>Filter</h3>
          <div>
            {tags.map((tag, index) => (
              <div key={index}>
                <input type="checkbox" id={tag} name={tag} value={tag} />
                <label htmlFor={tag}>{tag}</label>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Sidebar
