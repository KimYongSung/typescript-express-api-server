import moment from 'moment';

export function currentTime(){
    return moment().format('YYYY-MM-DD HH:mm:ss')
}