
/**
 * 资源树加载器
 * @returns {Promise}
 */
class ResourceTreeLoader {

    constructor() {
        this.loaded = false;
        this.promise = null;
        this.resources = null;
    }

    load($http) {
        return new Promise((resolve, reject) => {
            if (this.loaded) {
                resolve(this.resources);
            } else {
                if (!this.promise) {
                    this.promise = $http.get('resource/0/resourcesTree');
                }
                this.promise
                    .then(result => {
                        resolve(result.data);
                    })
                    .catch(error => {
                        reject(error);
                    });
            }
        });
    }
}

export default new ResourceTreeLoader();