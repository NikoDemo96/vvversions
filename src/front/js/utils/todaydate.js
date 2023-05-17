import dayjs from 'dayjs' // ES 2015

export const todayDate = () => {
    const currentDate = dayjs(Date.now()).format("DD/MM/YYYY");

    return currentDate;
};