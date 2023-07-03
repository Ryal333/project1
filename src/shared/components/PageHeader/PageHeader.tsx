import Heading from '../Heading/Heading';
import './PageHeader.css';

const PageHeader = ({children , heading}) => {
  return (
    <section class="formHeader_main_container">
        <Heading heading={heading}/>
        <div class="formHeader_sub_container">
            {children}
        </div>
    </section>
  )
}

export default PageHeader;