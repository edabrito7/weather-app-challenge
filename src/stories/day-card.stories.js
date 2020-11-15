import React from 'react';

import DayCard from '../components/day-card/day-card';


export default {
    title: 'DayCard/Stories',
    component: DayCard
}



export const DayModelCard = (args) => <DayCard {...args} />

DayModelCard.args = {
   date: 'Tomorrow',
   lowerTemperature: '17',
   higherTemperature: '22',
   icon: 'c'
}