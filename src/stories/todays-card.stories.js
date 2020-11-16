import React from 'react';

import TodaysCard from '../components/todays-card/todays-card';


export default {
    title: 'TodaysCard/Stories',
    component: TodaysCard
}


export const TodaysCardModel = (args) => <TodaysCard {...args} />

TodaysCardModel.args = {
    title: 'Humidity',
    type: 'humitidy',
    value: '6,4',
    size: 'large',
    units: '%'
}