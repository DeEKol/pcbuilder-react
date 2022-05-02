import axios from 'axios';

export default class BodyService {
    static async getAll() {
        return await axios.get('https://builderpc.herokuapp.com/api/body');
    }

    static async getById(id) {
        return await axios.get('https://builderpc.herokuapp.com/api/body/' + id);
    }

    static async create(object) {
        return await axios.post('https://builderpc.herokuapp.com/api/body', object);
    }

    static async updateById(id, object) {
        return await axios.put('https://builderpc.herokuapp.com/api/body/' + id, object);
    }

    static async deleteById(id) {
        return await axios.delete('https://builderpc.herokuapp.com/api/body/' + id);
    }
}