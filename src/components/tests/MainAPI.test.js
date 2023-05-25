import { render, fireEvent, screen } from "@testing-library/react";
import {initializeTimes, updateTimesFunc, submitForm} from '../../mainAPI';

test('initializeTimes returns initial times', () => {

    let initTimes = initializeTimes(new Date());

    expect(initTimes).toBeInstanceOf(Array);
})

test('updateTimesFunc returns correct times', () => {

    let dt = new Date();
    let initTimes = initializeTimes(dt);
    let updTimes = updateTimesFunc(null, dt);

    expect(updTimes).toStrictEqual(initTimes);
})