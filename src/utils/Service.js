import axios from 'axios';

export default class Service {
    static async getAll(element) {
        return await axios.get('https://builderpc.herokuapp.com/api/' + element);
    }

    static async getById(element, id) {
        return await axios.get('https://builderpc.herokuapp.com/api/' + element + '/' + id);
    }

    static async create(element, object) {
        return await axios.post('https://builderpc.herokuapp.com/api/' + element, object);
    }

    static async updateById(element, id, object) {
        return await axios.put('https://builderpc.herokuapp.com/api/' + element + '/' + id, object);
    }

    static async deleteById(element, id) {
        return await axios.delete('https://builderpc.herokuapp.com/api/' + element + '/' + id);
    }
}