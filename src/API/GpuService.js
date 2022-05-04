import axios from 'axios';

export default class GpuService {
    static async getAll() {
        return await axios.get('https://builderpc.herokuapp.com/api/gpu');
    }

    static async getById(id) {
        return await axios.get('https://builderpc.herokuapp.com/api/gpu/' + id);
    }

    static async create(object) {
        return await axios.post('https://builderpc.herokuapp.com/api/gpu', object);
    }

    static async updateById(id, object) {
        return await axios.put('https://builderpc.herokuapp.com/api/gpu/' + id, object);
    }

    static async deleteById(id) {
        return await axios.delete('https://builderpc.herokuapp.com/api/gpu/' + id);
    }
}