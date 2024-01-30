import Api from "./Api"

export default {
    registerCinema(credentials) {
        return Api().post('AddCinema', credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },

    registerFilm(credentials) {
        return Api().post('AddFilm', credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}