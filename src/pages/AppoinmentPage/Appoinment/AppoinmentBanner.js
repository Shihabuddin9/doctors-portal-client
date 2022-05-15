import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({ date, setDate }) => {

    return (
        <div className='md:flex justify-evenly items-center md:my-20 my-12'>
            <div className=''>
                <DayPicker
                    mode="single"
                    date={date}
                    onSelect={setDate}


                />

            </div>
            <div className='mx-3 md:mx-0'>
                <img className='w-96' src={chair} alt="" />
            </div>
        </div>
    );
};

export default AppoinmentBanner;