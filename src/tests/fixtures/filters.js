import moment from 'moment';

const filters = [{
    text:'',
    sortBy: 'date',
    startDate:undefined,
    endDate: undefined
},{
    text:'hello',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3,'days')
}];

export default filters;