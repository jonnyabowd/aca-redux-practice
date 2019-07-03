export const addPic = (pic) => {
    return {
        type: 'ADD_PIC',
        value: 'NEW Pic!!!'
    }
}

export const getPeople = () => {
    return (dispatch) => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(people => {
                dispatch({
                    type: 'GET_PEOPLE',
                    value: people
                })
            })
    }

}