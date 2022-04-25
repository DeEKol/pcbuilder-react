import axios from 'axios';

export default class CpuService {
    static async getAll() {
        return await axios.get('https://builderpc.herokuapp.com/api/cpu');
    }

    static async getById(id) {
        return await axios.get('https://builderpc.herokuapp.com/api/cpu/' + id);
    }

    static async create(object) {
        return await axios.post('https://builderpc.herokuapp.com/api/cpu', object);
    }

    static async updateById(id, object) {
        return await axios.put('https://builderpc.herokuapp.com/api/cpu/' + id, object);
    }

    static async deleteById(id) {
        return await axios.delete('https://builderpc.herokuapp.com/api/cpu/' + id);
    }
}