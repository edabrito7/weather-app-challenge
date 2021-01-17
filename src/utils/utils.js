export const ToFarenheit = (value) => {
    const result = (value*(9/5))+32;
    return result.toFixed(1);
}

const ToCelcius = (value) => {
    const result = (value - 32)*(5/9);
    return result.toFixed(1);
}