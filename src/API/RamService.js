import Service from '../utils/Service';

const element = 'ram';

export default class RamService {
    static async getAll() {
        return Service.getAll(element);
    }

    static async getById(id) {
        return Service.getById(element, id);
    }

    static async create(object) {
        return Service.create(element, object);
    }

    static async updateById(id, object) {
        return Service.updateById(element, id, object);
    }

    static async deleteById(id) {
        return Service.deleteById(element, id);
    }
}