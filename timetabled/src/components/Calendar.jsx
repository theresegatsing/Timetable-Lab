import React from "react";
import Event from './Event'

const Calendar = () => {

    return (
        <div className="calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <Event event ='Fancy Dinner 🎩' color = 'green'  location='Maple & Ash'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Starbucks ☕️' color ='green' location='Michigan Ave'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='red'   location='The Breakfast'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='blue'  location='Sidney Ave'/>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue'  location='Martins street'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">12pm</td>
                        <Event event='Korean food' color ='red'  location='Fifth Ave'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Mashmallow' color ='green'  location='Fireside'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Mountain' color ='green'  location='Creeks Mountain'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <Event event='Bike' color ='red'  location='Creeks Mountain'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Hiking' color ='blue'  location='Creeks Mountain'/>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">3pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Date' color ='green'  location='Black and White'/>
                        <td></td>
                        <td></td>
                    </tr>


                     <tr>
                        <td className="time">4pm</td>
                        <Event event='Wine Testing' color ='blue'  location='Le Moulin'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>


                     <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Boat cruise' color ='green'  location='Luxury side Ave'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    
                  
                </tbody>
            </table>
             
        </div>



    );
    
};

export default Calendar;