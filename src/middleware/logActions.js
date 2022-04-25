export const logActions = (store) => (next) => (actionInfo) => {
    console.log('Shooting:',actionInfo);
    next(actionInfo);
};
