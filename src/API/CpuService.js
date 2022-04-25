import axios from 'axios';

export default class CpuService {
    static async getAll() {
        return await axios.get('http://localhost:8080/api/cpu');
    }

    static async getById(id) {
        return await axios.get('http://localhost:8080/api/cpu/' + id);
    }

    static async create(object) {
        return await axios.post('http://localhost:8080/api/cpu', object);
    }

    static async updateById(id, object) {
        return await axios.put('http://localhost:8080/api/cpu/' + id, object);
    }

    static async deleteById(id) {
        return await axios.delete('http://localhost:8080/api/cpu/' + id);
    }
}