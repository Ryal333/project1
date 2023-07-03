import './Tabs.css';

const SingleTab = () =>{
    return(
        <div class="tabs_sub_container">
            <button>
                button
            </button>
        </div>
    );
}

const Tabs = () => {
  return (
    <section class="tabs_container">
        <SingleTab/>
        <SingleTab/>
        <SingleTab/>
    </section>
  )
}

export default Tabs