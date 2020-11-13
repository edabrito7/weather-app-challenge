export const addPlaceToList = (places, newplace) => {
    const existingPlace = places.find(
        place => place === newplace
    );

    if (existingPlace) return [...places]

    return [newplace ,...places]

}