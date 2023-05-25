import {fetchAPI, submitAPI} from './bookingsAPI'

export function updateTimesFunc(currentState, updateVal){
    // console.log(`UpdateTimes Date is ${updateVal}`);
    return fetchAPI(updateVal);
}

export function initializeTimes(){
    //return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return fetchAPI(new Date());
}

export function submitForm(formData){
    if(submitAPI(formData))
    {
        window.location.replace('/confirmation');
    }
}