// App.test.js
import { initializeTimes, updateTimes } from './App';

test('initializeTimes returns the correct initial state', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test('updateTimes returns the same value as provided in the state', () => {
    const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const updatedState = updateTimes(currentState, "someDate");
    expect(updatedState).toEqual(currentState);
});
